"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

interface ProjectSliderButtonsProps {
  containerStyles: string;
  btnStyles: string;
}

const ProjectSliderButtons = ({
  containerStyles,
  btnStyles,
}: ProjectSliderButtonsProps) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        disabled={swiper.isBeginning}
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold />
      </button>

      <button
        disabled={swiper.isEnd}
        className={btnStyles}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default ProjectSliderButtons;
