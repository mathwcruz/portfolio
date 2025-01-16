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
            <span className="text-xl block mb-3 lg:mb-0">
              Front End Developer
            </span>

            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Matheus da Cruz</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos;m a Front-End specialist and proficient in various
              technologies in the field
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownloadCV}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
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
