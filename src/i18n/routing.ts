import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en-us", "pt-br", "es-es"],
  defaultLocale: "en-us",
});

export type AppLocale = (typeof routing.locales)[number];
