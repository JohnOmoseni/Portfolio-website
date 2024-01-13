import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

import { navLinks } from "../constants";
import NavLinks from "./Header/NavLinks";
import SocialLinks from "./SocialLinks";

const animateMenu = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      type: "spring",
      mass: 0.3,
      ease: "easeIn",
      when: "beforeChildren",
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

function Menu({ setOpenMenu }) {
  return (
    <motion.div
      className="menu-backdrop"
      variants={animateMenu}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => setOpenMenu(false)}
    >
      <div className="menu-block" onClick={(e) => e.stopPropagation()}>
        <span
          className="close-menu"
          onClick={() => setOpenMenu(false)}
          title="close-menu"
        >
          <CgClose size="30" />
        </span>
        <nav className="nav-links">
          {navLinks.map((link, idx) => (
            <NavLinks
              key={idx}
              {...link}
              idx={idx}
              enabled
              showNumber
              onClick={() => setOpenMenu(false)}
            />
          ))}
        </nav>
        <div className="have-an-idea">
          <h2>Have an idea?</h2>
          <a
            href="#contact"
            className="subtitle"
            onClick={() => setOpenMenu(false)}
          >
            Tell me about it
          </a>
        </div>
        <SocialLinks />
      </div>
    </motion.div>
  );
}

export default Menu;
