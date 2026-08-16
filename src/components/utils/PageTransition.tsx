"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { usePathname } from "@/i18n/navigation";

// ponytail: no exit animations, so the keyed div alone re-runs the cover fade on route change
const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div key={pathname}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
        }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      />
      {children}
    </div>
  );
};

export default PageTransition;
