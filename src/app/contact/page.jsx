"use client";

import { motion } from "framer-motion";
const text = "Contact Me";
const page = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 ">
      {/* Text  */}
      <div className="min-h-[30%] lg:h-full lg:w-1/2 flex justify-center items-center text-3xl">
        <sdiv>
          {text.split("").map((char, index) => (
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
              }}
              key={index}
            >
              {char.toUpperCase()}
            </motion.span>
          ))}
        </sdiv>
      </div>
      {/* Form */}
      <form className="min-h-[50%] lg:h-full lg:w-1/2 bg-red-50 rounded-xl flex flex-col gap-8 justify-center p-24 shadow-inner shadow-blue-200">
        <label>Dear,Rhaihan Adzani</label>
        <textarea className="bg-transparent border-b-2 border-black outline-none" />
        <label>My Email Address is</label>
        <input
          type="text"
          className="bg-transparent border-b-2 border-black outline-none"
        />
        <div className="gap-3 flex ">
          <input type="checkbox" />
          <label>I accept the terms and conditions</label>
        </div>
        <button className="bg-blue-100 rounded-2xl font-semibold text-black p-4">
          Send
        </button>
      </form>
    </div>
  );
};
export default page;
