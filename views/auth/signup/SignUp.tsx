"use client";

import React from "react";
import { useState } from "react";
import { Button, Input, PopupModal } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useForm, useWatch } from "react-hook-form";
import { PasswordInput } from "../../../components/PasswordInput";
import { PasswordValidationRow } from "../../../components/PasswordValidationRow";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const SignUpPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const [isEditingEmail, setIsEditingEmail] = React.useState(false);
  const [emailInput, setEmailInput] = React.useState(submittedEmail);

  const [otp, setOtp] = React.useState(Array(6).fill(""));
  const inputRefs = React.useRef([]);

  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  // ✅ ONE useForm
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  // ✅ watch password
  const passwordValue = useWatch({
    control,
    name: "password",
    defaultValue: "",
  });

  // ✅ password checks
  const passwordChecks = {
    length: passwordValue.length >= 8,
    uppercase: /[A-Z]/.test(passwordValue),
    lowercase: /[a-z]/.test(passwordValue),
    number: /\d/.test(passwordValue),
  };

  const onSubmit = async (data: FormValues) => {
    console.log("FORM DATA:", data);

    await new Promise((res) => setTimeout(res, 1500));

    setSubmittedEmail(data.email); // ✅ store email
    setShowModal(true); // ✅ open modal

    reset(); // optional
  };

  const handleGoogleSignIn = () => {
    toast.info("Redirecting to Google...");
  };

  return (
    <div className="space-y-6">
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src="/favicon_io/favicon.ico"
          alt="Logo"
          width={56}
          height={56}
        />
      </div>

      <h2 className="text-center text-3xl font-bold font-black_han">
        Welcome back!
      </h2>

      <Button
        onPress={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-3 border py-4 rounded-full bg-transparent"
      >
        <FcGoogle className="w-6 h-6" />
        Continue with Google
      </Button>

      <PopupModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setIsEditingEmail(false);
        }}
        size="md"
        showCloseButton={false}
      >
        {/* HEADER IMAGE */}
        <div
          className="relative h-[85px] w-full bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/auth/Polygon-15.png')",
          }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShowModal(false)}
            className="mt-3
      absolute
      top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      transition
      hover:scale-105
      active:scale-95
      focus:outline-none
    "
          >
            <Image
              src="/img/auth/Close-Button-Container.png"
              alt="Close modal"
              width={36}
              height={36}
              priority
            />
          </button>
        </div>

        {/* CONTENT */}
        <div className="px-6 pb-6 text-center">
          <h2 className="text-lg font-semibold mt-4">We emailed you a code</h2>

          <p className="text-sm text-gray-500 mt-1">
            Enter the verification code sent to:
          </p>

          {/* EMAIL + CHANGE */}
          <div className="mt-3 flex flex-col items-center justify-center mx-auto gap-2 w-80 bg-[#FAFAFC] px-6 py-1.5 rounded-md">
            {isEditingEmail ? (
              <>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-3 py-1 border border-gray-300 rounded"
                  placeholder="Enter your email"
                />
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => {
                      // validate email if you want
                      setSubmittedEmail(emailInput);
                      setIsEditingEmail(false);
                      // optionally resend code here
                    }}
                    className="text-indigo-500 font-medium"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEmailInput(submittedEmail);
                      setIsEditingEmail(false);
                    }}
                    className="text-gray-500 font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="text-base font-medium">{submittedEmail}</span>

                <button
                  onClick={() => setIsEditingEmail(true)}
                  className="text-indigo-500 text-xs flex items-center gap-1"
                >
                  ✎ Change
                </button>
              </>
            )}
          </div>

          {/* OTP CONTAINER */}
          <div className="flex justify-center mt-5">
            <div
              className={`
      flex items-center gap-3 px-4 py-3 rounded-2xl w-fit
      transition-colors
      ${isOtpComplete ? "border border-green-500" : "border border-gray-300"}
    `}
            >
              {otp.map((digit, i) => (
                <div key={i} className="relative w-8 h-10">
                  {/* Invisible Input */}
                  <input
                    ref={(el) => (inputRefs.current[i] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, i)}
                    className="
            absolute inset-0
            w-full h-full
            opacity-0
            cursor-pointer
          "
                  />

                  {/* Display Layer */}
                  <div
                    className={`
            w-full h-full
            flex items-center justify-center`}
                  >
                    {digit ? (
                      <span
                        className={`
                text-lg font-semibold
                ${isOtpComplete ? "text-green-600" : "text-gray-800"}
              `}
                      >
                        {digit}
                      </span>
                    ) : (
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RESEND */}
          <p className="text-xs text-gray-500 my-8">
            Didn’t get your code?
            <button className="text-indigo-500 font-medium hover:underline">
              Send a new code
            </button>
          </p>
        </div>
      </PopupModal>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Input
            label="First Name"
            className="bg-transparent"
            {...register("firstName", { required: "First name is required" })}
            error={errors.firstName?.message}
          />

          <Input
            label="Last Name"
            className="bg-transparent"
            {...register("lastName", { required: "Last name is required" })}
            error={errors.lastName?.message}
          />
        </div>
        <Input
          label="Email Address"
          className="bg-transparent"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
          error={errors.email?.message}
        />

        <PasswordInput
          label="Password"
          className="mt-5"
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            validate: {
              uppercase: (v) =>
                /[A-Z]/.test(v) || "Must contain an uppercase letter",
              lowercase: (v) =>
                /[a-z]/.test(v) || "Must contain a lowercase letter",
              number: (v) => /\d/.test(v) || "Must contain a number",
            },
          })}
          error={errors.password?.message}
        />

        {/* Password rules UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
          <PasswordValidationRow
            label="At least 8 characters"
            isValid={passwordChecks.length}
          />
          <PasswordValidationRow
            label="At least 1 uppercase letter"
            isValid={passwordChecks.uppercase}
          />
          <PasswordValidationRow
            label="At least 1 lowercase letter"
            isValid={passwordChecks.lowercase}
          />
          <PasswordValidationRow
            label="At least 1 number"
            isValid={passwordChecks.number}
          />
        </div>

        <Button
          type="submit"
          color="warning"
          className="w-full py-6 rounded-full text-lg"
          loading={isSubmitting}
          isDisabled={!isValid}
        >
          Continue
        </Button>

        <div className="text-center mt-8">
          <span className="text-gray-500">Already have an account? </span>
          <Link href="/signin" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};
