import type { ReactNode } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ResumeTabsProps {
  experience: ReactNode;
  education: ReactNode;
  skills: ReactNode;
  about: ReactNode;
}

const ResumeTabs = ({
  experience,
  education,
  skills,
  about,
}: ResumeTabsProps) => {
  return (
    <Tabs
      defaultValue="experience"
      className="flex flex-col xl:flex-row gap-[60px]"
    >
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="about">About Me</TabsTrigger>
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
