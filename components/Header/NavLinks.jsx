import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const linksAni = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeIn",
      duration: 0.8,
    },
  },
};

function NavLinks({ title, link, idx, enabled, showNumber, onClick }) {
  return (
    <motion.span variants={enabled ? linksAni : null} onClick={enabled ? onClick : null}>
      <Link
        variants={enabled ? linksAni : null}
        onClick={enabled ? onClick : null}
        to={`${link}`}
        spy={true}
        smooth={true}
        offset={-60}
        duration={200}
      >
        {showNumber && <span className="index fw-bold ">0{idx + 1}.</span>}
        <span className="link-title fw-semi-bold">{title}</span>
      </Link>
    </motion.span>
  );
}

export default NavLinks;
