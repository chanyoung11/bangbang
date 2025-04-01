import React from "react";
import mainlogoImg from "../img/mainlogo.png";
import "./Header.css";

const Mainlogo = () => {
  return (
    <div className="main-logo">
      <img src={mainlogoImg} alt="Main Logo" />
    </div>
  );
};

const AuthButtons = () => {
  return (
    <div className="auth-buttons">
      <button className="login-btn">로그인</button>
      <button className="signup-btn">회원가입</button>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <Mainlogo />
      <AuthButtons />
    </header>
  );
};
export { Mainlogo };
export default Header;


