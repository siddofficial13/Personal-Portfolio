import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className="mt-7 text-gray-500 py-4 max-w-md">
            Hello there! I'm Siddharth, a versatile Full Stack Web Developer and
            Competitive Programmer. My expertise lies in technologies like
            React, Node, Express, MongoDB, and more. I strive to create
            captivating and intuitive web experiences while constantly
            sharpening my problem-solving skills.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="mt-5 group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md 
                    bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-300 hover:scale-105"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/3 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
