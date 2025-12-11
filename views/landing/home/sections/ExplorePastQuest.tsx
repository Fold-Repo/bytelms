import React from "react";
import Button from "@/components/ui/button";
import Texture from "@/public/img/HomePage/Texture.png";

export const ExplorePastQuest = () => {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative mx-auto w-full rounded-2xl bg-center bg-cover flex flex-col items-center px-8 py-14"
          style={{ backgroundImage: `url(${Texture.src})` }}
        >
          {/* blue overlay */}
          <div className="absolute inset-0 bg-blue-700/60 rounded-2xl" />

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black_han text-white leading-tight my-6">
              25+ years of questions
            </h2>

            <p className="text-center text-base font-sans sm:text-lg text-white/90 mb-8 px-10">
              Verified questions from 1999 - 2025. A complete archive built from
              decades of genuine past exam questions ensuring our students
              prepare with real, accurate, and exam-standard materials — not
              random or recycled questions.
            </p>

            <Button className="rounded-full bg-white text-black px-8 py-3 shadow-md hover:shadow-lg">
              Explore Past Questions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
