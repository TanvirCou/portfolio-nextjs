interface Education {
  degree: string;
  institution: string;
  focus: string;
  year: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "B.Sc Engineering",
    institution: "Comilla University",
    focus: "Information & Communication Technology",
    year: "2020–2025",
    description:
      "Graduated with a B.Sc Engineering degree in Information & Communication Technology from Comilla University.",
  },
  {
    degree: "HSC",
    institution: "Chittagong Govt. Model College",
    focus: "Science",
    year: "2018",
    description:
      "Completed Higher Secondary School Certificate with a focus on science subjects.",
  },
  {
    degree: "SSC",
    institution: "Nasirabad Govt. High School",
    focus: "Science",
    year: "2016",
    description:
      "Completed Secondary School Certificate with a focus on science subjects.",
  },
];
