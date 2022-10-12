import React from "react";
import { html, css, js, react, node, java, spring, db } from "../Assets/index";

const Skills = () => {
  return (
    <div className="mt-24 lg:mt-48 mx-6 flex flex-col justify-between items-start">
      <h2 className="text-white text-3xl font-medium ">My Skills</h2>
      <div className="mt-10 grid  grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 w-full gap-6 place-items-center">
        <div className="bg-box-gradient xl:w-[290px] flex gap-8 justify-start items-center px-6 py-2 rounded-md w-[220px]">
          <div className="logo-bg flex justify-center items-center">
            <img src={html} alt="HTML" className="h-[20px]" />
          </div>
          <h4 className="text-gradient">HTML</h4>
        </div>
        <div className="w-[220px] xl:w-[290px] bg-box-gradient flex gap-8 justify-start items-center px-6 py-2 rounded-md">
          <div className="logo-bg flex justify-center items-center">
            <img src={css} alt="HTML" className="h-[20px]" />
          </div>
          <h4 className="text-gradient">CSS</h4>
        </div>
        <div className="w-[220px] xl:w-[290px] bg-box-gradient flex gap-8 justify-start items-center px-6 py-2 rounded-md">
          <div className="logo-bg flex justify-center items-center">
            <img src={js} alt="HTML" className="h-[20px]" />
          </div>
          <h4 className="text-gradient">JAVASCRIPT</h4>
        </div>
        <div className="w-[220px] xl:w-[290px] bg-box-gradient flex gap-8 justify-start items-center px-6 py-2 rounded-md">
          <div className="logo-bg flex justify-center items-center">
            <img src={react} alt="HTML" className="h-[20px]" />
          </div>
          <h4 className="text-gradient">REACTJS</h4>
        </div>
        <div className="w-[220px] xl:w-[290px] bg-box-gradient flex gap-8 justify-start items-center px-6 py-2 rounded-md">
          <div className="logo-bg flex justify-center items-center">
            <img src={node} alt="HTML" className="h-[20px]" />
          </div>
          <h4 className="text-gradient">NODEJS</h4>
        </div>
        <div className="w-[220px] xl:w-[290px] bg-box-gradient flex gap-8 justify-start items-center px-6 py-2 rounded-md">
          <div className="logo-bg flex justify-center items-center">
            <img src={java} alt="HTML" className="h-[20px]" />
          </div>
          <h4 className="text-gradient">JAVA</h4>
        </div>
        <div className="w-[220px] xl:w-[290px] bg-box-gradient flex gap-8 justify-start items-center px-6 py-2 rounded-md">
          <div className="logo-bg flex justify-center items-center">
            <img src={spring} alt="HTML" className="h-[20px]" />
          </div>
          <h4 className="text-gradient">SPRING</h4>
        </div>
        <div className="w-[220px] xl:w-[290px] bg-box-gradient flex gap-8 justify-start items-center px-6 py-2 rounded-md">
          <div className="logo-bg flex justify-center items-center">
            <img src={db} alt="HTML" className="h-[20px]" />
          </div>
          <h4 className="text-gradient">DATABASE</h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;
