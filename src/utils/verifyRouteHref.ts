export const verifyRouteHref = (
  asPath: string,
  shouldMatchExactHref: boolean,
  href: string,
  rest: {}
) => {
  let isActive = false;

  if (shouldMatchExactHref && (asPath === href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return isActive;
};
