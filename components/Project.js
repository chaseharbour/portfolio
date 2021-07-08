import React, { useState, useEffect } from "react";
import projectStyles from "../styles/_project.module.scss";

import { motion } from "framer-motion";

const Project = ({ theData, onClick, key }) => {
  const transition = {
    repeat: 0,
    duration: 2,
    delay: 2,
  };

  const variants = {
    shown: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
      },
    },
    hidden: { opacity: 0.7 },
  };

  const pVariants = {
    shown: { opacity: 1 },
    hidden: { opacity: 0.8 },
  };

  const handleClassName = (active) => {
    if (active) {
      return projectStyles.active;
    } else {
      return projectStyles.inactive;
    }
  };

  return (
    <motion.article
      animate={theData.active ? "shown" : "hidden"}
      layoutId={theData.active ? "active" : null}
      className={handleClassName(theData.active)}
      onClick={() => onClick(theData.id)}
    >
      <h1 className={projectStyles.title}>{theData.title}</h1>
      <p>{theData.description}</p>
    </motion.article>
  );
};

export default Project;
