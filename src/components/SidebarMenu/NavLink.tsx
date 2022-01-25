import { ElementType } from "react";
import { useRouter } from "next/dist/client/router";
import {
  Text,
  Link as ChakraLink,
  Icon,
  LinkProps as ChakraLinkProps,
  Flex,
} from "@chakra-ui/react";

import { ActiveLink } from "components/ActiveLink";
import { verifyRouteHref } from "utils/verifyRouteHref";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  href: string;
  shouldMatchExactHref?: boolean;
  children: string;
}

export const NavLink = ({
  icon,
  href,
  shouldMatchExactHref,
  children,
  ...rest
}: NavLinkProps) => {
  const { asPath } = useRouter();

  const isActive = verifyRouteHref(asPath, shouldMatchExactHref, href, rest);

  return (
    <ActiveLink
      href={href}
      passHref
      shouldMatchExactHref={shouldMatchExactHref}
    >
      {/* TODO: add animation when change just icon to icon and text */}
      <ChakraLink
        borderBottom="1px"
        borderColor="gray.300"
        display="flex"
        align="center"
        pb="2"
        _hover={{ color: "blue.600" }}
        _focus={{ outline: "none" }}
        {...rest}
      >
        {isActive ? (
          <Icon as={icon} fontSize="26" title={children} />
        ) : (
          <>
            {" "}
            <Icon as={icon} fontSize="22" />
            <Text ml="4" fontSize="md" fontWeight="medium">
              {children}
            </Text>
          </>
        )}
      </ChakraLink>
    </ActiveLink>
  );
};
