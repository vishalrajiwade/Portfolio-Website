import { useState } from "react";

import { close, logo, menu } from "../Assets";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className=" flex justify-between items-start py-6">
      <img src={logo} alt="Vishal Rajiwade" className="" />

      <ul className="text-white  justify-center items-center hidden md:flex md:gap-6 lg:gap-10 xl:gap-14 2xl:gap-16">
        <li className=" text-white font-normal">
          <a href="#home">Home</a>
        </li>
        <li className=" text-white font-normal opacity-70">
          <a href="#skills">Skills</a>
        </li>
        <li className=" text-white font-normal opacity-70">
          <a href="#projects">Projects</a>
        </li>
        <li className=" text-white font-normal opacity-70">
          <a href="#contact">Contact</a>
        </li>
        <div className="bg-green-gradient text-black px-6 py-1 rounded-lg">
          <a href="#resume">Resume</a>
        </div>
      </ul>

      <div className="md:hidden flex flex-col items-end justify-center flex-1">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => settoggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolue top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col gap-4 justify-end items-center flex-1">
            <li className=" text-white font-normal">
              <a href="#home">Home</a>
            </li>
            <li className=" text-white font-normal opacity-70">
              <a href="#skills">Skills</a>
            </li>
            <li className=" text-white font-normal opacity-70">
              <a href="#projects">Projects</a>
            </li>
            <li className=" text-white font-normal opacity-70">
              <a href="contact">Contact</a>
            </li>
            <div className="bg-green-gradient text-black px-6 py-1 rounded-lg">
              <a href="#resume">Resume</a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
