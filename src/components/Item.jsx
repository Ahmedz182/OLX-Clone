import React, { useEffect, useState } from "react";

const Item = ({ title, price, img, location, time }) => {
  const [Like, setLike] = useState(false);
  const [Load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3000);
  }, []);

  return (
    <>
      {!Load && (
        <div className=" animate-pulse outline outline-1 flex flex-col outline-text/20 gap-3  rounded w-[23%] sm:w-[33%] md:w-[30%] cursor-pointer">
          <span className=" imgItem bg-grey" alt="Mobile Image"></span>
          <span className="px-3  py-2 flex flex-col gap-y-4">
            <span className="flex items-center justify-between ">
              <p className=" font-semibold bg-grey text-grey">999i98898999 </p>

              <i
                className={`text-2xl cursor-pointer bg-grey text-grey ${
                  Like ? " text-[#E62727]" : " "
                }`}
                onClick={() => setLike(!Like)}
                style={{ transition: "transform 0.2s ease-in-out" }}></i>
            </span>
            <p className="  bg-grey text-grey">{title}</p>
            <span className="flex flex-col gap-1 bg-greytext-grey">
              <p className="text-sm text-grey flex bg-grey">{location}</p>
              <p className=" text-xs text-grey flex bg-grey ">{time} Ago</p>
            </span>
          </span>
        </div>
      )}
      {Load && (
        <div className=" outline outline-1 flex flex-col outline-text/20 gap-3  rounded w-[23%] sm:w-[33%] md:w-[30%] cursor-pointer">
          <img
            src={img}
            className=" imgItem "
            loading="lazy"
            alt="Mobile Image"
          />
          <span className="px-3  py-2 flex flex-col gap-y-4">
            <span className="flex items-center justify-between ">
              <p className=" font-semibold">Rs. {price}</p>

              <i
                className={`text-2xl cursor-pointer ${
                  Like ? "ri-heart-fill text-[#E62727]" : "ri-heart-line"
                }`}
                onClick={() => setLike(!Like)}
                style={{ transition: "transform 0.2s ease-in-out" }}></i>
            </span>
            <p className=" text-text">{title}</p>
            <span className="flex flex-col gap-1">
              <p className="text-sm text-text/80 flex ">{location}</p>
              <p className=" text-xs text-text/80 flex ">{time} Ago</p>
            </span>
          </span>
        </div>
      )}
    </>
  );
};

export default Item;
