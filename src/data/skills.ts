interface Skill {
  name: string;
  icon?: string;
  level?: string;
}

interface SkillsData {
  languages: Skill[];
  tools: Skill[];
  platforms: Skill[];
  development: Skill[];
  currentlyLearning: string[];
}

export const skills: SkillsData = {
  languages: [
    { name: "HTML", icon: "html5", level: "95%" },
    { name: "CSS", icon: "css3", level: "90%" },
    { name: "TypeScript", icon: "typescript", level: "80%" },
    { name: "C", icon: "c", level: "60%" },
    { name: "Markdown", icon: "markdown", level: "70%" },
  ],
  tools: [
    { name: "Git", icon: "git", level: "90%" },
    { name: "VS Code", icon: "vscode", level: "90%" },
    { name: "Postman", icon: "postman", level: "75%" },
    { name: "Stripe Integration", icon: "stripe", level: "80%" },
  ],

  platforms: [
    { name: "GitHub", icon: "github", level: "90%" },
    { name: "Vercel", icon: "vercel", level: "85%" },
    { name: "Netlify", icon: "netlify", level: "75%" },
    { name: "Firebase", icon: "firebase", level: "70%" },
  ],
  development: [
    { name: "React.js", icon: "react", level: "85%" },
    { name: "Next.js", icon: "nextjs", level: "85%" },
    { name: "TypeScript", icon: "typescript", level: "80%" },
    { name: "Tailwind CSS", icon: "tailwindcss", level: "90%" },
    { name: "Redux", icon: "redux", level: "75%" },
    { name: "Node.js", icon: "nodejs", level: "70%" },
    { name: "Express.js", icon: "express", level: "70%" },
  ],
  currentlyLearning: [
    "Deep dive into Next.js",
    "CI/CD pipeline with github actions",
    "Cloud Computing with AWS",
    "Basics of Docker",
  ],
};
