import { useContext, useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Button, Modal } from "antd";
import { UserOutlined, PlusCircleOutlined, MinusCircleOutlined  } from "@ant-design/icons";
import axios from "axios";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";
import { Link } from "react-router-dom";

const SearchBar = ({setAllRooms, setNoRoomsMessage, pageContext}) => {
  const {
    numberOfGuests,
    childAges,
    checkIn,
    checkOut,
    category,
    child,
    night,
    setChild,
    setNight,
    setGuests,
    setCheckIn,
    setCategory,
    setCheckOut,
    setChildAges,
    setSearchLoader
    
  } = useContext(AuthContext)
  const [modal2Open, setModal2Open] = useState(false);

  const [searchParams, setSearchParams] = useState({
    category: '',
    numberOfGuests: 1,
    checkIn: '',
    checkOut: ''
  });
  

  
  
  const [room, setRooms] = useState(1);
  
  const [showDatePicker, setShowDatePicker] = useState(false);
 
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
      console.log("The state array is empty");
    }
  }, [state, setNight, setCheckIn,setCheckOut]);

  const handleIncrement = () => {
    setGuests((prevGuests) => prevGuests + 1);
  };

  const handleDecrement = () => {
    if (numberOfGuests > 1) {
      setGuests((prevGuests) => prevGuests - 1);
    }
  };
  const handleCancelModal = () => {
    // Reset the guests state to its default value (1 in this case)
    setGuests(1);
    setChild(0);
    setChildAges([]);

    // Close the modal
    setModal2Open(false);
  };
  const handleSearchReset = () => {
    // Reset the guests state to its default value (1 in this case)
    setCheckIn('')
    setCheckOut('')
    setCategory('')
    setGuests(1);
    setChild(0);
    setChildAges([]);

    // Close the modal
    setModal2Open(false);
  };

  const handleSelectDate = () => {
    setShowDatePicker(true);
  };
  const handleChildIncrement = () => {
    setChild((prevChild) => prevChild + 1);
    setChildAges((prevAges) => [...prevAges, 1]); // Add a default age of 1 for the new child
  };

  const handleChildDecrement = () => {
    if (child > 0) {
      setChild((prevChild) => prevChild - 1);
      setChildAges((prevAges) => prevAges.slice(0, -1)); // Remove the last child age
    }
  };

  const handleChildAgeChange = (index, age) => {
    const newChildAges = [...childAges];
    newChildAges[index] = age;
    setChildAges(newChildAges);
  };

  const datePickerRef = useRef(); // Create a ref for the date picker

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setShowDatePicker(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSearchParams({
      category,
      numberOfGuests,
      checkIn,
      checkOut,
    });
  }, [numberOfGuests, checkIn, checkOut,category]);
  

useEffect(()=>{

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://awalive-server-side-hzpa.vercel.app/searchRooms', { params: searchParams });
      
      if (response.data.message) {
        // Handle the case where no rooms are available
        setNoRoomsMessage(response.data.message);
        setAllRooms([]); // Reset the rooms data
      } else {
        setAllRooms(response.data);
        setNoRoomsMessage(""); // Reset the no rooms message
      }

      console.log('search rooms bar', response.data);
      
    } catch (error) {
      console.error('Error fetching search results:', error.message);
    }
    
  };
  
  handleSearch()
  
},[searchParams, setAllRooms, setSearchLoader,setNoRoomsMessage]) 

  const handleDateChange = (item) => {
    const newRange = item.selection;
    setState([newRange]);

    if (
      newRange.startDate &&
      newRange.endDate &&
      newRange.startDate.getTime() !== newRange.endDate.getTime()
    ) {
      const startDateString = newRange.startDate.toDateString();
      const endDateString = newRange.endDate.toDateString();

      // Calculate the difference in nights
      const timeDifference =
        newRange.endDate.getTime() - newRange.startDate.getTime();
      const differenceInNights = Math.ceil(timeDifference / (1000 * 3600 * 24));

      setNight(differenceInNights);
      setCheckIn(startDateString);
      setCheckOut(endDateString);

      // Hide the date picker automatically after both dates are selected
      setShowDatePicker(false);
    }
  };

  // console.log(dateDetails);

  return (
    <>
      <div className="md:w-[80%] mx-auto relative  py-4 px-4 bg-white  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center  ">
          <div
            className="flex justify-between items-center px-5 border border-black rounded-md md:py-2 bg-white cursor-pointer "
            onClick={() => setModal2Open(true)}
          >
            <div>
              <div className="flex items-center gap-4">
                <UserOutlined className="text-2xl" />
                <div>
                  <p className="text-xs">Travelers</p>
                  <p className="text-sm">
                    <span>{numberOfGuests}-Travelers,</span>
                    <span> {room}-Room</span>
                    {
                      child ? <span> {child}-children</span> : ''
                    }
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          <div
            className="flex flex-col relative z-10   px-2 border border-black rounded-md py-1 md:py-2 bg-white cursor-pointer "
            onClick={handleSelectDate}
            ref={datePickerRef}
          >
            <div>
              <p className="tracking-widest text-xs  ">
                {night} -Night </p>
              <button className="text-sm ">{`${checkIn} - ${checkOut}`}</button>
            </div>
            {showDatePicker && (
              <div className="absolute -left-2  bg-white md:p-10">
                <DateRange
                  editableDateInputs={true}
                  onChange={handleDateChange}
                  minDate={addDays(new Date(), 0)}
                  color="[#BE9874]"
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                />
                {/* <div>
                <button onClick={handleDone} className="py-2 px-4 rounded-full   border-[1px] border-blue-400 text-xs ">Done</button>
              </div> */}
              </div>
            )}
          </div>
          
          <div className="bg-[#1C1C1D]  px-5 rounded-md py-2 md:py-4 cursor-pointer text-white text-center ">
          {pageContext === 'home' ? (
          <Link to={'/roomSearch'} >Find Room</Link>
        ) : (
          <p onClick={handleSearchReset}>Reset</p>
        )}
          </div>
        </div>
      </div>

      
      <Modal
        title="Travelers"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={handleCancelModal}
        okText="Apply" 
        cancelText="Reset" 
      >
        <div>
          
          <div className="flex justify-between py-4">
            <p className="text-sm md:text-xl">Adults</p>
            <div className="flex gap-2 md:gap-5 items-center">
              <p><MinusCircleOutlined className="text-xl md:text-2xl font-light" onClick={handleDecrement} /></p>
              <p className="text-xl md:text-2xl  px-3" >{numberOfGuests}</p>
              <p ><PlusCircleOutlined className="text-xl md:text-2xl" onClick={handleIncrement} /></p>
            </div>
          </div>
          <div className="flex justify-between py-4">
            <p className="text-sm md:text-xl">Children</p>
            <div className="flex gap-2 md:gap-5 items-center">
              <p><MinusCircleOutlined className="text-xl md:text-2xl font-light" onClick={handleChildDecrement} /></p>
              <p className="text-xl md:text-2xl  px-3" >{child}</p>
              <p ><PlusCircleOutlined className="text-xl md:text-2xl" onClick={handleChildIncrement} /></p>
            </div>
          </div>
          {/* Render child age selectors based on the number of children */}
          {childAges.map((age, index) => (
            <div key={index} className="flex justify-between py-2">
              <p className="text-sm md:text-md ">Child {index + 1} Age</p>
              <div className="flex gap-2 md:gap-5 items-center">
                {/* Use a Select component or any other input for age selection */}
                <select
                  value={age}
                  onChange={(e) => handleChildAgeChange(index, parseInt(e.target.value))}
                  className="px-10"
                >
                  {Array.from({ length: 14 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num} className="">
                     Age - {num}  
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default SearchBar;
