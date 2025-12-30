import { ResetPassword } from "@/views/auth/resetpassword";
import FormLeftSide from "@/components/auth/FormLeftSide";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Reset Password | TestCube",
  description: "Reset your TestCube account password",
};

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full flex flex-col lg:flex-row">
        {/* FormLeftSide with deep blue background */}
        <div className=" lg:flex-1 p-8 lg:p-12 flex items-center justify-center bg-[url('/img/auth/Background.png')] bg-cover bg-center bg-no-repeat">
          <FormLeftSide
            title="Build the confidence to ace your exams."
            description="Master WAEC, JAMB & IELTS with unlimited past questions, instant corrections, and detailed performance tracking."
          />
        </div>

        {/* ResetPassword Form */}
        <div className="lg:flex-1 p-8 lg:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <ResetPassword />
          </div>
        </div>
      </div>
      <ToastContainer
        icon={false}
        closeButton={false}
        hideProgressBar={false}
      />
    </div>
  );
}
