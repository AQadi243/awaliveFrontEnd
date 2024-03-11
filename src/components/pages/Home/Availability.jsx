import  {  useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import Flatpickr from "react-flatpickr";
// import "flatpickr/dist/themes/material_green.css";
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme css file
import { Link } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Availability = () => {
  // const currentLanguage = i18next.language;
    const { t } = useTranslation("search");
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const [guests, setGuests] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    if (ranges.selection.endDate && 
      ranges.selection.startDate.getTime() !== ranges.selection.endDate.getTime()) {
    setShowDatePicker(false);
  }
    console.log(ranges.selection);
  };

  // const formatDateDisplay = (date) => {
  //   return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
  // };

   // Function to format and return day and month separately
   const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return { day, month };
  };
  
  
    
  return (
    <div dir="ltr" className="w-full h-full md:w-[70%] lg:w-[50%] mx-auto grid grid-cols-1 md:grid-cols-4  " style={{ fontFamily: "Gilda Display, serif" }}>
      <div className="bg-white flex items-center justify-center py-6">
        <div  onClick={() => setShowDatePicker(!showDatePicker)} className="text-black flex flex-col gap-2 items-center justify-center  focus:outline-none">
          <p className="tracking-widest text-sm uppercase" style={{ fontFamily: "poppins, serif" }}>{t("CHECK IN")}</p>
                  
          
          <div className="flex gap-2  items-center">
          <p className="text-5xl ">{formatDate(selectionRange.startDate).day}</p>
            
            {/* <p >15</p> */}
            <div className="">
              <p>{formatDate(selectionRange.startDate).month} ↓</p>
            </div>
          </div>
          
        </div>
        {showDatePicker && (
          <DateRange
          color="#1C1C1D"
            ranges={[selectionRange]}
            onChange={handleSelect}
            className="absolute top-full z-10"
          />
        )}
      </div>
      
      <div className="bg-white flex items-center justify-center py-6">
        <div onClick={() => setShowDatePicker(!showDatePicker)} className="text-black flex flex-col gap-2 items-center justify-center focus:outline-none">
          <p className="tracking-widest text-sm uppercase" style={{ fontFamily: "poppins, serif" }} >{t("CHECK OUT")}</p>
          <div className="flex gap-2  items-center">
            {/* <p className="text-5xl ">15</p> */}
            <p className="text-5xl ">{formatDate(selectionRange.endDate).day}</p>
            <div className="">
              <p>{formatDate(selectionRange.endDate).month} ↓</p>
              {/* <FaAngleDown className="text-[10px]" /> */}
            </div>
          </div>
          
        </div>
      </div>
      <div className="bg-white flex items-center justify-center py-6 ">
        <div className="text-black flex flex-col gap-2 items-center justify-center ">
          <p className="tracking-widest text-sm" style={{ fontFamily: "poppins, serif" }}>{t("GUESTS")}</p>
          <div className="flex gap-3  items-center">
            <p className="text-5xl ">{guests}</p>
            <div className=" flex flex-col gap-2">
              
              <FaAngleUp onClick={() => setGuests(guests + 1)} className="text-xl "/>
              <FaAngleDown onClick={() => setGuests(Math.max(1, guests - 1))} className="text-xl " />

            </div>
          </div>
        </div>
        
      </div>
      <Link to={'/roomSearch'} className="bg-[#1C1C1D] text-white flex flex-col items-center justify-center cursor-pointer py-6" style={{ fontFamily: "poppins, serif" }}>
        <p className="tracking-[0.2rem]">{t("Check")}</p>
        <p className="tracking-[0.2rem]">{t("Availability")}</p>
      </Link>
    </div>
  );
};

export default Availability;
