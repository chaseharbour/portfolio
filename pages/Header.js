import React from "react";
import Image from "next/image";
import headerStyles from "../styles/_header.module.scss";
import dynamic from "next/dynamic";

const DynamicCanvas = dynamic(() => import("../components/Canvas"));

const Header = () => (
  <header className={headerStyles.container}>
    <h1 className={headerStyles.firstname}>Chase</h1>
    <div className={headerStyles.imgContainer}>
      <div className={headerStyles.canvasContainer}>
        <DynamicCanvas />
      </div>
      {/* <div className={headerStyles.imgRight}>
        <Image
          className={headerStyles.img}
          src="/headshot.jpg"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div> */}

      {/* <div className={headerStyles.imgRight}></div> */}
    </div>
    <h1 className={headerStyles.lastname}>Harbour</h1>
  </header>
);

export default Header;
