"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiStyledcomponents,
  SiChakraui,
  SiSupabase,
  SiFirebase,
  SiSqlite,
  SiDatocms,
  SiJest,
  SiTypescript,
  SiReact,
  SiReactquery,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProjectSliderButtons from "@/components/app/work/ProjectSliderButtons";

const projects = [
  {
    num: "01",
    title: "Gelify",
    description:
      "An app responsible for managing your users, clients, suppliers, products, purchases and sales.",
    stack: [
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
      {
        name: "Supabase",
        icon: <SiSupabase className="text-[#3ECF8E]" />,
      },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-[#FFFFFF]" />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript className="text-[#3178C6]" />,
      },
    ],
    image: "/assets/work/gelify_banner.png",
    live: "https://gelify.vercel.app",
    github: "https://github.com/mathwcruz/gelify",
  },
  {
    num: "02",
    title: "letmeask",
    description:
      "An app that brings together people who have questions about a specific topic and those who have the answers.",
    stack: [
      {
        name: "HTML",
        icon: <SiHtml5 className="text-[#E34F26]" />,
      },
      { name: "Sass", icon: <SiSass className="text-[#CC6699]" /> },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-[#FFCA28]" />,
      },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      {
        name: "Typescript",
        icon: <SiTypescript className="text-[#3178C6]" />,
      },
    ],
    image: "/assets/work/letmeask_banner.png",
    live: "https://letmeask-mathwcruz.web.app",
    github: "https://github.com/mathwcruz/letmeask_nlw06",
  },
  {
    num: "03",
    title: "move.it",
    description:
      "An application that reminds you to exercise every 25 minutes, following the Pomodoro technique theory.",
    stack: [
      {
        name: "HTML",
        icon: <SiHtml5 className="text-[#E34F26]" />,
      },
      { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-[#FFFFFF]" />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript className="text-[#3178C6]" />,
      },
    ],
    image: "/assets/work/move.it_banner.png",
    live: "https://move-it-nlw04-nine.vercel.app",
    github: "https://github.com/mathwcruz/move.it_nlw04",
  },
  {
    num: "04",
    title: "dt money",
    description:
      "A personal finance management app where you can track your income and expenses.",
    stack: [
      {
        name: "HTML",
        icon: <SiHtml5 className="text-[#E34F26]" />,
      },
      { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> },
      {
        name: "Styled Components",
        icon: <SiStyledcomponents className="text-[#DB7093]" />,
      },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      {
        name: "Typescript",
        icon: <SiTypescript className="text-[#3178C6]" />,
      },
    ],
    image: "/assets/work/dt money_banner.png",
    live: "",
    github: "https://github.com/mathwcruz/dt.money",
  },
  {
    num: "05",
    title: "Proffy",
    description:
      "An application that connects private tutors with students who are looking for this service.",
    stack: [
      {
        name: "HTML",
        icon: <SiHtml5 className="text-[#E34F26]" />,
      },
      { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> },
      {
        name: "SQLite",
        icon: <SiSqlite className="text-[#003B57]" />,
      },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      {
        name: "Typescript",
        icon: <SiTypescript className="text-[#3178C6]" />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-[#8CC84B]" />,
      },
    ],
    image: "/assets/work/proffy_banner.png",
    live: "",
    github: "https://github.com/mathwcruz/proffy_nlw02",
  },
  {
    num: "06",
    title: "ig.news",
    description:
      "A blog post application where you can log in with your Github credentials and subscribe for more content.",
    stack: [
      {
        name: "HTML",
        icon: <SiHtml5 className="text-[#E34F26]" />,
      },
      { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> },
      {
        name: "Sass",
        icon: <SiSass className="text-[#CC6699]" />,
      },
      {
        name: "jest",
        icon: <SiJest className="text-[#C21325]" />,
      },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-[#FFFFFF]" />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript className="text-[#3178C6]" />,
      },
    ],
    image: "/assets/work/ig.news_banner.png",
    live: "https://ignews-rose.vercel.app",
    github: "https://github.com/mathwcruz/ignews",
  },
  {
    num: "07",
    title: "Podcastr",
    description:
      "A podcast app where you can play, pause, select a specific episode.",
    stack: [
      {
        name: "HTML",
        icon: <SiHtml5 className="text-[#E34F26]" />,
      },
      { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> },
      {
        name: "Sass",
        icon: <SiSass className="text-[#CC6699]" />,
      },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-[#FFFFFF]" />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript className="text-[#3178C6]" />,
      },
    ],
    image: "/assets/work/podcastr_banner.png",
    live: "https://podcastr-mathwcruz.vercel.app",
    github: "https://github.com/mathwcruz/podcastr_nlw05",
  },
  {
    num: "08",
    title: "Alurakut",
    description:
      "An application that replicates some functionalities of the now-defunct Orkut.",
    stack: [
      {
        name: "Styled Components",
        icon: <SiStyledcomponents className="text-[#DB7093]" />,
      },
      {
        name: "DatoCMS",
        icon: <SiDatocms className="text-[#FF9F1C]" />,
      },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-[#FFFFFF]" />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript className="text-[#3178C6]" />,
      },
    ],
    image: "/assets/work/alurakut_banner.png",
    live: "https://alurakut-mathwcruz.vercel.app",
    github: "https://github.com/mathwcruz/alurakut",
  },
  {
    num: "09",
    title: "dashgo.",
    description:
      "A dashboard application for managing users. It contains graphics regarding app data.",
    stack: [
      {
        name: "HTML",
        icon: <SiHtml5 className="text-[#E34F26]" />,
      },
      {
        name: "Chakra UI",
        icon: <SiChakraui className="text-[#319795]" />,
      },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      {
        name: "React Query",
        icon: <SiReactquery className="text-[#FF4154]" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-[#FFFFFF]" />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript className="text-[#3178C6]" />,
      },
    ],
    image: "/assets/work/dashgo_banner.png",
    live: "",
    github: "https://github.com/mathwcruz/dashgo",
  },
  {
    num: "10",
    title: "Coffee Delivery",
    description:
      "An app that simulates a café delivery service where you can purchase your favorite coffees.",
    stack: [
      {
        name: "Styled Components",
        icon: <SiStyledcomponents className="text-[#DB7093]" />,
      },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      {
        name: "Typescript",
        icon: <SiTypescript className="text-[#3178C6]" />,
      },
    ],
    image: "/assets/work/coffee-delivery_banner.png",
    live: "https://ignite-coffee-delivery-mathwcruz.vercel.app",
    github: "https://github.com/mathwcruz/ignite-coffee-delivery",
  },
];

type Stack = {
  name: string;
  icon: ReactNode;
};

type Project = {
  num: string;
  title: string;
  description: string;
  stack: Stack[];
  image: string;
  github: string;
  live?: string;
};

const Work = () => {
  const [project, setProject] = useState<Project>(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.title}
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={`${item.name}-${index}`}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="text-3xl xl:text-4xl">
                            {item.icon}
                          </div>
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>{item.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>

              <div className="border border-white/20" />

              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-12 h-12 rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-12 h-12 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12 sm:w-[585px]"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.num} className="w-full">
                  <div className="h-auto rounded-xl sm:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt=""
                        height={460}
                        width={585}
                        quality={100}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <ProjectSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="peer first:rounded-r-sm last:rounded-l-sm xl:last:rounded-full xl:first:rounded-full bg-background-700 xl:bg-white xl:text-primary hover:bg-background-600 xl:hover:bg-white/70 text-white text-[22px] w-12 h-12 flex justify-center items-center transition-all disabled:opacity-40 disabled:cursor-default disabled:pointer-events-none"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
