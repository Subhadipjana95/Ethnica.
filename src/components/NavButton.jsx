import React from "react";
import { motion } from "framer-motion";

const NavButton = ({ text, opac }) => {
  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        className={`text-black ${opac ? "bg-[#fbf9e6]" : "bg-white/50" } backdrop-blur-[20px] font-bold text-xl px-6 py-4 rounded-full`}
      >
        {text}
      </motion.button>
    </>
  );
};

export default NavButton;
