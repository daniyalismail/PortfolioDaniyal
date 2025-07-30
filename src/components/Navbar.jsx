import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerActive, setDrawerActive] = useState(false);

  const handleOpen = () => {
    setDrawerVisible(true);
    setTimeout(() => {
      setDrawerActive(true);
    }, 50);
  };

  const handleClose = () => {
    setDrawerActive(false);
    setTimeout(() => {
      setDrawerVisible(false);
    }, 300);
  };

  return (
    <div className="w-screen nav-outer text-white flex flex-col font-normal bg-black justify-center">
      <div className="nav-outer-2 flex w-[90%] items-center justify-between p-3 mx-auto">
        <div className="image w-[6%]">
          <img src="/logo3.png" alt="Logo" />
        </div>

        <ul className="flex justify-between text-xl w-[60%]">
          {["Home", "About Me", "Contact", "Projects"].map((text, i) => (
            <li key={i}>
              <NavLink
                to={`/${text.toLowerCase().replace(" ", "")}`}
                className={({ isActive }) =>
                  `transition-all duration-300 delay-150 ease-in-out border-b-2 border-transparent hover:border-b-4 hover:border-white hover:-translate-y-1 hover:scale-110 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                      : ""
                  }`
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>

        <div
          className="connect"
          href="https://www.linkedin.com/in/daniyal-ismail/"
          target="_blank"
        >
          <button className="text-xl transition delay-150 mr-2 ml-2 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-3 rounded-3xl">
            <a
              href="https://www.linkedin.com/in/daniyal-ismail/"
              target="_blank"
            >
              Connect with Me
            </a>
          </button>
        </div>

        <div className="menu mr-1 w-[5%] flex justify-center items-center">
          <button onClick={handleOpen}>
            <FontAwesomeIcon
              icon={faBars}
              className="text-2xl hover:text-cyan-500 transition duration-300"
            />
          </button>
        </div>
      </div>

      {drawerVisible && (
        <div
          className={`fixed top-0 left-0 w-full h-1/4 bg-white z-50 shadow-lg flex flex-col items-center justify-between drawer-outer p-4
            transition-all duration-300 ease-in-out
            ${
              drawerActive
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
        >
          <div className="flex mr-2 drawer justify-between items-center w-[100%]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                    : "text-black"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutme"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                    : "text-black"
                }`
              }
            >
              About Me
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                    : "text-black"
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                    : "text-black"
                }`
              }
            >
              Projects
            </NavLink>
          </div>
          <button className="" onClick={handleClose}>
            <span className="gradient-icon">×</span>
          </button>
        </div>
      )}
    </div>
  );
}
