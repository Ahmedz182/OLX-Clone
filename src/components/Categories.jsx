import React from "react";
import AllCategories from "../utils/demo/AllCategories";
const Categories = () => {
  return (
    <>
      <div className="flex flex-wrap gap-x-9 gap-y-4 px-10 pt-10 ">
        {AllCategories.map(({ title, img }) => {
          return (
            <div className="flex flex-col gap-2 items-center cursor-pointer">
              <img className="w-[88px]" src={img} alt="categoryImg" />
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
