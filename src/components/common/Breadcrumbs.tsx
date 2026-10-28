import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-xs md:text-sm text-slate-500 py-3", className)}
    >
      <ol className="flex items-center flex-wrap gap-1.5 md:gap-2">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-slate-500 hover:text-[#17324D] transition-colors"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-1.5 md:gap-2">
              <ChevronRight className="w-3 h-3 text-slate-400" />
              {isLast || !item.href ? (
                <span
                  className="font-medium text-[#17324D] truncate max-w-[200px] md:max-w-xs"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-500 hover:text-[#17324D] transition-colors truncate max-w-[150px] md:max-w-xs"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
