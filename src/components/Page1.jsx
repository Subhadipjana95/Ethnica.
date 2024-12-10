import React from "react";
import '../index.css';
import ClickButton from "./ClickButton";
import NavBar from "./NavBar";

const Page1 = () => {
  return (
    <>
      <div className="shadow-lg shadow-black/50 rounded-[30px]">
        <div className="page1 w-full h-[80vh] relative text-black rounded-[30px] overflow-hidden px-12 py-4">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5667934/pexels-photo-5667934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover bg-no-repeat"></div>
          <div className="absolute inset-0 bg-slate-500/20 backdrop-blur-[2px]"></div>

          <NavBar />

          <div className="relative h-full w-full z-10 flex flex-col justify-center items-start gap-4">
            <span className=" absolute top-[2%] left-1/2 transform -translate-x-1/2 text-4xl font-bold ">
              Ethnica.
            </span>
            <div className="flex justify-between items-center w-full">
              <h1 className=" text-start text-8xl font-bold w-[68%] leading-none tracking-tight">
                Explore the beauty of Indian Culture
              </h1>
              <h5 className="text-3xl font-bold w-[28%] leading-snug tracking-tight pr-16 pt-[4.5rem]">
                Lifelong memories just a few days a way
              </h5>
            </div>

            <ClickButton  name="Book Now"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
