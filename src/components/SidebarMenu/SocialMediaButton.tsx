import { ElementType } from "react";
import { Icon, IconButton } from "@chakra-ui/react";

interface SocialMediaButtonProps {
  icon: ElementType;
  text: string;
  size?: string;
  link?: string;
  onClick?: () => void;
}

export const SocialMediaButton = ({
  icon,
  text,
  size = "22",
  link,
  onClick,
}: SocialMediaButtonProps) => (
  <IconButton
    aria-label={text}
    icon={<Icon as={icon} />}
    fontSize={size}
    color="white"
    _hover={{ color: "blue.600" }}
    _focus={{ outline: "none" }}
    variant="unstyled"
    title={text}
    onClick={link ? () => window.open(link) : onClick}
  />
);
