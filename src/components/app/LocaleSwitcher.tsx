"use client";

import type { ChangeEvent } from "react";
import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";

const flags: Record<AppLocale, string> = {
  "en-us": "🇺🇸",
  "pt-br": "🇧🇷",
  "es-es": "🇪🇸",
};

const LocaleSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("locales");

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value });
  };

  return (
    <div className="relative">
      <span
        aria-hidden
        className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl leading-none pointer-events-none"
      >
        {flags[locale as AppLocale]}
      </span>
      <select
        value={locale}
        onChange={onChange}
        aria-label="Select language"
        className="locale-switcher h-[44px] rounded-full pl-11 pr-9 text-base text-white bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
      >
        {routing.locales.map((l) => (
          <option key={l} value={l} className="bg-background-700">
            {t(l)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocaleSwitcher;
