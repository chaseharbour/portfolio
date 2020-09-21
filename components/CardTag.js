import React from "react";
import tag from "../styles/_card-tag.module.scss";

const CardTag = (props) => {
  const data = ["HTML", "CSS", "Javascript"];
  return (
    <div className={tag.container}>
      <ul className={tag.list}>
        {data.map((t, i) => {
          return (
            <li key={i} className={tag.tag}>
              {t}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardTag;
