import React from "react";
import "./About.css"; // Assuming you have a CSS file for additional styles
export default function About() {
  return (
    <div className="text-white min-h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold"><span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text ">ABOUT</span> ME</h1>
      <div className=" about-outer flex w-[90%] gap-6 mt-4 justify-center">
      <div className=" profile-pic bg-white mt-4 w-[20%] h-[35%] rounded-full overflow-hidden">
        <img
          src="/Profilepic.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="desc w-[70%] text-sm">
        <p>
         My technical expertise includes JavaScript, React.js, Next.js, Python, MySQL, and MongoDB, and I enjoy building responsive and efficient web applications.

Recently, I completed a Full Stack Developer Internship at Go Enterprise, where I:

Converted Figma designs into responsive web interfaces

Contributed to frontend improvements and UI optimization

Built backend foundations using PHP

Identified and resolved multiple software bugs

I am passionate about problem-solving, hackathons, and emerging technologies like AI and Web3, and I aim to build innovative products that create real-world impact.
        </p>
        <div className="mt-8">
          <ul className="flex flex-col justify-center" >
            <div className="flex mb-2 font-semibold  items-center gap-4">
              <li>JavaScript</li>
              <div className="w-[60%] h-3 mt-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            </div>
            <div className="flex mb-2 font-semibold items-center gap-4">
              <li>React Js</li>
              <div className="w-[80%] h-3 mt-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            </div>
            <div className="flex mb-2 font-semibold items-center gap-4">
              <li>Next.js</li>
                <div className="w-[70%] h-3 mt-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            </div>
            <div className="flex mb-2 font-semibold items-center gap-4">
              <li>MySQL</li>
              <div className="w-[65%] h-3 mt-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            </div>
            <div className="flex mb-2 font-semibold items-center gap-4">
              <li>Html & Css</li>
              <div className="w-[75%] h-3 mt-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            </div>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
