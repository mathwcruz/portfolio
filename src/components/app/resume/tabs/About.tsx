import { getLocale, getTranslations } from "next-intl/server";

import { tr } from "@/lib/localize";
import type { AppLocale } from "@/i18n/routing";
import type { ResumeAbout } from "@/lib/data/resume";

const AboutTab = async ({ about }: { about: ResumeAbout }) => {
  const t = await getTranslations("resume");
  const locale = (await getLocale()) as AppLocale;

  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-2xl md:text-4xl font-bold">{t("section.about")}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm lg:text-base">
        {tr(about.description, locale)}
      </p>

      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6 max-w-[680px] mx-auto xl:mx-0">
        {about.info.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center xl:justify-start gap-4"
          >
            <span className="text-sm md:text-base text-white/60">
              {tr(item.fieldName, locale)}
            </span>
            <span className="text-base md:text-xl">
              {tr(item.fieldValue, locale)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutTab;
