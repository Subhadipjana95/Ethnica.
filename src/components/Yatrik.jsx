import React from "react";
import { RiBardLine } from "react-icons/ri";
import { AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";

const Yatrik = () => {
  return (
    <>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.3 },
      }}
      className="card relative w-[45%] h-[18vw] flex justify-center items-center flex-col gap-8 rounded-[20px] bg-gradient-to-b from-[#D0C0F3] to-[#0FB9E1] backdrop-blur-[20px] shadow-lg shadow-black/50">
        <h3 className="text-black text-center text-4xl font-bold">
          Go beyond your typical Stay
        </h3>

        <motion.div
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.3 },
          }}
          className="yatrik w-[90%] h-[5vw] rounded-[10px] bg-gradient-to-b from-slate-400/20 to-white/20 flex justify-between items-center p-2 border-[1px] border-black/50 shadow-lg shadow-slate-500/30"
        >
          <div className="flex justify-center items-center gap-2 p-3 rounded-[10px] border-[1px] border-black/50 bg-gradient-to-b from-slate-400/20 to-white/20 cursor-pointer">
            <RiBardLine className="text-black text-3xl" />
            <h3 className="text-black text-2xl font-bold">Yatrik</h3>
          </div>
          <input
            type="text"
            name="chatbot"
            id=""
            placeholder='"Travel the wonders of India..."'
            className="w-[70%] h-[4vw] bg-transparent text-black font-light outline-none px-4 placeholder:text-slate-700/50"
          />
          <motion.button
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineSend className="text-white text-6xl py-2 px-4 cursor-pointer bg-blue-600 rounded-[10px]" />
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Yatrik;
