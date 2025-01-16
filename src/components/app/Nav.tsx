"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "@/utils/data/routes";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={`desktop-nav-path-${link.path}`}
          href={link.path}
          className={`${
            link.path === pathname ? "text-accent border-b-2 border-accent" : ""
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
