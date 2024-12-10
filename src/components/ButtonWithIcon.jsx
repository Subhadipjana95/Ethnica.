import React from "react";
import { RiHotelFill } from "react-icons/ri";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { BiSolidTrain } from "react-icons/bi";
import { motion } from "framer-motion";

const ButtonWithIcon = ({ name }) => {
  return (
    <>
      <motion.button 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      className="bg-[#fbf9e6] text-black p-4 rounded-[50px] text-2xl flex items-center gap-2">
        {name}
        {name === "Hotels" ? (
          <RiHotelFill className="text-[2.5rem] bg-blue-600 text-white rounded-full p-2" />
        ) : name === "Flights" ? (
          <BiSolidPlaneAlt className="text-[2.5rem] bg-blue-600 text-white rounded-full p-2" />
        ) : (
          <BiSolidTrain className="text-[2.5rem] bg-blue-600 text-white rounded-full p-2" />
        )}
      </motion.button>
    </>
  );
};

export default ButtonWithIcon;
