"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type MotionFadeProps = HTMLMotionProps<"section">;

export const MotionFade = ({
  children,
  className,
  ...props
}: MotionFadeProps) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.section>
);
