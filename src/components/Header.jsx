import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const navArr = [
  { link: "home", name: "Home" },
  { link: "about", name: "About" },
  { link: "skills", name: "Skills" },
  { link: "projects", name: "Projects" },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return <div></div>;
};

const MobileMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`fixed top-0 ${
        showMenu ? "left-0" : "left-full"
      } bg-white w-screen h-screen text-[#333] flex flex-col justify-center items-center text-3xl gap-32 duration-300 z-20`}
    >
      <FaXmark size={30} onClick={() => setShowMenu(false)} />
      <div className="flex gap-5 flex-col items-center">
        <a href="#home">Home</a>
        <a href="#home">About</a>
        <a href="#home">Skills</a>
        <a href="#home">Projects</a>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <FaLinkedin size={28} />
        <FaGithub size={28} />
        <a
          href=""
          className="border border-[#111] px-4 p-0.5 rounded text-xl text-[#333] font-medium"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
