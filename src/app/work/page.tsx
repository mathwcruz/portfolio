import { MotionFade } from "@/components/utils/MotionFade";
import WorkSlider from "@/components/app/work/WorkSlider";
import { projects } from "@/lib/data/projects";

const Work = () => {
  return (
    <MotionFade className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <WorkSlider projects={projects} />
    </MotionFade>
  );
};

export default Work;
