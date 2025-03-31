import React, { useState } from "react";
import "./menu.css";

const Menu = () => {

  const menus = [
    { title: "놀이", color: "#F2887E" , description: "놀이 설명" },
    { title: "게시판", color: "#91D9D2", description: "게시판 설명" },
    { title: "정보", color: "#D9D9D9", description: "정보 설명" },
    { title: "마이페이지", color: "#F2CB05", description: "마이페이지 설명" }
  ];

  return (
    <div className="menu-container">
      {menus.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          color={item.color}
          description={item.description}
        />
      ))}
    </div>
  );
};

const MenuItem = ({ title, color, description }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`menu-item ${hover ? "hover" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ backgroundColor: color }} 
    >
      <span className="menu-title">{title}</span>
      {hover && (
        <div className="menu-description">
          {description} 
        </div>
      )}
    </div>
  );
};

export default Menu;
