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
  return (
    <>
      <header className="w-full border-b border-[#333] px-6 py-2 flex items-center justify-between fixed top-0 left-0">
        <div className="flex justify-between items-center lg:mx-auto lg:w-[90%] xl:w-[75%] 2xl:w-[65%]">
          <div className="hidden lg:flex gap-5 text-lg">
            {navArr.map((ele, idx) => (
              <a
                key={idx}
                href={`#${ele.link}`}
                className="hover:text-[#3D9970] hover:scale-110 duration-300"
              >
                {ele.name}
              </a>
            ))}
          </div>
          <img src={logo} alt="Logo" className="h-9" />
          <div className="hidden lg:flex items-center gap-5">
            <a href="https://www.linkedin.com/in/karem-mohamed-a789a6239" target="_blank" className="hover:scale-110 hover:text-blue-400 duration-300">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/Karem-Mohamed-Dev" target="_blank" className="hover:scale-110 hover:text-slate-500 duration-300">
              <FaGithub size={28} />
            </a>
            <a
              href="#contact"
              className="border border-[#ddd] px-4 py-0.5 rounded text-lg font-medium hover:bg-white hover:text-[#333] duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        <HiMenuAlt3
          size={30}
          onClick={() => setShowMenu(true)}
          className="lg:hidden"
        />
      </header>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

const MobileMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`fixed top-0 ${
        showMenu ? "left-0" : "left-full"
      } bg-white w-screen h-screen text-[#333] flex flex-col justify-center items-center text-3xl gap-32 duration-300`}
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
