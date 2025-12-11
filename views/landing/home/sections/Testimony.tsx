"use client";

import React, { useRef, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { TestimonyCard } from "@/components/reusable/TestimonyCard";
import Button from "@/components/ui/button";

const testimonies = [
  {
    text: "I used to fail Physics. After 3 months on TestCube, I realized I was just bad at timing, not physics. I scored 290 in JAMB.",
    author: "Solomon A.",
    location: "Lagos, Nigeria",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    text: "Mathematics was my nemesis until I found TestCube. With their step-by-step guides, I transformed my grades and achieved an A in finals.",
    author: "Tunde B.",
    location: "Ibadan, Nigeria",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5,
  },
  {
    text: "Mathematics used to be my weakest subject, but thanks to TestCube's interactive tools, I found joy in solving complex problems. I now tutor my peers!",
    author: "Amina K.",
    location: "Kano, Nigeria",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
  },
  {
    text: "Biology felt overwhelming at first, but after joining TestCube, I discovered fun ways to learn. Now, I'm acing every exam.",
    author: "Chika O.",
    location: "Lagos, Nigeria",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 5,
  },
  {
    text: "Chemistry used to confound me, but TestCube's interactive simulations demystified the concepts. I went from barely passing to acing my exams!",
    author: "Zainab H.",
    location: "Abuja, Nigeria",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
  {
    text: "History seemed daunting, but with the help of Testcube, I discovered engaging narratives that made the past come alive. I ended up with a top score in my class!",
    author: "Emeka O.",
    location: "Port Harcourt, Nigeria",
    avatar: "https://i.pravatar.cc/150?img=6",
    rating: 5,
  },
  {
    text: "I struggled with English Literature, but TestCube's comprehensive breakdown of themes and characters revitalized my understanding. I now enjoy reading and scored a B in my exams!",
    author: "Precious E.",
    location: "Enugu, Nigeria",
    avatar: "https://i.pravatar.cc/150?img=7",
    rating: 5,
  },
  {
    text: "Physics was a nightmare until TestCube's simulations made it click. Scored high in JAMB!",
    author: "David O.",
    location: "Ibadan, Nigeria",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 5,
  },
  {
    text: "Chemistry used to confound me, but TestCube's interactive simulations demystified the concepts. I went from barely passing to acing my exams!",
    author: "Chukwu M.",
    location: "Kano, Nigeria",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5,
  },
  {
    text: "The platform is intuitive and packed with quality resources. Highly satisfied with my experience.",
    author: "Chiwe H.",
    location: "Lagos, Nigeria",
    avatar: "https://i.pravatar.cc/150?img=10",
    rating: 5,
  },
];

export const Testimony = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === "left"
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll removed — carousel is now manual only

  return (
    <section
      className="
        relative w-full py-16
        bg-black
        bg-[url('../public/img/HomePage/dots-example.png')]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* BACKGROUND OVERLAY */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* HEADER + ARROWS */}
      <div className="relative z-10 px-6 mb-12 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 max-w-7xl mx-auto">
        <h1 className="font-black_han text-3xl sm:text-4xl lg:text-5xl text-center sm:text-left leading-tight text-white">
          Hear it from our students
        </h1>

        {/* ARROWS — centered on mobile, right-aligned on desktop */}
        <div className="flex items-center gap-4 justify-center sm:justify-end w-full sm:w-auto">
          <Button
            onClick={() => scroll("left")}
            isIconOnly
            className="rounded-full p-3 bg-black/20 hover:bg-black/40 border border-white/30 hover:border-white/50 transition backdrop-blur-md"
          >
            <ArrowLeftIcon className="h-5 w-5 text-white" />
          </Button>

          <Button
            onClick={() => scroll("right")}
            isIconOnly
            className="rounded-full p-3 bg-black/20 hover:bg-black/40 border border-white/30 hover:border-white/50 transition backdrop-blur-md"
          >
            <ArrowRightIcon className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>

      {/* TESTIMONIAL CARDS CAROUSEL */}
      <div
        ref={carouselRef}
        className="px-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        <div className="flex gap-6 w-max">
          {testimonies.map((testimony, index) => (
            <TestimonyCard
              key={index}
              text={testimony.text}
              author={testimony.author}
              location={testimony.location}
              avatar={testimony.avatar}
              rating={testimony.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
