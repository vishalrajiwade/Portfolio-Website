import React from "react";
import { heroImg } from "../Assets/index";

const Hero = () => {
  return (
    <div className="flex mt-28 lg:mt-28 xl:mt-36 3xl:mt-36 mx-6 md:mx-8 lg:mx-12 xl:mx-20 2xl:mx-24 justify-between items-center flex-col-reverse md:flex-row">
      <div className=" absolute top-[430px] left-[-80px] blue__gradient h-[300px] w-[300px] "></div>
      <div className=" absolute top-0 right-0 white__gradient h-[300px] w-[300px] "></div>
      <div className=" absolute top-[300px] md:top-[400px] right-0 blue__gradient h-[300px] w-[300px] "></div>
      <div className=" absolute blur-[90px] top-[80px] right-[170px] bg-green-gradient h-[200px] w-[150px] md:h-[250px] md:w-[200px] md:top-[120px] md:right-[180px] "></div>
      
      <div className=" flex flex-col justify-between items-center mt-24  md:items-start">
        <h1 className="right text-5xl font-semibold text-white mb-4 xl:text-6xl 3xl:text-7xl">
          Hi, I'm
        </h1>
        <h1 className="right text-5xl font-semibold text-gradient xl:text-6xl 3xl:text-7xl">
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
        <img src={heroImg} alt="" className="w-[18rem] md:w-[25rem] 3xl:w-[35rem] left" />
      </div>
    </div>
  );
};

export default Hero;
