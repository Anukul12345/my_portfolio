// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';

import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's

import internpeLogo from './assets/company_logo/internpe.jpeg'


// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import sdbLogo from './assets/education_logo/sdbLogo.jpeg';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import circleAidLogo from './assets/work_logo/circleAid.png'
import weatherAppLogo from './assets/work_logo/weatherAppLogo.jpg'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },

    ],
  },
];

  export const experiences = [
  {
    id: 0,
    img: internpeLogo, 
    role: "Website Developer Intern",
    company: "InternPe",
    date: "June 2024 - July 2024",
    desc: "Created responsive website templates using HTML, CSS, and JavaScript that worked well across different browsers. Strengthened both frontend and backend development skills by working on real-world applications.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
  },
  {
    id: 1,
    img: glaLogo, 
    role: "Frontend Development Trainee",
    company: "GLA University, Mathura",
    date: "June 2024 - July 2024",
    desc: "Completed a job-oriented value-added course in Frontend Development with React.js. Built a mini project 'Weather App' using JavaScript, React, and CSS. Applied React components and state management to make the application interactive and user-friendly.",
    skills: [
      "ReactJS",
      "JavaScript",
      "CSS",
      "Frontend Development",
    ],
  },
];

  
export const education = [
  {
    id: 0,
    img: glaLogo, // use GLA logo image
    school: "GLA University, Mathura",
    date: "Sept 2022 - June 2026",
    grade: "7.01 CGPA / 70.1%",
    desc: "Pursuing a Bachelor of Technology (B.Tech) in Computer Science Engineering at GLA University, Mathura. I have built a strong foundation in Data Structures, Algorithms, Database Management Systems, Object-Oriented Programming, Web Development, and Software Engineering. Actively engaged in projects and workshops, gaining hands-on experience with the MERN stack, full-stack development, and modern frontend frameworks.",
    degree: "Bachelor of Technology (B.Tech) - Computer Science Engineering",
  },
  {
    id: 1,
    img: vpsLogo, // create/import Rameshwar Prasad Inter College logo
    school: "Rameshwar Prasad Inter College, Bhatpura, Badaun",
    date: "Apr 2018 - May 2020",
    grade: "61%",
    desc: "Completed my Intermediate (Class XII) with a focus on Science stream under the UP Board, gaining a solid base in core science subjects while developing logical and analytical skills.",
    degree: "Intermediate - Science Stream",
  },
  {
    id: 2,
    img: sdbLogo, // create/import S D B Public School logo
    school: "S D B Public School, Chandausi, Bisauli, Badaun",
    date: "Apr 2016 - May 2018",
    grade: "61%",
    desc: "Completed my High School (Class X) under the CBSE Board, with a strong interest in Computer Science and Mathematics, which laid the foundation for my journey into technology and programming.",
    degree: "High School - Science with Computer",
  },
];

export const projects = [
  {
    id: 0,
    title: "Donation Platform - Circle Aid",
    description:
      "A full-stack web platform designed to connect donors with NGOs and individuals in need. Implemented secure authentication and role-based dashboards for donors and admins. Added donation request posting, tracking, and status updates (Pending → Approved → Completed). Integrated Razorpay payment gateway for seamless online donations.",
    image: circleAidLogo, // replace with actual project image/logo
    tags: ["React JS", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay", "Tailwind CSS"],
    github: "https://github.com/Anukul12345", // update with your repo link if public
    webapp: "https://your-live-project-link.com", // update if hosted
  },
  {
    id: 1,
    title: "Weather App",
    description:
      "A frontend project developed as part of a job-oriented course at GLA University. Built using React.js, JavaScript, and CSS, the app provides real-time weather updates. Leveraged React components and state management to make the interface interactive and user-friendly.",
    image: weatherAppLogo, // replace with your weather app screenshot
    tags: ["React JS", "JavaScript", "CSS", "API"],
    github: "https://github.com/Anukul12345", // update with repo link
    webapp: "https://your-weather-app-link.com", // update if deployed
  },
  
];
