import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mathwcruz" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/matheus-cruz-frontend",
  },
];

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social) => (
        <Link
          key={social.path}
          href={social.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
