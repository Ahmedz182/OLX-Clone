import React from "react";
import AllCategories from "../utils/demo/AllCategories";
const Categories = () => {
  const i = 1;
  return (
    <>
      <div className="flex flex-wrap gap-x-9 gap-y-4 px-10 pt-10 sm:pt-0 sm:gap-x-1 md:gap-x-0  sm:py-4 md:py-6 ">
        {AllCategories.map(({ title, img }) => {
          return (
            <div
              key={i + 1}
              className="flex flex-col gap-2 items-center cursor-pointer sm:gap-0 md:gap-0">
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
