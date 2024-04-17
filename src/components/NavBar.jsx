import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import car from "../assets/img/car.svg";
import userIcon from "../assets/img/user.png";
import building from "../assets/img/building.svg";
import LoginPage from "../pages/Login";
import { Modal } from "antd";
import {
  HeartOutlined,
  EyeOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const NavBar = ({ checkLogin }) => {
  // const [checkLogin, setcheckLogin] = useState(null);
  // useEffect(() => {

  // }, [checkLogin]);
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com">
          My Ads
        </a>
      ),
      icon: <SolutionOutlined />,
    },

    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com">
          Favourites and Saved
        </a>
      ),
      icon: <HeartOutlined />,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com">
          Public Profile
        </a>
      ),
      icon: <EyeOutlined />,
    },
    {
      key: "4",
      label: <hr />,
    },
    {
      key: "5",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com">
          Help
        </a>
      ),
      icon: <QuestionCircleOutlined />,
    },
    {
      key: "6",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com">
          Settings
        </a>
      ),
      icon: <SettingOutlined />,
    },
    {
      key: "7",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com">
          Logout
        </a>
      ),
      icon: <LogoutOutlined />,
    },
  ];

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

  useEffect(() => {
    if (checkLogin) {
      handleCancel;
    }
  }, [checkLogin]);

  return (
    <>
      <div className="bg-[#ffff] fixed ">
        <div className="wraper px-10 py-4 flex flex-wrap ">
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
        <div className="flex px-10 py-2 gap-3 items-center flex-wrap sm:px-5">
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
              className="w-[48dvw] search px-2 py-1 sm:w-[80dvw] md:w-[73dvw]"
              id="search"
            />
            <span className="bg-primary h-full w-12 py-2 flex items-center justify-center cursor-pointer">
              <i class="ri-search-line text-2xl text-[#ffff]"></i>
            </span>
          </span>
          {!checkLogin ? (
            <p
              onClick={showModal}
              className="text-l ms-10 mx-10 border-b-2 cursor-pointer text-text font-semibold hover:border-b-0 sm:hidden md:hidden">
              Login
            </p>
          ) : (
            <span className="flex flex-wrap items-center ps-1 gap-3 ">
              <i className="ri-chat-3-line text-2xl cursor-pointer mt-2"></i>
              <i className="ri-notification-line text-2xl cursor-pointer mt-2"></i>

              <Dropdown
                menu={{
                  items,
                }}>
                <a onClick={(e) => e.preventDefault()}>
                  <img
                    className="w-12 cursor-pointer"
                    src={userIcon}
                    alt="user"
                  />
                </a>
              </Dropdown>
            </span>
          )}

          {/* <button className="rounded-3xl btn px-3 ms-3 py-1 uppercase font-semibold"></button> */}

          <button
            className="sell sm:hidden md:hidden"
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
