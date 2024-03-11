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
const skeletonCount = 6;

const AllRooms = ({ allRooms, loadingAllRooms, availableRooms, loadingAvailableRooms }) => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation("booking");
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
      {loadingAllRooms || loadingAvailableRooms
        ? Array.from({ length: skeletonCount }, (_, index) => <Skeleton key={index} active />)
        : displayRooms?.map((room) => (
            <div
              key={room.id}
              className="col-span-1 border border-gray-200 flex flex-col gap-3 card"
              data-price="56"
              style={{ fontFamily: "Gilda Display, serif" }}
            >
              <CoverSlider images={room.images} />
              <div className="px-4 py-2 flex flex-col gap-3">
                <h2 className="text-2xl  text-slate-900  ">{room.title}</h2>
                <div className="flex justify-between text-gray-900 ">
                  <div className="flex gap-2 items-center justify-center">
                    
                    <LuUserCircle className="text-2xl  " />
                    
                    <p>{room.maxGuests}</p>
                    <p className="uppercase text-xs">{t("guest")}</p>
                  </div>
                  {room.availableQty && (
                    <div className="flex gap-2 items-center">
                      <p className="text-xl md:text-sm">{t("availableRooms")} </p> <p>{room?.availableQty}</p>
                    </div>
                  )}
                  <div className="flex gap-2 items-center">
                    <p className="text-xl md:text-2xl">
                      <ArrowsAltOutlined />{" "}
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
            </div>
          ))}
    </div>
  );
};

export default AllRooms;
