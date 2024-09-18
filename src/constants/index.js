import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

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
    title: "WALMART SALES DATA ANALYSIS",
    image: project1,
    description:
      "Utilized SQL & Pandas for ETL processes, performing data cleaning, handling missing values, & feature engineering with economic indicators like CPI & unemployment. Conducted EDA to identify patterns, followed by building & tuning a scikit-learn regression model for weekly sales prediction, leveraging key features such as holiday data & markdowns for accurate forecasting.",
    technologies: ["Pandas", "ETL", "Feature Engineering", "EDA", "Imputation Techniques", "Data Visualization"],
  },
  {
    title: "REAL TIME SOCIAL SENTIMENT ANALYSIS",
    image: project2,
    description:
      "Developed a real-time sentiment analysis tool using Python & Dash, enabling live Twitter data streaming and sentiment analysis to understand public opinion effectively. Managed backend operations with Flask, utilized SQLite for database handling, enhanced data retrieval speeds with caching, and deployed the application using Gunicorn for robust server management.",
    technologies: ["Python", "Dash", "Flask", "SQLite", "Twitter API", "Gunicorn"],
  },
  {
    title: "HR ANALYTICS",
    image: project3,
    description:
      "Designed & implemented a comprehensive HR Analytics dashboard in Tableau, leveraging Kafka for real-time data streaming & SQL for backend analysis. Analyzed key metrics like attrition and job satisfaction using data blending, custom calculations, and parameter controls to provide actionable insights for HR strategy.",
    technologies: ["Tableau", "Kafka", "SQL", "Data Blending"],
  },
  {
    title: "SELF PORTFOLIO",
    image: project4,
    description:
      "Developed a dynamic self-portfolio website to showcase my technical and creative skills, utilizing HTML, Tailwind CSS, JavaScript, ReactJS, and Framer Motion. This combination enabled the creation of a fluid, interactive user experience with sophisticated animations, reflecting my proficiency in modern web development practices and responsive design.",
    technologies: ["HTML", "Tailwind CSS", "Javascript", "EmailJS", "Framer Motion", "ReactJS"],
  },
  {
    title: "WELLNESS MANAGEMENT SYSTEM",
    image: project5,
    description:
      "I developed an interactive Wellness Management System using HTML, CSS, JavaScript, ReactJS, NodeJS, and MongoDB. This platform features a dashboard offering descriptive and predictive analytics, along with a collaborative filtering mechanism for personalized workout recommendations and an NLP-based search for enhanced user navigation and interaction.",
    technologies: ["HTML", "CSS", "Javascript", "ReactJS", "NodeJS", "MongoDB"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
