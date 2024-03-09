import React, { useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

const Availability = () => {
    // const [date, setDate] = useState(new Date()); // State to manage the selected date

    // // Function to format the selected date
    // const formatDate = (date) => ({
    //   day: date.getDate(),
    //   month: date.toLocaleString('default', { month: 'short' }),
    // });
  
    // const handleDateChange = ([selectedDate]) => {
    //   setDate(selectedDate); // Update the selected date
    // };
  
    // const { day, month } = formatDate(date);
    // const fp = useRef(null);
    
  return (
    <div className="w-full h-full md:w-[70%] lg:w-[50%] mx-auto grid grid-cols-1 md:grid-cols-4  " style={{ fontFamily: "Gilda Display, serif" }}>
      <div className="bg-white flex items-center justify-center py-6">
        <div className="text-black flex flex-col gap-2 items-center justify-center ">
          <p className="tracking-widest text-sm uppercase">check in</p>
          <div className="flex gap-2  items-center">
            <p className="text-5xl ">15</p>
            <div className="">
              <p>Mar</p>
              <FaAngleDown className="text-[10px]" />
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <Flatpickr ref={fp} />
        <button
          type="button"
          onClick={() => {
            if (!fp?.current?.flatpickr) return;
            fp.current.flatpickr.clear();
          }}
        >
          Clear
        </button>
      </div> */}
      <div className="bg-white flex items-center justify-center py-6">
        <div className="text-black flex flex-col gap-2 items-center justify-center ">
          <p className="tracking-widest text-sm uppercase">check in</p>
          <div className="flex gap-2  items-center">
            <p className="text-5xl ">15</p>
            <div className="">
              <p>Mar</p>
              <FaAngleDown className="text-[10px]" />
            </div>
          </div>
          
        </div>
      </div>
      <div className="bg-white flex items-center justify-center py-6 ">
        <div className="text-black flex flex-col gap-2 items-center justify-center ">
          <p className="tracking-widest text-sm">GUESTS</p>
          <div className="flex gap-3  items-center">
            <p className="text-5xl ">1</p>
            <div className=" flex flex-col gap-2">
              
              <FaAngleUp className="text-xl "/>
              <FaAngleDown className="text-xl " />

            </div>
          </div>
        </div>
        
      </div>
      <div className="bg-[#1C1C1D] text-white flex flex-col items-center justify-center cursor-pointer py-6">
        <p className="tracking-[0.2rem]">Check</p>
        <p className="tracking-[0.2rem]">Availability</p>
      </div>
    </div>
  );
};

export default Availability;
