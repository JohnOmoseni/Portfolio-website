import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

import Image from "next/image";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: "easeIn" },
  },
};

function Card({ title, imgSrc, body, tools, website, github }) {
  return (
    <motion.div
      className="card"
      variants={cardVariant}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="card-content">
        <div className="top">
          <span className="featured">Featured Project</span>
          <span className="links">
            <a
              href={github}
              aria-label="Github Link"
              target="_blank"
              rel="noreferrer noopener"
              className="icon"
            >
              <FaGithub fill="#ccc" size="18" strokeWidth="1" />
            </a>
            <a
              href={website}
              aria-label="External Link"
              target="_blank"
              rel="noreferrer noopener"
              className="icon"
            >
              <BsBoxArrowUpRight fill="#ccc" size="18" strokeWidth="1" />
            </a>
          </span>
        </div>

        <a href={website} aria-label="External Link" target="_blank" rel="noreferrer noopener">
          <h2 className="project-title">{title}</h2>
        </a>

        <a
          href={website}
          className="project-thumbnail"
          aria-label="External Link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image src={imgSrc} alt={`${title}_img`} placeholder="blur" />
        </a>

        <div className="summary">{body}</div>

        <ul className="tech-tools">
          {tools.map((tool, idx) => (
            <li key={idx}>{tool}</li>
          ))}
        </ul>
      </div>
      <a
        href={website}
        className="img-container"
        aria-label="External Link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Image src={imgSrc} alt={`${title}_img`} placeholder="blur" />
      </a>
    </motion.div>
  );
}

export default Card;
