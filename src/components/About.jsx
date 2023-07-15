import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justfy-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <p className="text-xl mt-20">
          Hey there! I'm currently pursuing a B.Tech in Information Technology
          at Birla Institute Of Technology, Mesra. As an engineering
          undergraduate, I'm passionate about competitive programming and web
          development.I have experience with languages like C++ and C, as well
          as Data Structures and Algorithms.
        </p>
        <br />
        <p className="text-xl">
          Apart from competitive programming, I'm also a Full Stack MERN
          Developer. I'm enthusiastic about exploring this field further and
          building web applications. Currently, I'm actively working on projects
          to gain more practical experience. I'm eager to learn and discover
          more in the exciting world of web development, constantly seeking new
          challenges to enhance my skills. I have listed some of my projects 
          which you can check out below.
        </p>
      </div>
    </div>
  );
};

export default About;
