import React, { useState, useEffect } from "react";

const Project = ({ theData, onClick, key }) => {
  const handleDescClassName = (active) => {
    if (active) {
      return "project-desc active-desc";
    } else {
      return "project-desc";
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
