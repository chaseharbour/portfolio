import React, { useState, useEffect, forwardRef } from "react";
import LinkButton from "./LinkButton";
import projectStyles from "../styles/_project.module.scss";

import { motion } from "framer-motion";

const Project = forwardRef(({ data, handler, active }, ref) => {
  const handleClassName = (active) => {
    if (active) {
      return projectStyles.active;
    } else {
      return projectStyles.inactive;
    }
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const handleTitleLength = (active) => {
    if (!active) {
      return data.title.replace(/[-_]/gm, " ").length > 10
        ? data.title
            .replace(/[-_]/gm, " ")
            .split("")
            .slice(0, 9)
            .join("")
            .concat("...")
        : data.title.replace(/[-_]/gm, " ");
    }

    return data.title.replace(/[-_]/gm, " ");
  };

  return (
    <motion.article
      ref={ref}
      className={projectStyles.project}
      onClick={() => handler(data.id)}
      transition={spring}
      layout
      data-isActive={data.active}
    >
      <h1 className={projectStyles.title}>{handleTitleLength(data.active)}</h1>
      {active ? <p className={projectStyles.desc}>{data.description}</p> : null}
      {active ? (
        <LinkButton
          label={`Link to github repo for project: ${data.title}`}
          dest={data.url}
          content="GitHub Repo"
        />
      ) : null}
    </motion.article>
  );
});

export default Project;
