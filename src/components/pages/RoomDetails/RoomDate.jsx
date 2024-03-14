import { useContext, useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
// import { addDays } from "date-fns";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";
import { Link } from "react-router-dom";
// import { addDays } from 'date-fns';

import { useTranslation } from "react-i18next";

const RoomDate = ({ singleRoomDetails }) => {
  const { t } = useTranslation("search");
  const authInfo = useContext(AuthContext);
  const {
    setRoomId,
    night,
    setNight,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    setCalender,
    calender,
    setGuests,
    numberOfGuests,
    handleBookNow,
    setRoomImage,
    setRoomPrice,
    setRoomName,
  } = authInfo;
  const { roomName, roomPrice, image, id, priceOptions } = singleRoomDetails;
  // const [showDatePicker, setShowDatePicker] = useState(false);

  // Update room details
  useEffect(() => {
    setRoomId(id);
    // setRoomImage(image);
    setRoomName(roomName);
    setRoomPrice(priceOptions[0].price);
  }, [id, setRoomId, roomName, priceOptions, setRoomImage, setRoomName, setRoomPrice]);

  // useEffect(() => {
  //   if (calender[0].startDate && calender[0].endDate) {
  //     const startDateString = calender[0].startDate.toDateString();
  //     const endDateString = calender[0].endDate.toDateString();

  //     const timeDifference = calender[0].endDate.getTime() - calender[0].startDate.getTime();
  //     const differenceInNights = Math.ceil(timeDifference / (1000 * 3600 * 24));

  //     setNight(differenceInNights);
  //     setCheckIn(startDateString);
  //     setCheckOut(endDateString);
  //   }
  // }, [calender, setCheckOut, setCheckIn, setNight]);

  // const handleIncrement = () => {
  //   setGuests((prevGuests) => prevGuests + 1);
  // };

  // const handleDecrement = () => {
  //   if (numberOfGuests > 1) {
  //     setGuests((prevGuests) => prevGuests - 1);
  //   }
  // };

  // const handleSelectDate = () => {
  //   setShowDatePicker(true);
  // };

  // const handleDone = () => {
  //   setShowDatePicker(false);
  // };

  // const tomorrow = addDays(new Date(), 1);

   // Define initial states for selection range
   const [selectionRange, setSelectionRange] = useState({
    startDate: checkIn ? new Date(checkIn) : new Date(), // Use existing checkIn date or today
    endDate: checkOut ? new Date(checkOut) : tomorrow, // Use existing checkOut date or tomorrow
    key: "selection",
  });

  // const [guests, setGuests] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    if (ranges.selection.endDate && ranges.selection.startDate.getTime() !== ranges.selection.endDate.getTime()) {
      setShowDatePicker(false);
    }

    // Format start and end dates
    const startDate = new Date(ranges.selection.startDate);
    startDate.setHours(0, 0, 0, 0); // Set time to 00:00:00.000
    const formattedStartDate = startDate.toDateString(); // Converts to format "Mon Mar 18 2024"

    const endDate = new Date(ranges.selection.endDate);
    endDate.setHours(0, 0, 0, 0); // Set time to 00:00:00.000
    const formattedEndDate = endDate.toDateString(); // Converts to format "Mon Mar 18 2024"

    setCheckIn(formattedStartDate);
    setCheckOut(formattedEndDate);
    console.log(formattedStartDate);

    
    if (ranges.selection.endDate && ranges.selection.startDate.getTime() !== ranges.selection.endDate.getTime()) {
      setShowDatePicker(false);

      // Calculate the number of nights between checkIn and checkOut
      const oneDay = 1000 * 60 * 60 * 24; // milliseconds in one day
      const differenceInTime = ranges.selection.endDate.getTime() - ranges.selection.startDate.getTime();
      const numberOfNights = Math.round(differenceInTime / oneDay);
      setNight(numberOfNights);
      
      // You can set the number of nights to state or do something else with it
    }
  };

  // Function to format and return day and month separately
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    return { day, month };
  };

  return (
    <>
      {/* <div className=" lg:w-1/3   ">
        <div
          className=" flex flex-col gap-5  items-center justify-center text-center bg-[#1C1C1D] py-5 px-5 md:py-10 md:px-10 relative z-40"
          style={{ fontFamily: "Gilda Display, serif" }}
        >
          <p className="text-white text-xl tracking-widest  bg-black w-full py-4 ">{t("selectDates")}</p>
          <div className="grid grid-cols-2 gap-5  w-full">
            <div
              id="start-container"
              className="bg-black py-2 px-2  flex flex-col items-center justify-center cursor-pointer date-picker"
              onClick={handleSelectDate}
            >
              <p className="text-white">{t("from")}</p>
              <button className="text-md  text-[#BE9874]">{checkIn} sds</button>
            </div>
            <div
              id="end-container"
              className="bg-black py-2 px-2 flex flex-col items-center justify-center cursor-pointer date-picker"
              onClick={handleSelectDate}
            >
              <p className="text-white">{t("to")}</p>
              <button className="text-md  text-[#BE9874] ">{checkOut}</button>
            </div>
            {showDatePicker && (
              <div className="absolute left-0 w-[100%]  bg-white z-10">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setCalender([item.selection])}
                  minDate={new Date()}
                  color="[#BE9874]"
                  moveRangeOnFirstSelection={false}
                  ranges={calender}
                />
                <div className="pb-3">
                  <button
                    onClick={handleDone}
                    className="py-2 px-4 rounded-full bg-[#BE9874] text-white   border-[1px] border-[#BE9874] text-xs "
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

            <div
              id="guest-container"
              className="bg-black py-2 px-2 flex flex-col items-center justify-center cursor-pointer date-picker"
            >
              <div className="flex flex-col items-center gap-1 ">
                <div>
                  <p className="text-md  text-white">{t("guest")}</p>
                </div>
                <div className="flex flex-row gap-2 items-center text-xl">
                  <button className="text-[#BE9874] p-2" onClick={handleDecrement}>
                    <FaAngleDown />
                  </button>
                  <p className="text-[#BE9874]">{numberOfGuests}</p>
                  <button className="text-[#BE9874] p-2 " onClick={handleIncrement}>
                    <FaAngleUp />
                  </button>
                </div>
              </div>
            </div>
            <div
              id="days-container"
              className="bg-black py-2 px-2 flex flex-col gap-1 items-center justify-center cursor-pointer date-picker"
            >
              <label className="text-md text-white">{t("night")}</label>
              <p id="selectedDays" className="bg-transparent outline-none w-28 text-[#BE9874] text-2xl">
                {night}
              </p>
            </div>

            {night === 0 && (
              <div id="error-message" className="text-red-500 text-xs">
                {t("Please select check-In & Check-Out date")}
              </div>
            )}
            <div id="perfect-message" className="text-green-500 text-xs"></div>
          </div>

          <Link
            to={night > 0 ? "/booking" : "#"}
            onClick={night > 0 ? handleBookNow : (e) => e.preventDefault()}
            className={`bg-[#BE9874] w-full py-2 text-white text-sm bookNow ${
              night === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {t("bookNow")}
          </Link>
        </div>
      </div> */}
      <div className="w-full bg-red-400   ">
        <div
          className="flex flex-col gap-5  items-center justify-center text-center bg-[#1C1C1C]  py-5 px-5 md:py-7   relative "
          style={{ fontFamily: "Gilda Display, serif" }}
        >
          <p className="text-white text-xl tracking-widest  bg-[#151515]  w-full py-4 ">{t("selectDates")}</p>
          <div className="grid grid-cols-2 gap-5  w-full">
            <div className="bg-[#151515] flex items-center justify-center py-6">
              <div
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="text-black flex flex-col gap-2 items-center justify-center focus:outline-none"
              >
                <p className="tracking-widest text-sm uppercase text-white" style={{ fontFamily: "poppins, serif" }}>
                  {t("CHECK IN")}
                </p>
                <div className="flex gap-2  items-center">
                  <p className="text-5xl text-[#BE9874]">{formatDate(selectionRange.startDate).day}</p>
                  <div className="">
                    <p className="text-[#BE9874]">{formatDate(selectionRange.startDate).month} ↓</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#151515] flex items-center justify-center py-6">
              <div
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="text-black flex flex-col gap-2 items-center justify-center focus:outline-none"
              >
                <p className="tracking-widest text-sm uppercase text-white" style={{ fontFamily: "poppins, serif" }}>
                  {t("CHECK OUT")}
                </p>
                <div className="flex gap-2  items-center">
                  <p className="text-5xl text-[#BE9874]">{formatDate(selectionRange.endDate).day}</p>
                  <div className="">
                    <p className="text-[#BE9874]">{formatDate(selectionRange.endDate).month} ↓</p>
                  </div>
                </div>
              </div>
            </div>

            {showDatePicker && (
              <DateRange
                minDate={new Date()}
                ranges={[selectionRange]}
                onChange={handleSelect}
                className="absolute top-1/2 z-10"
              />
            )}

            <div className="bg-[#151515] flex items-center justify-center py-6 ">
              <div className="text-black flex flex-col gap-2 items-center justify-center ">
                <p className="tracking-widest text-sm text-white" style={{ fontFamily: "poppins, serif" }}>
                  {t("GUESTS")}
                </p>
                <div className="flex gap-3  items-center">
                  <p className="text-5xl text-[#BE9874]">{numberOfGuests}</p>
                  <div className=" flex flex-col gap-2">
                    <FaAngleUp onClick={() => setGuests(numberOfGuests + 1)} className="text-lg text-[#BE9874] " />
                    <FaAngleDown className="text-lg text-[#BE9874] " onClick={() => setGuests(Math.max(1, numberOfGuests - 1))} />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black flex flex-col gap-2 items-center justify-center bg-[#151515] ">
              <p className="tracking-widest text-sm text-white uppercase" style={{ fontFamily: "poppins, serif" }}>
                {t("night")}
              </p>
              <div className="flex gap-3  items-center">
                {/* <p className="text-5xl ">{guests}</p> */}
                <p className="text-5xl text-[#BE9874]">{night}</p>
              </div>
            </div>
            {night === 0 && (
              <div id="error-message" className="text-red-500 text-xs">
                {t("Please select check-In & Check-Out date")}
              </div>
            )}
            
            <div id="error-message" className="text-red-500 text-xs"></div>
            <div id="perfect-message" className="text-green-500 text-xs"></div>
            
          </div>
          <Link
            to={night > 0 ? "/booking" : "#"}
            onClick={night > 0 ? handleBookNow : (e) => e.preventDefault()}
            className={`bg-[#BE9874] w-full py-2 text-white text-sm bookNow ${
              night === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {t("bookNow")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoomDate;
