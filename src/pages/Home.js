import React from "react";
import MainBackground from "../components/mainbackground";
import Header, { Mainlogo } from "../components/Header"; 
import MainImg1 from "../components/mainimg";
import Menu from "../components/menu";


const Home = () => {
  return (
    <div>
      <MainBackground />
      <Header/>
      <MainImg1/>
      <Menu/>
    </div>
  );
};

export default Home;
