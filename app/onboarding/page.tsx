import { Onboarding } from "@/views/auth/onboarding";
import OnboardingLeftSide from "@/components/auth/OnboardingLeftSide";
// import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Onboarding | TestCube",
  description: "Get started with TestCube and enhance your exam preparation",
};

export default function OnboardingPage1() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full flex flex-col lg:flex-row">
        {/* FormLeftSide with deep blue background */}
        <div className=" lg:flex-1 p-8 lg:p-12 flex items-center justify-center bg-[url('/img/auth/Background.png')] min-h-screen bg-cover bg-center bg-no-repeat">
          <OnboardingLeftSide
            title="Set up your account in a few step"
            currentStep={1}
          />
        </div>

        {/* Onboarding Form */}
        <div className="lg:flex-1 p-8 lg:p-12 flex items-center justify-center">
          <div className="w-full ">
            <Onboarding />
          </div>
        </div>
      </div>
      {/* <ToastContainer
        icon={false}
        closeButton={false}
        hideProgressBar={false}
      /> */}
    </div>
  );
}
