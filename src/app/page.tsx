"use client";

import { FiDownload } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import Socials from "@/components/app/home/Socials";
import Photo from "@/components/app/home/Photo";
import Stats from "@/components/app/home/Stats";

const Home = () => {
  const handleDownloadCV = () => {
    const pdfPath = "/assets/files/cv.pdf";

    const link = document.createElement("a");

    link.href = pdfPath;
    link.download = "resume-matheus-wachholtz-da-cruz.pdf";
    link.click();
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg md:text-xl block mb-3 lg:mb-0">
              Full Stack Developer
            </span>

            <h1 className="h1 mb-6">
              Hi,<br />
              <span className="text-xl md:text-2xl xl:text-5xl">
                I&apos;m <span className="text-accent">Matheus Cruz</span>
              </span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80 text-sm md:text-base">
              Front-End specialist (React, Next.js, TypeScript) with working proficiency in Back-End development
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 text-sm md:text-base"
                onClick={handleDownloadCV}
              >
                <span>Download CV</span>
                <FiDownload className="text-lg md:text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-4"
                  iconStyles="w-14 h-14 md:w-10 md:h-10 border border-white rounded-full flex justify-center items-center text-white text-2xl md:text-lg hover:bg-white hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
