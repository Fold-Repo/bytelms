"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { cn } from "@/lib";
import ErrorMessage from "./ErrorMessage";
import { sizeClasses, radiusClasses } from "./constants";

interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "value" | "defaultValue"
  > {
  value?: string | number;
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
  const [isFocused, setIsFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState<string>("");

  // Sync display value
  useEffect(() => {
    if (isCurrency) {
      setDisplayValue(
        value !== undefined && value !== null
          ? formatCurrency(String(value))
          : ""
      );
    } else {
      setDisplayValue(
        value !== undefined && value !== null ? String(value) : ""
      );
    }
  }, [value, isCurrency]);

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
      setDisplayValue(rawValue);
      onChange?.(e);
    }
  };

  // ✅ SAFE label logic (FIXED)
  const isActive =
    isFocused || (displayValue !== undefined && displayValue !== "");

  return (
    <div
      className={cn("relative w-full", formGroupClass, fullWidth && "w-full")}
    >
      <input
        {...props}
        id={name}
        name={name}
        value={displayValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder=" "
        className={cn(
          "form-control bg-transparent",
          sizeClasses[inputSize],
          radiusClasses[radius],
          startContent && "pl-9",
          endContent && "pr-9",
          error && "is-invalid",
          className
        )}
      />

      {label && (
        <label
          htmlFor={name}
          className={cn(
            "absolute left-3 px-1 pointer-events-none transition-all duration-200 ease-out bg-[#F9F9F9]",
            isActive
              ? "-top-2 text-xs text-gray-700"
              : "top-1/2 -translate-y-1/2 text-gray-400"
          )}
        >
          {label}
        </label>
      )}

      {startContent && (
        <div className="absolute left-3 inset-y-0 flex items-center pointer-events-none">
          {startContent}
        </div>
      )}

      {endContent && (
        <div className="absolute right-3 inset-y-0 flex items-center pointer-events-none">
          {endContent}
        </div>
      )}

      <ErrorMessage error={error} />
    </div>
  );
};

export default Input;
