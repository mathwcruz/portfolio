"use client";

import CountUp from "react-countup";
import { useTranslations } from "next-intl";

import type { Stat } from "@/lib/data/profile";

const Stats = ({ stats }: { stats: Stat[] }) => {
  const t = useTranslations("stats");

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item) => {
            const label = t(item.key);

            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={item.key}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={0.4}
                  className="text-4xl xl:text-6xl font-extrabold"
                />

                <p
                  className={`${
                    label.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
