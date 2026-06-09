/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  BookOpen, Award, PenTool, AlertTriangle, HelpCircle, 
  Sparkles, GraduationCap, Code2, RefreshCw 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { Category, UserStats } from "./types";
import { QUESTION_POOL } from "./data/questions";

// Components
import DashboardPanel from "./components/DashboardPanel";
import PracticePanel from "./components/PracticePanel";
import TestModePanel from "./components/TestModePanel";
import MistakesReviewPanel from "./components/MistakesReviewPanel";
import CheatSheetPanel from "./components/CheatSheetPanel";

const LOCAL_STORAGE_KEY = "cpp_oop_quiz_stats_v1";

const DEFAULT_STATS: UserStats = {
  totalAttempts: 0,
  correctAttempts: 0,
  completedQuizzes: 0,
  categoryScores: {},
  // Pre-populate with typical question IDs if we want, but start clean
  incorrectQuestionIds: []
};

type PanelTab = "dashboard" | "practice" | "mocktest" | "mistakes" | "cheatsheet";

export default function App() {
  const [activeTab, setActiveTab] = useState<PanelTab>("dashboard");
  const [stats, setStats] = useState<UserStats>(DEFAULT_STATS);

  // Load statistics from local storage
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        setStats(JSON.parse(saved));
      } catch (err) {
        console.error("Failed to parse saved OOP stats:", err);
      }
    }
  }, []);

  // Save statistics to local storage when changed
  const handleUpdateStats = (newStats: UserStats) => {
    setStats(newStats);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newStats));
  };

  const handleResetProgress = () => {
    if (window.confirm("Bạn có chắc chắn muốn đặt lại tất cả kết quả, cấp độ học và xóa sổ tay sai sót không?")) {
      handleUpdateStats(DEFAULT_STATS);
      setActiveTab("dashboard");
    }
  };

  return (
    <div id="app-root-container" className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Dynamic Header */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-tr from-sky-600 to-indigo-600 rounded-xl text-white shadow-md flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-display font-black tracking-tight text-slate-900 flex items-center gap-2">
                C++ OOP Masterclass
                <span className="px-1.5 py-0.5 bg-sky-50 text-sky-700 font-mono text-[10px] font-bold rounded-md border border-sky-100">
                  V1.2
                </span>
              </h1>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">Trắc nghiệm Sư Phạm Lập Trình Hướng Đối Tượng C++</p>
            </div>
          </div>
          
          {/* Quick HUD Score */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-4 bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-xl text-xs">
              <div className="flex items-center gap-1.5 font-medium text-slate-600">
                <Code2 className="w-3.5 h-3.5 text-sky-500" />
                Lượt đúng: <span className="font-bold text-slate-800">{stats.correctAttempts}</span>
              </div>
              <div className="w-px h-3.5 bg-slate-200" />
              <div className="flex items-center gap-1.5 font-medium text-slate-600">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                Nợ câu sai: <span className="font-bold text-amber-600">{stats.incorrectQuestionIds.length}</span>
              </div>
            </div>

            <button
              onClick={handleResetProgress}
              id="reset-progress-btn"
              title="Khởi động lại toàn bộ tiến độ làm bài"
              className="p-2 bg-slate-100 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-xl transition duration-150 cursor-pointer border border-slate-200/50"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout Area */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex-1 flex flex-col md:flex-row gap-6">
        
        {/* Navigation Rail / Sidebar */}
        <nav id="nav-rail-sidebar" className="md:w-64 shrink-0 flex flex-col md:sticky md:top-24 h-fit gap-1 text-sm">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Học tập & Đánh giá</div>
          
          {/* Dashboard Tab */}
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full text-left px-4 py-3 rounded-xl font-medium transition flex items-center justify-between cursor-pointer ${
              activeTab === "dashboard" 
                ? "bg-slate-900 text-white shadow-sm" 
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4.5 h-4.5 shrink-0" />
              Tổng Quan Tiến Độ
            </div>
          </button>

          {/* Practice Tab */}
          <button
            onClick={() => setActiveTab("practice")}
            className={`w-full text-left px-4 py-3 rounded-xl font-medium transition flex items-center justify-between cursor-pointer ${
              activeTab === "practice" 
                ? "bg-slate-900 text-white shadow-sm" 
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <PenTool className="w-4.5 h-4.5 shrink-0" />
              Luyện Tập Trắc Nghiệm
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-mono scale-90">
              {QUESTION_POOL.length}
            </span>
          </button>

          {/* Mock Test Tab */}
          <button
            onClick={() => setActiveTab("mocktest")}
            className={`w-full text-left px-4 py-3 rounded-xl font-medium transition flex items-center justify-between cursor-pointer ${
              activeTab === "mocktest" 
                ? "bg-slate-900 text-white shadow-sm" 
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Award className="w-4.5 h-4.5 shrink-0" />
              Vào Phòng Thi Thử
            </div>
            {stats.completedQuizzes > 0 && (
              <span className="text-[11px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 font-mono">
                {stats.completedQuizzes} lần
              </span>
            )}
          </button>

          {/* Mistakes Tab */}
          <button
            onClick={() => setActiveTab("mistakes")}
            className={`w-full text-left px-4 py-3 rounded-xl font-medium transition flex items-center justify-between cursor-pointer ${
              activeTab === "mistakes" 
                ? "bg-slate-900 text-white shadow-sm" 
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-4.5 h-4.5 shrink-0" />
              Sổ Tay Câu Sai
            </div>
            {stats.incorrectQuestionIds.length > 0 && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-mono animate-bounce">
                {stats.incorrectQuestionIds.length}
              </span>
            )}
          </button>

          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mt-6 mb-2">Tài liệu ôn thi</div>

          {/* Cheat Sheet Tab */}
          <button
            onClick={() => setActiveTab("cheatsheet")}
            className={`w-full text-left px-4 py-3 rounded-xl font-medium transition flex items-center justify-between cursor-pointer ${
              activeTab === "cheatsheet" 
                ? "bg-slate-900 text-white shadow-sm" 
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Code2 className="w-4.5 h-4.5 shrink-0" />
              Cẩm Nang Cú Pháp LTHDT
            </div>
          </button>

          <div className="mt-8 p-4 bg-slate-100 border border-slate-200/50 rounded-2xl flex flex-col gap-2">
            <div className="text-slate-500 font-medium text-[11px] leading-relaxed flex gap-1 items-start">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
              <span>Nhấn <strong>Hỏi Trợ lý AI</strong> trong mỗi câu để được Giáo Sư phân tích dòng chạy của code an toàn!</span>
            </div>
          </div>
        </nav>

        {/* Content Panel Area */}
        <main id="main-content-display" className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              {activeTab === "dashboard" && (
                <DashboardPanel
                  stats={stats}
                  questionPool={QUESTION_POOL}
                  onStartPractice={() => setActiveTab("practice")}
                  onStartTest={() => setActiveTab("mocktest")}
                  onStartReview={() => setActiveTab("mistakes")}
                />
              )}

              {activeTab === "practice" && (
                <PracticePanel
                  questionPool={QUESTION_POOL}
                  stats={stats}
                  onUpdateStats={handleUpdateStats}
                />
              )}

              {activeTab === "mocktest" && (
                <TestModePanel
                  questionPool={QUESTION_POOL}
                  stats={stats}
                  onUpdateStats={handleUpdateStats}
                  onGoBack={() => setActiveTab("dashboard")}
                />
              )}

              {activeTab === "mistakes" && (
                <MistakesReviewPanel
                  questionPool={QUESTION_POOL}
                  stats={stats}
                  onUpdateStats={handleUpdateStats}
                  onGoBack={() => setActiveTab("dashboard")}
                />
              )}

              {activeTab === "cheatsheet" && (
                <CheatSheetPanel />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

      </div>

      {/* Modern Footer */}
      <footer className="bg-white border-t border-slate-200/80 mt-auto py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-400 space-y-2">
          <p>© 2026 C++ OOP Masterclass. Thiết kế chuyên sâu sý phạm cho kỳ thi Lập trình Hướng đối tượng.</p>
          <p>Hệ thống tự động lưu kết quả học tập của bạn vào trình duyệt để đồng bộ liên tiếp.</p>
        </div>
      </footer>

    </div>
  );
}
