/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent } from "react";
import { Category, Question, UserStats } from "../types";
import CppCodeBlock from "./CppCodeBlock";
import MarkdownView from "./MarkdownView";
import {
  Filter,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Loader2,
  RefreshCw,
} from "lucide-react";

interface PracticePanelProps {
  questionPool: Question[];
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
}

export default function PracticePanel({
  questionPool,
  stats,
  onUpdateStats,
}: PracticePanelProps) {
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  // Filtered pool
  const filteredQuestions = questionPool.filter((q) => {
    const matchCat =
      selectedCategory === "All" || q.category === selectedCategory;
    const matchDiff =
      selectedDifficulty === "All" || q.difficulty === selectedDifficulty;
    return matchCat && matchDiff;
  });

  // Current question index in filtered pool
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  // Track states for the actual active question
  const [selectedOption, setSelectedOption] = useState<
    "A" | "B" | "C" | "D" | null
  >(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [wrongSelections, setWrongSelections] = useState<
    ("A" | "B" | "C" | "D")[]
  >([]);
  const [attemptsOnQuestion, setAttemptsOnQuestion] = useState<number>(0);

  // AI Explanation State
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [aiExplanation, setAiExplanation] = useState<string>("");

  const activeQuestion: Question | undefined = filteredQuestions[currentIdx];

  // Reset answer states when active question changes
  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
    setWrongSelections([]);
    setAttemptsOnQuestion(0);
    setAiExplanation("");
  }, [currentIdx, selectedCategory, selectedDifficulty]);

  // Handle choice selection
  const handleSelectOption = (optionKey: "A" | "B" | "C" | "D") => {
    if (isCorrect) return; // Already answered correctly, locked

    setSelectedOption(optionKey);
    const correct = optionKey === activeQuestion.correctAnswer;
    setAttemptsOnQuestion((prev) => prev + 1);

    // Update overall attempts
    let newAttempts = stats.totalAttempts + 1;
    let newCorrectAttempts = stats.correctAttempts;
    let newIncorrectQuestionIds = [...stats.incorrectQuestionIds];

    // Manage category stats
    const catName = activeQuestion.category;
    const updatedCategoryScores = { ...stats.categoryScores };
    if (!updatedCategoryScores[catName]) {
      updatedCategoryScores[catName] = { correct: 0, total: 0 };
    }
    updatedCategoryScores[catName].total += 1;

    if (correct) {
      setIsCorrect(true);
      newCorrectAttempts += 1;
      updatedCategoryScores[catName].correct += 1;

      // If answered correctly on the FIRST try, make sure it's removed from mistakes or not added
      if (
        attemptsOnQuestion === 0 &&
        newIncorrectQuestionIds.includes(activeQuestion.id)
      ) {
        newIncorrectQuestionIds = newIncorrectQuestionIds.filter(
          (id) => id !== activeQuestion.id,
        );
      }
    } else {
      setIsCorrect(false);
      if (!wrongSelections.includes(optionKey)) {
        setWrongSelections((prev) => [...prev, optionKey]);
      }

      // Add to incorrect questions backlog if not already there
      if (!newIncorrectQuestionIds.includes(activeQuestion.id)) {
        newIncorrectQuestionIds.push(activeQuestion.id);
      }
    }

    onUpdateStats({
      ...stats,
      totalAttempts: newAttempts,
      correctAttempts: newCorrectAttempts,
      categoryScores: updatedCategoryScores,
      incorrectQuestionIds: newIncorrectQuestionIds,
    });
  };

  // Call server-side Gemini API for AI detailed explanation
  const handleAskAI = async () => {
    if (!activeQuestion) return;
    setAiLoading(true);
    setAiExplanation("");

    try {
      // Support both relative path and custom API endpoint via env variable
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";
      const apiUrl = `${apiBaseUrl}/api/ai-explain`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: activeQuestion.questionText,
          codeSnippet: activeQuestion.codeSnippet,
          selectedOption: selectedOption,
          correctAnswer: activeQuestion.correctAnswer,
          isCorrect: isCorrect,
        }),
      });

      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType?.includes("application/json")) {
        const text = await response.text();
        console.error("Invalid Content-Type:", {
          contentType,
          status: response.status,
          responseText: text.substring(0, 200),
        });
        setAiExplanation(
          `⚠️ API trả về lỗi (${response.status})\n\nCó thể do:\n1. Backend chưa được deploy hoặc không accessible\n2. URL API không đúng: ${apiUrl}\n3. Hãy kiểm tra VITE_API_BASE_URL environment variable\n\n💡 Nếu backend ở domain khác, set VITE_API_BASE_URL=https://your-backend.com`,
        );
        return;
      }

      const data = await response.json();
      if (response.ok) {
        setAiExplanation(data.explanation);
      } else {
        const errorMsg = data.error || "Không rõ";
        console.error("AI API Error:", {
          status: response.status,
          error: errorMsg,
        });
        setAiExplanation(
          `⚠️ Lỗi từ máy chủ (${response.status}): ${errorMsg}\n\nHãy kiểm tra:\n1. GEMINI_API_KEY có được set trong production không?\n2. Server có kết nối được tới Gemini API không?`,
        );
      }
    } catch (err: any) {
      console.error("Network/Fetch Error:", err);
      setAiExplanation(
        `⚠️ Gặp lỗi đường truyền mạng: ${err.message}\n\nCó thể do:\n1. Kết nối mạng bị gián đoạn\n2. API endpoint không accessible\n3. CORS bị chặn\n\n📝 Chi tiết: ${err.message}`,
      );
    } finally {
      setAiLoading(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < filteredQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  // Reset active filter indexes
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentIdx(0);
  };

  const handleDifficultyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDifficulty(e.target.value);
    setCurrentIdx(0);
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* Quiz section (col-span-2) */}
      <div className="xl:col-span-2 space-y-5">
        {/* Filters and Header Info */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5" />
              Bộ lọc:
            </div>

            {/* Category selection */}
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              id="practice-category-select"
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-sky-500 text-slate-600 max-w-[200px]"
            >
              <option value="All">Tất cả chủ đề</option>
              {Object.values(Category).map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Difficulty selection */}
            <select
              value={selectedDifficulty}
              onChange={handleDifficultyChange}
              id="practice-difficulty-select"
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-sky-500 text-slate-600"
            >
              <option value="All">Tất cả độ khó</option>
              <option value="Dễ">Dễ</option>
              <option value="Trung bình">Trung bình</option>
              <option value="Khó">Khó</option>
            </select>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Danh sách:{" "}
            <span className="font-bold text-sky-600">
              {filteredQuestions.length}
            </span>{" "}
            câu hỏi được lọc
          </div>
        </div>

        {/* Question Panel */}
        {activeQuestion ? (
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            {/* Badges details */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-semibold rounded-full border border-sky-100 max-w-[80%] truncate">
                {activeQuestion.category}
              </span>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 text-xs font-medium rounded-md ${
                    activeQuestion.difficulty === "Dễ"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                      : activeQuestion.difficulty === "Trung bình"
                        ? "bg-amber-50 text-amber-700 border border-amber-100"
                        : "bg-rose-50 text-rose-700 border border-rose-100"
                  }`}
                >
                  Độ khó: {activeQuestion.difficulty}
                </span>
                <span className="text-xs font-mono font-semibold text-slate-400">
                  {currentIdx + 1}/{filteredQuestions.length}
                </span>
              </div>
            </div>

            {/* Question Text */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-800 leading-normal flex gap-2">
                <span className="text-sky-600 font-mono text-lg font-bold">
                  Q.
                </span>
                {activeQuestion.questionText}
              </h3>

              {/* Code block if any */}
              {activeQuestion.codeSnippet && (
                <CppCodeBlock code={activeQuestion.codeSnippet} />
              )}
            </div>

            {/* MCQ Options */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {activeQuestion.options.map((option) => {
                const isSelected = selectedOption === option.key;
                const isCorrectOption =
                  option.key === activeQuestion.correctAnswer;
                const isWrongSelected = wrongSelections.includes(option.key);

                // Styling logic based on states
                let optionStyle =
                  "border-slate-100 hover:border-slate-300 hover:bg-slate-50/50";
                let textBadgeStyle =
                  "bg-slate-100 text-slate-500 group-hover:bg-slate-200";

                if (isCorrect && isCorrectOption) {
                  // If answered correctly, highlight correct option
                  optionStyle =
                    "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-sm";
                  textBadgeStyle = "bg-emerald-500 text-white";
                } else if (isWrongSelected) {
                  // If wrong and selected previously, highlight as red
                  optionStyle =
                    "bg-rose-50/70 border-rose-200 text-rose-900 line-through opacity-80";
                  textBadgeStyle = "bg-rose-500 text-white";
                } else if (isSelected) {
                  // Just selected but evaluation hasn't finalized or is evaluated
                  optionStyle =
                    "border-sky-500 bg-sky-50/20 text-sky-900 ring-1 ring-sky-500";
                  textBadgeStyle = "bg-sky-500 text-white";
                }

                return (
                  <button
                    key={option.key}
                    disabled={
                      isCorrect !== null && isCorrect && isCorrectOption
                    } // Lock selection once correct
                    onClick={() => handleSelectOption(option.key)}
                    id={`opt-btn-${option.key}`}
                    className={`group text-left p-4 rounded-xl border text-sm font-medium transition duration-150 flex items-center gap-4 cursor-pointer ${optionStyle}`}
                  >
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0 transition ${textBadgeStyle}`}
                    >
                      {option.key}
                    </span>
                    <span className="leading-relaxed">{option.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Error retry warning */}
            {isCorrect === false && (
              <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 text-xs text-rose-800 flex items-start gap-2.5 animate-pulse">
                <AlertCircle className="w-4.5 h-4.5 shrink-0 text-rose-500" />
                <div>
                  <strong>Lựa chọn chưa chính xác!</strong> Trong hệ thống này,
                  bạn cần suy nghĩ và tìm câu trả lời đúng của câu này để nhớ
                  kiến thức sâu nhất. Hãy đọc kĩ lại code, gợi ý hoặc bấm{" "}
                  <strong>Hỏi Trợ Lý AI</strong> bên phải để được hướng dẫn!
                </div>
              </div>
            )}

            {/* Correct feedback */}
            {isCorrect === true && (
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-xs text-emerald-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 shrink-0 text-emerald-500" />
                <div>
                  <strong>Tuyệt vời, câu trả lời chính xác!</strong> Hãy xem
                  phần giải thích chi tiết trong mục hướng dẫn ôn luyện bên phải
                  hoặc chuyển tiếp đến các cột mốc câu hỏi tiếp theo dưới đây.
                </div>
              </div>
            )}

            {/* Bottom Actions Router */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={handlePrevQuestion}
                disabled={currentIdx === 0}
                className="px-4 py-2 text-xs font-semibold text-slate-500 rounded-xl border border-slate-200 hover:bg-slate-50 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Câu trước
              </button>

              <div className="flex gap-2">
                {/* AI Assistant Button */}
                <button
                  onClick={handleAskAI}
                  id="btn-ask-ai"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 text-indigo-700 text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer border border-indigo-200/50"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-indigo-500" />
                  Hỏi Trợ Lý AI
                </button>

                {/* Next button disabled unless correct answer is found */}
                {isCorrect ? (
                  <button
                    onClick={handleNextQuestion}
                    disabled={currentIdx === filteredQuestions.length - 1}
                    className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Câu tiếp theo
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    disabled
                    title="Bạn phải trả lời đúng câu này trước khi tiến sang thử thách mới"
                    className="px-5 py-2 bg-slate-100 text-slate-400 text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-not-allowed border border-slate-200"
                  >
                    Khóa (Chưa giải xong)
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-12 rounded-2xl border border-slate-100 shadow-sm text-center">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-base font-bold text-slate-700">
              Không tìm thấy câu hỏi thích hợp
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              Hãy thử đổi bộ lọc chủ đề hoặc độ khó khác trong bộ lọc phía trên.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedDifficulty("All");
              }}
              className="mt-4 px-4 py-2 bg-sky-50 text-sky-700 text-xs font-bold rounded-xl hover:bg-sky-100 transition inline-flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" /> Reset Bộ Lọc
            </button>
          </div>
        )}
      </div>

      {/* Explanations Side Panel (col-span-1) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-fit space-y-6">
        <div>
          <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            Kiến Thức & Giải Thích
          </h3>
          <p className="text-slate-400 text-[11px] mt-1">
            Cách định nghĩa câu trả lời khoa học của Đại học.
          </p>
        </div>

        {/* AI Explanations Container (highest priority representation) */}
        {aiLoading && (
          <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-800">
              <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
              AI Giáo Sư Đang Phân Tích...
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-indigo-100/60 rounded w-full animate-pulse" />
              <div className="h-3 bg-indigo-100/60 rounded w-[90%] animate-pulse" />
              <div className="h-3 bg-indigo-100/60 rounded w-[85%] animate-pulse" />
              <div className="h-3 bg-indigo-100/60 rounded w-[70%] animate-pulse" />
            </div>
          </div>
        )}

        {aiExplanation && (
          <div className="bg-gradient-to-br from-indigo-50/30 to-sky-50/20 border border-indigo-100/80 rounded-xl p-4 shadow-sm relative overflow-hidden">
            <div className="absolute top-2 right-2 opacity-10 pointer-events-none">
              <Sparkles className="w-16 h-16 text-indigo-500" />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-indigo-800 mb-3 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 fill-indigo-500" />
              Lời Giải Giáo Sư AI
            </div>
            <div className="max-h-[420px] overflow-y-auto pr-1">
              <MarkdownView content={aiExplanation} />
            </div>
          </div>
        )}

        {/* Standard Explanation panel */}
        {activeQuestion && (
          <div className="space-y-4">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/60">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                💡 Gợi ý cốt lõi
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                {isCorrect
                  ? activeQuestion.explanation
                  : "Hãy thử chọn một phương án! Hệ thống sẽ kích hoạt giải thích chi tiết ngay tại đây khi bạn bấm đúng để khắc sâu trí nhớ."}
              </p>
            </div>

            <div className="text-[11px] text-slate-400 leading-normal">
              📌 <strong>Mẹo ôn tập:</strong> Trong lập trình hướng đối tượng
              C++, việc sai liên tục là bình thường. Hãy dùng chức năng{" "}
              <strong>Hỏi Trợ Lý AI</strong> để phân tích từng dòng lệnh của
              đoạn mã code nếu bạn cảm thấy lạ lẫm.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
