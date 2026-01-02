import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={
        variant === "primary"
          ? `
inline-flex items-center justify-center
rounded-full w-29 px-6 py-4
text-base font-bold
bg-gradient-to-r from-red-600 to-red-400
text-black
shadow-[0_0_20px_rgba(239,68,68,0.6)]
transition-all duration-200
hover:from-red-500 hover:to-red-300
${className}
`
          : `
inline-flex items-center justify-center
rounded-full w-29 px-6 py-4
text-base font-bold
border border-white/30
text-white
bg-transparent
transition-all duration-200
hover:bg-white/10
${className}
`
      }
    >
      {children}
    </button>
  );
}
