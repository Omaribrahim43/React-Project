import React from "react";
import Navbar from "../Layout/Navbar";
import MainFooter from "../Layout/MainFooter";
import Hero from "./Sections/Hero";
import Category from "./Sections/Category";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <MainFooter />
    </div>
  );
};

export default Home;
