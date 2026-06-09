/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Question, UserStats } from "../types";
import CppCodeBlock from "./CppCodeBlock";
import { 
  Award, Clock, ArrowLeft, ArrowRight, CheckCircle2, XCircle, 
  RefreshCw, AlertTriangle, HelpCircle, Save, BookOpen, Layers, 
  Flame, ShieldAlert, Check, ChevronRight, HelpCircle as HelpIcon
} from "lucide-react";

interface TestModePanelProps {
  questionPool: Question[];
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onGoBack: () => void;
}

export default function TestModePanel({
  questionPool,
  stats,
  onUpdateStats,
  onGoBack,
}: TestModePanelProps) {
  // Test selection states
  const [selectedBatch, setSelectedBatch] = useState<number | null>(null); // null = landing, 1..4 = Batch 1..4, 0 = Random 10
  
  // Active test states
  const [testQuestions, setTestQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, "A" | "B" | "C" | "D">>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState<number>(2400); // Default 40 minutes for 25 questions
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Clean timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Timer run loop
  useEffect(() => {
    if (selectedBatch === null || isSubmitted) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    if (timeLeft <= 0) {
      handleAutoSubmit();
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timeLeft, isSubmitted, selectedBatch]);

  // Start a specific test batch
  const handleStartTest = (batchNo: number) => {
    let selected: Question[] = [];
    let timeDuration = 2400; // 40 minutes default

    if (batchNo >= 1 && batchNo <= 8) {
      selected = questionPool.slice((batchNo - 1) * 25, batchNo * 25);
    } else {
      // Random 10 questions mock quiz
      const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
      selected = shuffled.slice(0, 10);
      timeDuration = 900; // 15 minutes for 10 questions
    }

    setSelectedBatch(batchNo);
    setTestQuestions(selected);
    setCurrentIdx(0);
    setUserAnswers({});
    setIsSubmitted(false);
    setScore(0);
    setTimeLeft(timeDuration);
  };

  const handleSelectOption = (questionId: string, optionKey: "A" | "B" | "C" | "D") => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionKey
    }));
  };

  const handleAutoSubmit = () => {
    if (isSubmitted) return;
    handleSubmit();
  };

  const handleSubmit = () => {
    const unansweredCount = testQuestions.length - Object.keys(userAnswers).length;
    if (unansweredCount > 0 && !isSubmitted) {
      const confirmSubmit = window.confirm(
        `Bạn vẫn còn ${unansweredCount} câu hỏi chưa trả lời. Bạn có chắc chắn muốn nộp bài thi ngay bây giờ không?`
      );
      if (!confirmSubmit) return;
    }

    let correctCount = 0;
    const newIncorrectQuestionIds = [...stats.incorrectQuestionIds];

    testQuestions.forEach((q) => {
      const uAns = userAnswers[q.id];
      if (uAns === q.correctAnswer) {
        correctCount += 1;
      } else {
        // Answer is incorrect, add to backlog if not present
        if (!newIncorrectQuestionIds.includes(q.id)) {
          newIncorrectQuestionIds.push(q.id);
        }
      }
    });

    setScore(correctCount);
    setIsSubmitted(true);

    // Update global user stats
    const totalNewQuizzes = stats.completedQuizzes + 1;
    const updatedStats: UserStats = {
      ...stats,
      completedQuizzes: totalNewQuizzes,
      incorrectQuestionIds: newIncorrectQuestionIds,
      totalAttempts: stats.totalAttempts + testQuestions.length,
      correctAttempts: stats.correctAttempts + correctCount
    };
    onUpdateStats(updatedStats);
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const handleNext = () => {
    if (currentIdx < testQuestions.length - 1) {
      setCurrentIdx(p => p + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(p => p - 1);
    }
  };

  const handleExitTest = () => {
    if (!isSubmitted) {
      const confirmExit = window.confirm(
        "Bạn đang làm dở bài thi thử. Thiết lập thoát sẽ hủy toàn bộ tiến trình thi hiện tại và không được tính điểm. Bạn chắc chắn chứ?"
      );
      if (!confirmExit) return;
    }
    setSelectedBatch(null);
  };

  // 8 Batches Definition for landing display
  const batches = [
    {
      id: 1,
      title: "Đợt Thi 1: OOP Cơ Bản & Đóng Gói",
      desc: "Trọng tâm về cấu trúc Class, Object, Constructor/Destructor căn bản và nguyên lý Encapsulation.",
      count: 25,
      duration: "40 phút",
      topics: ["Cú pháp khai báo Class", "Quyền private/public mặc định", "Default Constructor", "Sử dụng Destructor"],
      color: "from-sky-500 to-blue-600",
      bgLight: "bg-sky-50/40 text-sky-700 border-sky-100"
    },
    {
      id: 2,
      title: "Đợt Thi 2: Constructor & Kế Thừa",
      desc: "Chuyên sâu về Copy/Move Constructors, Shallow/Deep Copy, danh sách khởi tạo và các cơ chế Kế thừa.",
      count: 25,
      duration: "40 phút",
      topics: ["Copy & Move Constructors", "Initializer List", "Name Hiding", "Kế thừa public/protected/private"],
      color: "from-purple-500 to-indigo-600",
      bgLight: "bg-purple-50/40 text-purple-700 border-purple-100"
    },
    {
      id: 3,
      title: "Đợt Thi 3: Đa Hình & Hàm Ảo",
      desc: "Chinh phục Dynamic Binding, bảng ảo vtable, hàm ảo/thuần ảo, lớp trừu tượng và virtual destructor.",
      count: 25,
      duration: "40 phút",
      topics: ["Cơ chế vtable & vptr", "Pure Virtual Functions", "Abstract Classes", "Bẫy virtual in constructor"],
      color: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-50/40 text-emerald-700 border-emerald-100"
    },
    {
      id: 4,
      title: "Đợt Thi 4: Operators & Templates",
      desc: "Tổng lực các bẫy Nạp chồng toán tử, Cơ chế Friend, Lập trình tổng quát Template và Ngoại lệ.",
      count: 25,
      duration: "40 phút",
      topics: ["Toán tử cấm nạp chồng", "Tiền tố vs Hậu tố ++", "Friend class/function", "Stack Unwinding in Exceptions"],
      color: "from-rose-500 to-orange-600",
      bgLight: "bg-rose-50/40 text-rose-700 border-rose-100"
    },
    {
      id: 5,
      title: "Đợt Thi 5: Tham Chiếu & Đặc Thù",
      desc: "Chuyên sâu về cấu trúc biến Tham chiếu, hàm inline tối ưu hóa, không gian tên Namespace và mutable.",
      count: 25,
      duration: "40 phút",
      topics: ["Reference vs Pointer", "Implicit Inline functions", "Namespace Pollution", "mutable in const class"],
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50/40 text-amber-700 border-amber-100"
    },
    {
      id: 6,
      title: "Đợt Thi 6: Hủy Ảo & Ép Kiểu",
      desc: "Lĩnh hội cơ chế Hàm hủy ảo bảo toàn RAM, override/final an toàn, Upcasting và Downcasting mạo hiểm.",
      count: 25,
      duration: "40 phút",
      topics: ["Virtual Destructor", "Đa hình in Constructor", "dynamic_cast / static_cast", "Object Slicing danger"],
      color: "from-cyan-500 to-blue-600",
      bgLight: "bg-cyan-50/40 text-cyan-700 border-cyan-100"
    },
    {
      id: 7,
      title: "Đợt Thi 7: Nạp Chồng & Ngăn Xếp",
      desc: "Xử lý cặn kẽ Tiền/Hậu tố ++, toán tử cấm nạp chồng, Stack Unwinding và con trỏ độc quyền unique_ptr.",
      count: 25,
      duration: "40 phút",
      topics: ["Toán tử cấm nạp chồng", "Tiền tố vs Hậu tố ++", "Stack Unwinding exceptions", "Smart Pointer RAII"],
      color: "from-pink-500 to-rose-600",
      bgLight: "bg-pink-50/40 text-pink-700 border-pink-100"
    },
    {
      id: 8,
      title: "Đợt Thi 8: Functor & Cấu trúc STL",
      desc: "Chinh phục nạp chồng operator(), lỗi chu kỳ tham chiếu chéo, Dangling Pointer và giải thuật lưu trữ map/set.",
      count: 25,
      duration: "40 phút",
      topics: ["operator() (Functor)", "Circular Reference", "Dangling Pointer danger", "std::map (Red-Black Tree)"],
      color: "from-teal-500 to-emerald-600",
      bgLight: "bg-teal-50/40 text-teal-700 border-teal-100"
    }
  ];

  if (selectedBatch === null) {
    return (
      <div className="space-y-6">
        
        {/* Intro HUD */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
            <Award className="w-5 h-5 text-sky-600" />
            Hệ Thống Thi Thử Chia Đợt Học Kỳ
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            Ngân hàng 200 câu hỏi trắc nghiệm Đánh giá năng lực môn Lập trình Hướng đối tượng C++ đã được xây dựng và mã hoá thành <strong>8 Đợt thi chuyên đề bài bản</strong>. Mỗi đợt tương ứng với <strong>25 câu hỏi trắc nghiệm (Thời gian: 40 phút)</strong> được thiết kế theo đúng cấu trúc đề tốt nghiệp học trình đại học.
          </p>
        </div>

        {/* 8 Batches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {batches.map((b) => (
            <div 
              key={b.id} 
              className="bg-white rounded-2xl border border-slate-150/80 shadow-xs hover:shadow-md transition duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                {/* Batch Header */}
                <div className="flex justify-between items-start">
                  <div className={`px-2.5 py-1 rounded-lg border text-xs font-mono font-bold ${b.bgLight}`}>
                    ĐỢT THI {b.id}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {b.duration}
                  </div>
                </div>

                {/* Info Text */}
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-sky-600 transition">
                    {b.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{b.desc}</p>
                </div>

                {/* Topics Covered Checklist */}
                <div className="pt-2 border-t border-slate-50 space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Nội dung cốt lõi:</span>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                    {b.topics.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[10px] text-slate-500">
                        <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span className="truncate">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Trigger Action Bar */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs font-medium text-slate-500">
                  {b.count} Câu hỏi sư phạm
                </span>
                <button
                  onClick={() => handleStartTest(b.id)}
                  id={`start-test-batch-${b.id}`}
                  className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 cursor-pointer shadow-sm flex items-center gap-1"
                >
                  Bắt đầu làm bài
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Quiz Option Banner */}
        <div className="bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-4 items-center">
            <div className="p-3 bg-white rounded-xl text-sky-600 shadow-xs border border-sky-100 shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Cần ôn tập nhanh gọn trong 15 phút?</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-lg">
                Thử sức ngay với <strong>Đề Thi Thử Tổng Hợp 10 Câu</strong> ngẫu nhiên trích xuất từ 200 câu trong toàn bộ ngân hàng đề để kiểm định nhanh cấp độ đa hình và sửa nợ.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleStartTest(0)}
            id="start-quick-mock-test"
            className="px-5 py-2.5 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-xl text-xs font-bold hover:from-sky-700 hover:to-indigo-700 cursor-pointer shadow-md flex items-center gap-1 border-none self-stretch sm:self-center justify-center"
          >
            Thi thử ngẫu nhiên (10 câu)
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    );
  }

  const activeQuestion = testQuestions[currentIdx];
  const totalQuestions = testQuestions.length;

  return (
    <div className="space-y-6">
      
      {/* Test Bar HUD */}
      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={handleExitTest}
            className="p-1.5 hover:bg-slate-50 border border-slate-200/60 rounded-xl text-slate-500 hover:text-slate-700 transition cursor-pointer"
            title="Thoát bài thi hiện tại"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h3 className="text-sm font-bold text-slate-800">
              {selectedBatch === 0 
                ? "Thi Thử Tổng Hợp Ngẫu Nhiên" 
                : `Kỳ Thi Thử Đánh Giá LTHDT • Đợt ${selectedBatch}`}
            </h3>
            <p className="text-slate-400 text-xs">
              {selectedBatch === 0 
                ? "Khóa luyện nhanh 10 câu ngẫu nhiên kiểm soát trình độ." 
                : `Thực hiện đầy đủ ${totalQuestions} câu hỏi chuyên sâu đợt ${selectedBatch}.`}
            </p>
          </div>
        </div>

        {/* Timer & Submit Controls */}
        <div className="flex items-center gap-3">
          <div className={`px-4 py-2 rounded-xl flex items-center gap-2 border font-mono font-bold text-sm ${
            timeLeft < 180 
              ? "bg-rose-50 text-rose-700 border-rose-100 animate-pulse" 
              : "bg-slate-50 text-slate-700 border-slate-100"
          }`}>
            <Clock className="w-4 h-4" />
            {formatTime(timeLeft)}
          </div>

          {!isSubmitted && (
            <button
              onClick={handleSubmit}
              id="test-submit-btn"
              className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-xl shadow-sm transition cursor-pointer flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              Nộp Bài Thi
            </button>
          )}

          {isSubmitted && (
            <button
              onClick={() => setSelectedBatch(null)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition cursor-pointer"
            >
              Chọn Đợt Khác
            </button>
          )}
        </div>
      </div>

      {isSubmitted ? (
        /* Test Results Summary */
        <div className="space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm text-center max-w-xl mx-auto space-y-4 animate-fade-in">
            <Award className="w-16 h-16 text-sky-600 mx-auto" />
            <h2 className="text-xl font-bold text-slate-800">Kết Quả Bài Thi Đợt {selectedBatch || "Ngẫu Nhiên"}</h2>
            
            <div className="flex justify-center gap-8 py-4">
              <div>
                <div className="text-5xl font-black text-sky-600">{score}/{totalQuestions}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Sổ câu trả lời đúng</div>
              </div>
              <div className="border-r border-slate-150" />
              <div>
                <div className="text-5xl font-black text-slate-800">{Math.round((score/totalQuestions) * 100)}%</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Độ chính xác tương đương</div>
              </div>
            </div>

            <p className="text-slate-500 text-xs leading-normal">
              {score / totalQuestions >= 0.8 
                ? "Xuất sắc! Bạn nắm cực kỳ hoàn hảo lượng lý thuyết và bẫy C++ OOP được đề xuất. Các lỗi sai đơn lẻ đã được thêm vào Sổ tay để tổng ôn." 
                : "Cố gắng lên! Các câu sai đã tự động được đưa vào danh sách nợ câu sai. Bạn có thể thanh lý các lỗi sai này tại bất kỳ thời gian nào."}
            </p>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => handleStartTest(selectedBatch!)}
                id="test-restart-btn"
                className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Thi Lại Đợt Này
              </button>
              <button
                onClick={() => setSelectedBatch(null)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition cursor-pointer"
              >
                Về Danh Sách Đợt
              </button>
            </div>
          </div>

          {/* Question Trace Back review */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              Trực Quan Ghi Nhớ Sư Phạm Chi Tiết
            </h3>

            {testQuestions.map((q, idx) => {
              const uAns = userAnswers[q.id];
              const correct = uAns === q.correctAnswer;

              return (
                <div 
                  key={idx} 
                  className={`bg-white p-6 rounded-2xl border shadow-sm space-y-4 ${
                    correct ? "border-emerald-150" : "border-rose-150"
                  }`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="px-2.5 py-0.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md">
                      Câu {idx + 1} • {q.category}
                    </span>
                    <span className={`text-xs font-semibold flex items-center gap-1.5 ${
                      correct ? "text-emerald-600" : "text-rose-600"
                    }`}>
                      {correct ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Đúng • Đã chọn {uAns}
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4" />
                          Sai • Đã chọn {uAns || "Không trả lời"} (Đáp án đúng: {q.correctAnswer})
                        </>
                      )}
                    </span>
                  </div>

                  {/* Question Text */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 leading-normal">{q.questionText}</h4>
                    {q.codeSnippet && <CppCodeBlock code={q.codeSnippet} />}
                  </div>

                  {/* Highlighted explanation */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/50 text-xs text-slate-600 space-y-1.5">
                    <div className="font-bold text-slate-700 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
                      Tại sao đáp án đúng là {q.correctAnswer}?
                    </div>
                    <p className="leading-relaxed">{q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Interactive Live Test Form with Navigation Grid Sidebar */
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main Question view */}
          {activeQuestion && (
            <div className="lg:col-span-3 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-semibold rounded-full border border-sky-100">
                  {activeQuestion.category}
                </span>
                <span className="text-xs font-mono font-semibold text-slate-400">
                  Câu Hỏi {currentIdx + 1}/{totalQuestions}
                </span>
              </div>

              {/* Question Statement */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-800 leading-normal flex gap-2">
                  <span className="text-sky-600 font-mono text-lg font-bold">Q{currentIdx + 1}.</span>
                  {activeQuestion.questionText}
                </h3>
                {activeQuestion.codeSnippet && <CppCodeBlock code={activeQuestion.codeSnippet} />}
              </div>

              {/* Option Selection list */}
              <div className="grid grid-cols-1 gap-3 pt-2">
                {activeQuestion.options.map((option) => {
                  const uAns = userAnswers[activeQuestion.id];
                  const isSelected = uAns === option.key;

                  return (
                    <button
                      key={option.key}
                      onClick={() => handleSelectOption(activeQuestion.id, option.key)}
                      id={`test-opt-btn-${option.key}`}
                      className={`group text-left p-4 rounded-xl border text-sm font-medium transition duration-150 flex items-center gap-4 cursor-pointer ${
                        isSelected 
                          ? "border-sky-500 bg-sky-50/20 text-sky-900 ring-1 ring-sky-500" 
                          : "border-slate-150 hover:border-slate-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0 transition ${
                        isSelected 
                          ? "bg-sky-500 text-white" 
                          : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                      }`}>
                        {option.key}
                      </span>
                      <span>{option.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Pagination controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={handlePrev}
                  disabled={currentIdx === 0}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 rounded-xl border border-slate-200 hover:bg-slate-50 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Câu trước
                </button>

                <div className="flex gap-2">
                  {currentIdx < totalQuestions - 1 ? (
                    <button
                      onClick={handleNext}
                      className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      Câu tiếp
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      id="test-submit-finish-btn"
                      className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      Nhấn Nộp Bài Thi
                      <Save className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Grid Sidebar Sheet */}
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm h-fit space-y-4">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-50 pb-2">
              <BookOpen className="w-4 h-4 text-sky-500" />
              Sơ Đồ Làm Bài
            </h3>

            <div className="grid grid-cols-5 gap-2 pb-2">
              {testQuestions.map((q, idx) => {
                const uAns = userAnswers[q.id];
                const isCurrent = idx === currentIdx;
                const isAnswered = uAns !== undefined;

                let gridClass = "bg-slate-50 border-slate-100 text-slate-400";
                if (isAnswered) {
                  gridClass = "bg-sky-500 border-sky-505 text-white shadow-xs font-bold";
                }
                if (isCurrent) {
                  gridClass = "bg-slate-900 border-slate-900 text-white ring-2 ring-sky-305 ring-offset-2 font-blackScale";
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIdx(idx)}
                    className={`w-10 h-10 rounded-xl border text-xs flex items-center justify-center transition cursor-pointer ${gridClass}`}
                    title={`Chuyển tới câu hỏi ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="text-[11px] text-slate-400 space-y-2 border-t border-slate-50 pt-3">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-sky-500" />
                <span>Đã đánh dấu câu trả lời</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-slate-50 border border-slate-100" />
                <span>Chưa trả lời</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-slate-900" />
                <span>Câu hỏi hiện tại</span>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-3 border border-amber-100 text-[10px] text-amber-800 leading-normal flex gap-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>Gợi ý: Nhấp trực tiếp vào bất kỳ ô số nào để nhảy nhanh tới câu hỏi tương ứng phục vụ kiểm duyệt kết quả!</span>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
