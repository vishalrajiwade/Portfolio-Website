import React from "react";
import { heroImg } from "../Assets/index";

const Hero = () => {
  return (
    <div className="flex mt-16 justify-between items-center flex-col-reverse md:flex-row">
      <div className="absolute top-[100px] right-[350px] bg-green-gradient h-[50px] w-[50px] rounded-full"></div>

      <div className=" flex flex-col justify-between items-center mt-10  md:items-start">
        <h1 className="text-5xl font-semibold text-white mb-4 xl:text-6xl">
          Hi, I'm
        </h1>
        <h1 className="text-5xl font-semibold text-gradient xl:text-6xl">
          Vishal Rajiwade
        </h1>
        <p className="text-white opacity-70 text-[12px] font-light w-2/3 mt-6 mb-10 xl:text-[14px]">
          A passionate web developer experienced in building attractive and
          responsive website.
        </p>
        <div className="flex justify-between items-center gap-6 opacity-70">
          <i class="fa-brands fa-linkedin cursor-pointer text-white"></i>
          <i className="fa-brands fa-square-facebook text-white hover:text-blue-500 cursor-pointer"></i>
          <i className="fa-brands fa-instagram text-white hover:text-red-400-500 cursor-pointer"></i>
          <i className="fa-brands fa-twitter text-white hover:text-blue-300 cursor-pointer"></i>
        </div>
      </div>
      <div className="z-10 ">
        <img src={heroImg} alt="" className="md:w-[25rem]" />
      </div>
    </div>
  );
};

export default Hero;
