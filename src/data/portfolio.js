// src/data/portfolio.js
export const portfolio = {
  personal: {
    fullName: "Kapa Sai Ganesh",
    title: "Aspiring Java Full Stack Developer",
    email: "saiganeshkapa@gmail.com",
    phone: "+91 7794815094",
    linkedIn: "https://linkedin.com/in/kapa-sai-ganesh-2291b3418",
    github: "https://github.com/saig00938-cmyk",
    avatar: "/profile.svg", // placeholder SVG
    resume: "/sai_ganesh_resume%20(1)%20(1).pdf",
  },
  navItems: [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Certificates",
    "Education",
    "Contact",
  ],
  hero: {
    greeting: "Hello, I'm",
    intro: "I am a passionate aspiring software developer and B.Tech Electronics and Communication Engineering graduate with skills in Java, React, JavaScript, HTML, CSS, SQL, and Python. I enjoy building responsive web applications and continuously improving my programming and problem‑solving skills.",
    buttons: [
      { label: "View My Projects", href: "#projects" },
      { label: "Download Resume", href: "/sai_ganesh_resume%20(1)%20(1).pdf", download: true },
      { label: "Contact Me", href: "#contact" },
    ],
    social: [
      { name: "LinkedIn", href: "https://linkedin.com/in/kapa-sai-ganesh-2291b3418", icon: "Linkedin" },
      { name: "GitHub", href: "https://github.com/saig00938-cmyk", icon: "GitHub" },
    ],
  },
  about: {
    heading: "About Me",
    description: "I am interested in frontend development, Java programming, software engineering, and creating practical applications.",
    cards: [
      { title: "B.Tech ECE — 2026", description: "" },
      { title: "Java Full Stack Development", description: "Career Focus" },
      { title: "Software Development", description: "Projects and Learning" },
    ],
  },
  skills: {
    heading: "My Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        items: ["HTML5", "CSS3", "JavaScript", "React.js"],
      },
      {
        name: "Programming",
        items: ["Java", "Python"],
      },
      {
        name: "Database",
        items: ["SQL"],
      },
    ],
  },
  projects: [
    {
      name: "ShopVibe",
      category: "E-Commerce Web Application",
      description: "A responsive e-commerce web application featuring product browsing, user authentication, and a modern shopping interface built using React.",
      techStack: ["React", "JavaScript", "HTML5", "CSS3", "REST API", "Responsive Design"],
      image: "/projects/shopvibe.svg",
      repo: "https://github.com/saig00938-cmyk",
      demo: "",
    },
    {
      name: "IoT-Based GPS and GSM Health Monitoring and Message Alert System for Mountain Climbers",
      category: "IoT & Embedded Systems",
      description: "A smart health monitoring and emergency alert system for mountain climbers using IoT sensors, GPS location tracking, and GSM communication.",
      techStack: ["IoT", "GPS", "GSM", "ATmega328P", "Sensors", "Embedded C"],
      image: "/projects/iot-monitoring.svg",
      repo: "https://github.com/saig00938-cmyk",
      demo: "",
    },
  ],
  experience: [
    {
      role: "Data Analytics Intern",
      company: "Pragma Systems (OPC) Private Limited",
      responsibilities: [
        "Lead data management",
        "Researching SME companies and business prospects",
        "Supporting prospecting and outreach activities",
      ],
    },
  ],
  certificates: [
    {
      title: "Frontend Development Certificate",
      category: "Web Development",
      image: "/frontend%20certificate.pdf",
      date: "20 September 2026",
    },
    {
      title: "ECAD and Arduino Certificate",
      category: "Electronics",
      image: "/ECAD%20And%20Arduino%20Certificate%20.pdf",
      date: "20 July 2024",
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology — Electronics and Communication Engineering",
      institution: "Welfare Institute of Science Technology and Management",
      graduation: "2026",
      cgpa: "7.5/10",
    },
    {
      degree: "Intermediate – MPC",
      institution: "Government Junior College, Polavaram",
      graduation: "2022–2024",
      percentage: "60%",
    },
    {
      degree: "SSC – 10th Class",
      institution: "ST Eugene E.M. High School, Tallapudi",
      graduation: "2020",
      percentage: "98%",
    },
  ],
};
