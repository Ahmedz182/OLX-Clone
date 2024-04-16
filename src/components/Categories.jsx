import React from "react";
import AllCategories from "../utils/demo/AllCategories";
const Categories = () => {
  return (
    <>
      <div className="flex flex-wrap gap-x-9 gap-y-4 px-10 pt-10 sm:gap-x-2 md:gap-x-2 ">
        {AllCategories.map(({ title, img }) => {
          return (
            <div className="flex flex-col gap-2 items-center cursor-pointer">
              <img
                className="w-[88px] sm:w-[58px] md:w-[58px]"
                src={img}
                loading="lazy"
                alt="categoryImg"
              />
              <p className="w-[106px] text-center  font-semibold pt-1">
                {title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
