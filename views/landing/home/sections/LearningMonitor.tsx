import React from "react";
import Image from "next/image";
import CelestailBlue from "@/public/img/HomePage/Celestial-Blue.png";

export const LearningMonitor = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mx-auto w-full max-w-[920px]">
          <div className="relative w-full">
            <Image
              src={CelestailBlue}
              alt="monitor view"
              width={920}
              height={540}
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
