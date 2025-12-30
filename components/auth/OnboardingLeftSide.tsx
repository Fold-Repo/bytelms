import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LOGO } from "@/constants";
import { Check } from "lucide-react";

interface FormLeftSideProps {
  title: string;
  currentStep: 1 | 2 | 3;
  className?: string;
}

const steps = ["Sign up", "Learning Information", "You are all set"];

const OnboardingLeftSide: React.FC<FormLeftSideProps> = ({
  title,
  currentStep,
  className = "",
}) => {
  return (
    <div className={`h-full space-y-10 ${className}`}>
      {/* LOGO */}
      <Link href="/" className="inline-block">
        <Image src={LOGO.white} alt={LOGO.alt} width={120} height={56} />
      </Link>

      {/* TITLE */}
      <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
        {title}
      </h2>

      {/* PROGRESS STEPS */}
      <div className="relative mt-12 flex flex-col gap-10">
        {/* VERTICAL LINE */}
        <div className="absolute left-[11px] top-0 h-full w-[3px] bg-blue-600" />

        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompletedOrActive = stepNumber <= currentStep;

          return (
            <div key={step} className="relative flex items-center gap-4">
              {/* DOT */}
              <span
                className={`
                  z-10 flex h-7 w-7 items-center justify-center
                  rounded-full bg-blue-600
                `}
              >
                {isCompletedOrActive && (
                  <Check className="h-4 w-4 text-white stroke-[3]" />
                )}
              </span>

              {/* LABEL */}
              <span
                className={`
                  text-lg font-medium
                  ${
                    isCompletedOrActive
                      ? "text-white/60 line-through"
                      : "text-white"
                  }
                `}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnboardingLeftSide;
