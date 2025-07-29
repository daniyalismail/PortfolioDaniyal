import React, { useEffect, useState } from "react";

export default function Projects() {
  const [profile, setProfile] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); 

  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 500) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch("https://api.github.com/user/repos", {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      });
      const data = await response.json();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = profile.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(profile.length / itemsPerPage);

  return (
    <div className="text-white w-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-semibold mb-4 mt-3">
        My <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Projects</span>
      </h1>

      {/* Projects Display */}
      <div className="flex w-[90%] justify-center flex-wrap gap-4">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="border-white text-wrap border-2 w-[20%] min-w-[250px] inline-flex p-4 flex-col justify-between gap-4"
          >
            <h2 className="break-words w-full uppercase bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
              {project.name}
            </h2>
            <p className="line-clamp-2">{project.description}</p>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition delay-150 mr-2 ml-2 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
              bg-gradient-to-r justify-center rounded-3xl from-cyan-500 to-blue-500 flex items-center "
            >
              View Project <span className="ml-2 text-4xl">&rarr;</span>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}