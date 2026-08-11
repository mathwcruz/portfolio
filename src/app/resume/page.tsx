import { MotionFade } from "@/components/utils/MotionFade";
import ResumeTabs from "@/components/app/resume/ResumeTabs";
import ExperienceTab from "@/components/app/resume/tabs/Experience";
import EducationTab from "@/components/app/resume/tabs/Education";
import SkillsTab from "@/components/app/resume/tabs/Skills";
import AboutTab from "@/components/app/resume/tabs/About";
import { experience, education, skills, about } from "@/lib/data/resume";

const Resume = () => {
  return (
    <MotionFade className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
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
