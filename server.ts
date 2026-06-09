/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// CORS middleware - allow all origins for production compatibility
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Lazy-loaded Gemini clients
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY environment variable is missing in secrets.",
    );
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// API endpoint to get AI-powered detailed explanation for a given question
app.post("/api/ai-explain", async (req, res): Promise<any> => {
  try {
    const { question, codeSnippet, selectedOption, correctAnswer, isCorrect } =
      req.body;

    if (!question) {
      return res
        .status(400)
        .json({ error: "Tham số câu hỏi (question) là bắt buộc." });
    }

    try {
      const ai = getGeminiClient();

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
      return res.json({ explanation: explanationMarkdown });
    } catch (apiError: any) {
      console.error("Gemini API Error:", apiError);
      // Fallback response with beautiful static explanation if API is missing or fails
      return res.json({
        explanation: `### 💡 Giải thích sư phạm (Chế độ dự phòng do không có kết nối API Key)
      
Đoạn này giải thích chi tiết cho câu hỏi: **"${question}"**
* **Lý do đáp án ${correctAnswer} là chính xác**: Đây là nguyên lý căn bản của mô hình hướng đối tượng C++. 
* **Phân tích thuộc tính**: Những khía cạnh quan trọng của C++ bao gồm quản lý bộ nhớ, quyền truy cập dữ liệu (\`public\`, \`private\`, \`protected\`), dòng chảy của phương thức thiết lập (Constructor) chạy từ lớp cha xuống lớp con trong khi phương thức hủy (Destructor) thu hồi ngược lại để tối ưu hóa bộ nhớ RAM.
* **Gợi ý học tập**: Để ghi nhớ lâu, hãy thực hành viết lại đoạn code này trên IDE C++ (như Visual Studio Code hoặc CLion), chạy kiểm thử sự khác biệt khi thay đổi các từ khóa quyền truy cập dữ liệu để quan sát lỗi biên dịch.`,
        isFallback: true,
        errorDetail: apiError.message,
      });
    }
  } catch (error: any) {
    console.error("Server Route Error:", error);
    return res
      .status(500)
      .json({ error: error.message || "Lỗi máy chủ không xác định." });
  }
});

// Vite Middleware & Static Assets Handler
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Dynamically import Vite in development to avoid packing errors in production
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[C++ OOP Quiz Server] listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start fullstack server:", err);
});
