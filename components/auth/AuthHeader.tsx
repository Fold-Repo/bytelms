import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LOGO } from "@/constants";

interface AuthHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div className={` space-y-6 ${className}`}>
      <Link href="/" className="inline-block">
        <Image src={LOGO.white} alt={LOGO.alt} width={120} height={56} />
      </Link>

      <div className="space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
          {title}
        </h2>

        {description && (
          <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-md mx-auto">
            {description}
          </p>
        )}
      </div>

      <div className="mt-8">
        <Image
          src="/img/auth/Visuals.png"
          alt="Auth Visual"
          width={350}
          height={250}
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AuthHeader;
