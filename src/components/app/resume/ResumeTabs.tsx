import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ResumeTabsProps {
  experience: ReactNode;
  education: ReactNode;
  skills: ReactNode;
  about: ReactNode;
}

const ResumeTabs = async ({
  experience,
  education,
  skills,
  about,
}: ResumeTabsProps) => {
  const t = await getTranslations("resume.tab");

  return (
    <Tabs
      defaultValue="experience"
      className="flex flex-col xl:flex-row gap-[60px]"
    >
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
        <TabsTrigger value="experience">{t("experience")}</TabsTrigger>
        <TabsTrigger value="education">{t("education")}</TabsTrigger>
        <TabsTrigger value="skills">{t("skills")}</TabsTrigger>
        <TabsTrigger value="about">{t("about")}</TabsTrigger>
      </TabsList>

      <div className="min-h-[70vh] w-full">
        <TabsContent value="experience" className="w-full">
          {experience}
        </TabsContent>

        <TabsContent value="education" className="w-full">
          {education}
        </TabsContent>

        <TabsContent value="skills" className="w-full h-full">
          {skills}
        </TabsContent>

        <TabsContent value="about" className="w-full text-center xl:text-left">
          {about}
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default ResumeTabs;
