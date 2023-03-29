import React from "react";
import { motion } from "framer-motion";
import { jobs } from "../../constants";

const containerVariant = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

function TabsPanel({ activeTab, id, idx }) {
  const { jobTitle, company, link, year, description } = jobs[idx];
  return (
    <>
      {activeTab === id ? (
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="animate"
          key={idx}
          role="tabpanel"
          tabIndex={idx}
          aria-labelledby={id}
          aria-hidden={activeTab === id ? "false" : "true"}
          className={activeTab === id ? "tab-panel active" : "tab-panel"}
        >
          <h3>
            <span className="jobtitle">{jobTitle}</span>
            <span className={`company company-${idx}`}>
              &nbsp;@&nbsp;
              <a href={link} className="inline-link" rel="noopener noreferrer" target="_blank">
                {company}
              </a>
            </span>
          </h3>
          <p className="years">{year}</p>
          <ul className="description">
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ) : null}
    </>
  );
}

export default TabsPanel;
