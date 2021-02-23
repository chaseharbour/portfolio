import React from "react";
import techIcons from "../styles/_tech-icons.module.scss";
import cssIcon from "../public/icons/css3.svg";
import gatsbyIcon from "../public/icons/gatsby.svg";
import htmlIcon from "../public/icons/html5.svg";
import jsIcon from "../public/icons/javascript.svg";
import nextjsIcon from "../public/icons/nextjs.svg";
import reactIcon from "../public/icons/react.svg";
import sassIcon from "../public/icons/sass.svg";
import technologiesStyles from '../styles/_technologies.module.scss';

const techIconArr = [
  htmlIcon,
  cssIcon,
  jsIcon,
  gatsbyIcon,
  nextjsIcon,
  reactIcon,
  sassIcon,
];

const Technologies = () => {
  return (
    <section className={technologiesStyles.container}>
      <h2 className={technologiesStyles.techHeader}>
        Technologies I am Confident With
      </h2>
      <ul className={technologiesStyles.list}>
        {techIconArr.map((ico) => (
          <li className={technologiesStyles.listItems}>
            <img className={techIcons.tech} src={ico}></img>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Technologies;
