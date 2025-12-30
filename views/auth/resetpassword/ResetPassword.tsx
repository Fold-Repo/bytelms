"use client";

import { useForm, Controller } from "react-hook-form";
import { PasswordInput, Button } from "@/components";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";

type ResetPasswordForm = {
  password: string;
  confirmPassword: string;
};

export const ResetPassword = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ResetPasswordForm>({
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const onSubmit = async () => {
    await new Promise((res) => setTimeout(res, 1000));

    toast.success("Password reset successful");

    setTimeout(() => {
      router.push("/signin");
    }, 1200);
  };

  return (
    <div className="space-y-8 max-w-md mx-auto">
      {/* LOGO */}
      <div className="flex justify-center">
        <Image
          src="/favicon_io/favicon.ico"
          alt="Logo"
          width={56}
          height={56}
        />
      </div>

      {/* HEADING */}
      <h2 className="text-center text-3xl font-bold font-black_han">
        Reset Password
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* NEW PASSWORD */}
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Must be at least 8 characters",
            },
            validate: {
              uppercase: (v) =>
                /[A-Z]/.test(v) || "Must contain an uppercase letter",
              lowercase: (v) =>
                /[a-z]/.test(v) || "Must contain a lowercase letter",
              number: (v) => /\d/.test(v) || "Must contain a number",
            },
          }}
          render={({ field }) => (
            <PasswordInput
              {...field}
              label="New Password"
              error={errors.password?.message}
            />
          )}
        />

        {/* CONFIRM PASSWORD */}
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: "Confirm password is required",
            validate: (v) => v === password || "Passwords do not match",
          }}
          render={({ field }) => (
            <PasswordInput
              {...field}
              label="Confirm Password"
              error={errors.confirmPassword?.message}
            />
          )}
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
    </div>
  );
};
