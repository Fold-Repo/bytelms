"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button, Input, PopupModal } from "@/components";
import { useRouter } from "next/navigation";

type ForgetPasswordForm = {
  email: string;
};

export const ForgetPassword = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
    const [submittedEmail, setSubmittedEmail] = useState("");
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [emailInput, setEmailInput] = useState(submittedEmail);
    const [otp, setOtp] = useState(Array(6).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ForgetPasswordForm>({
    mode: "onChange",
  });

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const isOtpComplete = otp.every((d) => d !== "");

  useEffect(() => {
    if (isOtpComplete) {
      const timer = setTimeout(() => {
        setShowModal(false);
        router.push("/reset-password");
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [isOtpComplete, router]);

  const onSubmit = async (data: ForgetPasswordForm) => {
    await new Promise((res) => setTimeout(res, 1000));
    setSubmittedEmail(data.email);
    setShowModal(true);
  };

  return (
    <div className="space-y-8">
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src="/favicon_io/favicon.ico"
          alt="Logo"
          width={56}
          height={56}
        />
      </div>

      {/* Heading */}
      <h2 className="text-center text-3xl font-bold font-black_han">
        Forgot Password
      </h2>

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Email Address"
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

        <Button
          type="submit"
          color="warning"
          className="w-full py-6 rounded-full text-lg"
          loading={isSubmitting}
          isDisabled={!isValid}
        >
          Continue
        </Button>
      </form>

      {/* FOOTER */}
      <footer className="text-center text-sm font-sans font-normal text-[#BDBDBD] space-y-2 mt-30">
        <div className="flex justify-center items-center gap-4">
          <h2>Terms & Condition</h2>
          <div className="h-5 w-px bg-gray-400"></div>
          <h2>Privacy Policy</h2>
        </div>
        <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
      </footer>

      {/* OTP MODAL */}
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
                style={{ backgroundImage: "url('/img/auth/Polygon-15.png')" }}
              >
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition hover:scale-105 active:scale-95 focus:outline-none"
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
                            // You can add validation here if you want
                            setSubmittedEmail(emailInput);
                            setIsEditingEmail(false);
                            // Optionally resend code here
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
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl w-fit transition-colors ${
                      isOtpComplete
                        ? "border border-green-500"
                        : "border border-gray-300"
                    }`}
                  >
                    {otp.map((digit, i) => (
                      <div key={i} className="relative w-8 h-10">
                        {/* Invisible Input */}
                        <input
                          ref={(el) => {
                            inputRefs.current[i] = el;
                          }}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(e.target.value, i)}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />

                        {/* Display Layer */}
                        <div className="w-full h-full flex items-center justify-center">
                          {digit ? (
                            <span
                              className={`text-lg font-semibold ${
                                isOtpComplete ? "text-green-600" : "text-gray-800"
                              }`}
                            >
                              {digit}
                            </span>
                          ) : (
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
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
    </div>
  );
};
