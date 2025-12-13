"use client";

import React, { useState } from "react";
import { Button } from "@/components";
import Link from "next/link";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export const EmailVerificationError = () => {
  const [code, setCode] = useState("123456");
  const [error, setError] = useState(
    "Invalid verification code. Please try again."
  );

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(value);
  };

  const handleResend = () => {
    // Resend code logic here
    console.log("Resending verification code");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("Invalid verification code. Please try again.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black_han mb-2">TestCube</h1>
          <p className="text-gray-600">Verify your email</p>
        </div>

        <div className="mb-6">
          <p className="text-center text-gray-700 mb-2">
            We&apos;ve sent a verification code to <br />
            <span className="font-semibold">you@example.com</span>
          </p>
          <p className="text-center text-sm text-gray-500">
            Enter the 6-digit code below to verify your account
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
            <ExclamationTriangleIcon className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Verification Code
            </label>
            <input
              type="text"
              value={code}
              onChange={handleCodeChange}
              placeholder="000000"
              maxLength={6}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-center tracking-widest text-2xl font-mono ${
                error
                  ? "border-red-300 bg-red-50 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700 py-2"
          >
            Verify Email
          </Button>

          <div className="text-center text-sm">
            <p className="text-gray-600 mb-2">Didn&apos;t receive the code?</p>
            <button
              type="button"
              onClick={handleResend}
              className="text-blue-600 hover:underline font-medium"
            >
              Resend Code
            </button>
          </div>

          <div className="text-center">
            <Link
              href="/auth/login"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
