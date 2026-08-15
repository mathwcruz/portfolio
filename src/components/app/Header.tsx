import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LocaleSwitcher from "./LocaleSwitcher";

const Header = async () => {
  const t = await getTranslations("header");

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-4xl font-semibold">
            Cruz<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          <Link href="/contact">
            <Button>{t("hireMe")}</Button>
          </Link>

          <LocaleSwitcher />
        </div>

        <div className="xl:hidden flex items-center gap-4">
          <LocaleSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
