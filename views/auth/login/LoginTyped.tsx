"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

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

export const LoginTyped = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitted },
    setError,
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    if (isSubmitted && !isValid) {
      toast.error(
        <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
          <Image
            src="/img/auth/misc-icon.png"
            alt="Alert Icon"
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
                color: "#d32f2f",
              }}
            >
              Incorrect email or password
            </h1>
            <p style={{ margin: "5px 0 0 0", fontSize: "14px", color: "#666" }}>
              The alert & notifications component
            </p>
          </div>
        </div>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            borderLeft: "4px solid red",
            borderRadius: "8px",
            padding: "16px",

          },
        }
      );
    }
  }, [isSubmitted, isValid]);

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Simulate API call
      console.log("Form submitted:", data);

      // Simulate login failure for demo
      if (data.email === "error@test.com") {
        setError("email", { message: "Incorrect email or password" });
        setError("password", { message: "Incorrect email or password" });
        toast.error(
            
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
          >
            <Image
              src="/img/auth/misc-icon.png"
              alt="Alert Icon"
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
                  color: "#d32f2f",
                }}
              >
                Incorrect email or password
              </h1>
              <p
                style={{ margin: "5px 0 0 0", fontSize: "14px", color: "#666" }}
              >
                The alert & notifications component
              </p>
            </div>
          </div>,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
              borderLeft: "4px solid red",
              borderRadius: "8px",
              padding: "16px",
              background: "#ffebee",
            },
          }
        );
        return;
      }

      // Simulate successful login
      toast.success(
        <div>
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "18px",
                fontWeight: "bold",
                color: "#2e7d32",
              }}
            >
              Login successful!
            </h1>
            <p style={{ margin: "5px 0 0 0", fontSize: "14px", color: "#666" }}>
              Welcome back to your account.
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
            borderLeft: "4px solid green",
            borderRadius: "8px",
            padding: "16px",
            background: "#e8f5e8",
          },
        }
      );
    } catch (error) {
      toast.error(
        <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
          <Image
            src="/img/auth/misc-icon.png"
            alt="Alert Icon"
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
                color: "#d32f2f",
              }}
            >
              Incorrect email or password
            </h1>
            <p style={{ margin: "5px 0 0 0", fontSize: "14px", color: "#666" }}>
              The alert & notifications component
            </p>
          </div>
        </div>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            borderLeft: "4px solid red",
            borderRadius: "8px",
            padding: "16px",
            background: "#ffebee",
          },
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
          <span className="px-4 bg-white text-gray-500 font-medium">OR</span>
        </div>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Input */}
        <div className="relative mx-auto">
          <input
            {...register("email")}
            type="email"
            className={`
      peer w-full px-4 py-3
      border rounded-xl
      bg-transparent
      placeholder-transparent
      focus:outline-none
      transition-all duration-200
      ${errors.email ? "border-red-500" : "border-gray-200"}
    `}
          />

          <label
            className={`
      absolute left-4
      top-1/2 -translate-y-2/2
      text-gray-500
      pointer-events-none
      bg-white px-1
      transition-all duration-200

      peer-focus:top-2 peer-focus:text-xs
      peer-valid:top-2 peer-valid:text-xs
    `}
          >
            Email
          </label>
        </div>

        {/* Password Input */}
        <div className="relative mx-auto">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            className={`
      peer w-full px-4 py-3 pr-12
      border rounded-xl
      bg-transparent
      placeholder-transparent
      focus:outline-none
      transition-all duration-200
      ${errors.password ? "border-red-500" : "border-gray-200"}
    `}
          />

          <label
            className={`
      absolute left-4
      top-1/2 -translate-y-2/2
      text-gray-500
      pointer-events-none
      bg-white px-1
      transition-all duration-200

      peer-focus:top-2 peer-focus:text-xs
      peer-valid:top-2 peer-valid:text-xs
    `}
          >
            Password
          </label>

          {/* Eye Icon */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-2/2 opacity-50 hover:opacity-70"
          >
            <Image
              src="/img/auth/eye.png"
              alt="Toggle password visibility"
              width={20}
              height={20}
            />
          </button>

          <div className="flex justify-end mt-2">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        {/* Sign In Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full mx-auto bg-[#E6AE06] hover:bg-[#d49a05] disabled:bg-gray-400 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
        >
          {isSubmitting ? "Signing in..." : "Continue"}
        </Button>

        {/* Sign Up Link */}
        <div className="text-center text-sm">
          <span className="text-gray-600">Don&apos;t have an account? </span>
          <Link
            href="/signup"
            className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-all duration-200"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};
