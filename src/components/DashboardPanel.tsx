/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Question, UserStats } from "../types";
import { Award, BookOpen, Clock, PenTool, CheckCircle2, AlertTriangle, Play } from "lucide-react";

interface DashboardPanelProps {
  stats: UserStats;
  questionPool: Question[];
  onStartPractice: () => void;
  onStartTest: () => void;
  onStartReview: () => void;
}

export default function DashboardPanel({
  stats,
  questionPool,
  onStartPractice,
  onStartTest,
  onStartReview,
}: DashboardPanelProps) {
  // Calculations
  const totalQuestions = questionPool.length;
  const incorrectQuestionsCount = stats.incorrectQuestionIds.length;
  const masteryPercentage = totalQuestions > 0 
    ? Math.round(((totalQuestions - incorrectQuestionsCount) / totalQuestions) * 100) 
    : 0;
    
  const accuracyRate = stats.totalAttempts > 0 
    ? Math.round((stats.correctAttempts / stats.totalAttempts) * 100) 
    : 0;

  // Group by category to show progress
  const categoryMastery = Object.values(Category).map((catName) => {
    const catQuestions = questionPool.filter(q => q.category === catName);
    const catTotal = catQuestions.length;
    const catWrong = catQuestions.filter(q => stats.incorrectQuestionIds.includes(q.id)).length;
    const catCorrect = catTotal - catWrong;
    const scorePct = catTotal > 0 ? Math.round((catCorrect / catTotal) * 100) : 0;
    
    return {
      name: catName,
      correct: catCorrect,
      total: catTotal,
      percentage: scorePct
    };
  });

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-sky-800 to-indigo-900 rounded-3xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-2">
            Học & Ôn Luyện C++ LTHDT
          </h2>
          <p className="text-sky-100 text-sm md:text-base leading-relaxed mb-6">
            Hệ thống trắc nghiệm Lập trình Hướng đối tượng C++ thiết kế chuẩn sý phạm. Chữa giải thích chi tiết từng câu và lặp lại câu sai thông minh giúp bạn ghi nhớ tuyệt đối.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onStartPractice}
              id="dash-start-practice-btn"
              className="px-5 py-2.5 bg-white text-indigo-900 font-medium text-sm rounded-xl hover:bg-sky-50 transition shadow-sm cursor-pointer flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-indigo-900 text-indigo-900" />
              Luyện Tập Ngay
            </button>
            <button
              onClick={onStartTest}
              id="dash-start-test-btn"
              className="px-5 py-2.5 bg-sky-600/50 hover:bg-sky-600/70 text-white font-medium text-sm rounded-xl transition border border-sky-400/30 cursor-pointer flex items-center gap-2"
            >
              <Award className="w-4 h-4" />
              Thi Thử (15 phút)
            </button>
          </div>
        </div>
        
        {/* Abstract background graphics */}
        <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 opacity-15 pointer-events-none">
          <BookOpen className="w-72 h-72 text-white" />
        </div>
      </div>

      {/* Grid Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Core stat 1 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-sky-50 rounded-xl text-sky-600">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Độ chín muồi (Mastery)</div>
            <div className="text-xl font-bold text-slate-800">{masteryPercentage}%</div>
          </div>
        </div>
        
        {/* Core stat 2 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Tỷ lệ đúng (Accuracy)</div>
            <div className="text-xl font-bold text-slate-800">{accuracyRate}%</div>
          </div>
        </div>

        {/* Core stat 3 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Sổ Tay Câu Sai</div>
            <div className="text-xl font-bold text-slate-800">{incorrectQuestionsCount} câu</div>
          </div>
        </div>

        {/* Core stat 4 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
            <PenTool className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Tổng số lượt bấm chọn</div>
            <div className="text-xl font-bold text-slate-800">{stats.totalAttempts} lượt</div>
          </div>
        </div>
      </div>

      {/* Main Stats Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Category breakdown stats */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm lg:col-span-2">
          <h3 className="text-base font-bold text-slate-800 mb-5 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-sky-600" />
            Mức Độ Làm Chủ Theo Chủ Đề
          </h3>
          <div className="space-y-4">
            {categoryMastery.map((cat, idx) => {
              // Color helper
              let barColor = "bg-sky-500";
              if (cat.percentage < 40) barColor = "bg-rose-500";
              else if (cat.percentage < 75) barColor = "bg-amber-500";

              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs text-slate-600 font-medium">
                    <span className="truncate max-w-[85%]">{cat.name}</span>
                    <span className="font-mono text-slate-700">{cat.correct}/{cat.total} câu ({cat.percentage}%)</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${barColor} rounded-full transition-all duration-500`}
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Panel for Mistakes Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                Ôn Tập Ghi Nhớ Sâu
              </h3>
              <span className="px-2 py-1 text-xs font-mono font-bold bg-amber-50 text-amber-600 rounded-md">
                {incorrectQuestionsCount} Trong Backlog
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Dựa trên cơ chế lặp lại câu sai, những câu bạn đã làm chưa đúng trong quá trình luyện tập và thi thử sẽ tự động hóa được tích lũy vào Sổ tay. Bạn cần trả lời đúng các câu này để xóa chúng khỏi backlog và ghi nhớ sâu kiến thức.
            </p>
            {incorrectQuestionsCount > 0 ? (
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-[11px] text-amber-800 leading-normal mb-4">
                Hiện bạn đang có <strong>{incorrectQuestionsCount}</strong> câu hỏi chờ ôn luyện lại cho đến khi thuộc lòng. 
              </div>
            ) : (
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-[11px] text-emerald-800 leading-normal mb-4">
                Tệt vời! Bạn chưa có câu sai nào trong Sổ Tay hoặc đã vượt qua mốc ôn tập thành công!
              </div>
            )}
          </div>

          <button
            onClick={onStartReview}
            id="dash-review-btn"
            disabled={incorrectQuestionsCount === 0}
            className={`w-full py-2.5 px-4 font-medium text-sm rounded-xl transition flex items-center justify-center gap-2 cursor-pointer ${
              incorrectQuestionsCount > 0 
                ? "bg-amber-500 hover:bg-amber-600 text-white shadow-sm" 
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
            }`}
          >
            <Clock className="w-4 h-4" />
            Luyện Lại Câu Sai Ngay
          </button>
        </div>

      </div>
    </div>
  );
}
