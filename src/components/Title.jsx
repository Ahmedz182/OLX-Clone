import React from "react";
import { useNavigate } from "react-router-dom";
//
const Title = ({ title, product }) => {
  const navigate = useNavigate();
  return (
    <div className=" px-8 py-5 flex items-center justify-between">
      <span className="text-2xl font-bold text-text">{title}</span>
      <span
        className="font-bold text-blue  cursor-pointer flex items-center "
        onClick={() => {
          navigate(`/${product}`);
        }}>
        View more <i className="ri-arrow-right-s-line text-xl text-blue"></i>
      </span>
    </div>
  );
};

export default Title;
