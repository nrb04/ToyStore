import React from "react";
import NavBar from "./headfoot/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./headfoot/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
