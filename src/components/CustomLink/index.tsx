import { cloneElement, ReactElement } from "react";
import Link, { LinkProps } from "next/link";

interface CustomLinkProps extends LinkProps {
  children: ReactElement;
}

export const CustomLink = ({ children, ...rest }) => {
  return <Link {...rest}>{cloneElement(children)}</Link>;
};
