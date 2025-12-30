"use client";

import React from "react";

interface OnboardingHeaderProps {
  step: number; // current step (1-based)
  totalSteps: number; // total steps
  title: string; // h1
  subtitle: string; // h2
  description?: string; // p (optional)
}

export const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
  step,
  totalSteps,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="space-y-6">
      {/* TITLE */}
      <h1 className="text-3xl font-black_han text-center">{title}</h1>

      {/* PROGRESS */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500">
          {step}/{totalSteps}
        </span>

        <div className="flex gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-2 w-10 rounded-full transition-colors ${
                index < step ? "bg-blue-600" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* QUESTION */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">{subtitle}</h2>

        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </div>
  );
};
