import React from "react";
import aboutStyles from "../styles/_about.module.scss";

const About = () => {
  return (
    <>
      <h1 className={aboutStyles.title}>About</h1>
      <article className={aboutStyles.container}>
        <h2 className={aboutStyles.aboutHeader}>Where I'm Going.</h2>
        <p className={aboutStyles.aboutBodyPrimary}>
          Hello, my name is Chase! I am a junior developer looking to join a
          team where I can expand my skillset and hone my craft. My passion is
          to help individuals and companies create and interact with meaningful
          web experiences.
        </p>
        <h2 className={aboutStyles.aboutHeader}>Where I've Been.</h2>
        <p className={aboutStyles.aboutBodySecondary}>
          My interest in web development stems from my time as a teacher where
          web technologies brought content to a diverse group of individuals in
          meaningful and accessible ways. A passion was sparked and I sought to
          build my skills to bring those quality experiences to as many others
          as possible.
        </p>
        <h2 className={aboutStyles.aboutHeader}>Beyond the Screen.</h2>
        <p className={aboutStyles.aboutBodyTertiary}>
          Outside of programming I'm kind of a hobby fanatic. Whether I'm
          cooking with ingredients grown in my garden or sewing a new quilt for
          an upcoming backpacking trip, I enjoy staying busy and learning new
          things.
        </p>
      </article>
    </>
  );
};

export default About;
