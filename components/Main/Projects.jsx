import { motion } from "framer-motion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { projects } from "../../constants.js";

import Card from "./Card";
import Heading from "./Heading";

const containerVariant = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeIn" },
  },
};

const animateArrow = {
  animate: {
    x: [-5, 5],
    transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
  },
};

function Projects() {
  return (
    <motion.section
      className="projects"
      id="projects"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Heading name="projects" number="04." title="Some Things I've Built" />
      <div className="card-container">
        {projects && projects.map((project, idx) => <Card key={idx} {...project} />)}
      </div>

      <div className="view-more">
        <a
          href="https://github.com/JohnOmoseni"
          aria-label="External Link"
          target="_blank"
          rel="noreferrer noopener"
        >
          View More on my Github
          <motion.span variants={animateArrow} animate="animate">
            <HiOutlineArrowNarrowRight />
          </motion.span>
        </a>
      </div>
    </motion.section>
  );
}

export default Projects;
