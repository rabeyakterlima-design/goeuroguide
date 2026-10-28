import React from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "./Button";

interface ErrorMessageProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorMessage({
  title = "Something went wrong",
  message = "An unexpected error occurred while loading this section. Please try again.",
  onRetry,
  className = "",
}: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className={`p-6 bg-red-50/70 border border-red-200 rounded-xl text-red-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${className}`}
    >
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-sm text-red-900">{title}</h4>
          <p className="text-xs text-red-700 mt-0.5">{message}</p>
        </div>
      </div>
      {onRetry && (
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
          className="border-red-300 text-red-800 hover:bg-red-100 flex-shrink-0"
        >
          Retry
        </Button>
      )}
    </div>
  );
}
