import React from "react";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import Title from "../components/Title";

const Home = () => {
  return (
    <>
      <div className=" flex flex-col ">
        <HeroBanner />
        <Categories />
        <Title title="Mobile Phones" />
        <Title title="Cars" />
        <Title title="Bikes & Motorcycles" />
      </div>
    </>
  );
};

export default Home;
