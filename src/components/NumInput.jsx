import React from "react";
import { IoMan } from "react-icons/io5";
import { FaChild } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { motion } from "framer-motion";
const NumInput = ({ name }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.3 },
        }}
        className="w-[33%]h-[4.5rem] bg-white/20 backdrop-blur-md rounded-[20px] border-[1px] border-black/20 shadow-lg shadow-slate-500/30 flex items-center gap-2 p-2"
      >
        {name === "Rooms" ? (
          <IoBed className="h-[3.2rem] w-[4.5rem] text-[3.2rem] bg-blue-600 text-white p-2 rounded-[10px]" />
        ) : name === "Adults" ? (
          <IoMan className="h-[3.2rem] w-[4.5rem] text-[3.2rem] bg-blue-600 text-white p-2 rounded-[10px]" />
        ) : (
          <FaChild className="h-[3.2rem] w-[4.5rem] text-[3.2rem] bg-blue-600 text-white p-2 rounded-[10px]" />
        )}
        <div className="relative w-full h-full">
          <select
            className="w-full h-full pl-4 pr-8 py-3 outline-none text-2xl bg-transparent text-slate-200/50 appearance-none"
            name={name}
            id={name}
            onChange={(e) => {
              if (e.target.value === "0") {
                e.target.classList.add("text-slate-200/50");
                e.target.classList.remove("text-black");
              } else {
                e.target.classList.add("text-black");
                e.target.classList.remove("text-slate-200/50");
              }
            }}
          >
            {[...Array(11)].map((_, i) => (
              <option key={i} value={i}>
                {i === 0 ? name : i}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NumInput;
