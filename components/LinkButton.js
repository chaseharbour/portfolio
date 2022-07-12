import React from "react";
import LinkButtonStyles from "../styles/_linkButton.module.scss";

const LinkButton = ({ label, dest, content }) => {
  return (
    <a className={LinkButtonStyles.link} aria-label={label} href={dest}>
      {content}
    </a>
  );
};

export default LinkButton;
