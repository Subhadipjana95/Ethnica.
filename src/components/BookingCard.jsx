import React, { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import DateInput from "./DateInput";
import NumInput from "./NumInput";
import { FaMapLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import ClickButton from "./ClickButton";

const BookingCard = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleDateChange = (e, setDate) => {
    setDate(e.target.value);
  };

  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.3 },
        }}
        className="booking-card h-[69vh] w-full bg-gradient-to-b from-blue-500 to-rose-400 rounded-[20px] p-8 shadow-lg shadow-black/50"
      >
        <div className="flex items-center gap-4">
          <ButtonWithIcon name="Hotels" />
          <ButtonWithIcon name="Flights" />
          <ButtonWithIcon name="Trains" />
        </div>
        <div className="w-full h-[75%] flex flex-col justify-center items-start gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.3 },
            }}
            className="w-full h-[5vw] rounded-[20px] p-3 flex items-center bg-white/20 backdrop-blur-md border-[1px] border-black/20 shadow-lg shadow-slate-500/30 gap-4"
          >
            <FaMapLocationDot className="h-[3.2rem] w-[4.5rem] text-[3.2rem] bg-blue-600 text-white p-2 rounded-[10px]" />
            <input
              className="w-[80%] rounded-[20px] p-4 outline-none text-2xl bg-transparent placeholder:text-slate-200/50"
              type="text"
              name="Destination"
              id=""
              placeholder="Search for a destination..."
            />
          </motion.div>
          <div className="flex gap-4 w-full h-[5vw] ">
            <DateInput
              name="checkIn"
              value={checkIn}
              onChange={(e) => handleDateChange(e, setCheckIn)}
              placeholder="Check In"
            />
            <DateInput
              name="checkOut"
              value={checkOut}
              onChange={(e) => handleDateChange(e, setCheckOut)}
              placeholder="Check Out"
            />
          </div>
          <div className="flex gap-4 w-full h-[5vw]">
            <NumInput name="Rooms" />
            <NumInput name="Adults" />
            <NumInput name="Children" />
          </div>
          <ClickButton name="Search Destination" />
        </div>
      </motion.div>
    </>
  );
};

export default BookingCard;
