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
