import React from "react";

import { conIllustration } from "../Assets/index";

const Contact = () => {
  return (
    <div className="mt-24 lg:mt-48 ">
      <h2 className="text-white text-3xl font-medium mb-4 mx-6 md:mx-8 lg:mx-12 xl:mx-20 2xl:mx-24">Let's Connect!</h2>
      <div className="bg-black-gradient-2 py-12 text-white flex flex-col-reverse items-center md:flex-row">
        <div className="w-[80%] md:w-[50%]  md:mx-8 lg:mx-12 xl:mx-20 2xl:mx-24">
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
              className="self-start bg-green-gradient text-black px-8 py-2 md:px-10 md:py-3 xl:px-10 xl:py-2 rounded-md text-[14px] md:text-[16px]"
              href="#"
            >
              Send
            </a>
          </form>
        </div>
        <div>
          <img src={conIllustration} alt="Contact" className="h-[300px] md:h-[360px] lg:h-[420px]" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
