import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { Avatar } from "@heroui/avatar";
import { cn } from "@/lib";

interface TestimonyCardProps {
  text: string;
  author: string;
  location: string;
  avatar: string;
  rating: number; // 1-5
  className?: string;
}

export const TestimonyCard: React.FC<TestimonyCardProps> = ({
  text,
  author,
  location,
  avatar,
  rating,
  className,
}) => {
  return (
    <div
      className={cn(
        "shrink-0 w-80 sm:w-96 md:w-full md:max-w-lg h-56 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between",
        "bg-black/20 backdrop-blur-md border border-white/20",
        "hover:bg-black/30 hover:border-white/30",
        className
      )}
    >
      {/* Top Section: Stars + Text */}
      <div>
        {/* Star Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-yellow-400" : "text-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Testimony Text */}
        <p className="text-white/90 text-sm line-clamp-4">{text}</p>
      </div>

      {/* Bottom Section: Avatar + Author */}
      <div className="flex items-center gap-3 mt-4">
        <Avatar
          isBordered
          className="transition-transform"
          color="warning"
          name={author}
          size="md"
          src={avatar}
        />

        <div className="flex flex-col">
          <p className="text-sm font-semibold text-white font-sans">{author}</p>
          <p className="text-xs text-white/70 font-sans">{location}</p>
        </div>
      </div>
    </div>
  );
};
