import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import car from "../assets/img/car.svg";
import building from "../assets/img/building.svg";
import LoginPage from "../pages/Login";
import { Modal } from "antd";
const NavBar = () => {
  const checkLogin = localStorage.getItem("Login");
  useEffect(() => {}, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-[#ffff] fixed ">
        <div className="wraper px-8 py-4 flex flex-wrap ">
          <span>
            <img className="w-16 p-1" src={logo} alt="logo" />
          </span>
          <div className="flex items-center px-8 gap-6">
            <span className="flex items-center gap-2 cursor-pointer option">
              <span className=" flex img-bg mx-1 items-center justify-center">
                {/* <i class="ri-roadster-line w-8 p-1"></i> */}
                <img className="w-8 p-1" src={car} alt="React Logo" />
              </span>
              <p className="text-[1.1rem] text-primary font-bold">Motors</p>
            </span>
            <span className="flex items-center gap-2 cursor-pointer option">
              <span className=" flex img-bg mx-1 items-center justify-center">
                <img className="w-8 p-1" src={building} alt="React Logo" />
              </span>
              <p className="text-[1.1rem] text-primary font-bold">Property</p>
            </span>
          </div>
        </div>
        <div className="flex px-10 py-2 gap-5 items-center flex-wrap sm:px-5">
          <span class=" map    px-3 rounded cursor-pointer ">
            <input
              type="text"
              value="Pakistan"
              placeholder="Location or Compound"
              className="location w-48 px-2  sm:w-[85dvw] md:sm:w-[85dvw] md:w-[66dvw]"
              id="location"
            />
            <i class="ri-arrow-down-s-line py-2 text-2xl"></i>
          </span>
          <span class=" searchContainer   rounded">
            <input
              type="search"
              placeholder="Find Cars,Mobile Phones and more..."
              className="w-[50dvw] search px-2 py-1 sm:w-[80dvw] md:w-[73dvw]"
              id="search"
            />
            <span className="bg-primary h-full w-12 py-2 flex items-center justify-center cursor-pointer">
              <i class="ri-search-line text-2xl text-[#ffff]"></i>
            </span>
          </span>
          <p
            onClick={showModal}
            className="text-l ms-5 border-b-2 cursor-pointer text-text font-semibold hover:border-b-0 sm:hidden md:hidden">
            Login
          </p>
          {/* <button className="rounded-3xl btn px-3 ms-3 py-1 uppercase font-semibold"></button> */}

          <button
            className="sell ms-4 sm:hidden md:hidden"
            onClick={() => {
              if (localStorage.getItem("Login") === "false") {
                showModal();
              } else {
                alert("Do you want to sell?");
              }
            }}>
            <span class="button-content">
              <i class="ri-add-fill font-bold text-xl"></i> Sell
            </span>
          </button>
        </div>
      </div>

      <Modal
        className="mt-[-50px]"
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}>
        <span className="flex justify-center mt-8">
          <img src={logo} className="w-20" />
        </span>
        <LoginPage />
      </Modal>
    </>
  );
};

export default NavBar;
