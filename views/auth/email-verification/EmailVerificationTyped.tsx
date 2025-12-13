"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components";
import Link from "next/link";

export const EmailVerificationTyped = () => {
  const [code, setCode] = useState("");
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(value);
  };

  const handleResend = () => {
    setCountdown(60);
    // Resend code logic here
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Verify code logic here
    console.log("Verifying code:", code);
  };

  const canResend = countdown === 0;

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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center tracking-widest text-2xl font-mono"
            />
            <p className="text-xs text-gray-500 mt-2 text-center">
              Code expires in {countdown}s
            </p>
          </div>
          <Button
            type="submit"
            isDisabled={code.length !== 6}
            className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Verify Email
          </Button>{" "}
          <div className="text-center text-sm">
            <p className="text-gray-600 mb-2">Didn&apos;t receive the code?</p>
            <button
              type="button"
              onClick={handleResend}
              disabled={!canResend}
              className="text-blue-600 hover:underline font-medium disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              {canResend ? "Resend Code" : `Resend in ${countdown}s`}
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
