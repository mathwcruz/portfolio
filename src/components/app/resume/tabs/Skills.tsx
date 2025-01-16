import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiJest,
  SiTestinglibrary,
  SiGraphql,
  SiStorybook,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const skills = {
  title: "My skills",
  description:
    "These are the hard skills I've been working on and improving day by day.",
  skillList: [
    {
      icon: <SiHtml5 />,
      name: "HTML",
    },
    {
      icon: <SiCss3 />,
      name: "CSS",
    },
    {
      icon: <SiSass />,
      name: "Sass",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiJavascript />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiJest />,
      name: "Jest",
    },
    {
      icon: <SiTestinglibrary />,
      name: "Testing Library",
    },
    {
      icon: <SiGraphql />,
      name: "GraphQL",
    },
    {
      icon: <SiStorybook />,
      name: "Storybook",
    },
  ],
};

const SkillsTab = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{skills.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {skills.description}
        </p>
      </div>

      <ScrollArea className="h-[330px] md:h-[490px] xl:h-[510px]">
        <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] pr-4">
          {skills.skillList.map((skill) => (
            <li key={skill.name}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-background-600 rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      {skill.icon}
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
