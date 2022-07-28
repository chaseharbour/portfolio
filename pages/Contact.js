import React, { useState, useEffect, useRef } from "react";
import resumeStyles from "../styles/_contact.module.scss";
import useOnScreen from "../hooks/useOnScreen";
import ContactForm from "../components/ContactForm";

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
          I am currently looking for work and would love to hear of any
          opportunities you have. Feel free to send me a message any time!
        </p>
        <ContactForm />
      </article>
    </section>
  );
};

export default Resume;
