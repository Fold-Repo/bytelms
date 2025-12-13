"use client";

import React from "react";
import { Button } from "@/components";
import Link from "next/link";

export const EmailVerificationDefault = () => {
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
            Enter the code below to verify your account
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Verification Code
            </label>
            <input
              type="text"
              placeholder="000000"
              maxLength={6}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed text-center tracking-widest text-2xl"
            />
          </div>
          <Button
            isDisabled
            className="w-full rounded-full bg-blue-600 text-white py-2 opacity-50 cursor-not-allowed"
          >
            Verify Email
          </Button>{" "}
          <div className="text-center text-sm">
            <p className="text-gray-600 mb-2">Didn&apos;t receive the code?</p>
            <button className="text-blue-600 hover:underline font-medium opacity-50 cursor-not-allowed">
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
