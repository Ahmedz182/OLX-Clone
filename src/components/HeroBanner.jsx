import React from "react";
import banner from "../assets/img/437508562-800x600.jpg";

const HeroBanner = () => {
  return (
    <div className="w-full h-40 mt-7 flex items-center sm:h-52 justify-center overflow-hidden">
      <img src={banner} alt="banner" loading="lazy" />
    </div>
  );
};

export default HeroBanner;
