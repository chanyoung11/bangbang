// mainimg.jsx
import React, { useEffect, useState } from "react";
import "./mainimg1.css";

import main1 from "../img/놀이.png";
import main2 from "../img/게시판.png";
import main3 from "../img/정보.png";

const slides = [
  {
    backgroundColor: "#F6F6D3",
    image: main1,
    loginColor: "#FFBF00", // 노랑
  },
  {
    backgroundColor: "#C5ECD1",
    image: main2,
    loginColor: "#75E15F", // 연초록
  },
  {
    backgroundColor: "#FAD2D3",
    image: main3,
    loginColor: "#F3887F", // 연핑크
  },
];

const MainImg = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <div
      className="main-img-container"
      style={{
        backgroundColor: current.backgroundColor,
      }}
    >
      <img src={current.image} alt="메인이미지" className="main-image" />  

      <div className="top-right">
        <button
          className="login-button"
          style={{ backgroundColor: current.loginColor }}
        >
          로그인
        </button>
        <button
          className="signup-button"
          style={{ backgroundColor: current.loginColor }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default MainImg;
