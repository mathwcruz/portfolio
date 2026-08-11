import { ScrollArea } from "@/components/ui/scroll-area";
import type { ResumeExperience } from "@/lib/data/resume";

const ExperienceTab = ({ experience }: { experience: ResumeExperience }) => {
  return (
    <div className="flex flex-col gap-[16px] lg:gap-[30px] text-center xl:text-left">
      <h3 className="text-2xl md:text-4xl font-bold">{experience.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm lg:text-base">
        {experience.description}
      </p>

      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-4 xl:pr-0">
          {experience.items.map((item) => (
            <li
              key={item.company}
              className="bg-background-600 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent">{item.duration}</span>

              <h3 className="text-lg lg:text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                {item.position}
              </h3>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="w-[6px] h-[6px] rounded-full bg-accent" />

                <p className="text-white/60">{item.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default ExperienceTab;
