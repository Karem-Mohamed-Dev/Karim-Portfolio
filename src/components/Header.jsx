import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiGithub , FiLinkedin, FiFileText } from "react-icons/fi";


const navArr = [
  // { link: "home", name: "Home" },
  { link: "about", name: "About" },
  { link: "skills", name: "Skills" },
  { link: "projects", name: "Projects" },
  // { link: "contact", name: "Contact" },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full fixed left-0 top-4">
      <div className="border border-[#aaa] backdrop-blur-[2px] bg-black/85 text-white mx-auto w-[90%] rounded-full py-2 px-4 flex justify-between items-center max-w-[750px] h-12 shadow-md z-10">
        <div>
          <img src={logo} alt="" width={140} />
        </div>
        <div>
          <nav className="hidden md:flex gap-8">
            {navArr.map((item, index) => (
              <a href={"#" + item.link} className=" font-medium text-neutral-200 hover:scale-110 hover:text-blue-400 hover:mx-1 duration-300">{item.name}</a>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-3">
            <a href="">
              <FiLinkedin size={22} className="hover:text-blue-500 hover:scale-110 hover:mx-0.5 duration-300" />
            </a>
            <a href="">
              <FiGithub size={22} className="hover:text-gray-400 hover:scale-110 hover:mx-0.5 duration-300" />
            </a>
            <a href="">
              <FiFileText size={22} className="hover:text-slate-500 hover:scale-110 hover:mx-0.5 duration-300" />
            </a>
          </div>
          <span className="w-px h-6 bg-white mx-2"></span>
          <a href="" className="bg-white text-[#333] py-1 px-3 rounded font-medium hover:bg-slate-600 hover:text-white duration-300">Contact Me</a>
        </div>
        <HiMenuAlt3 size={24} onClick={() => setShowMenu(true)} className="md:hidden" />
      </div>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};

const MobileMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`fixed top-0 ${
        showMenu ? "left-0" : "left-full"
      } bg-white w-screen h-screen text-[#333] flex flex-col pt-20 items-center text-3xl gap-32 duration-300 z-20`}
    >
      <FaXmark size={30} onClick={() => setShowMenu(false)} />
      <div className="flex gap-5 flex-col items-center">
        <a href="#home" onClick={() => setShowMenu(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setShowMenu(false)}>
          About
        </a>
        <a href="#skills" onClick={() => setShowMenu(false)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setShowMenu(false)}>
          Projects
        </a>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <a
          href="https://linkedin.com/in/karem-mohamed-a789a6239"
          target="_blank"
        >
          <FaLinkedin size={28} />
        </a>
        <a href="https://github.com/Karem-Mohamed-Dev" target="_blank">
          <FaGithub size={28} />
        </a>
        <a
          href="#contact"
          onClick={() => setShowMenu(false)}
          className="border border-[#111] px-4 p-0.5 rounded text-xl text-[#333] font-medium"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
