"use client";

import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { links } from "@/utils/data/routes";

const Nav = () => {
  const pathname = usePathname();
  const t = useTranslations("nav");

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
          {t(link.key)}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
