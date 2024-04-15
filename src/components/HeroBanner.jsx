import React from "react";
import banner from "../assets/img/437508562-800x600.jpg";

const HeroBanner = () => {
  return (
    <div className="w-full flex items-center justify-center overflow-hidden">
      <img src={banner} alt="banner" />
    </div>
  );
};

export default HeroBanner;
