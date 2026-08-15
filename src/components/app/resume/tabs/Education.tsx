import { getLocale, getTranslations } from "next-intl/server";

import TimelineTab from "@/components/app/resume/TimelineTab";
import type { ResumeEducation } from "@/lib/data/resume";
import { tr } from "@/lib/localize";
import type { AppLocale } from "@/i18n/routing";

const EducationTab = async ({ education }: { education: ResumeEducation }) => {
  const t = await getTranslations("resume");
  const locale = (await getLocale()) as AppLocale;

  return (
    <TimelineTab
      title={t("section.education")}
      description={tr(education.description, locale)}
      items={education.items.map((item) => ({
        duration: item.duration,
        primary: tr(item.degree, locale),
        secondary: item.institution,
      }))}
    />
  );
};

export default EducationTab;
