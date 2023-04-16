import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import SocialLinks from "../SocialLinks";

const animateArrow = {
  animate: {
    y: [-3, 3],
    transition: { duration: 0.5, type: "spring", repeat: Infinity, repeatType: "reverse" },
  },
};

function Footer() {
  return (
    <footer>
      <div className="even-row">
        <div className="scroll-to-top">
          <a href="#home" rel="noreferrer noopener">
            Scroll to Top
            <motion.span variants={animateArrow} animate="animate">
              <HiOutlineArrowNarrowUp />
            </motion.span>
          </a>
        </div>
        <SocialLinks />
      </div>
      <div className="even-row">
        <span className="footer-text">
          Designed and built with &#10084; by <span className="ff-variant">Johnny Omoseni</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
