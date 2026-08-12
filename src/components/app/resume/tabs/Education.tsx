import TimelineTab from "@/components/app/resume/TimelineTab";
import type { ResumeEducation } from "@/lib/data/resume";

const EducationTab = ({ education }: { education: ResumeEducation }) => (
  <TimelineTab
    title={education.title}
    description={education.description}
    items={education.items.map((item) => ({
      duration: item.duration,
      primary: item.degree,
      secondary: item.institution,
    }))}
  />
);

export default EducationTab;
