import type { Metadata } from "next";
import { MotionFade } from "@/components/utils/MotionFade";
import WorkSlider from "@/components/app/work/WorkSlider";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Matheus Cruz — React, Next.js, and TypeScript applications.",
};

const Work = () => {
  return (
    <MotionFade className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <h1 className="sr-only">Work</h1>
      <WorkSlider projects={projects} />
    </MotionFade>
  );
};

export default Work;
