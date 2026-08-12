"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center container mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold">Something went wrong</h2>
      <p className="text-white/60 max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="h-[44px] px-6 rounded-full bg-accent text-primary font-semibold hover:bg-accent-hover transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
