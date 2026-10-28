import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "navy" | "blue" | "gold" | "neutral" | "success" | "warning";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "blue",
  size = "md",
  ...props
}: BadgeProps) {
  const variants = {
    navy: "bg-[#17324D]/10 text-[#17324D] border-[#17324D]/20",
    blue: "bg-[#3478A8]/10 text-[#3478A8] border-[#3478A8]/20",
    gold: "bg-[#D6A85F]/15 text-[#9e7330] border-[#D6A85F]/30",
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warning: "bg-amber-50 text-amber-800 border-amber-200",
  };

  const sizes = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border tracking-wide uppercase font-sans",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
