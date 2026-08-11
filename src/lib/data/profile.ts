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

export type Stat = { num: number; text: string };

export const stats: Stat[] = [
  { num: calculateProgrammingExperience(), text: "Years of Experience" },
  { num: 25, text: "Projects Completed" },
  { num: 8, text: "Technologies Mastered" },
];

export type ContactInfo = {
  icon: "phone" | "email" | "address";
  title: string;
  description: string;
};

export const contactInfo: ContactInfo[] = [
  {
    icon: "phone",
    title: "Phone",
    description: "+55 51986106570",
  },
  {
    icon: "email",
    title: "Email",
    description: "matheuswachcruz@gmail.com",
  },
  {
    icon: "address",
    title: "Address",
    description: "Venâncio Aires, Rio Grande do Sul, BRAZIL",
  },
];
