import React, { useState, useEffect } from "react";
import project from "../styles/_project.module.scss";

const Project = ({ theData, onClick, key }) => {
  const handleDescClassName = (active) => {
    if (active) {
      return project.active;
    } else {
      return project.inactive;
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
      className={handleContainerClassName(theData.active)}
      onClick={() => onClick(theData.id)}
    >
      <h1 className="project-title">{theData.title}</h1>
      <p className={handleDescClassName(theData.active)}>
        {theData.description}
      </p>
    </article>
  );
};

export default Project;
