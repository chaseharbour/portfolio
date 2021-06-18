import React, { useState, useEffect } from "react";
import projectStyles from "../styles/_project.module.scss";

const Project = ({ theData, onClick, key }) => {
  const handleClassName = (active) => {
    if (active) {
      return projectStyles.active;
    } else {
      return projectStyles.inactive;
    }
  };

  const handleContainerClassName = (active) => {
    if (active) {
      return "project-container-active";
    } else {
      return "project-container";
    }
  };

  return (
    <article
      className={handleClassName(theData.active)}
      onClick={() => onClick(theData.id)}
    >
      <h1 className={projectStyles.title}>{theData.title}</h1>
      <p>{theData.description}</p>
    </article>
  );
};

export default Project;
