import React from "react";
import bgImage from "../img/backgroundimg.png";
import "./mainbackground.css";

const MainBackground = () => {
  return (
    <div
      className="main-background"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
  );
};

export default MainBackground;
