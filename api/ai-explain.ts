/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Vercel Serverless Function for AI-powered explanations
 * Deploy this on Vercel - no additional backend needed!
 */

import { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini client
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is required");
  }
  return new GoogleGenAI({ apiKey });
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { question, codeSnippet, selectedOption, correctAnswer, isCorrect } =
      req.body;

    // Validate required fields
    if (!question) {
      return res.status(400).json({
        error: "Tham số câu hỏi (question) là bắt buộc.",
      });
    }

    try {
      const ai = getGeminiClient();

      // Build the prompt
      let prompt = `Bạn là một giảng viên xuất sắc môn Lập trình hướng đối tượng (OOP) C++.
Một sinh viên đang học tập trên học liệu trắc nghiệm thiết kế riêng cho trường Đại học.
Hãy giải thích đầy đủ, chi tiết, dễ hiểu bằng tiếng Việt về câu hỏi sau đây:

CÂU HỎI:
"${question}"

${codeSnippet ? `ĐOẠN CODE C++ LIÊN QUAN:\n\`\`\`cpp\n${codeSnippet}\n\`\`\`\n` : ""}

Đáp án đúng của câu này là: ${correctAnswer}

${
  selectedOption
    ? `Sinh viên đã chọn phương án: ${selectedOption}.
Trạng thái lựa chọn: ${isCorrect ? "Đúng chính xác!" : "Chưa chính xác (Sai)."}`
    : "Sinh viên muốn xem giải thích chi tiết."
}

Nhiệm vụ của bạn:
1. Giải thích nghĩa của các lớp, khái niệm OOP được hỏi trong câu (Ví dụ: tính đóng gói, tính đa hình, hàm ảo, hàm hủy ảo, copy constructor, thứ tự constructor...).
2. Phân tích chi tiết từng phương án nhiễu (A, B, C, D) tại sao đúng hoặc tại sao sai.
3. Nếu có đoạn Code, hãy giải thích từng dòng code chính (trace code) để sinh viên hiểu bản chất dòng chảy chạy chương trình và lý do ra kết quả đó.
4. Trả lời bằng Markdown rõ ràng, định dạng mã code đẹp, sư phạm chuẩn mực, phân chia tiêu đề rõ rệt để tăng tính dễ đọc. Tránh lan man dài dòng, hãy tập trung vào bản chất lập trình C++.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
      });

      const explanationMarkdown =
        response.text || "Không thể khởi tạo nội dung giải thích.";

      return res.status(200).json({
        explanation: explanationMarkdown,
      });
    } catch (apiError: any) {
      console.error("Gemini API Error:", apiError);

      // Return fallback explanation if API fails
      return res.status(200).json({
        explanation: `### 💡 Giải thích sư phạm (Chế độ dự phòng do không có kết nối API)

Đoạn này giải thích chi tiết cho câu hỏi: **"${question}"**

* **Lý do đáp án ${correctAnswer} là chính xác**: Đây là nguyên lý căn bản của mô hình hướng đối tượng C++. 
* **Phân tích thuộc tính**: Những khía cạnh quan trọng của C++ bao gồm quản lý bộ nhớ, quyền truy cập dữ liệu (\`public\`, \`private\`, \`protected\`), dòng chảy của phương thức thiết lập (Constructor) chạy từ lớp cha xuống lớp con trong khi phương thức hủy (Destructor) thu hồi ngược lại để tối ưu hóa bộ nhớ RAM.
* **Gợi ý học tập**: Để ghi nhớ lâu, hãy thực hành viết lại đoạn code này trên IDE C++ (như Visual Studio Code hoặc CLion), chạy kiểm thử sự khác biệt khi thay đổi các từ khóa quyền truy cập dữ liệu để quan sát lỗi biên dịch.

**Lưu ý**: Chế độ dự phòng này được kích hoạt do API Gemini không accessible. Vui lòng kiểm tra GEMINI_API_KEY environment variable.`,
        isFallback: true,
        errorDetail: apiError.message,
      });
    }
  } catch (error: any) {
    console.error("Handler Error:", error);
    return res.status(500).json({
      error: error.message || "Lỗi máy chủ không xác định.",
    });
  }
}
