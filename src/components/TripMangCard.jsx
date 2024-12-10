import React from 'react'
import { motion } from "framer-motion";
import { BiTrip } from "react-icons/bi";

const TripMangCard = () => {
  return (
    <>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="card w-[27.5%] h-[18vw] rounded-[20px] bg-blue-500 shadow-lg shadow-black/50 cursor-pointer p-4 flex flex-col justify-center gap-4"
          >
            <BiTrip className="text-black text-6xl bg-white rounded-full p-2" />
            <h3 className="text-black text-left w-[70%] text-[2.5rem] font-bold leading-tight">
              Get your Trip Manager
            </h3>
            <h5 className="text-xl text-black/70">To manage your trip experience</h5>
          </motion.div>
    </>
  )
}

export default TripMangCard