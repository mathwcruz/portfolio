import {
  Flex,
  Image,
  Grid,
  IconButton,
  Link,
  FlexProps,
  ImageProps,
  GridProps,
  IconButtonProps,
  LinkProps,
} from "@chakra-ui/react";
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
export const MotionImage = motion<ImageProps>(Image);
export const MotionGrid = motion<GridProps>(Grid);
export const MotionIconButton = motion<IconButtonProps>(IconButton);
export const MotionChakraLink = motion<LinkProps>(Link);
