"use client";

import React, { ReactNode, useState } from "react";
import { cn } from "@/lib";
import ErrorMessage from "./ErrorMessage";
import { sizeClasses, radiusClasses } from "./constants";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string | ReactNode;
  name: string;
  className?: string;
  formGroupClass?: string;
  fullWidth?: boolean;
  inputSize?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  error?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  isCurrency?: boolean;
}

const formatCurrency = (value: string) => {
  const number = parseFloat(value.replace(/,/g, ""));
  if (isNaN(number)) return "";
  return number.toLocaleString();
};

const unformatCurrency = (value: string) => value.replace(/,/g, "");

const Input: React.FC<InputProps> = ({
  label,
  name,
  className,
  formGroupClass,
  fullWidth,
  inputSize = "md",
  radius = "md",
  error,
  startContent,
  endContent,
  isCurrency = false,
  value,
  onChange,
  ...props
}) => {
  const [displayValue, setDisplayValue] = useState(
    isCurrency && value ? formatCurrency(String(value)) : value ?? ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value;

    if (isCurrency) {
      rawValue = unformatCurrency(rawValue);
      setDisplayValue(formatCurrency(rawValue));
      onChange?.({
        ...e,
        target: { ...e.target, value: rawValue, name },
      });
    } else {
      onChange?.(e);
    }
  };

  return (
    <div
      className={cn("relative w-full", formGroupClass, fullWidth && "w-full")}
    >
      {/* INPUT */}
      <input
        {...props}
        id={name}
        name={name}
        placeholder=" "
        value={isCurrency ? displayValue : value}
        onChange={handleChange}
        className={cn(
          "peer form-control",
          sizeClasses[inputSize],
          radiusClasses[radius],
          startContent && "pl-9",
          endContent && "pr-9",
          error && "is-invalid",
          className
        )}
      />

      {/* FLOATING LABEL */}
      {label && (
        <label
          htmlFor={name}
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-transparent px-1 pointer-events-none transition-all duration-200",
            "peer-focus:top-0 peer-focus:text-xs peer-focus:-translate-y-0",
            "peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-0"
          )}
        >
          {label}
        </label>
      )}

      {/* ICONS */}
      {startContent && (
        <div className="absolute left-3 inset-y-0 flex items-center">
          {startContent}
        </div>
      )}

      {endContent && (
        <div className="absolute right-3 inset-y-0 flex items-center">
          {endContent}
        </div>
      )}

      {/* ERROR */}
      <ErrorMessage error={error} />
    </div>
  );
};

export default Input;
