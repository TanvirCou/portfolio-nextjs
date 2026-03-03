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
  title: "Frontend Web Developer",
  email: "kazi.tanvir.cou@gmail.com",
  location: "Dhaka, Bangladesh",
  about:
    "Frontend Web Developer specializing in Next.js, React, and TypeScript. I build scalable, high-performance web applications with clean architecture and seamless user experiences.",
  detailsAboutMe:
    "I develop modern, production-ready applications with a strong focus on performance, maintainability, and secure authentication. Experienced in REST API integration, CI/CD automation, and deploying scalable apps using Vercel and modern DevOps practices.",
  details: [
    "⚡ Next.js, React, TypeScript, Tailwind CSS",
    "🔐 Secure auth & role-based systems",
    "🔄 CI/CD with GitHub Actions",
    "💳 Stripe & REST API integration",
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
