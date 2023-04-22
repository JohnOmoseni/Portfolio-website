import { motion } from "framer-motion";
import Heading from "./Heading";
import Skills from "./Skills";

import CSS3 from "../Svgs/Css3";
import Html5 from "../Svgs/Html5";
import Sass from "../Svgs/Sass";
import Node from "../Svgs/Node";
import MongoDB from "../Svgs/Mongodb";
import Typescript from "../Svgs/Typescript";
import Js from "../Svgs/JS";
import NextJS from "../Svgs/Nextjs";
import Git from "../Svgs/Git";
import Firebase from "../Svgs/Firebase";

const containerVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", duration: 1.2, staggerChildren: 0.3 },
  },
};
const skillsArray = [
  { heading: "Languages", skills: ["Javascript (ES6)", "TypeScript", "HTML", "CSS/SASS"] },
  { heading: "Tools", skills: ["Bash", "Git & Github", "Codekit", "Chrome DevTools"] },
  { heading: "Frameworks", skills: ["NEXT", "Node", "Express", "Wordpress"] },
  { heading: "Design", skills: ["Sketch", "Figma", "Font Awesome", "User Testing"] },
];

function Services() {
  return (
    <motion.section
      className="skills-section"
      id="skills"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Heading name="skills" number="03." title="My Superpowers" />
      <ul className="skills-list">
        {skillsArray.map((skill, idx) => {
          return <Skills {...skill} key={idx} />;
        })}
      </ul>
      <div className="nav-container">
        <div className="nav">
          <Html5 />
          <CSS3 />
          <Js />
          <Sass />
          <NextJS />
          <Typescript />
          <Git />
          <Node />
          <MongoDB />
          <Firebase />
        </div>

        <div className="core-container"></div>
        <div className="outer-core"></div>
        <div className="main-core-border1"></div>
        <div className="core-border2"></div>
        <div className="core-border1"></div>
        <div className="core"></div>
      </div>
    </motion.section>
  );
}

export default Services;
