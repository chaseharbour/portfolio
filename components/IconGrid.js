import React from "react";
import Emoji from "../components/Emoji";
import iconGridStyles from "../styles/_iconGrid.module.scss";

const IconGrid = ({ icons }) => {
  return (
    <aside className={iconGridStyles.container}>
      {icons.map((ico, i) => (
        <Emoji key={i} symbol={ico} label="emoji" />
      ))}
    </aside>
  );
};

export default IconGrid;
