import { getLocale, getTranslations } from "next-intl/server";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TechIcon } from "@/lib/tech-icons";
import { tr } from "@/lib/localize";
import type { AppLocale } from "@/i18n/routing";
import type { ResumeSkills } from "@/lib/data/resume";

const SkillsTab = async ({ skills }: { skills: ResumeSkills }) => {
  const t = await getTranslations("resume");
  const locale = (await getLocale()) as AppLocale;

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[16px] lg:gap-[30px] text-center xl:text-left">
        <h3 className="text-2xl md:text-4xl font-bold">{t("section.skills")}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm lg:text-base">
          {tr(skills.description, locale)}
        </p>
      </div>

      <ScrollArea className="h-[480px] md:h-[330px]">
        <TooltipProvider delayDuration={100}>
          <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] pr-4">
            {skills.skillList.map((skill) => (
              <li key={skill.name}>
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
              </li>
            ))}
          </ul>
        </TooltipProvider>
      </ScrollArea>
    </div>
  );
};

export default SkillsTab;
