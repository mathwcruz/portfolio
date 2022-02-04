import { Flex, FlexProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const animationFlex = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.7,
    },
  },
};

export const itemAnimation = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const MotionFlex = motion<FlexProps>(Flex);
