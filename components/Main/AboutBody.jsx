import React from "react";
import { motion } from "framer-motion";

import Skills from "./Skills";

function AboutBody({ variant }) {
  return (
    <div variants={variant} className="about-body">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat pariatur animi quis sequi
        cum alias explicabo doloremque modi mollitia distinctio quam voluptates officiis voluptatum
        commodi, iste expedita! At, illo hic.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio vel porro exercitationem
        nisi nesciunt delectus rerum, aliquam magni distinctio impedit.
      </p>

      <div className="tools">
        <p>Here are a few technologies I&lsquo;ve been working with recently:</p>

        <ul className="skills">
          <Skills title="Typescript" />
          <Skills title="Three.js" />
          <Skills title="Ether.js" />
          <Skills title="Solidity" />
        </ul>
      </div>
    </div>
  );
}

export default AboutBody;
