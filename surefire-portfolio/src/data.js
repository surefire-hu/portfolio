export const projects = [
  {
    id: 1,
    title: "Yimingonghui",
    description: {
      it: "Piattaforma professionale sviluppata con focus sulla gestione contenuti e performance.",
      en: "Professional platform developed with a focus on content management and performance."
    },
    tech: ["Vue.js", "TypeScript", "Strapi", "Sass"],
    github: "https://github.com/surefire-hu/studio",
    link: "https://github.com/surefire-hu/studio", // Se hai un link live, inseriscilo qui
    image: "/img/yimingonghui.png",
    category: "FullStack"
  },
  {
    id: 2,
    title: "Bool-BnB",
    description: {
      it: "Web app ispirata ad AirBnb con ricerca avanzata e sistema di messaggistica integrato.",
      en: "AirBnb-inspired web app featuring advanced search and integrated messaging system."
    },
    tech: ["Vue.js", "Tailwind", "Laravel", "MySQL"],
    github: "https://github.com/orgs/project-bnb/repositories",
    link: "https://github.com/orgs/project-bnb/repositories",
    image: "/img/Bool.png",
    category: "FullStack"
  },
  {
    id: 3,
    title: "Gestionale Daoyuan",
    description: {
      it: "Gestionale sviluppata per la gestione delle presenze ed eventi.",
      en: "Management software developed for tracking attendance and event organization."
    },
    tech: ["Vue.js", "JavaScript", "TailwindCSS", "MongoDB"],
    github: "https://github.com/surefire-hu/daoyuanxingshi",
    link: "https://github.com/surefire-hu/daoyuanxingshi",
    image: "/img/gestionale.png",
    category: "FullStack"
  },
  {
    id: 4,
    title: "Boolflix",
    description: {
      it: "Riproduzione della nota piattaforma streaming con ricerca dinamica di film e serie TV.",
      en: "Replica of the famous streaming platform with dynamic search for movies and TV series."
    },
    tech: ["Vue.js", "Tailwind", "API REST"],
    github: "https://github.com/surefire-hu/vite-boolflix",
    link: "https://github.com/surefire-hu/vite-boolflix",
    image: "/img/boolflix.png",
    category: "Frontend"
  },
  {
    id: 5,
    title: "Vite Comics",
    description: {
      it: "Catalogo interattivo di fumetti con gestione dinamica dei layout.",
      en: "Interactive comics catalog with dynamic layout management."
    },
    tech: ["Vue.js", "Sass", "HTML5"],
    github: "https://github.com/surefire-hu/vite-comics",
    link: "https://github.com/surefire-hu/vite-comics",
    image: "/img/comics.png",
    category: "Frontend"
  },
  {
    id: 6,
    title: "HTML Vue Project",
    description: {
      it: "Progetto base per l'esplorazione delle direttive Vue e manipolazione del DOM.",
      en: "Base project for exploring Vue directives and DOM manipulation."
    },
    tech: ["Vue.js", "Tailwind", "HTML"],
    github: "https://github.com/surefire-hu/proj-html-vuejs",
    link: "https://github.com/surefire-hu/proj-html-vuejs",
    image: "/img/project.png",
    category: "Frontend"
  },
  {
    id: 7,
    title: "Se7ven Club",
    description: {
      it: "Sito vetrina per una discoteca con design moderno e responsive.",
      en: "Showcase website for a nightclub with a modern and responsive design."
    },
    tech: ["Vue.js", "Tailwind", "HTML"],
    github: "https://github.com/surefire-hu/seven-club",
    link: "https://github.com/surefire-hu/seven-club",
    image: "/img/seven-club.png",
    category: "Frontend"
  }
];

export const skills = {
  frontend: [
    { name: "Vue.js", icon: "Monitor" },
    { name: "TypeScript", icon: "Code2" },
    { name: "Tailwind CSS", icon: "Palette" },
    { name: "Nuxt.js", icon: "Zap" }
  ],
  backend: [
    { name: "Python", icon: "Terminal" },
    { name: "Django REST", icon: "Globe" },
    { name: "Laravel", icon: "Cpu" },
    { name: "Node.js", icon: "Server" }
  ],
  tools: ["Git", "Docker", "Postman", "NPM"]
};