import React, { useEffect, useState } from "react";

const Item = ({ title, price, img, location, time }) => {
  const [Like, setLike] = useState(false);
  return (
    <>
      <div className="outline outline-1 flex flex-col outline-text/20 gap-3  rounded w-[23%] sm:w-[33%] md:w-[30%] cursor-pointer">
        <img src={img} className=" imgItem" alt="Mobile Image" />
        <span className="px-3  py-2 flex flex-col gap-y-4">
          <span className="flex items-center justify-between ">
            <p className=" font-semibold">Rs. {price}</p>
            <i
              className={`text-2xl ${
                Like ? "ri-heart-fill text-[#E62727]" : "ri-heart-line"
              }`}
              onClick={() => {
                if (Like) {
                  setLike(false);
                } else {
                  setLike(true);
                }
              }}></i>
          </span>
          <p className=" text-text">{title}</p>
          <span className="flex flex-col gap-1">
            <p className="text-sm text-text/80 flex ">{location}</p>
            <p className=" text-xs text-text/80 flex ">{time} Ago</p>
          </span>
        </span>
      </div>
    </>
  );
};

export default Item;
