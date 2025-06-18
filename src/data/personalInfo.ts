interface SocialLink {
  name: string;
  url: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  about: string;
  detailsAboutMe: string;
  details: string[];
  socialLinks: SocialLink[];
  resumeUrl: string;
  profileImage: string;
}

export const personalInfo: PersonalInfo = {
  name: "Kazi Tanvir Ahmed",
  title: "Frontend Developer",
  email: "ahmed.tnvr999@gmail.com",
  location: "Bangladesh",
  about:
    "Hi, I’m Tanvir — a frontend developer specializing in building modern, responsive web applications using Next.js and React.js. I’m passionate about crafting clean, efficient, and user-friendly interfaces that deliver great user experiences.",
  detailsAboutMe:
    "I'm a frontend developer passionate about building modern, responsive web applications using Next.js and React.js. I focus on writing clean, efficient code and designing user-friendly interfaces that deliver seamless experiences. In addition to frontend development, I’m also exploring cloud engineering and DevOps to continuously expand my skills and stay updated with the latest technologies.",
  details: [
    "🌱 Focused on Next.js, React.js, TypeScript, Tailwind CSS, Git and DevOps practices.",
    "✍️ Love building projects, documenting learning, and teaching through content.",
  ],
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/tnvr-kazi/" },
    { name: "GitHub", url: "https://github.com/TanvirCou" },
    { name: "Facebook", url: "https://www.facebook.com/ahmed.tnvr.999" },
    { name: "Instagram", url: "https://www.instagram.com/tnvr_ahmed" },
  ],
  resumeUrl: "/assets/Kazi_Tanvir_Ahmed.pdf",
  profileImage: "/assets/profile.jpeg",
};
