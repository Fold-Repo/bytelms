"use client";

import { Check } from "lucide-react";

interface ExamSelectorProps {
  exams: string[];
  value: string[];
  onChange: (value: string[]) => void;
}

export const ExamSelector = ({ exams, value, onChange }: ExamSelectorProps) => {
  const toggleExam = (exam: string) => {
    onChange(
      value.includes(exam) ? value.filter((e) => e !== exam) : [...value, exam]
    );
  };

  return (
    <div className="flex flex-wrap gap-3">
      {exams.map((exam) => {
        const isActive = value.includes(exam);

        return (
          <button
            key={exam}
            type="button"
            onClick={() => toggleExam(exam)}
            className={`
          inline-flex items-center gap-3
          min-w-[160px]
          max-w-full
          rounded-xl border
          px-4 py-3
          text-sm font-medium
          transition-all duration-200
          ${
            isActive
              ? "border-blue-600"
              : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
          }
        `}
          >
            <span
              className={`
            flex h-5 w-5 items-center justify-center
            rounded-md border
            ${
              isActive ? "border-blue-600 bg-white" : "border-gray-300 bg-white"
            }
          `}
            >
              {isActive && (
                <Check className="h-4 w-4 text-blue-600 stroke-[3]" />
              )}
            </span>

            <span className="whitespace-nowrap">{exam}</span>
          </button>
        );
      })}
    </div>
  );
};
