import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const DatePicker = () => {
  const [night, setNight] = useState(0)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [guests, setGuests] = useState(1);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  useEffect(() => {
    if (state.length > 0) {
      let firstObject = state[0];
      const { startDate, endDate } = firstObject;
      const onlyStartDate = new Date(startDate);
      const onlyEndDate = new Date(endDate);

      const startDateString = onlyStartDate.toDateString();
      const endDateString = onlyEndDate.toDateString();

      // Calculate the difference in nights
      const timeDifference = onlyEndDate.getTime() - onlyStartDate.getTime();
      const differenceInNights = Math.ceil(timeDifference / (1000 * 3600 * 24));

      setNight(differenceInNights);
      setCheckIn(startDateString);
      setCheckOut(endDateString);
    } else {
      console.log('The state array is empty');
    }
  }, [state]);

  

  const handleIncrement = () => {
    setGuests((prevGuests) => prevGuests + 1);
  };

  const handleDecrement = () => {
    if (guests > 0) {
      setGuests((prevGuests) => prevGuests - 1);
    }
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
    <div className="w-[80%] mx-auto relative  ">
      <div className="grid grid-cols-3 items-center bg-white">
        <div className="flex justify-between items-center px-5 bg-white " >
          <div >
              <p className="uppercase text-xs tracking-widest" >Guest</p>
            <div className="flex items-center gap-4 text-xl">
              <p>{guests}</p>
              <div className="flex flex-col text-xl">
                <button className="text-[#BE9874] " onClick={handleIncrement}>
                  <FaAngleUp />
                </button>
                <button className="text-[#BE9874]" onClick={handleDecrement}>
                  <FaAngleDown />
                </button>
              </div>
            </div>
          </div>

        <hr className=" h-10 border-l-[1px] border-dashed border-[#1C1C1D]" />
        </div>
        <div className="flex flex-col   px-5 bg-white py-10">
          <div>
            <p className="tracking-widest text-xs  " >{night} <span className="uppercase ">night</span> </p>
            <button onClick={handleSelectDate} className="text-xs md:text-sm" >{`${checkIn} - ${checkOut}`}</button>
            
          </div>
          {showDatePicker && (
            <div className="absolute left-0  bg-white">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                minDate={addDays(new Date(), 0)}
                color="[#BE9874]"
                moveRangeOnFirstSelection={false}
                ranges={state}
              />
              <div>
                <button onClick={handleDone} className="py-2 px-4 rounded-full   border-[1px] border-blue-400 text-xs ">Done</button>
              </div>
            </div>
          )}
        </div>
        {/* <hr className=" h-10 border-l-[1px] border-dashed border-[#1C1C1D]" /> */}
        <div className="bg-[#1C1C1D] w-full h-full flex items-center justify-center py-10">
          <div className=" text-white flex items-center justify-center">
            <button>Find Room</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
