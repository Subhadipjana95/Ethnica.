import React, { useRef } from "react";
import { BsBuildingFillCheck } from "react-icons/bs";
import { IoMdCheckboxOutline } from "react-icons/io";
import "../index.css";
import { motion } from "framer-motion";

const DateInput = ({ name, value, onChange, placeholder }) => {
  const inputRef = useRef(null);

  const handleDateClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.3 },
      }}
      className="w-[50%] h-[4.5rem] rounded-[20px] bg-white/20 backdrop-blur-md border-[1px] border-black/20 shadow-lg shadow-slate-500/30 flex  items-center gap-2 p-2">
        {name === "checkIn" ? (
          <BsBuildingFillCheck className="h-[3.2rem] w-[4.5rem] text-[3.2rem] bg-blue-600 text-white p-2 rounded-[10px]" />
        ) : (
          <IoMdCheckboxOutline className="h-[3.2rem] w-[4.5rem] text-[3.2rem] bg-blue-600 text-white p-2 rounded-[10px]" />
        )}
        <div className="relative w-full">
          <input
            ref={inputRef}
            className="w-[90%] h-[90%] px-4 py-8 outline-none text-2xl bg-transparent text-slate-200/50 custom-date-input"
            type="date"
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            onClick={handleDateClick}
          />
          <span
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl pointer-events-none ${
              value ? "text-black" : "text-slate-200/50"
            }`}
          >
            {value ? formatDate(value) : placeholder}
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default DateInput;
