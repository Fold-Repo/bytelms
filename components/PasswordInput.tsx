"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib";
import { UseFormRegisterReturn  } from "react-hook-form"

type PasswordInputProps = {
  label: string;
  error?: string;
  className?: string;
  register?: UseFormRegisterReturn;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const PasswordInput = ({
  label,
  error,
  className,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn("relative w-full", className)}>
      <input
        {...props}
        type={showPassword ? "text" : "password"}
        placeholder=" "
        className={cn(
          "peer form-control pr-12 bg-transparent",
          error && "is-invalid"
        )}
      />

      {/* FLOATING LABEL */}
      <label
        className={cn(
          "absolute left-4 px-1 pointer-events-none transition-all duration-200",
          "top-1/2 -translate-y-1/2 text-gray-400",
          "peer-focus:-top-1 peer-focus:text-xs peer-focus:text-gray-700",
          "peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-700",
          "bg-[#F9F9F9]"
        )}
      >
        {label}
      </label>

      {/* TOGGLE */}
      <button
        type="button"
        onClick={() => setShowPassword((v) => !v)}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50"
        tabIndex={-1}
      >
        <Image
          src="/img/auth/eye.png"
          alt="Toggle password"
          width={20}
          height={20}
        />
      </button>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
