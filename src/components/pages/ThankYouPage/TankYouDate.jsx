import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";
import { CheckOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { SlArrowDown } from "react-icons/sl";
import axios from "axios";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";
import { differenceInCalendarDays, format } from "date-fns";

const ThankYouDate = ({bookedRoomDetails}) => {
    
    const { t } = useTranslation("booking");
  const currentLanguage = i18next.language;
  const [nights, setNights] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (bookedRoomDetails?.checkIn && bookedRoomDetails?.checkOut) {
      const checkInDate = new Date(bookedRoomDetails?.checkIn);
      const checkOutDate = new Date(bookedRoomDetails?.checkOut);
      const diffDays = differenceInCalendarDays(checkOutDate, checkInDate);
      setNights(diffDays);

      // Calculate total price and VAT
      const perNightPrice = bookedRoomDetails?.roomId?.priceOptions[0]?.price || 0;
      const totalPriceBeforeVAT = perNightPrice * diffDays;
      const VAT = totalPriceBeforeVAT * 0.15; // 15% VAT
      setTotalPrice(totalPriceBeforeVAT + VAT);
    }
  }, [bookedRoomDetails]);

  // Ensure you handle loading or empty states appropriately
  if (!bookedRoomDetails) {
    return <div>Loading or no booking details available...</div>;
  }



  return (
    <div className=" w-full md:w-1/3">

    <div className={` ${currentLanguage === "ar" ? "body-ar font-medium " : "body-en-title"} `}>
      <div className="relative">
        <div style={{ width: "100%", height: "100%", backgroundColor: "#e0e0e0" }}>
          <img src={bookedRoomDetails?.roomId?.images[0]} alt="Room" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <p className="absolute top-4 left-4 text-white z-10 bg-[#151515] px-2 py-[2px] text-xs ">{bookedRoomDetails?.roomId?.title[currentLanguage]}</p>
        <div className="overlay absolute inset-0 bg-gradient-to-t from-[#1C1C1C] to-transparent"></div>
      </div>
      <div
        className={`flex flex-col gap-5  items-center justify-center text-center bg-[#1C1C1C]  py-5 px-5 md:py-10 md:px-10 relative  ${
          currentLanguage === "ar" ? "body-ar" : "body-en"
        } `}
      >
        <p
          className={`text-white text-xs  tracking-widest uppercase  bg-[#151515]  w-full py-4 ${
            currentLanguage === "ar" ? "body-ar font-medium" : "body-en"
          } `}
        >
          {/* {t("selectDates")} */}
          {t("YOUR RESERVATION")}
        </p>
        <div className="grid grid-cols-2 gap-5  w-full">
          <div className="bg-[#151515] flex items-center justify-center py-6">
            <div
              // onClick={() => startDatePickerRef.current.setOpen(true)}
              className="text-black flex flex-col gap-2 items-center justify-center focus:outline-none cursor-pointer"
            >
              <p className="tracking-widest text-sm uppercase text-white">{t("Check In")}</p>
              <div className="flex flex-col   items-center" style={{ fontFamily: "Gilda Display, serif" }}>
              {/* {checkIn && checkOut && (
                <> */}
                {/* <p className="text-5xl text-[#BE9874]">{format(startDate, "dd")}</p> */}
                <p className="text-5xl text-[#BE9874]">{format(new Date(bookedRoomDetails.checkIn), "dd")}</p>

                <div className="flex flex-col items-center">
                  {/* <p className="text-[#BE9874]">{format(startDate, "MMM")}</p> */}
                  <p className="text-white text-xs italic ">{format(new Date(bookedRoomDetails.checkIn), "MMM yyyy")}</p>
                  <p className="text-xs text-white">{format(new Date(bookedRoomDetails.checkIn), "EEEE")}</p>
                  {/* <SlArrowDown className=" text-xs text-[#BE9874]" /> */}
                </div>
               
              </div>
            </div>
            
          </div>
          <div className="bg-[#151515] flex items-center justify-center py-6">
            <div
              // onClick={() => endDatePickerRef.current.setOpen(true)}
              className="text-black flex flex-col gap-2 items-center justify-center focus:outline-none cursor-pointer"
            >
              <p className="tracking-widest text-sm uppercase text-white">{t("Check Out")}</p>
              <div className="flex flex-col   items-center" style={{ fontFamily: "Gilda Display, serif" }}>
              {/* {checkIn && checkOut && (
                <> */}
                <p className="text-5xl text-[#BE9874]">{format(new Date(bookedRoomDetails.checkOut), "dd")}</p>
                <div className="flex flex-col items-center">
                  
                  <p className="text-white text-xs italic ">{format(new Date(bookedRoomDetails.checkOut), "MMM yyyy")}</p>
                  <p className="text-xs text-white">{format(new Date(bookedRoomDetails.checkOut), "EEEE")}</p>
                 
                </div>
                {/* </>
              )} */}
              </div>
            </div>
            
          </div>

          <div className={`bg-[#151515] flex items-center justify-center py-6  `}>
            <div className="text-black flex flex-col gap-2 items-center justify-center ">
              <p className="tracking-widest text-sm text-white uppercase">{t("guest")}</p>
              <div className="flex gap-3  items-center">
                <p className="text-5xl text-[#BE9874]" style={{ fontFamily: "Gilda Display, serif" }}>
                  {bookedRoomDetails.numberOfGuests}
                </p>
                
              </div>
            </div>
          </div>
          <div className="text-black flex flex-col gap-2 items-center justify-center bg-[#151515] ">
            <p className="tracking-widest text-sm text-white uppercase">{t("night")}</p>
            <div className="flex gap-3  items-center">
              <p className="text-5xl text-[#BE9874]" style={{ fontFamily: "Gilda Display, serif" }}>
                {nights}
              </p>
            </div>
          </div>

        </div>
          <div className="flex  items-center mt-2">
          <p  className="text-white font-medium text-4xl tracking-wide" style={{ fontFamily: "Gilda Display, serif" }}>{totalPrice}/</p>
          <p  className="text-white  text-xl tracking-widest capitalize" style={{ fontFamily: "Gilda Display, serif" }}> {t("total")}</p>
            </div>
      </div>
    </div>
          {/* <p className="px-3 mt-4 text-xs text-center tracking-widest uppercase font-semibold">{t("INCLUDED  15 % VAT ALREADY APPLIED")}</p> */}
    </div>
  );
};

export default ThankYouDate;
