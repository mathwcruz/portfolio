import { ElementType } from "react";
import { useRouter } from "next/dist/client/router";
import {
  Text,
  Icon,
  LinkProps as ChakraLinkProps,
  Flex,
} from "@chakra-ui/react";

import { ActiveLink } from "components/ActiveLink";

import { verifyRouteHref } from "utils/verifyRouteHref";

import { MotionChakraLink } from "styles/animation";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  href: string;
  shouldMatchExactHref: boolean;
  children: string;
}

export const NavLink = ({
  icon,
  href,
  shouldMatchExactHref = true,
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
      <MotionChakraLink
        borderBottom="1px"
        borderColor={isActive ? "blue.600" : "gray.300"}
        display="flex"
        alignItems="center"
        pb="2"
        _hover={{ color: "blue.600" }}
        _focus={{ outline: "none" }}
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 0.98 }}
      >
        {isActive ? (
          <>
          {" "}
          <Icon as={icon} fontSize="22" />
          <Text ml="4" fontSize="md" fontWeight="medium">
            {children}
          </Text>
        </>
        ) : (
          <>
            {" "}
            <Icon as={icon} fontSize="22" />
            <Text ml="4" fontSize="md" fontWeight="medium">
              {children}
            </Text>
          </>
        )}
      </MotionChakraLink>
    </ActiveLink>
  );
};
