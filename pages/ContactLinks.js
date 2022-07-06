import React from "react";
import contactLinksStyles from "../styles/_contactLinks.module.scss";
import techIcons from "../styles/_tech-icons.module.scss";

const personalLinks = [
  {
    link: "https://github.com/chaseharbour",
    iconName: "github",
  },
  {
    link: "https://www.linkedin.com/in/chase-harbour-46a79620b/",
    iconName: "linkedin",
  },
];
const ContactLinks = () => {
  return (
    <article className={contactLinksStyles.container}>
      <h2 className={contactLinksStyles.header}>Find Me At.</h2>
      <ul className={contactLinksStyles.list}>
        {personalLinks.map((item) => (
          <li className={contactLinksStyles.listItems}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                className={techIcons.tech}
                src={`/icons/${item.iconName}.svg`}
              ></img>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ContactLinks;
