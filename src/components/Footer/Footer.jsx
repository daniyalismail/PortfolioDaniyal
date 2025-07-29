import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="text-white w-screen flex flex-col justify-center items-center bg-black p-6 mt-10">
      <div className="w-[90%] flex flex-col justify-center">
        <div className="w-[10%] logo">
          <img src="src\Images\logo3.png" alt="Logo" />
        </div>
        <p className=" desc w-[50%] mt-2">
          I am a passionate Computer Science student at Dawood University of
          Engineering and Technology, currently in my 5th semester. With a
          strong foundation in Html, Css, Java, C++, Python,
          Javascript,React.js,Next.js, MongoDB and MySQL
        </p>
      </div>
      <hr className="border-white border-1 mt-3 mb-3 w-[90%]" />
      <div className="bt-ft flex items-center justify-between w-[90%]">
        <p>&copy; 2023 Daniyal Ismail. All rights reserved.</p>
        <div className="flex gap-4 mt-2">
          <p className=" p transition delay-150 mr-2 ml-2 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
        ">Terms of Service</p>
          <p className=" p transition delay-150 mr-2 ml-2 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
        ">Privacy Policy</p>
          <a href="https://www.linkedin.com/in/daniyal-ismail/" target="_blank">
          <p className=" p transition delay-150 mr-2 ml-2 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
        cursor-pointer">Connect with Me</p>
        </a>
        </div>
      </div>
    </div>
  );
}
