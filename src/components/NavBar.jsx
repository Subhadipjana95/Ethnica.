import React from "react";
import NavButton from "./NavButton";
import { useState } from "react";
import { motion } from "framer-motion";
import { RiMenuLine } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { RiThreadsLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <>
      <div className="nav fixed top-[4%] left-0 w-full h-20 z-[1000] flex items-center justify-between px-12">
        <div className="flex items-center justify-between gap-4">
          <motion.div
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            
            <RiMenuLine className="text-black text-[3.5rem] cursor-pointer bg-[#fbf9e6] backdrop:blur-[10px] rounded-full p-4" />
          </motion.div>
          <NavButton text="List your Places" opac={true} />
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center justify-between gap-2 bg-white/30 backdrop-blur-[10px] rounded-full p-2">
            <motion.div
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillInstagram className="text-black text-[2.7rem] cursor-pointer bg-white/50 backdrop-blur-[20px] rounded-full p-2" />
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <RiThreadsLine className="text-black  text-[2.7rem] cursor-pointer bg-white/50 backdrop-blur-[20px] rounded-full p-2" />
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <RiFacebookFill className="text-black text-[2.7rem] cursor-pointer bg-white/50 backdrop-blur-[20px] rounded-full p-2" />
            </motion.div>
          </div>
          <NavButton text="Sign Up" opac={false} />
          <NavButton text="Log In" opac={true} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
