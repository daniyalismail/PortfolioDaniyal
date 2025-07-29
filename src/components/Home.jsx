import React, { useEffect, useState } from "react";
import "../components/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  const [isloading, setisloading] = useState(true)
  const [data, setData] = useState(null);
  useEffect(() => {
  fetch("https://api.github.com/users/daniyalismail")
    .then((res) => res.json())
    .then((data) => {
      setisloading(false);
      setData(data);
    })
    .catch((err) => console.error("Error fetching GitHub data:", err));
}, []);

  return (
    <div className="bg-black overflow-x-hidden text-white flex flex-col items-center justify-center">
      <div className="profilepic bg-white mt-4 w-[15%] h-[35%] rounded-full overflow-hidden">
        <img
          src="/Profilepic.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col w-[100%] text-center text-wrap justify-center items-center">
        <h1 className=" heading w-[90%] text-4xl mt-4 font-bold">
          I'm <span className="gradient-text">Daniyal Ismail</span>, Computer
          Science Undergrad
        </h1>
        <p className=" desc w-[80%] text-sm mt-4">
          I am a passionate Computer Science student at Dawood University of
          Engineering and Technology, currently in my 5th semester. With a
          strong foundation in Html, Css, Java, C++, Python,
          Javascript,React.js,Next.js, MongoDB and MySQL. I enjoy solving
          complex problems and building innovative solutions. Eager to learn and
          grow, I&apos;m actively seeking opportunities to apply my skills and
          contribute to impactful projects.
        </p>
      </div>
      <div className=" button-box flex font-light gap-4 mt-6 mb-4">
        <a href={isloading? "#" : data.html_url} target="_blank">
          <button
            className="
         text-xl transition delay-150 mr-2 ml-2 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 font-normal
        cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-3xl border-solid border-2 border-transparent hover:border-white"
          >
           {isloading ? "Loading...." : <><FontAwesomeIcon className="text-black" icon={faGithub}/>Visit My GitHub</>}
          </button>
        </a>
        <a href="src\Resume\Muhammad_Daniyal_Resume.pdf"
        download={"Muhammad_Daniyal_Resume.pdf"}>
        <button
          className="
        text-xl transition delay-150 mr-2 ml-2 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
        cursor-pointer  text-white py-2 px-4 rounded-3xl border-solid border-2  border-white"
        >
          Download Resume
        </button>
        </a>
      </div>
    </div>
  );
}
