import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; 
export default function Navbar() {
  return (
    <div className="w-screen nav-outer text-white flex items-center font-normal bg-black justify-center">
      <div className="nav-outer-2 flex w-[90%] items-center justify-between p-3">
        <div className="image w-[6%] ">
          <img src="src/Images/logo3.png" alt="Logo" />
        </div>
        <ul className="flex justify-between text-xl w-[60%]">
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-all duration-300 delay-150 ease-in-out border-b-2 border-transparent hover:border-b-4 hover:border-white hover:-translate-y-1 hover:scale-110 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                    : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-all duration-300 delay-150 ease-in-out border-b-2 border-transparent hover:border-b-4 hover:border-white hover:-translate-y-1 hover:scale-110 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                    : ""
                }`
              }
            >
              About Me
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-all duration-300 delay-150 ease-in-out border-b-2 border-transparent hover:border-b-4 hover:border-white hover:-translate-y-1 hover:scale-110 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                    : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `transition-all duration-300 delay-150 ease-in-out border-b-2 border-transparent hover:border-b-4 hover:border-white hover:-translate-y-1 hover:scale-110 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                    : ""
                }`
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>
        <div  className="connect" href="https://www.linkedin.com/in/daniyal-ismail/" target="_blank">
          <button
            className="text-xl transition delay-150 mr-2 ml-2 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
         cursor-pointer bg-linear-to-r from-cyan-500 to-blue-500 py-2 px-3 rounded-3xl"
          >
            <a href="https://www.linkedin.com/in/daniyal-ismail/" target="_blank">Connect with Me</a>
          </button>
        </div>
        <div className="menu w-[5%] flex justify-center items-center">
        </div>
      </div>
    </div>
  );
}
