"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center container mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold">{t("title")}</h2>
      <p className="text-white/60 max-w-md">{t("description")}</p>
      <button
        onClick={reset}
        className="h-[44px] px-6 rounded-full bg-accent text-primary font-semibold hover:bg-accent-hover transition-colors"
      >
        {t("retry")}
      </button>
    </div>
  );
}
