import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiCodechef, SiCodeforces } from "react-icons/si"
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/siddharth-kumar-20bb57261/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/siddofficial13",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:siddofficial13@gmail.com",
    },
    {
        id: 4,
        child: (
          <>
            Codeforces <SiCodeforces size={30} />
          </>
        ),
        href: "https://codeforces.com/profile/siddofficial13",
      },
      {
        id: 5,
        child: (
          <>
            CodeChef <SiCodechef size={30} />
          </>
        ),
        href: "https://www.codechef.com/users/siddofficial13",
      },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Resume(Google Docs).pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id, child, href, style, download}) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 sm:bg-transparent sm:bg-opacity-75" +
              " " +
              style
            }
            style={{
              backgroundColor: "rgba(125, 125, 125, 0.5)", // Adjust the opacity value as per your preference
            }}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
