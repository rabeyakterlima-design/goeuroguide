import React from "react";
import { FolderSearch } from "lucide-react";
import { Button } from "./Button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export function EmptyState({
  title = "No results found",
  description = "We couldn't find what you were searching for. Try adjusting your filters or search terms.",
  actionText,
  actionHref,
  onAction,
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center bg-white rounded-2xl border border-dashed border-slate-300">
      <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
        {icon || <FolderSearch className="w-7 h-7" />}
      </div>
      <h3 className="text-lg font-bold text-[#17324D] mb-1">{title}</h3>
      <p className="text-sm text-slate-600 max-w-md mb-6">{description}</p>
      {actionText && (actionHref || onAction) && (
        <Button
          variant="secondary"
          size="sm"
          href={actionHref}
          onClick={onAction}
        >
          {actionText}
        </Button>
      )}
    </div>
  );
}
