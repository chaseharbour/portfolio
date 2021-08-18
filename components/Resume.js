import React, { useState, useEffect, useRef } from "react";
import resumeStyles from "../styles/_resume.module.scss";
import useOnScreen from "../hooks/useOnScreen";

const Resume = () => {
  const ref = useRef();
  const [classNames, setClassNames] = useState(resumeStyles.pseudoTopBorder);
  const onScreen = useOnScreen(ref);

  const handleClassToggle = () => {
    return onScreen
      ? setClassNames(resumeStyles.animPseudoTopBorder)
      : setClassNames(resumeStyles.pseudoTopBorder);
  };

  useEffect(() => {
    handleClassToggle();
  }, [onScreen]);
  return (
    <section className={classNames}>
      <article ref={ref} className={resumeStyles.container}>
        <h1 className={resumeStyles.subHead}>Let's get in touch.</h1>
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
        <form mehtod="POST" className={resumeStyles.form}>
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
          <button className={resumeStyles.btn} type="submit">
            Send
          </button>
        </form>
      </article>
    </section>
  );
};

export default Resume;
