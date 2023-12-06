import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
// import { AuthContext } from "../../sharedPages/Context/AuthProvider";
// import { Link } from "react-router-dom";

const DatesSearch = ({searchValue}) => {
    
//   const authInfo = useContext(AuthContext);
  const { searchCheckIn,
    setSearchCheckIn,
    searchNight,
    setSearchNight,
    searchCheckOut,
    setSearchCheckOut,
    searchGuest,
    setSearchGuest } = searchValue ;
//   const { roomName, roomPrice, image,  } = singleRoomDetails;
  const [showDatePicker, setShowDatePicker] = useState(false);

//   setRoomImage(image)
//   setRoomName(roomName)
//   setRoomPrice(roomPrice)
   

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

      setSearchNight(differenceInNights);
      setSearchCheckIn(startDateString);
      setSearchCheckOut(endDateString);
    } else {
      console.log("The state array is empty");
    }
  }, [state]);

  const handleIncrement = () => {
    setSearchGuest((prevGuests) => prevGuests + 1);
  };

  const handleDecrement = () => {
    if (searchGuest > 0) {
        setSearchGuest((prevGuests) => prevGuests - 1);
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
    <>
      <div className=" md:w-1/3   ">
        <div className="flex flex-col gap-5  items-center justify-center text-center bg-[#1C1C1D] py-5 px-5 md:py-10 md:px-10 relative z-40" style={{ fontFamily: "Gilda Display, serif" }}>
            
          <p className="text-white text-xl tracking-widest  bg-black w-full py-4 ">
            Select Dates
          </p>
          <div className="grid grid-cols-2 gap-5  w-full">
            <div
              id="start-container"
              className="bg-black py-2 px-2  flex flex-col items-center justify-center cursor-pointer date-picker"
            >
              <button
                onClick={handleSelectDate}
                className="text-xl text-white"
              >
                {searchCheckIn}
              </button>
            </div>
            <div
              id="end-container"
              className="bg-black py-2 px-2 flex flex-col items-center justify-center cursor-pointer date-picker">
              <button
                onClick={handleSelectDate}
                className="text-xl text-white">
                {searchCheckOut}
              </button>
            </div>
            {showDatePicker && (
              <div className="absolute left-0 w-[100%]  bg-white">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setState([item.selection])}
                  minDate={addDays(new Date(), 0)}
                  color="[#BE9874]"
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                />
                <div>
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
              className="bg-black py-2 px-2 flex flex-col items-center justify-center cursor-pointer date-picker">
              <div className="flex items-center gap-4 text-xl">
                <p>{searchGuest}</p>
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
            <div
              id="days-container"
              className="bg-black py-2 px-2 flex flex-col items-center justify-center cursor-pointer date-picker"
            >
              <label  className="text-xl text-white">
                Days
              </label>
              <p
                id="selectedDays"
                className="bg-transparent outline-none w-28 text-[#BE9874] text-2xl"
              >
                {searchNight}
              </p>
            </div>
            
            <div id="error-message" className="text-red-500 text-xs"></div>
            <div id="perfect-message" className="text-green-500 text-xs"></div>
          </div>
          
          {/* <Link to={'/booking'}
            onClick={handleBookNow}
            className="bg-[#BE9874] w-full py-2 text-white text-xs md:text-sm bookNow "
          >
            Book Now
          </Link> */}
        </div>
      </div>
      
    </>
  );
};

export default DatesSearch;
