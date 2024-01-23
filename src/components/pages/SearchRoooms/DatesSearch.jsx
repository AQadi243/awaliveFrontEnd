import { useContext, useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
// import { addDays } from "date-fns";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";
import { useTranslation } from "react-i18next";

const DatesSearch = () => {
  const authInfo = useContext(AuthContext);
  const { t } = useTranslation("booking");
  const {
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
  } = authInfo;
  const [showDatePicker, setShowDatePicker] = useState(false);
  
    // const [checkIn, setCheckIn] = useState("check-in");
  // const [checkOut, setCheckOut] = useState("check-out");
  // const [calender, setState] = useState([
  
  // const [night, setNight] = useState(0);

  useEffect(() => {
    if (calender[0].startDate && calender[0].endDate) {
      const startDateString = calender[0].startDate.toDateString();
      const endDateString = calender[0].endDate.toDateString();

      const timeDifference =
        calender[0].endDate.getTime() - calender[0].startDate.getTime();
      const differenceInNights = Math.ceil(timeDifference / (1000 * 3600 * 24));

      setNight(differenceInNights);
      setCheckIn(startDateString);
      setCheckOut(endDateString);
    }
  }, [calender, setCheckOut, setCheckIn, setNight]);

  const handleIncrement = () => {
    setGuests((prevGuests) => (prevGuests === null ? 1 : prevGuests + 1));
  };

  const handleDecrement = () => {
    setGuests((prevGuests) => (prevGuests > 1 ? prevGuests - 1 : prevGuests));
  };

  const handleSelectDate = () => {
    setShowDatePicker(true);
  };

  const handleDone = () => {
    // Perform any necessary actions with the selected date range
    // ...

    // Hide the date picker
    setShowDatePicker(false);
  };

  // console.log(dateDetails);

  return (
    <>
      <div className=" md:w-1/3   ">
        <div
          className="flex flex-col gap-5  items-center justify-center text-center bg-[#1C1C1D] py-5 px-5 md:py-10 md:px-10 relative "
          style={{ fontFamily: "Gilda Display, serif" }}
        >
          <p className="text-white text-xl tracking-widest  bg-black w-full py-4 ">
            {t("selectDates")}
          </p>
          <div className="grid grid-cols-2 gap-5  w-full">
            <div
              id="start-container"
              className="bg-black py-2 px-2  flex flex-col items-center justify-center cursor-pointer date-picker"
              onClick={handleSelectDate}
            >
              <p className="text-white">{t("from")}</p>
              <button
                onClick={handleSelectDate}
                className="text-md  text-[#BE9874]"
              >
                {checkIn}
              </button>
            </div>
            <div
              id="end-container"
              onClick={handleSelectDate}
              className="bg-black py-2 px-2 flex flex-col items-center justify-center cursor-pointer date-picker"
            >
              <p className="text-white">{t("to")}</p>
              <button
                onClick={handleSelectDate}
                className="text-md  text-[#BE9874]"
              >
                {checkOut}
              </button>
            </div>
            {showDatePicker && (
              <div className="absolute left-0 w-[100%]  bg-white">
                {/* <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setState([item.selection])}
                  minDate={addDays(new Date(), 0)}
                  color="[#BE9874]"
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                /> */}
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setCalender([item.selection])}
                  minDate={new Date()}
                  color="[#BE9874]"
                  moveRangeOnFirstSelection={false}
                  ranges={calender}
                />
                <div className="pb-4">
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
                <div className="flex flex-row gap-1 items-center text-xl">
                  <button
                    className="text-[#BE9874] p-2"
                    onClick={handleDecrement}
                  >
                    <FaAngleDown />
                  </button>
                  <p className="text-[#BE9874]">{numberOfGuests}</p>
                  <button
                    className="text-[#BE9874] p-2 "
                    onClick={handleIncrement}
                  >
                    <FaAngleUp />
                  </button>
                </div>
              </div>
            </div>
            <div
              id="days-container"
              className="bg-black py-2 px-2 flex flex-col gap-1 items-center justify-center cursor-pointer date-picker"
            >
              <label className="text-md  text-white">{t("night")}</label>
              <p
                id="selectedDays"
                className="bg-transparent outline-none w-28 text-[#BE9874] text-2xl"
              >
                {night}
              </p>
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
