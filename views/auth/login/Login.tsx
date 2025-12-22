"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input } from "@/components";
import { useForm, useWatch } from "react-hook-form";
import { PasswordInput } from "../../../components/PasswordInput";

import { toast } from "react-toastify";
import { AuthToast } from "@/components/AuthToast";

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
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitted },
    setError,
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log("Form submitted:", data);

      // 🔁 Simulated backend response
      const emailWrong = data.email === "error@test.com";
      const passwordWrong = data.password === "123456";

      if (emailWrong || passwordWrong) {
        // Field-level errors
        if (emailWrong) {
          setError("email", { message: "Incorrect email address" });
        }

        if (passwordWrong) {
          setError("password", { message: "Incorrect password" });
        }

        // Toast message logic
        let title = "Login failed";
        let description = "Please check your credentials and try again.";

        if (emailWrong && passwordWrong) {
          title = "Incorrect email and password";
        } else if (emailWrong) {
          title = "Incorrect email address";
        } else if (passwordWrong) {
          title = "Incorrect password";
        }

        toast.error(
          <AuthToast
            title={title}
            description={description}
            iconSrc="/img/auth/misc-icon.png"
          />,
          {
            icon: false,
            position: "top-right",
            autoClose: 5000,
            style: {
              borderLeft: "4px solid #d32f2f",
              background: "#ffebee",
              borderRadius: "8px",
              padding: "16px",
            },
          }
        );

        return;
      }

      // ✅ SUCCESS
      toast.success(
        <AuthToast
          variant="success"
          title="Login successful!"
          description="Welcome back to your account."
        />,
        {
          icon: false,
          position: "top-right",
          autoClose: 3000,
          style: {
            borderLeft: "4px solid #2e7d32",
            background: "#e8f5e9",
            borderRadius: "8px",
            padding: "16px",
          },
        }
      );
    } catch (error) {
      toast.error(
        <AuthToast
          title="Something went wrong"
          description="Please try again later."
          iconSrc="/img/auth/misc-icon.png"
        />,
        {
          icon: false,
          position: "top-right",
        }
      );
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");
    toast.info(
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        <Image
          src="/img/auth/misc-icon.png"
          alt="Info Icon"
          width={24}
          height={24}
          style={{ flexShrink: 0 }}
        />
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: "bold",
              color: "#1976d2",
            }}
          >
            Google Sign-In
          </h1>
          <p style={{ margin: "5px 0 0 0", fontSize: "14px", color: "#666" }}>
            Redirecting to Google for authentication.
          </p>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          borderLeft: "4px solid blue",
          borderRadius: "8px",
          padding: "16px",
          background: "#e3f2fd",
        },
      }
    );
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
          className=""
        />
      </div>

      {/* Welcome Back Text */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold font-black_han">Welcome back!</h2>
      </div>

      {/* Google Sign In Button */}
      <Button
        onPress={handleGoogleSignIn}
        className="w-full mx-auto flex items-center justify-center gap-3 bg-white border-2 border-gray-200  py-4 rounded-full font-medium font-sans text-lg "
      >
        <FcGoogle className="w-6 h-6" />
        <span>Continue with Google</span>
      </Button>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 text-[#BDBDBD] font-sans font-normal">OR</span>
        </div>
      </div>

      {/* Login Form */}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email */}
        <Input
          label="Email"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />

        {/* Password */}
        <PasswordInput
          label="Password"
          register={register("password")}
          error={errors.password?.message}
        />

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link
            href="/forgetPassword"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <Button
                type="submit"
                color="warning"
                className="w-full py-6 rounded-full text-lg"
                loading={isSubmitting}
                isDisabled={!isValid}
              >
                Continue
              </Button>

        {/* Sign up */}
        <div className="text-center text-lg font-sans font-medium flex justify-center gap-2">
          <span className="text-[#828282]">Don&apos;t have an account?</span>
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>
      </form>

      {/* Footer */}
      <footer className="text-center text-sm font-sans font-normal text-[#BDBDBD] space-y-2 mt-20">
        <div className="flex justify-center items-center gap-4 space-x-4">
          <h2>Terms & Condition</h2>

          {/* Vertical Divider */}
          <div className="h-5 w-px bg-gray-400"></div>

          <h2>Privacy Policy</h2>
        </div>
        <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};
