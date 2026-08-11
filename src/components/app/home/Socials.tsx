import type { ComponentType } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { socials, type Social } from "@/lib/data/profile";

const socialIcons: Record<Social["icon"], ComponentType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
};

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social) => {
        const Icon = socialIcons[social.icon];

        return (
          <Link
            key={social.path}
            href={social.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
