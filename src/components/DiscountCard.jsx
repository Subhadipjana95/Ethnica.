import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const DiscountCard = () => {
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
            className="group card w-[27.5%] h-[18vw] rounded-[20px] bg-rose-400 p-4 flex justify-between items-center flex-col shadow-lg shadow-black/50 cursor-pointer"
          >
            <div className="flex justify-between items-center w-full">
              <h3 className="text-black text-left w-[80%] text-4xl font-bold">
                Get Offers and Discounts!
              </h3>
              <GoArrowUpRight className="group-hover:rotate-45 transition-all ease-in-out duration-300 text-5xl font-bold bg-blue-600 text-white rounded-full p-2" />
            </div>
            <div className="w-full h-[58%] object-contain object-center rounded-[10px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/2539761/pexels-photo-2539761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </motion.div>
    </>
  )
}

export default DiscountCard