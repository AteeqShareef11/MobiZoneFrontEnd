import React from "react";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainContent = () => {
  const p=useParams()
  useEffect(()=>{
      window.scrollTo(0,0)
    },[p])
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default MainContent;
