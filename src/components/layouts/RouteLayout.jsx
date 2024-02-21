/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Navbar";
import NavHeader from "../NavHeader";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const RouteLayout = () => {
  return (
    <>
      <Navbar />
      <NavHeader />
      <Outlet/>
      <Footer />
    </>
  );
};

export default RouteLayout;
