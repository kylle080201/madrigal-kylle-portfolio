// Edit this file to update your portfolio content.

import photo from "@/assets/profile.webp";

type SkillGroup = { category: string; items: string[] };

type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

type Education = { degree: string; school: string; period: string };

type Project = {
  title: string;
  description: string;
  highlights?: string[];
  tags: string[];
  href?: string;
  featured?: boolean;
};

const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "CSS", "SQL", "PHP"],
  },
  {
    category: "Front end",
    items: ["React.js", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    category: "Back end",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "Laravel",
      "RESTful APIs",
      "MongoDB",
      "SQL & NoSQL databases",
    ],
  },
  {
    category: "AI-assisted development",
    items: ["Agentic AI workflows", "Claude Code", "Cursor"],
  },
  {
    category: "Testing",
    items: ["Unit", "Integration", "End-to-end", "Playwright", "Claude Code"],
  },
  {
    category: "Practices",
    items: [
      "Agile",
      "Code review",
      "Mentoring",
      "Authentication & authorization",
      "Caching",
      "Technical documentation",
    ],
  },
];

const experience: Experience[] = [
  {
    role: "Senior Fullstack Developer",
    company: "Zkript",
    location: "Remote",
    period: "Aug 2023 – Present",
    highlights: [
      "Build and maintain full-stack web applications with JavaScript, TypeScript, Node.js and Express.",
      "Use agentic AI development with Claude and Cursor across planning, implementation, testing and code review.",
      "Design RESTful APIs and optimize database schemas and queries across SQL and NoSQL stores.",
      "Improve application performance by resolving bottlenecks and implementing caching.",
      "Mentor junior developers through code reviews, guidance and feedback.",
      "Implement authentication, authorization and data protection practices across the codebase.",
      "Maintain unit, integration and end-to-end tests, plus documentation for code, APIs and workflows that supports onboarding.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "World Coffee Alliance",
    location: "Remote",
    period: "Oct 2021 – Aug 2023",
    highlights: [
      "Built web applications with React.js, Next.js, TypeScript and Tailwind CSS.",
      "Developed mobile applications with React Native.",
    ],
  },
];

const education: Education[] = [
  {
    degree: "BS Information Technology",
    school: "Laguna State Polytechnic University, Siniloan",
    period: "2017 – 2021",
  },
];

const projects: Project[] = [
  {
    title: "Koobo",
    description:
      "Booking platform for properties, activities and rentals on Siargao Island, Philippines.",
    tags: ["Next.js", "NestJS", "TypeScript", "MongoDB", "Tailwind CSS"],
    href: "https://www.koobo.ph/",
    featured: true,
  },
  {
    title: "World Coffee Innovation Summit",
    description:
      "Website for World Coffee Alliance's global summit on coffee and cocoa climate resilience, serving 200+ senior leaders from brands, government and finance.",
    tags: ["Next.js", "Node.js", "Tailwind CSS", "MongoDB", "Stripe"],
    href: "https://www.worldcoffeeinnovationsummit.com/",
    featured: true,
  },
  {
    title: "Dentistly",
    description: "Practice management system for dentists.",
    tags: ["Next.js", "NestJS", "TypeScript", "MongoDB", "Tailwind CSS"],
    href: "https://www.dentistly.app/",
  },
  {
    title: "World Coffee Alliance",
    description: "Company website for a European coffee organization.",
    tags: ["WordPress"],
    href: "https://worldcoffeealliance.com/",
  },
  {
    title: "Printer Rentals PH",
    description: "Printer rental service website for the Philippines.",
    tags: ["WordPress"],
    href: "https://www.printerrentalsph.com/",
  },
];

export const site = {
  name: "Kylle Varon Madrigal",
  photo,
  role: "Senior Fullstack Developer",
  location: "Olongapo City 2200, Philippines",
  bio: "I build web and mobile applications with React, Next.js, React Native, TypeScript and Node.js. Five years in, I'm known for performance optimization and mentoring junior developers.",
  about:
    "I'm a Senior Fullstack Developer with 5 years of experience across the stack, from React and React Native front ends to Node.js, NestJS and Laravel back ends. For the past two years I've worked with agentic AI, using Claude and Cursor to plan, build, test and review features.",
  email: "kv.madrigal08@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/kylle080201" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kylle-varon-madrigal-758167285/",
    },
  ],
  skills,
  experience,
  education,
  projects,
};
