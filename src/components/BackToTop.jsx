import React from "react";

const BackToTop = () => {
  return (
    <span
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // This enables smooth scrolling
        });
      }}
      className="rounded-2xl outline bg-[#ffff]  outline-primary px-2 outline-1 flex gap-1 w-[140px] h-9 items-center  justify-center fixed left-[45%] sm:left-[35%] md:left-[40%] cursor-pointer">
      <i class="ri-arrow-up-s-line text-xl"></i>
      <span>Back to top</span>
    </span>
  );
};

export default BackToTop;
