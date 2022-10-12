import React from "react";

import { rode, shade, password, budget } from "../Assets/index";

const Projects = () => {
  return (
    <div className="mt-24 lg:mt-48 mx-6">
      <h2 className="text-white text-3xl font-medium mb-12 ">My Projects</h2>
      <div className="flex flex-col justify-between gap-16">
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 h-[240px] xl:h-[320px] bg-red-300">
            <img src={rode} alt="" className="h-full cursor-pointer" />
          </div>
          <div className="text-white md:w-1/2">
            <h3 className="text-white text-[24px] xl:text-[28px] font-medium">Rode Clone</h3>
            <p className="opacity-70 text-[12px] my-4 pr-4 xl:text-[16px]">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money.{" "}
            </p>
            <p className="opacity-70 text-[12px] pr-4 xl:text-[16px]">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <div className="flex justify-start items-center gap-4 mt-4 xl:mt-6">
              <a
                className="bg-green-gradient text-black px-6 py-1 xl:px-8 xl:py-2 rounded-md text-[14px]"
                href="#"
              >
                Demo
              </a>
              <a
                className="border border-[#33CF43] px-6 py-1 xl:px-8 xl:py-2 text-[14px] rounded-md"
                href="#"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col-reverse md:flex-row gap-8">
          
          <div className="text-white md:w-1/2">
            <h3 className="text-white text-[24px] xl:text-[28px] font-medium ">Shade UP</h3>
            <p className="opacity-70 text-[12px] xl:text-[16px] my-4 pr-4">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money.{" "}
            </p>
            <p className="opacity-70 text-[12px] xl:text-[16px] pr-4">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <div className="flex justify-start items-center gap-4 mt-4 xl:mt-6">
              <a
                className="bg-green-gradient text-black px-6 py-1 xl:px-8 xl:py-2 rounded-md text-[14px]"
                href="#"
              >
                Demo
              </a>
              <a
                className="border border-[#33CF43] px-6 py-1 xl:px-8 xl:py-2 text-[14px] rounded-md"
                href="#"
              >
                Github
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[240px] xl:h-[320px] bg-red-300">
            <img src={shade} alt="" className="h-full cursor-pointer" />
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 h-[240px] xl:h-[320px] bg-red-300">
            <img src={password} alt="" className="h-full cursor-pointer" />
          </div>
          <div className="text-white md:w-1/2">
            <h3 className="text-white text-[24px] xl:text-[28px] font-medium">
              Password Generator
            </h3>
            <p className="opacity-70 text-[12px] xl:text-[16px] my-4 pr-4">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money.{" "}
            </p>
            <p className="opacity-70 text-[12px] xl:text-[16px] pr-4">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <div className="flex justify-start items-center gap-4 mt-4 xl:mt-6">
              <a
                className="bg-green-gradient text-black px-6 py-1 xl:px-8 xl:py-2 rounded-md text-[14px]"
                href="#"
              >
                Demo
              </a>
              <a
                className="border border-[#33CF43] px-6 py-1 xl:px-8 xl:py-2 text-[14px] rounded-md"
                href="#"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="flex flex-col-reverse md:flex-row gap-8">
          
          <div className="text-white md:w-1/2">
            <h3 className="text-white text-[24px] xl:text-[28px] font-medium">
              Budget Manager
            </h3>
            <p className="opacity-70 text-[12px]  xl:text-[16px] my-4 pr-4">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money.{" "}
            </p>
            <p className="opacity-70 text-[12px] xl:text-[16px] pr-4">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <div className="flex justify-start items-center gap-4 mt-4 xl:mt-6">
              <a
                className="bg-green-gradient text-black px-6 py-1 xl:px-8 xl:py-2 rounded-md text-[14px]"
                href="#"
              >
                Demo
              </a>
              <a
                className="border border-[#33CF43] px-6 py-1 xl:px-8 xl:py-2 text-[14px] rounded-md"
                href="#"
              >
                Github
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[240px] xl:h-[320px] bg-red-300">
            <img src={budget} alt="" className="h-full cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <a
          className=" cursor-pointer bg-green-gradient uppercase text-black px-6 py-1 xl:px-8 xl:py-3 rounded-md text-[14px]"
          href="#"
        >
          View all projects
        </a>
      </div>
    </div>
  );
};

export default Projects;
