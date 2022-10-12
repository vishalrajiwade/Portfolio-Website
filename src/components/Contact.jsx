import React from "react";

import { conIllustration } from "../Assets/index";

const Contact = () => {
  return (
    <div className="mt-24 lg:mt-48">
      <h2 className="text-white text-3xl font-medium mb-4">Let's Connect!</h2>
      <div className="bg-black-gradient-2 py-12 text-white flex flex-col-reverse items-center">
        <div className="w-[80%]">
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
                for="message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <a
              className="self-start bg-green-gradient text-black px-8 py-2 xl:px-10 xl:py-2 rounded-md text-[14px]"
              href="#"
            >
              Send
            </a>
          </form>
        </div>
        <div>
          <img src={conIllustration} alt="Contact" className="h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
