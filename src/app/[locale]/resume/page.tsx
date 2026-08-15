import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { MotionFade } from "@/components/utils/MotionFade";
import ResumeTabs from "@/components/app/resume/ResumeTabs";
import ExperienceTab from "@/components/app/resume/tabs/Experience";
import EducationTab from "@/components/app/resume/tabs/Education";
import SkillsTab from "@/components/app/resume/tabs/Skills";
import AboutTab from "@/components/app/resume/tabs/About";
import { experience, education, skills, about } from "@/lib/data/resume";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.resume" });
  return { title: t("title"), description: t("description") };
}

const Resume = async ({ params }: PageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.resume");

  return (
    <MotionFade className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <h1 className="sr-only">{t("title")}</h1>
      <div className="container mx-auto">
        <ResumeTabs
          experience={<ExperienceTab experience={experience} />}
          education={<EducationTab education={education} />}
          skills={<SkillsTab skills={skills} />}
          about={<AboutTab about={about} />}
        />
      </div>
    </MotionFade>
  );
};

export default Resume;
