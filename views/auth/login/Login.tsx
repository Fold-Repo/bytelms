"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input } from "@/components";
import { useForm } from "react-hook-form";
import { PasswordInput } from "../../../components/PasswordInput";
import { toast } from "react-toastify";
import { AuthToast } from "@/components/AuthToast";
import { Controller } from "react-hook-form";


// Validation schema
const loginSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

type LoginFormData = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError,
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const emailWrong = data.email === "error@test.com";
      const passwordWrong = data.password === "123456";

      if (emailWrong || passwordWrong) {
        if (emailWrong) {
          setError("email", { message: "Incorrect email address" });
        }
        if (passwordWrong) {
          setError("password", { message: "Incorrect password" });
        }

        toast.error(
          <AuthToast
            title="Login failed"
            description="Please check your credentials and try again."
            iconSrc="/img/auth/misc-icon.png"
          />,
          { icon: false }
        );

        return;
      }

      toast.success(
        <AuthToast
          variant="success"
          title="Login successful!"
          description="Welcome back to your account."
        />,
        { icon: false }
      );
    } catch {
      toast.error(
        <AuthToast
          title="Something went wrong"
          description="Please try again later."
          iconSrc="/img/auth/misc-icon.png"
        />,
        { icon: false }
      );
    }
  };

  const handleGoogleSignIn = () => {
    toast.info("Redirecting to Google...");
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

      <h2 className="text-center text-3xl font-bold font-black_han">
        Welcome back!
      </h2>

      {/* Google Button */}
      <Button
        onPress={handleGoogleSignIn}
        className="w-full mx-auto flex items-center justify-center gap-3 bg-transparent border-2 border-gray-200 py-4 rounded-full font-medium font-sans text-lg"
      >
        <FcGoogle className="w-6 h-6" />
        Continue with Google
      </Button>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 text-[#BDBDBD]">OR</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email */}
        <Input
          label="Email Address"
          type="email"
          className="bg-transparent"
          {...register("email")}
          error={errors.email?.message}
        />

        {/* Password */}
        <PasswordInput
          label="Password"
          register={register("password")}
          error={errors.password?.message}
        />

        <div className="flex justify-end">
          <Link
            href="/forgetpassword"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </Link>
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

        <div className="text-center">
          <span className="text-gray-500">Don&apos;t have an account? </span>
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
    </div>
  );
};
