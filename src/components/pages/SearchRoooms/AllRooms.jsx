/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  Spin } from "antd";
import { UserOutlined, ArrowsAltOutlined } from "@ant-design/icons";
import CoverSlider from "./CoverSlider";
import { useTranslation } from "react-i18next";
import i18next from "i18next";


// import { AuthContext } from "../../sharedPages/Context/AuthProvider";

const AllRooms = ({ allRooms, loadingAllRooms, availableRooms, loadingAvailableRooms }) => {
  // console.log(allRooms,'asdfasfasdfasdfasdfasdfsdasdsacasd');
  const currentLanguage = i18next.language;
  const { t } = useTranslation("booking");
  // const [currentPage, setCurrentPage] = useState(1);
  const [displayRooms, setDisplayRooms] = useState(allRooms);


  useEffect(() => {
    setDisplayRooms(allRooms);
   
   
  }, [allRooms]); // Depend on allRooms.data

  // Update displayRooms when availableRooms are fetched
  useEffect(() => {
    if (!loadingAvailableRooms) {
      setDisplayRooms(availableRooms);
    }
  }, [availableRooms, loadingAvailableRooms]);


  return (
    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2  gap-5 roomCards">
      {loadingAllRooms || loadingAvailableRooms  ? (
        <div className="h-[10rem] flex items-center justify-center">
          <p>
            <Spin />
          </p>
          <p>Loading...</p>
        </div>
      ) : (
        displayRooms?.map((room) => (
          <div
            key={room.id}
            className="col-span-1 border border-gray-200 flex flex-col gap-3 card"
            data-price="56"
            style={{ fontFamily: "Gilda Display, serif" }}
          >
            <CoverSlider images={room.images} />
            {/* <img
              src={room.images[0]}
              alt=""
              className="w-full aspect-video object-fill "
            /> */}
            <div className="px-4 py-2 flex flex-col gap-3">
              <h2 className="text-2xl  text-slate-900  ">{room.title}</h2>
              <div className="flex justify-between ">
                <div className="flex gap-2 items-center">
                  <p className="text-2xl">
                    <UserOutlined />{" "}
                  </p>{" "}
                  <p>{room.maxGuests}</p>
                </div>
                {room.availableQty &&
                <div className="flex gap-2 items-center">
                <p className="text-xl md:text-sm">
                {t('availableRooms')}{" "}
                </p>{" "}
                <p>{room?.availableQty}</p>
              </div>
                }
                <div className="flex gap-2 items-center">
                  <p className="text-xl md:text-2xl">
                    <ArrowsAltOutlined />{" "}
                  </p>{" "}
                  <p>{room.size}</p>
                </div>
                {/* <div className="flex flex-col items-center"><p className="text-xl  md:text-xl">SAR </p> <p>{priceOptions[0].price}</p></div> */}
                {/* <div className="flex flex-col items-center"><p className="text-xl  md:text-2xl"><CalendarOutlined /> </p> </div> */}
              </div>
              {/* <div className="flex  gap-2 md:gap-3 items-center  text-sm md:text-md">
                <p className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </p>
                <p>{room.maxGuests} Guests </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                  />
                </svg>
                <p>15 FT</p>
              </div> */}
              <p className="text-sm ">
                {room.description.length > 100
                  ? `${room.description.slice(0, 100)}...`
                  : room.description}
              </p>
              <div>
                <Link
                  to={`/room/${room.id}`}
                  // data-price={room.roomPrice}
                  className="px-4 py-2 md:px-6 md:py-2 border border-[#BE9874] text-[#BE9874] uppercase text-sm tracking-widest font-semibold  "
                >
                  {t("bookNowFor")}{" "}
                  <strong>
                    {currentLanguage === "en"
                      ? room.priceOptions[0].price.toLocaleString()
                      : room.priceOptions[0].price.toLocaleString("ar-EG")}
                  </strong>{" "}
                  {room.priceOptions[0].currency}
                </Link>
              </div>
              <hr className="mt-2" />
              {/* <div className="grid grid-cols-3 justify-between">
                {room?.features?.map((feature, index) => (
                  <div key={index} className="">
                    
                    <p className="text-xs">{feature}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        ))
      )}
      {/* <div className="flex justify-center mt-4">
        <Pagination
          defaultCurrent={1}
          total={allRooms?.length}
          pageSize={PAGE_SIZE}
          onChange={handlePageChange}
        />
      </div> */}
    </div>
  );
};

export default AllRooms;
