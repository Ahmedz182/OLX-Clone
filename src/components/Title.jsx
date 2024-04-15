import React from "react";

const Title = ({ title }) => {
  return (
    <div className="text-2xl font-bold px-8 text-text py-5">
      <span>{title}</span>
    </div>
  );
};

export default Title;
