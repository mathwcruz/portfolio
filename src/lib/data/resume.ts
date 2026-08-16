import type { TechName } from "@/lib/tech-icons";
import type { LocalizedText } from "@/lib/localize";
import { calculateProgrammingExperience } from "@/utils/date";

export type ExperienceItem = {
  company: string;
  position: LocalizedText;
  duration: LocalizedText;
};

export type ResumeExperience = {
  description: LocalizedText;
  items: ExperienceItem[];
};

export const experience: ResumeExperience = {
  description: {
    "en-us":
      "These are the professional experiences I had the pleasure of being part of.",
    "pt-br":
      "Estas são as experiências profissionais das quais tive o prazer de fazer parte.",
    "es-es":
      "Estas son las experiencias profesionales de las que tuve el placer de formar parte.",
  },
  items: [
    {
      company: "ADP Brazil Labs",
      position: {
        "en-us": "Front End Developer",
        "pt-br": "Desenvolvedor Front End",
        "es-es": "Desarrollador Front End",
      },
      duration: {
        "en-us": "Aug. 2022 - Jun. 2026",
        "pt-br": "Ago. 2022 - Jun. 2026",
        "es-es": "ago. 2022 - jun. 2026",
      },
    },
    {
      company: "DigiSinan",
      position: {
        "en-us": "Co-Founder & Front End Developer",
        "pt-br": "Cofundador & Desenvolvedor Front End",
        "es-es": "Cofundador & Desarrollador Front End",
      },
      duration: {
        "en-us": "Jul. 2021 - May 2022",
        "pt-br": "Jul. 2021 - Mai. 2022",
        "es-es": "jul. 2021 - may. 2022",
      },
    },
    {
      company: "caf.",
      position: {
        "en-us": "Junior Front End Developer",
        "pt-br": "Desenvolvedor Front End Júnior",
        "es-es": "Desarrollador Front End Júnior",
      },
      duration: {
        "en-us": "May 2021 - Jul. 2022",
        "pt-br": "Mai. 2021 - Jul. 2022",
        "es-es": "may. 2021 - jul. 2022",
      },
    },
  ],
};

export type EducationItem = {
  institution: string;
  degree: LocalizedText;
  duration: string;
};

export type ResumeEducation = {
  description: LocalizedText;
  items: EducationItem[];
};

export const education: ResumeEducation = {
  description: {
    "en-us":
      "These are the lessons I consider the most relevant and that helped shape the professional I am today.",
    "pt-br":
      "Estas são as formações que considero mais relevantes e que ajudaram a moldar o profissional que sou hoje.",
    "es-es":
      "Estas son las formaciones que considero más relevantes y que ayudaron a formar al profesional que soy hoy.",
  },
  items: [
    {
      institution: "Univates",
      degree: {
        "en-us": "Associate degree",
        "pt-br": "Tecnólogo",
        "es-es": "Tecnólogo",
      },
      duration: "2020 - 2023",
    },
    {
      institution: "Rocketseat",
      degree: {
        "en-us": "Web Development Bootcamp",
        "pt-br": "Bootcamp de Desenvolvimento Web",
        "es-es": "Bootcamp de Desarrollo Web",
      },
      duration: "2021",
    },
    {
      institution: "University of Michigan",
      degree: { "en-us": "Michigan Language Assessment" },
      duration: "2019",
    },
    {
      institution: "Fisk",
      degree: {
        "en-us": "English course",
        "pt-br": "Curso de Inglês",
        "es-es": "Curso de Inglés",
      },
      duration: "2017 - 2019",
    },
  ],
};

export type Skill = { name: string; tech: TechName };

export type ResumeSkills = {
  description: LocalizedText;
  skillList: Skill[];
};

export const skills: ResumeSkills = {
  description: {
    "en-us": "These are the technical skills I have been gradually refining.",
    "pt-br":
      "Estas são as habilidades técnicas que venho aprimorando gradualmente.",
    "es-es":
      "Estas son las habilidades técnicas que he ido perfeccionando gradualmente.",
  },
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

export type AboutInfo = { fieldName: LocalizedText; fieldValue: LocalizedText };

export type ResumeAbout = {
  description: LocalizedText;
  info: AboutInfo[];
};

export const about: ResumeAbout = {
  description: {
    "en-us":
      "Passionate about technology, blockchain, astronomy, and economics, I also love traveling, experiencing new cultures, spending time with friends, reading and working out.",
    "pt-br":
      "Apaixonado por tecnologia, blockchain, astronomia e economia, também gosto de viajar, conhecer novas culturas, passar tempo com amigos, ler e treinar.",
    "es-es":
      "Apasionado de la tecnología, blockchain, astronomía y economía, también me encanta viajar, conocer nuevas culturas, pasar tiempo con amigos, leer y hacer ejercicio.",
  },
  info: [
    {
      fieldName: { "en-us": "Name", "pt-br": "Nome", "es-es": "Nombre" },
      fieldValue: { "en-us": "Matheus Cruz" },
    },
    {
      fieldName: { "en-us": "Phone", "pt-br": "Telefone", "es-es": "Teléfono" },
      fieldValue: { "en-us": "+55 51986106570" },
    },
    {
      fieldName: {
        "en-us": "Experience",
        "pt-br": "Experiência",
        "es-es": "Experiencia",
      },
      fieldValue: {
        "en-us": `${calculateProgrammingExperience()} Years`,
        "pt-br": `${calculateProgrammingExperience()} Anos`,
        "es-es": `${calculateProgrammingExperience()} Años`,
      },
    },
    {
      fieldName: {
        "en-us": "Nationality",
        "pt-br": "Nacionalidade",
        "es-es": "Nacionalidad",
      },
      fieldValue: {
        "en-us": "Brazilian",
        "pt-br": "Brasileiro",
        "es-es": "Brasileño",
      },
    },
    {
      fieldName: {
        "en-us": "Languages",
        "pt-br": "Idiomas",
        "es-es": "Idiomas",
      },
      fieldValue: {
        "en-us": "Portuguese, English",
        "pt-br": "Português, Inglês",
        "es-es": "Portugués, Inglés",
      },
    },
    {
      fieldName: { "en-us": "Email", "pt-br": "Email" },
      fieldValue: { "en-us": "matheuswachcruz@gmail.com" },
    },
  ],
};
