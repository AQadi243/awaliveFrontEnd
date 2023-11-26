import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import img from "../../../../assets/relaxArea.jpg";
import { Select, Space } from "antd";
import './TableBooking.css'
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from "react-router-dom";

const TableDateAndTime = () => {
  const navigate = useNavigate()
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [person, setPerson] = useState(1);
    const [selectedRestaurant, setSelectedRestaurant] = useState("Roof Top");
    const [selectedTime, setSelectedTime] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({
      name: "",
      email: "",
      phone: "",
    });
    const [page, setPage] = useState(1);
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

  const handleNextPage = () => {
    setPage(2);
  };

  const validateFields = () => {
    const newErrors = {
      name: name ? "" : "Name is required",
      email: email ? "" : "Email is required",
      phone: phone ? "" : "Phone is required",
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };
  
  const handleBookTable = () => {
    // Validate fields before proceeding
    if (!validateFields()) {
      return;
    }

    // Consolidate all information into an object
    const bookingData = {
      guests: person,
      date: selectedDate.toDateString(),
      time: selectedTime,
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    // Log the consolidated object to the console
    console.log("Booking Data:", bookingData);
    // alert('table booked')
    navigate('/');
  };



  return (
    <section
      className="w-[90%] mx-auto"
      style={{ fontFamily: "Gilda Display, serif" }}
    >
      <div className="flex flex-col gap-5 md:gap-10 items-center justify-center py-10">
        {page === 1 && (
          <div>
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
            onClick={handleNextPage}
          >
            Book Table
          </button>
          </div>
        )}
        {page === 2 && (
          <>
            <div className="flex flex-col gap-5 md:gap-10 items-center justify-center py-10">
              <div className="flex flex-col md:flex-row gap-5">
                <div className=" md:w-[50%]">
                  <img
                    src={img}
                    alt=" "
                    className="h-2/3 w-full"
                  />
                  <ul
                    className="h-1/3 text-white bg-[#1C1C1D] w-full flex flex-row px-2 md:px-10 items-center justify-between py-3 text-xs md:text-sm"
                  >
                    <li>Number of Guests: <span>{person}</span></li>
                    <li>Date: <span>{selectedDate.toDateString()}</span></li>
                    <li>Time: <span>{selectedTime}</span></li>
                  </ul>
                </div>
                <div className="md:w-[50%] flex flex-col md:flex-row md:justify-center py-5 px-5 border">
                  <form className="w-full flex flex-col gap-5 py-10" id="guest-info-form">
                    <p className="text-center">Insert your Information :</p>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`py-2 px-2 border bg-slate-50 ${errors.name && 'border-red-500'}`}
                      required
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`py-2 px-2 border bg-slate-50 ${errors.phone && 'border-red-500'}`}
                      required
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`py-2 px-2 border bg-slate-50 ${errors.email && 'border-red-500'}`}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="3"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="py-2 px-2 border bg-slate-50"
                    ></textarea>
                    <button
                      type="button"
                      id="confirm-button"
                      className="uppercase bg-[#BE9874] text-xs text-white py-3"
                      onClick={handleBookTable}
                    >
                      Checkout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TableDateAndTime;
