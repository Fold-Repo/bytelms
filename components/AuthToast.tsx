import Image from "next/image";

interface AuthToastProps {
  title: string;
  description?: string;
  variant?: "error" | "success";
  iconSrc?: string; 
}

export const AuthToast = ({
  title,
  description,
  variant = "error",
  iconSrc,
}: AuthToastProps) => {
  const isError = variant === "error";

  return (
    <div className="flex items-start gap-3">
      {/* Render icon ONLY if provided */}
      {iconSrc && (
        <Image
          src={iconSrc}
          alt="Alert Icon"
          width={24}
          height={24}
          className="mt-1 shrink-0"
        />
      )}

      <div className="flex flex-col">
        <h1
          className={`text-sm font-semibold ${
            isError ? "text-red-600" : "text-green-600"
          }`}
        >
          {title}
        </h1>

        {description && (
          <p className="text-sm text-gray-600 leading-snug">{description}</p>
        )}
      </div>
    </div>
  );
};
