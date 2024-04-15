import React from "react";

const Title = ({ title }) => {
  return (
    <div className=" px-8 py-5 flex items-center justify-between">
      <span className="text-2xl font-bold text-text">{title}</span>
      <span className="font-bold text-blue  cursor-pointer flex items-center">
        View more <i class="ri-arrow-right-s-line text-xl text-blue"></i>
      </span>
    </div>
  );
};

export default Title;
