import type { TechName } from "@/lib/tech-icons";
import { calculateProgrammingExperience } from "@/utils/date";

export type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
};

export type ResumeExperience = {
  title: string;
  description: string;
  items: ExperienceItem[];
};

export const experience: ResumeExperience = {
  title: "My Experience",
  description:
    "These are the professional experiences I had the pleasure of being part of.",
  items: [
    {
      company: "ADP Brazil Labs",
      position: "Front End Developer",
      duration: "Aug. 2022 - Jun. 2026",
    },
    {
      company: "DigiSinan",
      position: "Co-Founder & Front End Developer",
      duration: "Jul. 2021 - May 2022",
    },
    {
      company: "caf.",
      position: "Junior Front End Developer",
      duration: "May 2021 - Jul. 2022",
    },
  ],
};

export type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
};

export type ResumeEducation = {
  title: string;
  description: string;
  items: EducationItem[];
};

export const education: ResumeEducation = {
  title: "My Education",
  description:
    "These are the lessons I consider the most relevant and that helped shape the professional I am today.",
  items: [
    {
      institution: "Univates",
      degree: "Associate degree",
      duration: "2020 - 2023",
    },
    {
      institution: "Rocketseat",
      degree: "Web Development Bootcamp",
      duration: "2021",
    },
    {
      institution: "University of Michigan",
      degree: "Michigan Language Assessment",
      duration: "2019",
    },
    {
      institution: "Fisk",
      degree: "English course",
      duration: "2017 - 2019",
    },
  ],
};

export type Skill = { name: string; tech: TechName };

export type ResumeSkills = {
  title: string;
  description: string;
  skillList: Skill[];
};

export const skills: ResumeSkills = {
  title: "My Skills",
  description:
    "These are the hard skills I’ve been working on and improving every day.",
  skillList: [
    { name: "HTML", tech: "html" },
    { name: "CSS", tech: "css" },
    { name: "Sass", tech: "sass" },
    { name: "TailwindCSS", tech: "tailwind" },
    { name: "Javascript", tech: "javascript" },
    { name: "Typescript", tech: "typescript" },
    { name: "React", tech: "react" },
    { name: "Next.js", tech: "nextjs" },
    { name: "Redux", tech: "redux" },
    { name: "Jest", tech: "jest" },
    { name: "Testing Library", tech: "testinglibrary" },
    { name: "GraphQL", tech: "graphql" },
    { name: "Storybook", tech: "storybook" },
    { name: "Node.js", tech: "nodejs" },
    { name: "Express", tech: "express" },
    { name: "Prisma", tech: "prisma" },
    { name: "PostgreSQL", tech: "postgresql" },
    { name: "SQLite", tech: "sqlite" },
  ],
};

export type AboutInfo = { fieldName: string; fieldValue: string };

export type ResumeAbout = {
  title: string;
  description: string;
  info: AboutInfo[];
};

export const about: ResumeAbout = {
  title: "About Me",
  description:
    "Passionate about technology, blockchain, astronomy, and economics, I also love traveling, experiencing new cultures, spending time with friends, reading, working out, and studying economics.",
  info: [
    { fieldName: "Name", fieldValue: "Matheus Cruz" },
    { fieldName: "Phone", fieldValue: "+55 51986106570" },
    {
      fieldName: "Experience",
      fieldValue: `${calculateProgrammingExperience()} Years`,
    },
    { fieldName: "Nationality", fieldValue: "Brazilian" },
    { fieldName: "Languages", fieldValue: "Portuguese, English" },
    { fieldName: "Email", fieldValue: "matheuswachcruz@gmail.com" },
  ],
};
