import type { AppLocale } from "@/i18n/routing";

export type LocalizedText = Partial<Record<AppLocale, string>>;

export function tr(text: LocalizedText, locale: AppLocale): string {
  return text[locale] ?? text["en-us"] ?? "";
}
