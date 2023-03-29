import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

import Image from "next/image";

function Card({ title, imgSrc, body, tools }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="top">
          <span className="featured">Featured Project</span>
          <span className="links">
            <a
              href="https://www.github.com/bchiang7"
              aria-label="Github Link"
              target="_blank"
              rel="noreferrer noopener"
              className="icon"
            >
              <FaGithub fill="#ccc" size="18" strokeWidth="1" />
            </a>
            <a
              href="https://halcyon-theme.netlify.com/"
              aria-label="External Link"
              target="_blank"
              rel="noreferrer noopener"
              className="icon"
            >
              <BsBoxArrowUpRight fill="#ccc" size="18" strokeWidth="1" />
            </a>
          </span>
        </div>

        <a href="https://halcyon-theme.netlify.com/">
          <h2 className="project-title">{title}</h2>
        </a>

        <a href="https://halcyon-theme.netlify.com/" className="project-thumbnail">
          <Image src={imgSrc} alt={`${title}_img`} placeholder="blur" />
        </a>

        <div className="summary">{body}</div>

        <ul className="tech-tools">
          {tools.map((tool, idx) => (
            <li key={idx}>{tool}</li>
          ))}
        </ul>
      </div>
      <a href="https://halcyon-theme.netlify.com/" className="img-container">
        <Image src={imgSrc} alt={`${title}_img`} placeholder="blur" />
      </a>
    </div>
  );
}

export default Card;
