import React from "react";
import resumeStyles from "../styles/_resume.module.scss";

const Resume = () => {
  return (
    <article className={resumeStyles.container}>
      <h2 className={resumeStyles.header}>CV.</h2>
      <p className={resumeStyles.body}>
        My CV is located at the link below. If you'd like to reach me, email is
        always a great option: harbourcp@gmail.com
      </p>
      <a
        className={resumeStyles.link}
        href="https://read.cv/chaseharbour"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit CV
      </a>
    </article>
  );
};

export default Resume;
