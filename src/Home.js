import React from "react";
import TopHeader from "./components/TopHeader";
import FilterHome from "./components/FilterHome";
import BannerSlider from "./components/BannerSlider";
// import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="pt-3">
      <div className="home">
        <TopHeader />
        <BannerSlider />
        <FilterHome />
      </div>
    </main>
  );
};

export default Home;
