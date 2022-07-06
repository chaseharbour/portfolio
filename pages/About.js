import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import IconGrid from "../components/IconGrid";
import aboutStyles from "../styles/_about.module.scss";

const About = () => {
  return (
    <section>
      <SectionHeader content="About" />
      <article className={aboutStyles.container}>
        <aside className={aboutStyles.asideContainer}>
          <h2 className={aboutStyles.aboutHeader}>Where I'm Going.</h2>
          <p className={aboutStyles.aboutBody}>
            Hello, my name is Chase! I am a junior developer looking to join a
            team where I can expand my skillset and hone my craft.
          </p>
          <p className={aboutStyles.aboutBody}>
            My passion is to help individuals and organizations create and
            interact with meaningful web experiences.
          </p>
        </aside>
        <IconGrid
          className={aboutStyles.iconGrid}
          icons={["🧑", "💻", "🌐", "👍"]}
        />
        <aside className={aboutStyles.asideContainer}>
          <h2 className={aboutStyles.aboutHeader}>Where I've Been.</h2>
          <p className={aboutStyles.aboutBody}>
            My interest in web development stems from my time as a teacher where
            web technologies brought content to a diverse group of individuals
            in meaningful and accessible ways.
          </p>
          <p className={aboutStyles.aboutBody}>
            A passion was sparked and I sought to build my skills to bring those
            quality experiences to as many others as possible.
          </p>
        </aside>
        <IconGrid icons={["🧑‍🎓", "📖", "💡", "🧑‍💻"]} />
        <aside className={aboutStyles.asideContainer}>
          <h2 className={aboutStyles.aboutHeader}>Beyond the Screen.</h2>
          <p className={aboutStyles.aboutBody}>
            Outside of programming I'm kind of a hobby fanatic. Whether I'm
            cooking with ingredients grown in my garden or sewing a new quilt
            for an upcoming backpacking trip, I enjoy staying busy and learning
            new things.
          </p>
        </aside>
        <IconGrid icons={["🧑‍🍳", "🪡", "🏕️", "🧑‍🌾"]} />
      </article>
    </section>
  );
};

export default About;
