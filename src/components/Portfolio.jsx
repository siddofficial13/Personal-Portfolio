import React from "react";
import portImage from "../assets/portfolio/portfolio-wesite-image.jpg";
import visionary from "../assets/portfolio/visionary-realm-image-2.jpg";
import blog from "../assets/portfolio/blog-website-image-2.jpg";
import { GoFileCode } from "react-icons/go"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portImage,
      demoLink: "https://master--dancing-klepon-0d506f.netlify.app/", // Add your demo link here
      codeLink: "https://github.com/siddofficial13/Personal-Portfolio", // Add your code link here
      demoName: "Portfolio",
    },
    {
      id: 2,
      src: visionary,
      demoLink: "https://drive.google.com/file/d/1g0SNOrrMhVhiZnznKXI32o1KodC8QpvV/view?usp=sharing", // Add your demo link here
      codeLink: "https://github.com/siddofficial13/Visionary-Realm", // Add your code link here
      demoName: "VisionaryRealm",
    },
    {
      id: 3,
      src: blog,
      demoLink: "https://example.com/demo", // Add your demo link here
      codeLink: "https://example.com/code", // Add your code link here
      demoName: "SoulScribble",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="mt-6 py-6">
            Explore some of my projects right here....
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink, demoName }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center mt-4">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 text-lg font-semibold 
                  bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-md pl-2 "
                >
                  {demoName}
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-8 py-3 m-4 duration-300 hover:scale-105"
                >
                  <GoFileCode size={30} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
