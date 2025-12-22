
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib";

type PasswordInputProps = {
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
  className?: string;
};

export const PasswordInput = ({
  label,
  register,
  error,
  className = "",
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn("relative w-full", className)}>
      {/* INPUT */}
      <input
        {...register}
        type={showPassword ? "text" : "password"}
        placeholder=" "
        className={cn("peer form-control pr-12 bg-transparent", error && "is-invalid")}
      />

      {/* FLOATING LABEL */}
      <label
        htmlFor={register.name}
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 px-1 pointer-events-none transition-all duration-200 bg-transparent",
          "peer-focus:top-0 peer-focus:text-xs peer-focus:-translate-y-0",
          "peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-0"
        )}
      >
        {label}
      </label>

      {/* EYE TOGGLE */}
      <button
        type="button"
        onClick={() => setShowPassword((v) => !v)}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-80"
        tabIndex={-1}
      >
        <Image
          src="/img/auth/eye.png"
          alt="Toggle password visibility"
          width={20}
          height={20}
        />
      </button>

      {/* ERROR */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
