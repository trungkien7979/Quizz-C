/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Category {
  BASICS = "Cơ bản về LTHDT (Class, Object, Encapsulation)",
  CONSTRUCTORS = "Hàm thiết lập & Hàm hủy (Constructor, Destructor)",
  INHERITANCE = "Tính kế thừa (Inheritance)",
  POLYMORPHISM = "Tính đa hình & Hàm ảo (Polymorphism, Virtual Functions)",
  OPERATORS = "Nạp chồng toán tử & Con trỏ this (Operators, 'this' pointer)",
  ADVANCED = "Nâng cao (Templates, Friend Functions, Exceptions)"
}

export interface Question {
  id: string;
  category: Category;
  questionText: string;
  codeSnippet?: string; // Optional C++ code block
  options: {
    key: "A" | "B" | "C" | "D";
    text: string;
  }[];
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string; // Explains why it is correct and others are wrong
  difficulty: "Dễ" | "Trung bình" | "Khó";
}

export interface UserStats {
  totalAttempts: number;
  correctAttempts: number;
  completedQuizzes: number;
  categoryScores: Record<string, { correct: number; total: number }>;
  incorrectQuestionIds: string[]; // List of question IDs for retry/memorization
}

export interface QuizState {
  currentQuestionId: string;
  selectedOption: "A" | "B" | "C" | "D" | null;
  isAnswered: boolean;
  isCorrect: boolean | null;
  attemptsCount: number; // to track how many times they tried this question
}
