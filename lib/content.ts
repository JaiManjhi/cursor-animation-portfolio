export const PROFILE = {
  first: "Jai",
  last: "Manjhi",
  roleA: "Software Engineer",
  roleB: "& AI Builder",
  location: "Indore, India",
  email: "jaimanjhi6@gmail.com",
  bio: "I build mobile apps, backends and AI-assisted workflows that actually ship. Software Engineer at Eveneez and a Computer Science student in Indore.",
  links: {
    github: "https://github.com/JaiManjhi",
    linkedin: "https://www.linkedin.com/in/jaimanjhi/",
    instagram: "https://www.instagram.com/jai4z/",
  },
} as const;

export const HERO_STATS = [
  { value: "40", label: "Unit tests\nshipped" },
  { value: "02", label: "Apps in one\nmonorepo" },
  { value: "’26", label: "SIH team\nlead" },
];

export interface Work {
  n: string;
  title: string;
  meta: string;
  summary: string;
  points: string[];
  stack: string[];
  links: { label: string; href: string }[];
}

export const WORK: Work[] = [
  {
    n: "01",
    title: "Eveneez",
    meta: "Software Engineer · Sep 2026 → now",
    summary: "A managed marketplace that matches people planning experiences with the right service providers.",
    points: [
      "Built the customer and provider apps in React Native, Expo and TypeScript",
      "Shipped home, event planner, plan tracker and the booking flow with confirmation",
      "Added 40 unit tests to a FastAPI backend that had none: pricing, sanitising, booking state, validation",
      "Android launch on Google Play is next",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Turborepo", "FastAPI"],
    links: [],
  },
  {
    n: "02",
    title: "JanSetu",
    meta: "Smart India Hackathon 2026 · Team lead",
    summary: "A civic portal for the Government of Jharkhand connecting citizens, universities and industry (SIH26043).",
    points: [
      "Designed the MongoDB geospatial data model and the REST API spec",
      "Specified an AI engine for issue classification, duplicate detection and routing",
      "Caught a silent [lat, lng] vs [lng, lat] bug at design stage and made a test mandatory for it",
      "Shipped as an installable PWA, live on Vercel",
    ],
    stack: ["MongoDB", "GeoJSON", "PWA", "Vercel"],
    links: [{ label: "Live", href: "https://project-jansetu.vercel.app" }],
  },
  {
    n: "03",
    title: "DUM.",
    meta: "Restaurant website · Design + build",
    summary: "A premium biryani restaurant site with a cinematic, scroll-driven layout.",
    points: [
      "Separate vegetarian and non-vegetarian experiences",
      "Scroll-based animation with a clear typographic hierarchy",
      "Designed, built and deployed end to end",
    ],
    stack: ["Next.js", "React", "Tailwind", "Vercel"],
    links: [
      { label: "Live", href: "https://biryaniwebapp-xqk9.vercel.app" },
      { label: "Code", href: "https://github.com/JaiManjhi/biryaniwebapp" },
    ],
  },
  {
    n: "04",
    title: "Cuban Club",
    meta: "Brand & creative · Client",
    summary: "Brand support for an early-stage Indian mocktail startup.",
    points: ["Wrote the brand-story copy", "Built positioning concepts for a four-flavour range"],
    stack: ["Brand story", "Positioning", "Copywriting"],
    links: [],
  },
];

export const WORK_STATS = [
  { value: "04", label: "Projects\nshipped" },
  { value: "02", label: "Sites live\non Vercel" },
  { value: "40", label: "Tests\nwritten" },
];

export const TOOLS = [
  "React Native",
  "Expo",
  "Reanimated",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "GeoJSON",
  "REST APIs",
  "Python",
  "FastAPI",
  "C++",
  "Java",
  "pnpm",
  "Turborepo",
  "Git",
  "GitHub",
  "Postman",
  "Vercel",
  "Render",
  "Claude",
  "ChatGPT",
  "Gemini",
  "Perplexity",
  "n8n",
];

export const TIMELINE = [
  { title: "Software Engineer", sub: "Eveneez · 5–6 person startup · mobile apps + backend tests", tag: "2026" },
  { title: "Team Lead", sub: "Smart India Hackathon · SIH26043 · JanSetu", tag: "2026" },
  { title: "Two sites in production", sub: "JanSetu and DUM. · both live on Vercel", tag: "Live" },
  { title: "B.Tech CSE", sub: "Computer Science & Engineering · expected 2029", tag: "’29" },
  { title: "Creator", sub: "Tech and AI explainers on Instagram · @jai4z", tag: "Now" },
];

export const ABOUT_TEXT = [
  "I'm a Computer Science Engineering student in Indore and a Software Engineer at Eveneez, where a team of five or six of us is building a managed marketplace for experiences.",
  "Most days that means React Native and TypeScript on the front, Node.js, Express and MongoDB on the back, and tests wherever logic can quietly break. I use Claude, ChatGPT, Gemini and Perplexity daily, and automate the boring parts with n8n.",
];

export const SKILLS = [
  { k: "Languages", v: "C++, Java, Python, JS, TS" },
  { k: "Mobile", v: "React Native, Expo, Reanimated" },
  { k: "Backend", v: "Node.js, Express, MongoDB, REST" },
  { k: "Web", v: "React, Next.js, Tailwind" },
  { k: "AI", v: "Claude, ChatGPT, Gemini, n8n" },
  { k: "Tools", v: "Git, Postman, Vercel, Render" },
];

export const PRINCIPLES = [
  { t: "Test what can silently break", d: "Pricing, validation, booking state. 40 tests where there were none." },
  { t: "AI in the loop", d: "LLMs make me faster. Judgement decides what ships." },
  { t: "Ship, then polish", d: "Get it live on Vercel first, refine it after." },
  { t: "Keep practising", d: "Data structures and algorithms in C++ on LeetCode." },
];

export const NAV = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;
