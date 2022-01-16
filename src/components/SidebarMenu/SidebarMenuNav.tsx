import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import { NavLink } from "components/SidebarMenu/NavLink";

export const SidebarMenuNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavLink href="/home" icon={RiDashboardLine}>
        Home
      </NavLink>
      <NavLink href="/about" icon={RiContactsLine}>
        About
      </NavLink>
      <NavLink href="/skills" icon={RiInputMethodLine}>
        My Skills
      </NavLink>
      <NavLink href="/projects" icon={RiGitMergeLine}>
        {" "}
        {/* TODO: mudar para um menu, que terá as opções: Learning, Personal e Professional  */}
        Projects
      </NavLink>
      <NavLink href="/companies" icon={RiGitMergeLine}>
        Companies
      </NavLink>
    </Stack>
  );
};
