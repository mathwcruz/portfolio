import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

import { MotionFade } from "@/components/utils/MotionFade";
import WorkSlider from "@/components/app/work/WorkSlider";
import { projects, type Project } from "@/lib/data/projects";
import { tr } from "@/lib/localize";
import type { AppLocale } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.work" });
  return { title: t("title"), description: t("description") };
}

const Work = async ({ params }: PageProps) => {
  const { locale } = await params;
  const currentLocale = (await getLocale()) as AppLocale;
  setRequestLocale(locale);
  const t = await getTranslations("pages.work");

  const localizedProjects: Project[] = projects.map((p) => ({
    ...p,
    description: tr(p.description, currentLocale),
  }));

  return (
    <MotionFade className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <h1 className="sr-only">{t("title")}</h1>
      <WorkSlider projects={localizedProjects} />
    </MotionFade>
  );
};

export default Work;
