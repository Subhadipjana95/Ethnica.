import React from "react";
import "../index.css";
import { motion } from "framer-motion";
import Yatrik from "./Yatrik";
import DiscountCard from "./DiscountCard";
import TripMangCard from "./TripMangCard";
import BookingCard from "./BookingCard";

const Page2 = () => {
  return (
    <>
      <div className="page2 py-1 relative w-full h-[105.5vh]">
        <div className="py-4 flex justify-between flex-warp gap-4 w-full">
          <DiscountCard />
          <Yatrik />
          <TripMangCard />
        </div>
        <div className="w-full h-[72%] flex gap-4 justify-between py-2">
          <div className="w-[55%] h-full flex flex-col items-start gap-4">
            <BookingCard />
          </div>
          <motion.div
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="AR-Card group w-[44%] h-[94%] flex items-center justify-between p-4 rounded-[20px] bg-gradient-to-br from-amber-500 from-55% via-orange-400 via-75% to-rose-400 to-95% shadow-lg shadow-black/50 cursor-pointer"
          >
            <div className="w-[70%] h-[100%] object-contain object-center rounded-[10px] overflow-hidden">
              <img
                className="w-full h-full rounded-[10px] object-cover group-hover:scale-[0.98] transition-all ease-in-out duration-300"
                src="https://images.pexels.com/photos/19818017/pexels-photo-19818017/free-photo-of-interior-of-the-jang-e-azadi-memorial.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div className="w-[30%] h-[100%] flex flex-col items-center justify-end gap-4 pb-12">
              <h1 className="text-black text-[2.5rem] font-bold text-left leading-tight tracking-tighter w-[75%]">
                Explore the world with us.
              </h1>
              <h5 className="text-black/70 text-xl text-left leading-tighter tracking-tighter w-[80%]">
                Enjoy the world in Augmented Reality
              </h5>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Page2;
