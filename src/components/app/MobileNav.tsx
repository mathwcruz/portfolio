"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CiMenuFries } from "react-icons/ci";

import { Link, usePathname } from "@/i18n/navigation";
import { links } from "@/utils/data/routes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileNav = () => {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={() => setIsNavOpen(false)}>
            <span className="text-4xl font-semibold">
              Cruz<span className="text-accent">.</span>
            </span>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => {
            return (
              <Link
                key={`mobile-nav-path-${link.path}`}
                href={link.path}
                onClick={() => setIsNavOpen(false)}
                className={`${
                  link.path === pathname
                    ? "text-accent border-b-2 border-accent"
                    : ""
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {t(link.key)}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
