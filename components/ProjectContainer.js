import React, { useState, useEffect } from "react";
import Project from "./Project";
import projectContainer from "../styles/_projectContainer.module.scss";

const ProjectContainer = () => {
  const [data, setData] = useState([
    {
      id: 0,
      active: false,
      title: "Saveddit",
      description:
        "Web application to view any static image that a user has saved to their Reddit account.",
    },
    {
      id: 1,
      active: false,
      title: "My Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Mus mauris vitae ultricies leo integer malesuada nunc. Convallis convallis tellus id interdum velit laoreet id.",
    },
    {
      id: 2,
      active: false,
      title: "My Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Mus mauris vitae ultricies leo integer malesuada nunc. Convallis convallis tellus id interdum velit laoreet id.",
    },
    {
      id: 3,
      active: false,
      title: "My Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Mus mauris vitae ultricies leo integer malesuada nunc. Convallis convallis tellus id interdum velit laoreet id.",
    },
  ]);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const projectsCopy = [...data];
    const activeCheck = projectsCopy.find((proj) => proj.active === true);

    if (activeCheck) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [data]);

  //When an element is clicked on, it will toggle a class that shows or hides the <p> tag within the Project component.

  const handleProjectClicked = (id) => {
    const projectsCopy = [...data];

    //Ensures that only one project can be active at a time
    projectsCopy.forEach((proj) => {
      if (proj.id !== id) {
        proj.active = false;
      } else {
        return;
      }
    });
    const project = projectsCopy.find((proj) => proj.id === id);
    project.active = !project.active;
    setData(projectsCopy);
  };

  const handleGetClassName = (active) => {
    if (active) {
      return "container-active";
    } else {
      return "container";
    }
  };

  /* When a Project component is clicked on, it becomes active. It will be placed in a previously empty container place to the left, the headers for the other projects will be positioned to the right and will become a single column. */
  {
    if (isActive) {
      return (
        <section className={projectContainer.active}>
          <article>
            {data.map((proj) => {
              if (proj.active) {
                return (
                  <Project
                    isActive={proj.active}
                    onClick={handleProjectClicked}
                    theData={proj}
                    key={proj.id}
                  />
                );
              }
            })}
          </article>
          <aside>
            {data.map((proj, i) => {
              if (!proj.active) {
                return (
                  <Project
                    isActive={proj.active}
                    onClick={handleProjectClicked}
                    theData={proj}
                    key={proj.id}
                  />
                );
              }
            })}
          </aside>
        </section>
      );
    } else {
      return (
        <section className={projectContainer.inactive}>
          {data.map((proj, i) => (
            <Project
              isActive={proj.active}
              onClick={handleProjectClicked}
              theData={proj}
              key={proj.id}
            />
          ))}
        </section>
      );
    }
  }
};

export default ProjectContainer;
