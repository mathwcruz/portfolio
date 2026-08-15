import { getLocale, getTranslations } from "next-intl/server";

import TimelineTab from "@/components/app/resume/TimelineTab";
import type { ResumeExperience } from "@/lib/data/resume";
import { tr } from "@/lib/localize";
import type { AppLocale } from "@/i18n/routing";

const ExperienceTab = async ({
  experience,
}: {
  experience: ResumeExperience;
}) => {
  const t = await getTranslations("resume");
  const locale = (await getLocale()) as AppLocale;

  return (
    <TimelineTab
      title={t("section.experience")}
      description={tr(experience.description, locale)}
      items={experience.items.map((item) => ({
        duration: tr(item.duration, locale),
        primary: tr(item.position, locale),
        secondary: item.company,
      }))}
    />
  );
};

export default ExperienceTab;
