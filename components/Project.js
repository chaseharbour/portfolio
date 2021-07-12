import React, { useState, useEffect } from "react";
import projectStyles from "../styles/_project.module.scss";

import { motion } from "framer-motion";

const Project = React.forwardRef(({ theData, onClick, key }, ref) => {
  const handleClassName = (active) => {
    if (active) {
      return projectStyles.active;
    } else {
      return projectStyles.inactive;
    }
  };

  return (
    <article
      ref={ref}
      className={handleClassName(theData.active)}
      onClick={() => onClick(theData.id)}
    >
      <h1 className={projectStyles.title}>{theData.title}</h1>
      <p ref={ref}>{theData.description}</p>
    </article>
  );
});

export default Project;
