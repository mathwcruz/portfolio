import { ElementType } from "react";
import {
  Text,
  Link as ChakraLink,
  Icon,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

import { ActiveLink } from "components/ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  href: string;
  icon: ElementType;
  children: string;
}

export const NavLink = ({ icon, children, href, ...rest }: NavLinkProps) => {
  // Caso o usuário esteja na nota do item do menu, tirar o texto e deixar apenas o ícone
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};
