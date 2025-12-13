import { LoginTyped } from "@/views/auth/login";
import AuthHeader from "@/components/auth/AuthHeader";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Sign In | TestCube",
  description: "Sign in to your TestCube account",
};

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full flex flex-col lg:flex-row">
        {/* AuthHeader with deep blue background */}
        <div className="lg:flex-1 p-8 lg:p-12 flex items-center justify-center bg-[url('/img/auth/Background.png')] bg-cover bg-center bg-no-repeat">
          <AuthHeader
            title="Build the confidence to ace your exams."
            description="Master WAEC, JAMB & IELTS with unlimited past questions, instant corrections, and detailed performance tracking."
          />
        </div>

        {/* Login Form */}
        <div className="lg:flex-1 p-8 lg:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <LoginTyped />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
