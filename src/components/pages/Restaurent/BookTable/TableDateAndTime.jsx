import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import img from "../../../../assets/relaxArea.jpg";
import { Select, Space } from "antd";
import './TableBooking.css'
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const TableDateAndTime = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [person, setPerson] = useState(1);
    const [selectedRestaurant, setSelectedRestaurant] = useState("Roof Top");
    const [selectedTime, setSelectedTime] = useState("");
  const currentDate = new Date();

  const handleRestaurant = (value) => {
    setSelectedRestaurant(value);
  };

  const handleIncrement = () => {
    setPerson((prevGuests) => prevGuests + 1);
  };

  const handleDecrement = () => {
    if (person > 1) {
      setPerson((prevGuests) => prevGuests - 1);
    }
  };

  const handleSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  
  const handleBookTable = () => {
    // Access all the values here and perform your logic
    console.log("Selected Restaurant:", selectedRestaurant);
    console.log("Number of Guests:", person);
    console.log("Selected Date:", selectedDate.toDateString());
    console.log("Selected Time:", selectedTime);
  };



  return (
    <section
      className="w-[90%] mx-auto"
      style={{ fontFamily: "Gilda Display, serif" }}
    >
      <div className="flex flex-col gap-5 md:gap-10 items-center justify-center py-10">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="relative md:w-[50%]">
            <img src={img} alt=" " className="md:h-full w-full" />
            <Space
              wrap
              className="absolute top-10 left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col text-center justify-center text-white "
            >
              <Select
                defaultValue="Roof Top"
                className="uppercase"
                style={{
                  width: 200,
                  
                }}
                onChange={handleRestaurant}
                options={[
                  {
                    value: "Roof Top",
                    label: "Roof Top",
                  },
                  {
                    value: "Hotel Restaurant",
                    label: "Hotel Restaurant",
                  },
                ]}
              />
            </Space>
            <div className="absolute bottom-10 left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col text-center justify-center text-white">
              <div className="flex items-center gap-4 text-4xl">
                <p>{person}</p>
                <div className="flex flex-col gap-2 text-xl">
                  <button className="text-[#BE9874] " onClick={handleIncrement}>
                    <FaAngleUp />
                  </button>
                  <button className="text-[#BE9874]" onClick={handleDecrement}>
                    <FaAngleDown />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] ">
          <p>Booking Table: {selectedDate.toDateString()}</p>
      <Calendar
      className="w-full"
        onChange={handleSelect}
        date={selectedDate}
        minDate={currentDate} 
        showSelectionPreview
      />
      
    </div>
    
        </div>
        <div>
            <label htmlFor="time" className= "time-xl md:text-3xl">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={selectedTime}
            onChange={handleTimeChange}
              className="bg-white"
            />
          </div>
          <button
            type="button"
            id="book-button"
            className="bg-[#BE9874] text-white px-8 py-2"
            onClick={handleBookTable}
          >
            Book Table
          </button>
      </div>
    </section>
  );
};

export default TableDateAndTime;
