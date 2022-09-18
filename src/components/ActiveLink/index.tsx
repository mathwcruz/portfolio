import { cloneElement, ReactElement } from "react";
import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";

import { verifyRouteHref } from "utils/verifyRouteHref";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export const ActiveLink = ({
  children,
  shouldMatchExactHref = true,
  ...rest
}: ActiveLinkProps) => {
  const { asPath } = useRouter();

  const isActive = verifyRouteHref(
    asPath,
    shouldMatchExactHref,
    rest.href,
    rest
  );

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "blue.600" : "gray.200",
      })}
    </Link>
  );
};
