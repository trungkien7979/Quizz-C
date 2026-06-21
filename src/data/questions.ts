/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from "../types";
import { BATCH1_QUESTIONS } from "./questions_batch1";
import { BATCH2_QUESTIONS } from "./questions_batch2";
import { BATCH3_QUESTIONS } from "./questions_batch3";
import { BATCH4_QUESTIONS } from "./questions_batch4";
import { BATCH5_QUESTIONS } from "./questions_batch5";
import { BATCH6_QUESTIONS } from "./questions_batch6";
import { BATCH7_QUESTIONS } from "./questions_batch7";
import { BATCH8_QUESTIONS } from "./questions_batch8";
import { BATCH9_QUESTIONS } from "./questions_batch9";
import { BATCH10_QUESTIONS } from "./questions_batch10";

// Consolidate all batches into a single pool of 250 questions
export const QUESTION_POOL: Question[] = [
  ...BATCH1_QUESTIONS,
  ...BATCH2_QUESTIONS,
  ...BATCH3_QUESTIONS,
  ...BATCH4_QUESTIONS,
  ...BATCH5_QUESTIONS,
  ...BATCH6_QUESTIONS,
  ...BATCH7_QUESTIONS,
  ...BATCH8_QUESTIONS,
  ...BATCH9_QUESTIONS,
  ...BATCH10_QUESTIONS,
];

// Helper to get questions for a specific batch (25 questions each)
export function getQuestionsByBatch(batchNo: number): Question[] {
  if (batchNo === 1) return BATCH1_QUESTIONS;
  if (batchNo === 2) return BATCH2_QUESTIONS;
  if (batchNo === 3) return BATCH3_QUESTIONS;
  if (batchNo === 4) return BATCH4_QUESTIONS;
  if (batchNo === 5) return BATCH5_QUESTIONS;
  if (batchNo === 6) return BATCH6_QUESTIONS;
  if (batchNo === 7) return BATCH7_QUESTIONS;
  if (batchNo === 8) return BATCH8_QUESTIONS;
  if (batchNo === 9) return BATCH9_QUESTIONS;
  if (batchNo === 10) return BATCH10_QUESTIONS;
  return BATCH1_QUESTIONS;
}
