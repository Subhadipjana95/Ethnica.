import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";


const ClickButton = ({name}) => {
  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        className="group bg-[#fbf9e6] text-black text-2xl p-4 pl-6 rounded-[50px] flex items-center gap-4"
      >
        {name}
        <GoArrowUpRight className="group-hover:rotate-45 transition-all ease-in-out duration-300 text-5xl font-bold bg-blue-600 text-white rounded-full p-2" />
      </motion.button>
    </>
  );
};

export default ClickButton;
