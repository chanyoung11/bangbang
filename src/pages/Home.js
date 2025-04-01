import React from "react";
import Header, { Mainlogo } from "../components/Header";
import MainImg1 from "../components/mainimg";
import Menu from "../components/menu";
import Mainbackground from "../components/mainbackground";

const Home = () => {
  return (
    <div>
      <Mainbackground />
      <Header />
      <MainImg1 />
      <Menu />
    </div>
  );
};

export default Home;
