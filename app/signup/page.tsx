import { SignupTyped } from "@/views/auth/signup";
import AuthHeader from "@/components/auth/AuthHeader";

export const metadata = {
  title: "Sign Up | TestCube",
  description: "Create your TestCube account",
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <AuthHeader
          title="Create your account"
          description="Sign up for TestCube"
        />
        <SignupTyped />
      </div>
    </div>
  );
}
