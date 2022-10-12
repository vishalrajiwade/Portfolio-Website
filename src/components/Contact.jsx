import React from "react";

import { conIllustration, send } from "../Assets/index";

const Contact = () => {
  return (
    <div className="relative mt-24 lg:mt-48 ">
      <div className=" absolute top-[-130px] right-0 blue__gradient h-[300px] w-[300px] "></div>
      <div className=" absolute top-[850px] md:top-[600px] left-[-100px] blue__gradient h-[300px] w-[300px] "></div>
      <h2 className="text-white text-3xl font-medium mb-4 mx-6 md:mx-8 lg:mx-12 xl:mx-20 2xl:mx-24">Let's Connect!</h2>
      <div className="bg-black-gradient-2 py-12 text-white flex flex-col-reverse items-center justify-between md:flex-row px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
        <div className="w-[80%] md:w-[50%] lg:w-[40%]">
          <form action="" className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input type="text" for="name" id="name" className="border border-[#33CF43] bg-transparent rounded-md h-10 mt-2 px-3 focus:outline-none"/>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input type="email" for="email" id="email" className="border border-[#33CF43] bg-transparent rounded-md h-10 mt-2 px-3 focus:outline-none"/>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                className="border border-[#33CF43] bg-transparent rounded-md mt-2 px-3 focus:outline-none"
                name="message"
                htmlFor="message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <a
              className="self-start flex justify-center items-center bg-green-gradient text-black px-8 py-2 md:px-10 md:py-3 xl:px-10 xl:py-2 rounded-md text-[14px] md:text-[16px]"
              href="#"
            >
              Send 
              <img src={send} alt="" className="h-[14px] ml-2" />
            </a>
          </form>
        </div>
        <div>
          <img src={conIllustration} alt="Contact" className="h-[300px] md:h-[360px] lg:h-[450px]" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
