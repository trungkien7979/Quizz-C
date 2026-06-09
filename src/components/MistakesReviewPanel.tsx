/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Question, UserStats } from "../types";
import CppCodeBlock from "./CppCodeBlock";
import { AlertTriangle, BookOpen, CheckCircle2, ArrowRight, CornerDownRight, PartyPopper } from "lucide-react";

interface MistakesReviewPanelProps {
  questionPool: Question[];
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onGoBack: () => void;
}

export default function MistakesReviewPanel({
  questionPool,
  stats,
  onUpdateStats,
  onGoBack,
}: MistakesReviewPanelProps) {
  // Get all questions that the user has marked incorrect
  const mistakesList = questionPool.filter(q => stats.incorrectQuestionIds.includes(q.id));
  
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<"A" | "B" | "C" | "D" | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [wrongSelections, setWrongSelections] = useState<("A" | "B" | "C" | "D")[]>([]);

  // Reset answer states on current mistake index modification
  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
    setWrongSelections([]);
  }, [currentIdx, stats.incorrectQuestionIds.length]);

  const activeQuestion = mistakesList[currentIdx];

  const handleSelectOption = (optionKey: "A" | "B" | "C" | "D") => {
    if (isCorrect) return;

    setSelectedOption(optionKey);
    const correct = optionKey === activeQuestion.correctAnswer;

    // Track statistics for user actions
    const newTotalAttempts = stats.totalAttempts + 1;
    let newCorrectAttempts = stats.correctAttempts;

    if (correct) {
      setIsCorrect(true);
      newCorrectAttempts += 1;
    } else {
      setIsCorrect(false);
      if (!wrongSelections.includes(optionKey)) {
        setWrongSelections(prev => [...prev, optionKey]);
      }
    }

    onUpdateStats({
      ...stats,
      totalAttempts: newTotalAttempts,
      correctAttempts: newCorrectAttempts
    });
  };

  // Remotely purge this completed question from mistake statistics queue
  const handleResolveQuestion = () => {
    const updatedIds = stats.incorrectQuestionIds.filter(id => id !== activeQuestion.id);
    
    // Create new stats
    onUpdateStats({
      ...stats,
      incorrectQuestionIds: updatedIds
    });

    // Reset indicator index structure
    if (currentIdx >= updatedIds.length && currentIdx > 0) {
      setCurrentIdx(updatedIds.length - 1);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header HUD */}
      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-sm font-bold text-slate-800 flex items-center gap-1.5 uppercase tracking-wide">
            <AlertTriangle className="w-4.5 h-4.5 text-amber-500" />
            Luyện Tập Xóa Nợ Câu Sai
          </h2>
          <p className="text-slate-400 text-xs">Cơ chế lặp lại vòng lặp cho đến khi bạn giải đúng hoàn toàn tài liệu.</p>
        </div>
        <span className="px-3 py-1 text-xs font-mono font-bold bg-amber-50 text-amber-700 border border-amber-100 rounded-lg">
          {mistakesList.length} câu trong danh sách nợ
        </span>
      </div>

      {mistakesList.length === 0 ? (
        /* Empty Success State */
        <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-sm text-center max-w-xl mx-auto space-y-5">
          <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-500 w-fit mx-auto">
            <PartyPopper className="w-12 h-12" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-800">Sổ Tay Sạch Lỗi!</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Tệt vời! Khối nợ sai sót của bạn đã được thanh lý sạch sẽ. Bạn đã trả lời đúng toàn bộ câu hỏi trong bộ đề, sẵn sàng để tham gia các kỳ thi thử thách tiếp mục.
            </p>
          </div>
          <button
            onClick={onGoBack}
            className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs rounded-xl shadow-sm transition cursor-pointer"
          >
            Quay lại bảng điều khiển
          </button>
        </div>
      ) : (
        /* Active mistakes workbook quiz view */
        activeQuestion && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Main Interactive Quiz Box */}
            <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-100 text-xs font-semibold rounded-full">
                  Câu sai đang sửa đổi: {currentIdx + 1}/{mistakesList.length}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  Phạm vi: {activeQuestion.category}
                </span>
              </div>

              {/* Question Statement */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-800 leading-normal flex gap-2">
                  <span className="text-amber-500 font-mono text-lg font-bold">Q.</span>
                  {activeQuestion.questionText}
                </h3>
                {activeQuestion.codeSnippet && <CppCodeBlock code={activeQuestion.codeSnippet} />}
              </div>

              {/* MC Options list */}
              <div className="grid grid-cols-1 gap-3 pt-2">
                {activeQuestion.options.map((option) => {
                  const isSelected = selectedOption === option.key;
                  const isCorrectOption = option.key === activeQuestion.correctAnswer;
                  const isWrongSelected = wrongSelections.includes(option.key);

                  // Colors helper based on current states
                  let optionClass = "border-slate-100 hover:border-slate-300 hover:bg-slate-50/50";
                  let badgeClass = "bg-slate-100 text-slate-500 group-hover:bg-slate-200";

                  if (isCorrect && isCorrectOption) {
                    optionClass = "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-xs";
                    badgeClass = "bg-emerald-500 text-white";
                  } else if (isWrongSelected) {
                    optionClass = "bg-rose-50 border-rose-200 text-rose-900 line-through opacity-80";
                    badgeClass = "bg-rose-500 text-white";
                  } else if (isSelected) {
                    optionClass = "border-amber-500 bg-amber-50/20 text-amber-900 ring-1 ring-amber-500";
                    badgeClass = "bg-amber-500 text-white";
                  }

                  return (
                    <button
                      key={option.key}
                      disabled={isCorrect !== null && isCorrect && isCorrectOption}
                      onClick={() => handleSelectOption(option.key)}
                      id={`rev-opt-btn-${option.key}`}
                      className={`group text-left p-4 rounded-xl border text-sm font-medium transition duration-150 flex items-center gap-4 cursor-pointer ${optionClass}`}
                    >
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0 transition ${badgeClass}`}>
                        {option.key}
                      </span>
                      <span>{option.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedbacks alerts */}
              {isCorrect === false && (
                <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 text-xs text-rose-800 flex items-start gap-2.5 animate-pulse">
                  <AlertTriangle className="w-4.5 h-4.5 shrink-0 text-rose-500" />
                  <div>
                    <strong>Vẫn chưa chính xác!</strong> Hãy tư duy lại nguyên tắc OOP C++ của câu này. Bộ lọc ghi nhớ yêu cầu bạn tìm ra đáp án đúng thì mới giải phóng câu hỏi này được.
                  </div>
                </div>
              )}

              {isCorrect === true && (
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-xs text-emerald-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 shrink-0 text-emerald-500" />
                  <div>
                    <strong>Chính xác rồi!</strong> Bạn đã thu nạp được tri thức đúng. Hãy nhấn nút <strong>Xóa khỏi sổ tay & Lưu lại</strong> bên dưới để làm sạch nợ.
                  </div>
                </div>
              )}

              {/* Workbook Bottom Buttons navigation bar */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={onGoBack}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 rounded-xl border border-slate-200 hover:bg-slate-50 transition cursor-pointer"
                >
                  Thoát Workbook
                </button>

                {isCorrect ? (
                  <button
                    onClick={handleResolveQuestion}
                    id="rev-resolve-btn"
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    Xóa Khỏi Sổ Tay & Tiếp tục
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div className="text-xs text-slate-400 italic">
                    (Vui lòng trả lời đúng để phát triển kĩ năng)
                  </div>
                )}
              </div>

            </div>

            {/* Explanation Helper for target mistake question */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-fit space-y-4">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-500" />
                Ôn Tập Kiến Thức Liên Quan
              </h3>
              
              <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-100 text-xs text-amber-800 space-y-3">
                <div className="font-bold flex items-center gap-1.5">
                  <CornerDownRight className="w-3.5 h-3.5" />
                  Môn LTHDT có các điểm lưu ý:
                </div>
                <div className="space-y-1.5 leading-relaxed text-[11px] text-slate-600">
                  <p>• Các câu hỏi trong Sổ tay sai sót là cơ hội vàng để sửa đổi lỗ hổng kiến thức.</p>
                  <p>• Đọc kĩ giải thích chi tiết khi trả lời chính xác để chuẩn bị tinh thần cho kỳ thi thật!</p>
                </div>
              </div>

              {isCorrect && (
                <div className="space-y-2 border-t border-slate-100 pt-4">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">💡 Lời giải khoa học:</span>
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-150">
                    {activeQuestion.explanation}
                  </p>
                </div>
              )}
            </div>

          </div>
        )
      )}
    </div>
  );
}
