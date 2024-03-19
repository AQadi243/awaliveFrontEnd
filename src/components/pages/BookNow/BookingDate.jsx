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

const BookingDate = ({totalPrice ,checkIn ,checkOut ,guests,loading ,error ,roomDetails ,nights}) => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation("booking");
  // const authInfo = useContext(AuthContext);
  // const [bookingInformation, setBookingInformation] = useState("");
  // const { loading, setLoading, } = authInfo;
 
  if (loading)
    return (
      <div className="w-full md:w-1/3 ">
        <Skeleton active />
      </div>
    );
  if (error)
    return (
      <div>
        <p>Error fetching room: {error}</p>
        <Link className="bg-black px-4 py-2 " to={"/home"}>
          Home
        </Link>
      </div>
    );
  if (!roomDetails) return <div>No room details available</div>;


  return (
    <div className=" w-full md:w-1/3">

    <div className={` ${currentLanguage === "ar" ? "body-ar font-medium " : "body-en-title"} `}>
      <div className="hidden md:flex md:flex-col relative">
        <div style={{ width: "100%", height: "100%", backgroundColor: "#e0e0e0" }}>
          <img src={roomDetails?.images[0]} alt="Room" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <p className="absolute top-4 left-4 text-white z-10 bg-[#151515] px-2 py-[2px] text-xs ">{roomDetails?.title}</p>
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
                {/* <p className="text-5xl text-[#BE9874]">{format(startDate, "dd")}</p> */}
                <p className="text-5xl text-[#BE9874]">{format(checkIn, "dd")}</p>

                <div className="flex flex-col items-center">
                  {/* <p className="text-[#BE9874]">{format(startDate, "MMM")}</p> */}
                  <p className="text-white text-xs italic ">{format(checkIn, "MMM yyyy")}</p>
                  <p className="text-xs text-white">{format(checkIn, "EEEE")}</p>
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
                {/* <p className="text-5xl text-[#BE9874]">{format(startDate, "dd")}</p> */}
                <p className="text-5xl text-[#BE9874]">{format(checkOut, "dd")}</p>

                <div className="flex flex-col items-center">
                  {/* <p className="text-[#BE9874]">{format(startDate, "MMM")}</p> */}
                  <p className="text-white text-xs italic ">{format(checkOut, "MMM yyyy")}</p>
                  <p className="text-xs text-white">{format(checkOut, "EEEE")}</p>
                  {/* <SlArrowDown className=" text-xs text-[#BE9874]" /> */}
                </div>
              </div>
            </div>
            
          </div>

          <div className={`bg-[#151515] flex items-center justify-center py-6  `}>
            <div className="text-black flex flex-col gap-2 items-center justify-center ">
              <p className="tracking-widest text-sm text-white uppercase">{t("guest")}</p>
              <div className="flex gap-3  items-center">
                <p className="text-5xl text-[#BE9874]" style={{ fontFamily: "Gilda Display, serif" }}>
                  {guests}
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
          <p className="px-3 mt-4 text-xs text-center tracking-widest uppercase font-semibold">{t("INCLUDED  15 % VAT ALREADY APPLIED")}</p>
    </div>
  );
};

export default BookingDate;
