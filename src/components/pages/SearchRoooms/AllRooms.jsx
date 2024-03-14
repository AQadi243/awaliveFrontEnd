/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import {  Spin } from "antd";
import { UserOutlined, ArrowsAltOutlined } from "@ant-design/icons";
import CoverSlider from "./CoverSlider";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Skeleton } from "antd";
import { LuUserCircle } from "react-icons/lu";
import pool from '/img/swmming-pool.png'
import drinks from '/img/welcome-drink.png'
import smoking from '/img/no-smoking.png'
import bath from '/img/private-bathroom.png'
import { CiViewTable } from "react-icons/ci";
const skeletonCount = 6;

const AllRooms = ({ allRooms, loadingAllRooms, availableRooms, loadingAvailableRooms, errorMessage, resetSearch }) => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation("booking");
  const [displayRooms, setDisplayRooms] = useState(allRooms);
  console.log(availableRooms,'asdasdas');
  useEffect(() => {
    setDisplayRooms(allRooms);
  }, [allRooms]); // Depend on allRooms.data

  // Update displayRooms when availableRooms are fetched
  useEffect(() => {
    if (!loadingAvailableRooms) {
      setDisplayRooms(availableRooms);
    }
  }, [availableRooms, loadingAvailableRooms]);


  if (errorMessage) {
    return (
    <div className="md:w-2/3 flex flex-col items-center justify-center gap-5 ">
    {/* Render other parts of your component here, like the search form and results */}
    {errorMessage && <div className="text-xl">OPPS: {errorMessage}</div>}
    <button onClick={resetSearch} className="bg-[#1C1C1C] text-white px-4 py-2 capitalize">{t("reset")} </button>
    {/* Render the available rooms or a loading indicator */}
  </div>
  );
  }
 

  return (
    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2  gap-5 roomCards">
      {loadingAllRooms || loadingAvailableRooms
        ? Array.from({ length: skeletonCount }, (_, index) => <Skeleton key={index} active />)
        : displayRooms?.map((room) => (
            <div
              key={room.id}
              className={`col-span-1 border border-gray-200 flex flex-col gap-3 card ${currentLanguage === 'ar' ? 'body-ar' : 'body-en'} `}
              data-price={room.priceOptions[0].price}
              // className={}
            >
              <CoverSlider images={room.images} />
              <div className="px-4 py-2 flex flex-col gap-3"  >
                <h2 className="text-2xl md:text-[25px]  text-slate-900 capitalize " style={{ fontFamily: "Gilda Display, serif" }}>{room.title}</h2>
                <div className="flex gap-10 text-gray-900 ">
                  <div className="flex gap-2 items-center justify-center">
                    
                    <LuUserCircle className="text-2xl text-gray-400 " />
                    
                    <p>{room.maxGuests}</p>
                    <p className="uppercase text-xs">{t("guest")}</p>
                  </div>
                  
                  <div className="flex gap-2 items-center">
                    <p className="text-xl md:text-2xl">
                      {/* <ArrowsAltOutlined />{" "} */}
                      <CiViewTable className="text-gray-400" />
                    </p>{" "}
                    <p>{room.size}</p>
                  </div>
                </div>

                <p className="text-sm py-3 ">
                  {room.description.length > 100 ? `${room.description.slice(0, 100)}...` : room.description}
                </p>
                <div>
                  <Link
                    to={`/room/${room.id}`}
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
              </div>
              <div className="px-6 flex justify-between items-center ">
              <div className="flex gap-2 pb-2">
                <img className="w-5 h-5" src={pool} alt="" />
                <img className="w-5 h-5" src={drinks} alt="" />
                <img className="w-5 h-5" src={smoking} alt="" />
                <img className="w-5 h-5" src={bath} alt="" />
                
              </div>
              <div>
                <Link to={`/room/${room.id}`} className="text-xs tracking-widest">{t("FULL INFO")}</Link>
              </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default AllRooms;
