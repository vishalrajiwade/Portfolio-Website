import React from "react";

import { logo, address, phone, mail } from "../Assets/index";

const Footer = () => {
  return (
    <div className="mt-8 py-6 mx-6 md:mx-8 lg:mx-12 xl:mx-20 2xl:mx-24">
      <div className="w-full h-[1px] bg-[#3F3E45] mb-6"></div>
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-3">
          <div className="flex justify-start items-center gap-3">
            <p className="text-white text-[14px] flex justify-center items-center">
              <img src={address} alt="" className="h-[14px] mr-3"/>
              Address :  
            </p>
            <p className="text-white opacity-70 text-[12px]">
              Hinjewadi, Tal- Mulshi, Dist- Pune, Maharashtra 411 057
            </p>
          </div>
          <div className="flex justify-start items-center gap-3">
            <p className="text-white text-[14px] flex justify-center items-center">
              <img src={mail} alt="" className="h-[10px] mr-3"/>
              Email : 
            </p>
            <p className="text-white opacity-70 text-[12px]">
              rajiwadevishal23@gmail.com
            </p>
          </div>
          <div className="flex justify-start items-center gap-3">
            <p className="text-white text-[14px] flex justify-center items-center">
              <img src={phone} alt="" className="h-[12px] mr-3"/>  
              Phone : 
            </p>
            <p className="text-white opacity-70 text-[12px]">+91 7984423076</p>
          </div>
        </div>
        <div className="hidden md:flex justify-between items-center gap-6 opacity-70">
          <i class="fa-brands fa-linkedin cursor-pointer "></i>
          <i className="fa-brands fa-square-facebook text-white hover:text-blue-500 cursor-pointer"></i>
          <i className="fa-brands fa-instagram text-white hover:text-red-400-500 cursor-pointer"></i>
          <i className="fa-brands fa-twitter text-white hover:text-blue-300 cursor-pointer"></i>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#3F3E45] mt-6 mb-6"></div>
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" />
        <div className="flex justify-between items-center gap-6 opacity-70 md:hidden">
          <i class="fa-brands fa-linkedin cursor-pointer text-white"></i>
          <i className="fa-brands fa-square-facebook text-white hover:text-blue-500 cursor-pointer"></i>
          <i className="fa-brands fa-instagram text-white hover:text-red-400-500 cursor-pointer"></i>
          <i className="fa-brands fa-twitter text-white hover:text-blue-300 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
