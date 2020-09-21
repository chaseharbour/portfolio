import React from "react";
import card from "../styles/_card.module.scss";
import CardTag from "./CardTag";

const ProjectCard = (props) => {
  return (
    <article className={card.wrapperSm}>
      {props.imgSrc ? (
        <img src={props.imgSrc}></img>
      ) : (
        <div className={card.imgPh}></div>
      )}
      <p className={card.title}>{props.title}</p>
      <CardTag />
      <p className={card.desc}>{props.description}</p>
    </article>
  );
};

export default ProjectCard;

//<p className={card.tech}>{props.tech}</p>
