import React from "react";
import emojiStyles from "../styles/_emoji.module.scss";

const Emoji = ({ symbol, label }) => {
  return (
    <span
      className={emojiStyles.emoji}
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  );
};

export default Emoji;
