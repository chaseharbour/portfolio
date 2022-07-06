import React, { useState, useEffect } from "react";
import projectContainer from "../styles/_projectContainer.module.scss";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import Project from "../components/Project";

const Work = ({ repos }) => {
  const [data, setData] = useState([]);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setData(
      repos.map((r, i) => {
        return {
          id: i,
          title: r.name,
          description: r.description,
          url: r.html_url,
          active: false,
        };
      })
    );
  }, []);

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

    //Activates only the project that matches the id of the one clicked.
    const project = projectsCopy.find((proj) => proj.id === id);
    project.active = !project.active;
    setData(projectsCopy);
  };

  /* When a Project component is clicked on, it becomes active. It will be placed in a separate grid comlumn to the left, the headers for the other projects will be positioned to the right and will become a single column. */
  // {
  //   if (isActive) {
  //     //If there is a project that has been clicked on, this markup will be applied.
  //     return (
  //       <>
  //         <SectionHeader content="Work" />
  //         <section
  //           className={`${projectContainer.active} ${projectContainer.container}`}
  //         >
  //           {data.map((proj) => {
  //             if (proj.active) {
  //               return (
  //                 <MotionProject
  //                   animate={{ x: 10, scale: 1 }}
  //                   isActive={proj.active}
  //                   onClick={handleProjectClicked}
  //                   theData={proj}
  //                   key={proj.id}
  //                 />
  //               );
  //             }
  //           })}

  //           <aside
  //             className={`${projectContainer.aside} ${projectContainer.container}`}
  //           >
  //             {data.map((proj, i) => {
  //               if (!proj.active) {
  //                 return (
  //                   <MotionProject
  //                     isActive={proj.active}
  //                     onClick={handleProjectClicked}
  //                     theData={proj}
  //                     key={proj.id}
  //                   />
  //                 );
  //               }
  //             })}
  //           </aside>
  //           <div className={projectContainer.imgContainer}>
  //             <ProjectImages />
  //           </div>
  //         </section>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <SectionHeader content="Work" />
  //         <section
  //           className={`${projectContainer.inactive} ${projectContainer.container}`}
  //         >
  //           {data.map((proj, i) => (
  //             <MotionProject
  //               animate={{ scale: 0.95 }}
  //               isActive={proj.active}
  //               onClick={handleProjectClicked}
  //               theData={proj}
  //               key={proj.id}
  //             />
  //           ))}
  //           <div className={projectContainer.imgContainer}>
  //             <ProjectImages />
  //           </div>
  //         </section>
  //       </>
  //     );
  //   }
  // }

  return (
    <section className={projectContainer.work}>
      <SectionHeader content="Work" />

      <aside className={projectContainer.container}>
        {data.map((proj) => (
          <motion.article
            className={projectContainer.item}
            data-isActive={proj.active}
            data-anyActive={isActive && !proj.active}
          >
            <Project
              handler={handleProjectClicked}
              active={proj.active}
              data={proj}
            />
          </motion.article>
        ))}
      </aside>
    </section>
  );
};

export default Work;
