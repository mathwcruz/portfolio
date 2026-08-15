import type { TechName } from "@/lib/tech-icons";
import type { LocalizedText } from "@/lib/localize";

export type RawProject = {
  num: string;
  title: string;
  description: LocalizedText;
  stack: { name: string; tech: TechName }[];
  image: string;
  live?: string;
  github: string;
};

export type Project = Omit<RawProject, "description"> & { description: string };

export const projects: RawProject[] = [
  {
    num: "01",
    title: "Gelify",
    description: {
      "en-us":
        "An app for managing your users, clients, suppliers, products, purchases, and sales.",
      "pt-br":
        "Um aplicativo para gerenciar seus usuários, clientes, fornecedores, produtos, compras e vendas.",
    },
    stack: [
      { name: "TailwindCSS", tech: "tailwind" },
      { name: "Supabase", tech: "supabase" },
      { name: "React", tech: "react" },
      { name: "Next.js", tech: "nextjs" },
      { name: "Typescript", tech: "typescript" },
    ],
    image: "/assets/work/gelify_banner.png",
    live: "https://gelify.vercel.app",
    github: "https://github.com/mathwcruz/gelify",
  },
  {
    num: "02",
    title: "letmeask",
    description: {
      "en-us":
        "An app that connects people with questions about a specific topic to those who can answer them.",
      "pt-br":
        "Um aplicativo que conecta pessoas com perguntas sobre um tema específico a quem pode respondê-las.",
    },
    stack: [
      { name: "HTML", tech: "html" },
      { name: "Sass", tech: "sass" },
      { name: "Firebase", tech: "firebase" },
      { name: "React", tech: "react" },
      { name: "Typescript", tech: "typescript" },
    ],
    image: "/assets/work/letmeask_banner.png",
    live: "https://letmeask-mathwcruz.web.app",
    github: "https://github.com/mathwcruz/letmeask_nlw06",
  },
  {
    num: "03",
    title: "move.it",
    description: {
      "en-us":
        "An application that reminds you to take a break and exercise every 25 minutes using the Pomodoro technique.",
      "pt-br":
        "Um aplicativo que lembra você de fazer uma pausa e se exercitar a cada 25 minutos usando a técnica Pomodoro.",
    },
    stack: [
      { name: "HTML", tech: "html" },
      { name: "CSS", tech: "css" },
      { name: "React", tech: "react" },
      { name: "Next.js", tech: "nextjs" },
      { name: "Typescript", tech: "typescript" },
    ],
    image: "/assets/work/move.it_banner.png",
    live: "https://move-it-nlw04-nine.vercel.app",
    github: "https://github.com/mathwcruz/move.it_nlw04",
  },
  {
    num: "04",
    title: "dt money",
    description: {
      "en-us":
        "A personal finance management app where you can track your income and expenses.",
      "pt-br":
        "Um aplicativo de gestão financeira pessoal onde você pode acompanhar suas receitas e despesas.",
    },
    stack: [
      { name: "HTML", tech: "html" },
      { name: "CSS", tech: "css" },
      { name: "Styled Components", tech: "styledcomponents" },
      { name: "React", tech: "react" },
      { name: "Typescript", tech: "typescript" },
    ],
    image: "/assets/work/dt money_banner.png",
    github: "https://github.com/mathwcruz/dt.money",
  },
  {
    num: "05",
    title: "Proffy",
    description: {
      "en-us":
        "An application that connects private tutors with students looking for that service.",
      "pt-br":
        "Um aplicativo que conecta professores particulares a estudantes que procuram esse serviço.",
    },
    stack: [
      { name: "HTML", tech: "html" },
      { name: "CSS", tech: "css" },
      { name: "SQLite", tech: "sqlite" },
      { name: "React", tech: "react" },
      { name: "Typescript", tech: "typescript" },
      { name: "Node.js", tech: "nodejs" },
    ],
    image: "/assets/work/proffy_banner.png",
    github: "https://github.com/mathwcruz/proffy_nlw02",
  },
  {
    num: "06",
    title: "ig.news",
    description: {
      "en-us":
        "A blog application where you can log in with your GitHub credentials and subscribe for more content.",
      "pt-br":
        "Um aplicativo de blog onde você pode entrar com suas credenciais do GitHub e assinar para mais conteúdos.",
    },
    stack: [
      { name: "HTML", tech: "html" },
      { name: "CSS", tech: "css" },
      { name: "Sass", tech: "sass" },
      { name: "Jest", tech: "jest" },
      { name: "React", tech: "react" },
      { name: "Next.js", tech: "nextjs" },
      { name: "Typescript", tech: "typescript" },
    ],
    image: "/assets/work/ig.news_banner.png",
    live: "https://ignews-rose.vercel.app",
    github: "https://github.com/mathwcruz/ignews",
  },
  {
    num: "07",
    title: "Podcastr",
    description: {
      "en-us":
        "A podcast app where you can play, pause, and choose a specific episode.",
      "pt-br":
        "Um aplicativo de podcast onde você pode reproduzir, pausar e escolher um episódio específico.",
    },
    stack: [
      { name: "HTML", tech: "html" },
      { name: "CSS", tech: "css" },
      { name: "Sass", tech: "sass" },
      { name: "React", tech: "react" },
      { name: "Next.js", tech: "nextjs" },
      { name: "Typescript", tech: "typescript" },
    ],
    image: "/assets/work/podcastr_banner.png",
    live: "https://podcastr-mathwcruz.vercel.app",
    github: "https://github.com/mathwcruz/podcastr_nlw05",
  },
  {
    num: "08",
    title: "Alurakut",
    description: {
      "en-us":
        "An application that recreates some of the features of the now-defunct Orkut.",
      "pt-br":
        "Um aplicativo que recria alguns dos recursos do extinto Orkut.",
    },
    stack: [
      { name: "Styled Components", tech: "styledcomponents" },
      { name: "DatoCMS", tech: "datocms" },
      { name: "React", tech: "react" },
      { name: "Next.js", tech: "nextjs" },
      { name: "Typescript", tech: "typescript" },
    ],
    image: "/assets/work/alurakut_banner.png",
    live: "https://alurakut-mathwcruz.vercel.app",
    github: "https://github.com/mathwcruz/alurakut",
  },
  {
    num: "09",
    title: "dashgo.",
    description: {
      "en-us":
        "A dashboard application for managing users, with charts and other data visualizations.",
      "pt-br":
        "Um aplicativo de dashboard para gerenciamento de usuários, com gráficos e outras visualizações de dados.",
    },
    stack: [
      { name: "HTML", tech: "html" },
      { name: "Chakra UI", tech: "chakra" },
      { name: "React", tech: "react" },
      { name: "React Query", tech: "reactquery" },
      { name: "Next.js", tech: "nextjs" },
      { name: "Typescript", tech: "typescript" },
    ],
    image: "/assets/work/dashgo_banner.png",
    github: "https://github.com/mathwcruz/dashgo",
  },
  {
    num: "10",
    title: "Coffee Delivery",
    description: {
      "en-us":
        "An app that simulates a café delivery service where you can order your favorite coffees.",
      "pt-br":
        "Um aplicativo que simula um serviço de entrega de café onde você pode pedir seus cafés favoritos.",
    },
    stack: [
      { name: "Styled Components", tech: "styledcomponents" },
      { name: "React", tech: "react" },
      { name: "Typescript", tech: "typescript" },
    ],
    image: "/assets/work/coffee-delivery_banner.png",
    live: "https://ignite-coffee-delivery-mathwcruz.vercel.app",
    github: "https://github.com/mathwcruz/ignite-coffee-delivery",
  },
];
