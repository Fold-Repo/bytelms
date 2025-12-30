import { OnboardingStepFour } from "@/views/auth/onboarding/OnboardingStepFour";

import OnboardingLeftSide from "@/components/auth/OnboardingLeftSide";
// import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Onboarding | TestCube",
  description: "Get started with TestCube and enhance your exam preparation",
};

export default function OnboardingPage4() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full flex flex-col lg:flex-row">
        {/* FormLeftSide with deep blue background */}
        <div className=" lg:flex-1 p-8 lg:p-12 flex items-center justify-center bg-[url('/img/auth/Background.png')] min-h-screen bg-cover bg-center bg-no-repeat">
          <OnboardingLeftSide title="Set up your account in a few step"
            currentStep={2}/>
        </div>

        {/* Onboarding step 2 Form */}
        <div className="lg:flex-1 p-8 lg:p-12 flex items-center justify-center">
          <div className="w-full">
            <OnboardingStepFour
            />
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
