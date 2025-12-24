"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button, Input, PopupModal } from "@/components";

type ForgetPasswordForm = {
  email: string;
};

export const ForgetPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ForgetPasswordForm>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgetPasswordForm) => {
    console.log("FORGET PASSWORD EMAIL:", data.email);

    // Simulate API call
    await new Promise((res) => setTimeout(res, 1200));

    setSubmittedEmail(data.email);
    setShowModal(true);
    reset();
  };

  return (
    <div className="space-y-8">
      {/* Favicon */}
      <div className="flex justify-center">
        <Image
          src="/favicon_io/favicon.ico"
          alt="TestCube"
          width={56}
          height={56}
        />
      </div>

      {/* Title */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold font-black_han">Forgot Password</h2>
        <p className="text-gray-500 text-sm">
          Enter your email to receive a reset code
        </p>
      </div>

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

        <div className="text-center text-lg font-sans font-medium flex justify-center gap-2">
          <span className="text-[#828282]">Don&apos;t have an account?</span>
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>
      </form>

      {/* FOOTER */}
      <footer className="text-center text-sm font-sans font-normal text-[#BDBDBD] space-y-2 mt-20">
        <div className="flex justify-center items-center gap-4">
          <h2>Terms & Condition</h2>
          <div className="h-5 w-px bg-gray-400"></div>
          <h2>Privacy Policy</h2>
        </div>
        <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
      </footer>

      {/* POPUP MODAL */}
        <PopupModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
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
                <div className="mt-3 flex flex-col items-center justify-center mx-auto gap-2 w-80 bg-[#FAFAFC]  px-6 py-1.5 rounded-md">
                  <span className="text-base font-medium">{submittedEmail}</span>

                  <button
                    onClick={() => setShowModal(false)}
                    className="text-indigo-500 text-xs flex items-center gap-1"
                  >
                    ✎ Change
                  </button>
                </div>

                {/* OTP CONTAINER */}
                <div className="flex justify-center mt-5">
                  <div className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-2xl w-fit">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="relative w-8 h-10">
                        <input
                          type="text"
                          maxLength={1}
                          inputMode="numeric"
                          className="
                  absolute inset-0
                  w-full h-full

                  bg-transparent
                  outline-none
                  focus:outline-none
                "
                        />

                        {/* DOT */}
                        <div
                          className="
                  w-full h-full
                  flex items-center justify-center
                  pointer-events-none
                "
                        >
                          <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RESEND */}
                <p className="text-xs text-gray-500 mt-4">
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
