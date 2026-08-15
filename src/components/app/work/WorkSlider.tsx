"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProjectSliderButtons from "@/components/app/work/ProjectSliderButtons";
import { TechIcon } from "@/lib/tech-icons";
import type { Project } from "@/lib/data/projects";

const WorkSlider = ({ projects }: { projects: Project[] }) => {
  const t = useTranslations("work");
  const [project, setProject] = useState<Project>(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <div className="container mx-auto xl:-mb-12 xl:-mt-4">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-0">
          <TooltipProvider delayDuration={100}>
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-6xl lg:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-4xl lg:text-[44px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.title}
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={`${item.name}-${index}`}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="text-3xl xl:text-4xl">
                          <TechIcon name={item.tech} />
                        </div>
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                ))}
              </ul>

              <div className="border border-white/20" />

              <div className="flex items-center gap-4">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Tooltip>
                      <TooltipTrigger className="w-10 h-9 md:w-12 md:h-12 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-xl md:text-2xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>{t("liveProject")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                )}

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Tooltip>
                    <TooltipTrigger className="w-10 h-9 md:w-12 md:h-12 rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-xl md:text-2xl group-hover:text-accent" />
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>{t("github")}</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </div>
            </div>
          </TooltipProvider>
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
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <ProjectSliderButtons
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="peer first:rounded-r-sm last:rounded-l-sm xl:last:rounded-full xl:first:rounded-full bg-background-700 xl:bg-white xl:text-primary hover:bg-background-600 xl:hover:bg-white/70 text-white text-[22px] w-12 h-12 flex justify-center items-center transition-all disabled:opacity-40 disabled:cursor-default disabled:pointer-events-none"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WorkSlider;
