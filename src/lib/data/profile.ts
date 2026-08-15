import { calculateProgrammingExperience } from "@/utils/date";

export type Social = {
  icon: "github" | "linkedin";
  path: string;
};

export const socials: Social[] = [
  { icon: "github", path: "https://github.com/mathwcruz" },
  {
    icon: "linkedin",
    path: "https://www.linkedin.com/in/matheus-wach-cruz",
  },
];

export type Stat = { num: number; key: "experience" | "projects" | "technologies" };

export const stats: Stat[] = [
  { num: calculateProgrammingExperience(), key: "experience" },
  { num: 25, key: "projects" },
  { num: 8, key: "technologies" },
];

export type ContactInfo = {
  key: "phone" | "email" | "address";
  description: string;
};

export const contactInfo: ContactInfo[] = [
  { key: "phone", description: "+55 51986106570" },
  { key: "email", description: "matheuswachcruz@gmail.com" },
  {
    key: "address",
    description: "Venâncio Aires, Rio Grande do Sul, BRAZIL",
  },
];
