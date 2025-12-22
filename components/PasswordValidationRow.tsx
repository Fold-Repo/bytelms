"use client";

import { Check, X } from "lucide-react";

interface Props {
  label: string;
  isValid: boolean;
}

export const PasswordValidationRow = ({ label, isValid }: Props) => {
  return (
    <div className="flex items-center gap-3 text-sm">
      {/* Circle */}
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center
          ${isValid ? "bg-green-500" : "bg-gray-300"}
        `}
      >
        {isValid ? (
          <Check size={12} className="text-white" />
        ) : (
          <X size={12} className="text-gray-600" />
        )}
      </div>

      {/* Text */}
      <span className={isValid ? "text-green-600" : "text-gray-500"}>
        {label}
      </span>
    </div>
  );
};
