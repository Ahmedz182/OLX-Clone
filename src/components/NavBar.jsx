import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
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
  const [checkName, setcheckName] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setcheckName(localStorage.getItem("name"));
  }, []);
  const items = [
    {
      key: "0",
      label: (
        <>
          <h3>Hello,</h3>

          <h1 className="font-medium">{checkName}</h1>
        </>
      ),
      icon: <SolutionOutlined />,
    },
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          My Ads
        </a>
      ),
      icon: <SolutionOutlined />,
    },

    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Favourites and Saved
        </a>
      ),
      icon: <HeartOutlined />,
    },
    {
      key: "3",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
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
        <a target="_blank" rel="noopener noreferrer" href="#">
          Help
        </a>
      ),
      icon: <QuestionCircleOutlined />,
    },
    {
      key: "6",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Settings
        </a>
      ),
      icon: <SettingOutlined />,
    },
    {
      key: "7",
      label: (
        <p
          onClick={() => {
            localStorage.removeItem("email");
            localStorage.removeItem("name");
            localStorage.removeItem("Login");
            window.location.reload();
          }}>
          Logout
        </p>
      ),
      danger: true,

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
        <div className="wraper px-10 py-4 flex flex-wrap items-center sm:px-5">
          <span
            className="cursor-pointer"
            onClick={() => {
              navigate(`/`);
            }}>
            <img className="w-16 p-1 sm:w-10" src={logo} alt="logo" />
          </span>
          <div className="flex items-center px-8 sm:px-1 gap-6 sm:gap-3">
            <span className="flex items-center gap-2 cursor-pointer option">
              <span className=" flex img-bg mx-1 items-center justify-center">
                {/* <i className="ri-roadster-line w-8 p-1"></i> */}
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
        <div className="flex px-10 py-2 gap-3 items-center flex-wrap sm:px-5 sm:justify-end sm:w-screen md:w-screen">
          <span className=" map    px-3 rounded cursor-pointer sm:hidden md:hidden">
            <input
              type="text"
              defaultValue="Pakistan"
              placeholder="Location or Compound"
              className="location w-48 px-2  sm:w-[70dvw] md:sm:w-[70dvw] md:w-[66dvw]"
              id="location"
            />
            <i className="ri-arrow-down-s-line py-2 text-2xl"></i>
          </span>
          <span className=" searchContainer sm:hidden md:hidden  rounded">
            <input
              type="search"
              placeholder="Find Cars,Mobile Phones and more..."
              className="w-[48dvw] search px-2 py-1 sm:w-[78dvw] md:w-[75dvw]"
              id="search"
            />
            <span className="bg-primary h-full w-12 py-2 flex items-center justify-center cursor-pointer">
              <i className="ri-search-line text-2xl text-[#ffff]"></i>
            </span>
          </span>
          <span className="flex items-center justify-end float-end">
            {!checkLogin ? (
              <p
                onClick={showModal}
                className="text-l ms-10 mx-10 border-b-2 cursor-pointer text-text font-semibold hover:border-b-0">
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
                      className="w-12 cursor-pointer me-3"
                      src={userIcon}
                      alt="user"
                    />
                  </a>
                </Dropdown>
              </span>
            )}

            {/* <button className="rounded-3xl btn px-3 ms-3 py-1 uppercase font-semibold"></button> */}

            <button
              className="sell "
              onClick={() => {
                if (localStorage.getItem("Login") === "false") {
                  showModal();
                } else {
                  alert("Do you want to sell?");
                }
              }}>
              <span className="button-content">
                <i className="ri-add-fill font-bold text-xl"></i> Sell
              </span>
            </button>
          </span>
        </div>
      </div>

      <Modal
        className="mt-[-50px]"
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
