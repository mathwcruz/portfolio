import { ElementType } from "react";
import { Icon } from "@chakra-ui/react";

import { MotionIconButton } from "styles/animation";

interface SocialMediaButtonProps {
  icon: ElementType;
  text: string;
  size?: number;
  link?: string;
  onClick?: () => void;
}

export const SocialMediaButton = ({
  icon,
  text,
  size = 22,
  link,
  onClick,
}: SocialMediaButtonProps) => (
  <MotionIconButton
    aria-label={text}
    icon={<Icon as={icon} />}
    fontSize={size}
    color="white"
    whileTap={{ scale: 0.85 }}
    variant="unstyled"
    _hover={{ color: "blue.600" }}
    _focus={{ outline: "none" }}
    title={text}
    onClick={link ? () => window.open(link) : onClick}
  />
);
