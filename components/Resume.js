import React from "react";
import resumeStyles from "../styles/_resume.module.scss";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <>
      <h1 className={resumeStyles.title}>Contact</h1>
      <article className={resumeStyles.container}>
        <h2 className={resumeStyles.subHead}>Let's get in touch.</h2>
        <p className={resumeStyles.body}>
          I would love to hear from you! If you'd like to know more you can view
          my work history{" "}
          <a
            className={resumeStyles.animLink}
            href="https://read.cv/chaseharbour"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          . Otherwise, feel free to shoot me a message!
        </p>
        <form className={resumeStyles.form}>
          <label for="name">Name</label>
          <input
            className={resumeStyles.formName}
            type="text"
            name="name"
            placeholder="Name *"
            required
          />
          <label for="email">Email</label>
          <input
            className={resumeStyles.formEmail}
            type="email"
            name="email"
            placeholder="Email *"
            required
          />
          <label for="subject">Subject</label>
          <input
            className={resumeStyles.formSubject}
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <label for="message">Message</label>
          <textarea
            className={resumeStyles.formMessage}
            name="message"
            placeholder="Message..."
          />
        </form>
      </article>
    </>
  );
};

export default Resume;
