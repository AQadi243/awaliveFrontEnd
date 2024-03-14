/* eslint-disable react/prop-types */
import RoomImageSlider from "./RoomImageSlider";

import RoomDate from "./RoomDate";
import { CheckOutlined, UserOutlined, ArrowsAltOutlined, CalendarOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Image } from "antd";
import { useState } from "react";
import { LuHome, LuUserCircle } from "react-icons/lu";
import { CiViewTable } from "react-icons/ci";

const RoomDetailsBody = ({ singleRoomDetails }) => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation("booking");
  const [showAll, setShowAll] = useState(false);

  const { description, features, images, maxGuests, priceOptions, services, size } = singleRoomDetails;

  // Toggle the showAll state
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Determine how many services to show
  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <>
      <div className=" lg:relative flex flex-col-reverse lg:flex-row gap-5 py-5 ">
        <div className="lg:w-2/3 lg:overflow-y-auto lg:flex-grow ">
          <RoomImageSlider images={images} />

          {/* Facilities   */}
          <div dir={`${currentLanguage === "ar" ? "rtl" : "ltr"}`}>
            <div className="flex justify-between  py-2 md:py-4 px-2">
              <div className="flex flex-col items-center gap-3 ">
                <p className="text-2xl">
                  {/* <UserOutlined />{" "} */}
                  <LuUserCircle className="text-3xl md:text-4xl text-gray-400 " />
                </p>{" "}
                <div className="flex gap-2 ">
                  <p>{maxGuests}</p>
                  <p className="uppercase tracking-widest text-sm  ">{t("guest")}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <p className="text-xl md:text-2xl">
                  <CiViewTable className=" text-3xl md:text-4xl text-gray-400" />
                </p>{" "}
                <div>
                  <p className="uppercase tracking-widest text-sm ">{size}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                {/* <p className="text-xl  md:text-xl">{t("SAR")} </p>{" "} */}
                <LuHome className="text-3xl md:text-4xl text-gray-400" />
                <p className="uppercase tracking-widest text-sm  ">
                  {priceOptions[0].price} {priceOptions[0].currency}
                </p>
                {/* <p>
                  {currentLanguage === "en"
                    ? priceOptions[0].price.toLocaleString()
                    : priceOptions[0].price.toLocaleString("ar-EG")}{" "}
                  {priceOptions[0].currency}
                </p> */}
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl  md:text-2xl">
                  <CalendarOutlined className="text-3xl md:text-4xl text-gray-400" />{" "}
                </p>{" "}
              </div>
            </div>
          </div>
          {/* Facilities end  */}
          <hr />
          <p
            dir={`${currentLanguage === "ar" ? "rtl" : "ltr"}`}
            className={`py-3 text-sm leading-7 ${currentLanguage === "ar" ? "body-ar" : "body-en"} `}
          >
            {description}
          </p>
          <hr />
          <div dir={`${currentLanguage === "ar" ? "rtl" : "ltr"}`} className=" mb-4">
            <h2 className={`text-2xl  py-5 md:py-4 ${currentLanguage === "ar" ? "body-ar" : "body-en"} `}>{t("roomFeatures")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {features?.map((feature, index) => (
                <div key={index} className="flex gap-2 items-center text-xs ">
                  <CheckOutlined className="text-green-400" />
                  <p className={`text-sm ${currentLanguage === "ar" ? "body-ar" : "body-en"}`}>{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div dir={`${currentLanguage === "ar" ? "rtl" : "ltr"}`} className="">
            <h2 className={`text-2xl  py-5 md:py-4 ${currentLanguage === "ar" ? "body-ar" : "body-en"} `}>{t("roomService")}</h2>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {displayedServices.map((service, index) => (
                  <div key={index} className="flex gap-2 items-center text-xs">
                    <CheckOutlined className="text-green-400" />
                    <p className={`text-sm ${currentLanguage === "ar" ? "body-ar" : "body-en"}`}>{service}</p>
                  </div>
                ))}
              </div>
              {services.length > 4 && (
                <button className="mt-2 text-sm text-[#5c5c5c] hover:text-[#817070]" onClick={toggleShowAll}>
                  {showAll ? "See Less" : "Show More"}
                </button>
              )}
            </div>
          </div>

          {/* Around hotels start */}

          {/* Around hotels end */}
        </div>
        <div className=" lg:w-1/3 lg:h-screen flex flex-col lg:sticky lg:top-0 ">
          <RoomDate singleRoomDetails={singleRoomDetails} />
          <div dir={`${currentLanguage === "ar" ? "rtl" : "ltr"}`} className="py-2">
            <Image.PreviewGroup>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {images.map((url, index) => (
                  <Image key={index} width={100} height={80} src={url} style={{ marginBottom: "10px" }} />
                ))}
              </div>
            </Image.PreviewGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetailsBody;
