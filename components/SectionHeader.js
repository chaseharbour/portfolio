import React, { useState, useRef, useEffect } from "react";
import useOnScreen from "../hooks/useOnScreen";
import sectionHeaderStyles from "../styles/_sectionHeader.module.scss";

const SectionHeader = ({ content }) => {
  const ref = useRef();
  const [classNames, setClassNames] = useState(
    sectionHeaderStyles.pseudoTopBorder
  );

  const onScreen = useOnScreen(ref);

  const handleClassToggle = () => {
    return onScreen
      ? setClassNames(sectionHeaderStyles.animPseudoTopBorder)
      : setClassNames(sectionHeaderStyles.pseudoTopBorder);
  };

  useEffect(() => {
    handleClassToggle();
  }, [onScreen]);

  return (
    <div ref={ref} className={sectionHeaderStyles.container}>
      <h1 className={sectionHeaderStyles.title}>{content}</h1>
      <div className={classNames}></div>
    </div>
  );
};

export default SectionHeader;
