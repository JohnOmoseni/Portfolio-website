import React from "react";
import { motion } from "framer-motion";

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 9.8,
      duration: 2,
      type: "spring",
      ease: "easeIn",
    },
  },
};

function Sidebar({ children, orientation }) {
  return (
    <motion.div
      className={`sidebar ${orientation}`}
      variants={itemMain}
      initial="hidden"
      animate="show"
    >
      {children}
      <span className="line"></span>
    </motion.div>
  );
}

export default Sidebar;
