import bgImg1 from "@assets/images/bgImg1.png";
import bgImg2 from "@assets/images/bgImg2.jpg";
import bgImg3 from "@assets/images/bgImg3.jpg";
import bgImg4 from "@assets/images/bgImg4.jpeg";

import project1 from "@assets/images/bgImg1.png";
import project2 from "@assets/images/loyalblaze-bg.png";
import project3 from "@assets/images/gamersmart-bg.png";
import project4 from "@assets/images/weatherapp-bg.png";
import project5 from "@assets/images/debitty-card.jpg";
import project6 from "@assets/images/fontpalette-bg.png";
import project7 from "@assets/images/letsview-dark.png";

import gallery1 from "@assets/images/gallery-1.jpg";
import gallery2 from "@assets/images/gallery-2.webp";
import gallery3 from "@assets/images/gallery-3.webp";

import gallery4 from "@assets/images/gallery-4.webp";
import gallery5 from "@assets/images/gallery-5.jpg";
import gallery6 from "@assets/images/gallery-6.png";

import gallery7 from "@assets/images/gallery-7.png";
import gallery8 from "@assets/images/gallery-8.jpeg";
import gallery9 from "@assets/images/gallery-9.jpg";

// Nav-links
export const navLinks = [
  {
    title: "About",
    link: "about",
  },
  {
    title: "Work",
    link: "work",
  },
  {
    title: "Skills",
    link: "skills",
  },
  {
    title: "Projects",
    link: "projects",
  },
  {
    title: "Newsletter",
    link: "newsletter",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

export const bgImages = [
  { imgSrc: bgImg1 },
  { imgSrc: bgImg2 },
  { imgSrc: bgImg3 },
  { imgSrc: bgImg4 },
];

// Gallery
export const galleryImages = [
  [
    { id: 1, imgSrc: gallery1 },
    { id: 2, imgSrc: gallery2 },
    { id: 3, imgSrc: gallery3 },
  ],

  [
    { id: 4, imgSrc: gallery4 },
    { id: 5, imgSrc: gallery5 },
    { id: 6, imgSrc: gallery6 },
  ],

  [
    { id: 7, imgSrc: gallery7 },
    { id: 8, imgSrc: gallery8 },
    { id: 9, imgSrc: gallery9 },
  ],
];

//Jobs
export const jobs = [
  {
    jobTitle: "GDSC Frontend Developer",
    company: "GDSC Community Funaab",
    link: "https://www.upstatement.com/",
    year: "February 2021",
    description: [
      "Collaborated with a team of student designers and developers to spearhead a new brand and design system for the GDSC community",
      "Write modern, performant, maintainable code for a diverse array of the community internal projects ",
    ],
  },
  {
    jobTitle: "Freelancer",
    company: "Upstatement",
    link: "https://www.upstatement.com/",
    year: "Jan 2022 - Present",
    description: [
      "Worked with a team of designers to build a marketing website and an e-commerce platform for Middle-belt, an ambitious venture originating from Funaab",
      " Helped solidify a brand direction for Middle-belt to span across print, packaging, and web",
      "Interfaced with clients on a weekly basis, providing technological expertise and knowledge",
      "Tested sites in various browsers and devices to ensure cross-browser compatibility and mobile responsiveness",
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and React",
      "Communicated with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis ",
    ],
  },
  {
    jobTitle: "Frontend Engineer (Team-Lead)",
    company: "Serch",
    link: "https://www.upstatement.com/",
    year: "November 2022",
    description: [
      "Worked closely with designers and management team to develop, document, and manage the Serch platform web-app using React, Sass, and JavaScript",
      " Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Serch platform",
      "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across the Serch's Provider and User Web-apps",
    ],
  },
];

// Projects
export const projects = [
  {
    title: "Halycon Theme",
    imgSrc: project1,
    website: "https://",
    github: "https://",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem isteperspiciatis, dolor culpa eius animi? Lorem ipsum dolor sit amet consectetur adipisicingelit. Sed aperiam perspiciatis tempore reprehenderit expedita quis possimus placeat liberofacilis animi",
    tools: ["React", "Sublime", "Expresss", "Sass", "TailWindCss"],
  },
  {
    title: "Loyal Blaze",
    imgSrc: project2,
    website: "https://loyalblaze-johnny.netlify.app",
    github: "https://github.com/JohnOmoseni/loyal-blaze-design",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem isteperspiciatis, dolor culpa eius animi? Lorem ipsum dolor sit amet consectetur adipisicingelit. Sed aperiam perspiciatis tempore reprehenderit expedita quis possimus placeat liberofacilis animi",
    tools: ["HTML", "CSS", "Javascript", "Figma"],
  },
  {
    title: "Gamers Mart",
    imgSrc: project3,
    website: "https://gamify-mart.vercel.app",
    github: "https://github.com/JohnOmoseni/Gamers-mart",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem isteperspiciatis, dolor culpa eius animi? Lorem ipsum dolor sit amet consectetur adipisicingelit. Sed aperiam perspiciatis tempore reprehenderit expedita quis possimus placeat liberofacilis animi",
    tools: ["React", "Redux", "Framer-motion", "Sass", "SwiperJS"],
  },
  {
    title: "Weather App",
    imgSrc: project4,
    website: "https://weatherapp-johnny-dev.vercel.app",
    github: "https://github.com/JohnOmoseni/the-weather-app",
    body: "An interesting modern weatherb app that brings you accurate and up-to-date weather infromation righht to your fingertips! With its user-friendly interface and stunning design, this weather webapp is perfect for anyone looking to stay on top of changing weather patterns",
    tools: ["React", "WeatherAPI", "Sass", "Git", "Vercel"],
  },
  {
    title: "Glossy Credit Card Design",
    imgSrc: project5,
    website: "https://debittycard.netlify.app",
    github: "https://github.com/JohnOmoseni/glossy-credit-card-design",
    body: "A glossy credit card design implementation with keyboard navigation that allows users to move to the next input field whilst entering your card number. This credit card form design featues a sleek, glossy design that is both visually appealing and user-friendly.",
    tools: ["HTML", "CSS", "Javascript", "Netlify"],
  },
  {
    title: "Fontsipsums",
    imgSrc: project6,
    website: "https://fontpalette-johnny-dev.vercel.app/",
    github: "https://github.com/JohnOmoseni/fontsipsums",
    body: "As someone who has an eye for pretty letters, I wanted a way to visually see different font combinations together. I whipped up this simple website to display some of my favourite pairings combined with some fun lorem ipsum variations I found on the web. This project lets you explore different font pairings to your heart's content😉",
    tools: ["HTML", "CSS", "Vercel"],
  },
  {
    title: "LetsView",
    imgSrc: project7,
    website: "https://letsview.netlify.app/",
    github: "https://github.com/JohnOmoseni/letsview",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem isteperspiciatis, dolor culpa eius animi? Lorem ipsum dolor sit amet consectetur adipisicingelit. Sed aperiam perspiciatis tempore reprehenderit expedita quis possimus placeat liberofacilis animi",
    tools: ["HTML", "CSS", "Javascript", "Vscode", "Netlify"],
  },
];

// An ecommerce game store where you can indulge in your passion for gaming and take your gaming experience to the next FaLevelDownAlt. This website is designed to cater to all your gaming normalizeRepeatedSlashes, providing you with an extensive collection of games, from popular titles to new releases
