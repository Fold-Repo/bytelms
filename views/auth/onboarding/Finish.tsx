"use client";

import Image from "next/image";
import Rocket from "@/public/img/auth/pana.png";

export const Finish = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="flex flex-col items-center text-center space-y-6 max-w-md">
        {/* IMAGE */}
        <Image src={Rocket} alt="Rocket" className="mx-auto" priority />

        {/* TEXT */}
        <div className="space-y-2">
          <h1 className="font-black_han text-3xl font-normal">
            You are all set
          </h1>
          <p className="font-sans text-lg text-gray-600">
            Your account has been created and you are ready to test yourself
          </p>
        </div>

        {/* BUTTON CONTAINER */}
        <div className="flex w-full flex-col items-center justify-center gap-4 pt-6">
          {/* ACTIVE BUTTON */}
          <button
            className="
      w-full
      rounded-full
      bg-yellow-400
      px-8 py-4
      text-base font-semibold
      text-black
      transition hover:bg-yellow-500
    "
          >
            Take your first test
          </button>

          {/* INACTIVE BUTTON */}
          <button
            className="
      w-full
      rounded-full
      border border-gray-300
      px-8 py-4
      text-base font-medium
      text-black
      transition hover:bg-gray-100
    "
          >
            Explore dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
