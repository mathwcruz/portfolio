import TimelineTab from "@/components/app/resume/TimelineTab";
import type { ResumeExperience } from "@/lib/data/resume";

const ExperienceTab = ({ experience }: { experience: ResumeExperience }) => (
  <TimelineTab
    title={experience.title}
    description={experience.description}
    items={experience.items.map((item) => ({
      duration: item.duration,
      primary: item.position,
      secondary: item.company,
    }))}
  />
);

export default ExperienceTab;
