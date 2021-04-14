import React from "react";
import card from "../styles/_card.module.scss";
import CardTag from "./CardTag";

const ProjectCard = (props) => {
  const { tech } = props;
  return (
    <aside className={card.wrapperSm}>
      {props.imgSrc ? (
        <img
          className={card.projectImg}
          src={props.imgSrc}
          alt={`${props.title} preview`}
        ></img>
      ) : (
        <div className={card.imgPh}></div>
      )}
      <p className={card.title}>{props.title}</p>
      <CardTag techTags={tech} />
      <p className={card.desc}>{props.description}</p>
      {props.links ? (
        <div className={card.linksContainer}>
          {props.links.map((link) =>
            link.type === "repository" ? (
              <a
                className={card.link}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            ) : (
              <a
                className={card.link}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            )
          )}
        </div>
      ) : null}
    </aside>
  );
};

export default ProjectCard;
