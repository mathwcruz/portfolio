import Image from "next/image";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import { NavLink } from "components/SidebarMenu/NavLink";

export const SidebarMenuNav = () => {
  return (
    <Flex
      bg={useColorModeValue("black", "blue.600")}
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
        My Skills
      </NavLink>
      <NavLink href="/projects" icon={RiGitMergeLine}>
        {/* TODO: mudar para um menu, que terá as opções: Learning, Personal e Professional  */}
        Projects
      </NavLink>
      <NavLink href="/companies" icon={RiGitMergeLine}>
        Companies
      </NavLink>
    </Flex>
  );
};
