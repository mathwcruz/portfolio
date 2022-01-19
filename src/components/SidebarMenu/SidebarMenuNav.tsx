import Image from "next/image";
import { Flex, Box, Icon, IconButton } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

import { NavLink } from "components/SidebarMenu/NavLink";

export const SidebarMenuNav = () => {
  return (
    <Flex
      bg="#0D0D0D"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
      h="100vh"
    >
      <Image
        alt="Avatar do Matheus da Cruz"
        src="/images/logo.png"
        width={150}
        height={150}
      />
      <NavLink href="/" icon={RiDashboardLine}>
        Home
      </NavLink>
      <NavLink href="/about" icon={RiContactsLine}>
        About
      </NavLink>
      <NavLink href="/skills" icon={RiInputMethodLine}>
        Skills
      </NavLink>
      <NavLink
        href="/projects"
        shouldMatchExactHref={false}
        icon={RiGitMergeLine}
      >
        {/* TODO: Switch to a menu, which will have the options: Learning, Personal and Professional */}
        Projects
      </NavLink>
      <NavLink href="/companies" icon={RiGitMergeLine}>
        Companies
      </NavLink>
      <Flex flexDirection="row" gap="4px">
        <IconButton
          aria-label="Github"
          icon={<Icon as={FiGithub} />}
          fontSize="22"
          color="white"
          variant="unstyled"
          title="Github"
          onClick={() => window.open("https://github.com/mathwcruz")}
        />
        <IconButton
          aria-label="Linkedin"
          icon={<Icon as={BsLinkedin} />}
          fontSize="22"
          color="white"
          variant="unstyled"
          title="Linkedin"
          onClick={() =>
            window.open("https://www.linkedin.com/in/matheus-cruz-frontend/")
          }
        />
        <IconButton
          aria-label="E-mail"
          icon={<Icon as={HiOutlineMail} />}
          fontSize="30"
          color="white"
          variant="unstyled"
          title="E-mail"
          //TODO: create a function to copy to clipboard tmy e-mail address then show a message to the user, for UX
        />
      </Flex>
    </Flex>
  );
};
