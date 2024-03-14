import { useContext, useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
// import { addDays } from "date-fns";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const DatesSearch = () => {
  const authInfo = useContext(AuthContext);
  const currentLanguage = i18next.language;
  const { t } = useTranslation("search");
  const { night, setNight, setCheckIn, setCheckOut, setGuests, numberOfGuests } = authInfo;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(), // Today
    endDate: tomorrow, // Day after today
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

    console.log(ranges.selection.startDate);
    if (ranges.selection.endDate && ranges.selection.startDate.getTime() !== ranges.selection.endDate.getTime()) {
      setShowDatePicker(false);

      // Calculate the number of nights between checkIn and checkOut
      const oneDay = 1000 * 60 * 60 * 24; // milliseconds in one day
      const differenceInTime = ranges.selection.endDate.getTime() - ranges.selection.startDate.getTime();
      const numberOfNights = Math.round(differenceInTime / oneDay);
      setNight(numberOfNights);
      console.log(`Number of nights: ${numberOfNights}`);
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
      <div className="w-full md:w-1/3   ">
        <div
          className={`flex flex-col gap-5  items-center justify-center text-center bg-[#1C1C1C]  py-5 px-5 md:py-16 md:px-10 relative  ${currentLanguage === 'ar' ? 'body-ar' : 'body-en'} `}
          
        >
          <p className={`text-white text-xl tracking-widest  bg-[#151515]  w-full py-4 ${currentLanguage === 'ar' ? 'body-ar' : 'body-en'} `} >{t("selectDates")}</p>
          <div className="grid grid-cols-2 gap-5  w-full">
            <div className="bg-[#151515] flex items-center justify-center py-6">
              <div
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="text-black flex flex-col gap-2 items-center justify-center focus:outline-none cursor-pointer"
              >
                <p className="tracking-widest text-sm uppercase text-white" >
                  {t("CHECK IN")}
                </p>
                <div className="flex gap-2  items-center" style={{ fontFamily: "Gilda Display, serif" }}>
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
                className="text-black flex flex-col gap-2 items-center justify-center focus:outline-none cursor-pointer"
              >
                <p className="tracking-widest text-sm uppercase text-white" >
                  {t("CHECK OUT")}
                </p>
                <div className="flex gap-2  items-center" style={{ fontFamily: "Gilda Display, serif" }}>
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

            <div className={`bg-[#151515] flex items-center justify-center py-6  `}>
              <div className="text-black flex flex-col gap-2 items-center justify-center ">
                <p className="tracking-widest text-sm text-white">
                  {t("GUESTS")}
                </p>
                <div className="flex gap-3  items-center">
                  <p className="text-5xl text-[#BE9874]" style={{ fontFamily: "Gilda Display, serif" }}>{numberOfGuests}</p>
                  <div className=" flex flex-col gap-2">
                    <FaAngleUp onClick={() => setGuests(numberOfGuests + 1)} className="text-lg text-[#BE9874] cursor-pointer " />
                    <FaAngleDown className="text-lg text-[#BE9874] cursor-pointer " onClick={() => setGuests(Math.max(1, numberOfGuests - 1))} />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black flex flex-col gap-2 items-center justify-center bg-[#151515] ">
              <p className="tracking-widest text-sm text-white uppercase" >
                {t("night")}
              </p>
              <div className="flex gap-3  items-center">
                {/* <p className="text-5xl ">{guests}</p> */}
                <p className="text-5xl text-[#BE9874]" style={{ fontFamily: "Gilda Display, serif" }}>{night}</p>
              </div>
            </div>

            <div id="error-message" className="text-red-500 text-xs"></div>
            <div id="perfect-message" className="text-green-500 text-xs"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatesSearch;
