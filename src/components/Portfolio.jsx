import React from "react";
import portImage from "../assets/portfolio/portfolio-wesite-image.jpg";
import visionary from "../assets/portfolio/visionary-realm-image.jpg";
import blog from "../assets/portfolio/blog-website-image.jpg";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portImage,
      demoLink: "https://example.com/demo", // Add your demo link here
      codeLink: "https://example.com/code", // Add your code link here
    },
    {
      id: 2,
      src: visionary,
      demoLink: "https://example.com/demo", // Add your demo link here
      codeLink: "https://example.com/code", // Add your code link here
    },
    {
      id: 3,
      src: blog,
      demoLink: "https://example.com/demo", // Add your demo link here
      codeLink: "https://example.com/code", // Add your code link here
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
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105"
                >
                  Code
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
