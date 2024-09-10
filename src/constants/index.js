import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I firmly believe in the philosophy that "With determination and effort, any dream can be achieved." This mindset drives me to continuously learn new technologies and tackle complex, real-world problems. Currently pursuing my Master’s in Computer Science at Indiana University, I am eager to join an innovative organization where I can apply my technical, analytical, and problem-solving skills. Passionate about creating meaningful, user-centered solutions, I thrive on challenges that push me to think critically and creatively, and I am committed to contributing to impactful projects that advance the industry and deliver exceptional results.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May, 2024 - July, 2024",
    role: "Software Developer Intern",
    company: "40 Hammocks, USA",
    description: `
    Developed a data-driven web & mobile application using Flutter with advanced search algorithms using APIs and real-time data synchronization with Firebase.\n
    Gathered and analyzed over 10,000 user reviews on vacation spots, optimizing data processing to highlight company hotel suggestions, leading to a boost in user engagement by 15%.`,
    technologies: ["Javascript", "React.js", "Next.js", "MongoDB", "Firebase", "APIs", "Flutter"],
  },
  {
    year: "Jan, 2023 - June, 2023",
    role: "Software Developer Intern",
    company: "Visteon Corporation, India",
    description: `
    Crafted “Trippin” Android application, using Figma for advanced UI/UX design and Flutter for Android development, resulting in a 30% faster deployment time.\n
    Integrated Google Maps API for tracking, group chats, personalized themes, and SOS features. Optimized with data analytics, enhancing user engagement and functionality.`,
    technologies: ["Figma", "Flutter", "Google Maps API", "Data Analytics", "Firebase"],
  },
  {
    year: "Oct, 2021 - Mar, 2022",
    role: "Machine Learning Intern",
    company: "Canspirit AI, India",
    description: `
    Engineered a Facial Recognition system with Haar Cascade, LBPH algorithms, & Tkinter GUI, achieving 15% better accuracy.\n
    Integrated Flask-based Email authentication, & Docker for efficient deployment, enhanced by advanced analytics for improved performance.`,
    technologies: ["Python", "Haar Cascade", "LBPH", "Tkinter", "Flask", "Docker", "Analytics"],
  }
];


export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
