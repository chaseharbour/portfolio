import React from "react";
import ProjectCard from "./ProjectCard";
import container from "../styles/_cardContainer.module.scss";
import portfolioPreview from "../public/portfolio-preview.png";
import savedditPreview from "../public/saveddit-preview.png";

const CardContainer = () => {
  return (
    <section className={container.background}>
      <article className={container.container}>
        <ProjectCard
          title="Saveddit"
          imgSrc={savedditPreview}
          tech={["React", "NodeJS", "Sass"]}
          description="Web application to view any static image that you have saved to your Reddit account."
          links={[
            {
              type: "live",
              link: "https://practical-davinci-5eeef8.netlify.app/",
            },
            {
              type: "repository",
              link: "https://github.com/chaseharbour/scheddit",
            },
          ]}
        />
        <ProjectCard
          title="Socket.io Trivia"
          tech={["React", "NodeJS", "Tailwind"]}
          description="Room-based triva and chat app. Compete and chat with friends in this multiplayer trivia game."
          links={[
            {
              type: "repository",
              link: "https://github.com/chaseharbour/react_express_trivia",
            },
          ]}
        />
        <ProjectCard
          title="Portfolio Website"
          imgSrc={portfolioPreview}
          tech={["NextJS", "Sass"]}
          description="Website to display brief information about who I am as a developer and a person."
          links={[
            {
              type: "repository",
              link: "https://github.com/chaseharbour/portfolio",
            },
          ]}
        />
      </article>
    </section>
  );
};

export default CardContainer;
