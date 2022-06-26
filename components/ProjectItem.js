import { motion } from "framer-motion";
import React, { forwardRef } from "react";
import projectStyles from "../styles/_project.module.scss";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const transition = {
  delay: 0.1,
};

const ProjectItem = forwardRef(({ active, handler, data }, ref) => {
  return (
    <motion.div
      className="project"
      data-isActive={data.active}
      layout
      transition={spring}
      ref={ref}
      onClick={() => handler(data.id)}
    >
      <h1>{data.title}</h1>
      {active ? <p>I'm active!</p> : null}
    </motion.div>
  );
});

export default ProjectItem;
