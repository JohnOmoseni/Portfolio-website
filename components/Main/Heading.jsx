import React from "react";
import { motion } from "framer-motion";

function Heading({ variant, name, number, title, disabled }) {
  return (
    <div variants={variant} className={`${name}-heading heading`}>
      {number && <div className="tag fw-semi-bold">{number}</div>}
      <h2 className="title">{title}</h2>
      {!disabled && <div className="line"></div>}
    </div>
  );
}

export default Heading;
