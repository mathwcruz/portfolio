import type { ComponentType, CSSProperties } from "react";
import {
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiJest,
  SiTestinglibrary,
  SiGraphql,
  SiStorybook,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiSqlite,
  SiStyledcomponents,
  SiChakraui,
  SiSupabase,
  SiFirebase,
  SiDatocms,
  SiReactquery,
} from "react-icons/si";

type IconType = ComponentType<{ className?: string; style?: CSSProperties }>;

export const techIcons = {
  html: { Icon: SiHtml5, color: "#E34F26" },
  css: { Icon: SiCss, color: "#1572B6" },
  sass: { Icon: SiSass, color: "#CC6699" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  javascript: { Icon: SiJavascript },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  react: { Icon: SiReact, color: "#61DAFB" },
  nextjs: { Icon: SiNextdotjs, color: "#FFFFFF" },
  redux: { Icon: SiRedux },
  jest: { Icon: SiJest, color: "#C21325" },
  testinglibrary: { Icon: SiTestinglibrary },
  graphql: { Icon: SiGraphql },
  storybook: { Icon: SiStorybook },
  nodejs: { Icon: SiNodedotjs, color: "#8CC84B" },
  express: { Icon: SiExpress },
  prisma: { Icon: SiPrisma },
  postgresql: { Icon: SiPostgresql },
  sqlite: { Icon: SiSqlite, color: "#003B57" },
  styledcomponents: { Icon: SiStyledcomponents, color: "#DB7093" },
  chakra: { Icon: SiChakraui, color: "#319795" },
  supabase: { Icon: SiSupabase, color: "#3ECF8E" },
  firebase: { Icon: SiFirebase, color: "#FFCA28" },
  datocms: { Icon: SiDatocms, color: "#FF9F1C" },
  reactquery: { Icon: SiReactquery, color: "#FF4154" },
} satisfies Record<string, { Icon: IconType; color?: string }>;

export type TechName = keyof typeof techIcons;

export function TechIcon({
  name,
  className,
}: {
  name: TechName;
  className?: string;
}) {
  const { Icon, color } = techIcons[name] as {
    Icon: IconType;
    color?: string;
  };
  return <Icon className={className} style={color ? { color } : undefined} />;
}
