"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { ExamSelector } from "@/components/ExamsSelector";
import { OnboardingHeader } from "@/components/OnboardingHeader";

const exams = ["WAEC", "JAMB", "IELTS"];

export const Onboarding = () => {
  const router = useRouter();
  const [selectedExams, setSelectedExams] = useState<string[]>([]);

  return (
    <div className="max-w-xl mx-auto space-y-10">
      {/* HEADER (REUSABLE) */}
      <OnboardingHeader
        step={1}
        totalSteps={4}
        title="Let’s get started"
        subtitle="Which exams are you getting ready for?"
        description="Select all that apply. This will personalize your dashboard."
      />

      {/* EXAM SELECTOR */}
      <ExamSelector
        exams={exams}
        value={selectedExams}
        onChange={setSelectedExams}
      />

      {/* FOOTER */}
      <div className="flex items-center justify-between pt-8">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm"
        >
          <HiArrowLeft />
          Back
        </button>

        <button
          type="button"
          disabled={selectedExams.length === 0}
          onClick={() => router.push("/onboarding/step-2")}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
          <HiArrowRight />
        </button>
      </div>
    </div>
  );
};
