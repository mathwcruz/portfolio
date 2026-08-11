import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TechIcon } from "@/lib/tech-icons";
import type { ResumeSkills } from "@/lib/data/resume";

const SkillsTab = ({ skills }: { skills: ResumeSkills }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[16px] lg:gap-[30px] text-center xl:text-left">
        <h3 className="text-2xl md:text-4xl font-bold">{skills.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm lg:text-base">
          {skills.description}
        </p>
      </div>

      <ScrollArea className="h-[480px] md:h-[330px]">
        <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] pr-4">
          {skills.skillList.map((skill) => (
            <li key={skill.name}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-background-600 rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      <TechIcon name={skill.tech} />
                    </div>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default SkillsTab;
