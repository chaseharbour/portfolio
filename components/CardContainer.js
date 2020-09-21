import React from "react";
import ProjectCard from "./ProjectCard";
import container from "../styles/_cardContainer.module.scss";

const CardContainer = () => {
  return (
    <div className={container.background}>
      <div className={container.container}>
        <ProjectCard
          title="Test Project"
          tech="HTML, Javascript, CSS"
          description="This is a short description of the project."
        />
        <ProjectCard
          title="This is a longer title"
          tech="Next js, Sass"
          description="This is a test for a slightly longer description of the project."
        />
      </div>
    </div>
  );
};

export default CardContainer;
