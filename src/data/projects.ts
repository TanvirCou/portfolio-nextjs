interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  githubLink?: string; // Optional GitHub link
  featured: boolean;
  date: string; // Date in format like "2023-05-15" or "2022-Q3"
}

export const projects: Project[] = [
  {
    title: "Inkly",
    description:
      "Inkly – A modern, responsive blog web application built with Next.js, TypeScript, and Tailwind CSS.It includes separate dashboards for users and admins.",
    image: "https://ik.imagekit.io/25kitplzn/inkly.png",
    tags: ["Next.js", "TypeScript", "Clerk", "Tailwind CSS", "Shadcn UI"],
    link: "https://inkly-six.vercel.app/",
    githubLink: "https://github.com/TanvirCou/inkly",
    featured: true,
    date: "2025-06-04",
  },
  {
    title: "GradeSync",
    description:
      "Grade-Sync is a school management system built with Next.js, Prisma, and PostgreSQL, featuring role-based dashboards for admins, teachers, students, and parents.",
    image: "https://i.ibb.co.com/GQppft75/Screenshot-2025-03-13-172955.png",
    tags: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
    ],
    link: "https://grade-sync-school.vercel.app/",
    githubLink: "https://github.com/TanvirCou/grade-sync",
    featured: true,
    date: "2025-03-08",
  },
  {
    title: "Cyndrome",
    description:
      "Cyndrome is a seamless doctor appointment booking platform built with Next.js, Appwrite, and Twilio for SMS notifications.",
    image: "https://i.ibb.co.com/ZRG4M64r/cyndrome.png",
    tags: ["Next.js", "Appwrite", "Twilio", "TypeScript", "Tailwind CSS"],
    link: "https://cyndrome.vercel.app/",
    githubLink: "https://github.com/TanvirCou/cyndrome",
    featured: false,
    date: "2024-11-02",
  },
  {
    title: "Panda Event",
    description:
      "Panda Event is a responsive event booking web application built with Next.js. It features Clerk for authentication, Stripe for secure payments, and Mongoose for efficient database management.",
    image: "https://i.ibb.co.com/jvcmCyN5/panda-event.png",
    tags: [
      "Next.js",
      "Mongoose",
      "Stripe",
      "Clerk",
      "TypeScript",
      "Tailwind CSS",
    ],
    link: "https://panda-event.vercel.app/",
    githubLink: "https://github.com/TanvirCou/panda-event",
    featured: false,
    date: "2024-07-15",
  },
  {
    title: "Panda Shop",
    description:
      "This is a multi-vendor online E-commerce web application which is built with React JS.Here, I used redux toolkit for state management.",
    image: "https://i.ibb.co/DQSCZWf/panda-shop.png",
    tags: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Stripe",
      "Node JS",
      "Express JS",
      "MongoDB",
    ],
    link: "https://panda-shop-webapps.netlify.app/",
    githubLink: "https://github.com/TanvirCou/panda-shop",
    featured: true,
    date: "2024-03-13",
  },
  {
    title: "Panda Book",
    description:
      "This is a social media web app named Panda book. This is a clone of facebook web and it's made using React.This web app also contain messenger.I used Socket-io for realtime chat.",
    image: "https://i.ibb.co/nPbGrTP/panda-book-min.png",
    tags: [
      "React.js",
      "Socket-io",
      "Node JS",
      "Express JS",
      "Mongoose",
      "MongoDB",
    ],
    link: "https://panda-book.netlify.app/",
    githubLink: "https://github.com/TanvirCou/social-media",
    featured: true,
    date: "2023-12-23",
  },
  {
    title: "Panda Chat",
    description:
      "This is a real time chatting web application named Panda-Chat. It's made using React. We can send real time message to our friends. I used Socket-io for real time chat.",
    image: "https://i.ibb.co/Z1PY8CH/panda-chat-min.png",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Socket-io",
      "Node JS",
      "Express JS",
      "Mongoose",
      "MongoDB",
    ],
    link: "https://panda-chat-webapp.netlify.app/",
    githubLink: "https://github.com/TanvirCou/realtime-chat-app",
    featured: false,
    date: "2023-12-13",
  },
  {
    title: "Travel Guru",
    description:
      "Travel Guru is a responsive travel booking web application built with React.js, Tailwind CSS, and Firebase.",
    image: "https://i.ibb.co/ts1p0r2/tg-min.png",
    tags: ["React.js", "Tailwind CSS", "Firebase"],
    link: "https://travel-guruweb.web.app/",
    githubLink: "https://github.com/TanvirCou/travel-guru",
    featured: false,
    date: "2023-11-02",
  },
  {
    title: "Panda Food",
    description:
      "Panda Food is a responsive food ordering web application built with MERN stack.",
    image: "https://i.ibb.co/3vv7M3x/pf-min.png",
    tags: ["React.js", "Tailwind CSS", "Firebase", "Mongoose", "Express JS"],
    link: "https://panda-foodweb.web.app/",
    githubLink: "https://github.com/TanvirCou/panda-food",
    featured: false,
    date: "2023-10-24",
  },
  {
    title: "Doctors Portal",
    description:
      "This is an online Doctor's Portal web application which is built with MERN. I tried implement hooks, react-router, context-API, firebase authentication and hosting, express-js, mongodb.",
    image: "https://i.ibb.co/WVWJ976/dp-min.png",
    tags: [
      "React.js",
      "Bootstrap",
      "Firebase",
      "Node JS",
      "Express JS",
      "MongoDB",
    ],
    link: "https://doctors-portalweb.web.app/",
    githubLink: "https://github.com/TanvirCou/doctors-portal",
    featured: false,
    date: "2023-07-23",
  },
  {
    title: "To Do App",
    description: "To Do web application using vanilla js.",
    image: "https://i.ibb.co/gvQm3Mc/todo-min.png",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://tanvircou.github.io/to-do-app/",
    githubLink: "https://github.com/TanvirCou/to-do-app",
    featured: false,
    date: "2023-06-16",
  },
];
