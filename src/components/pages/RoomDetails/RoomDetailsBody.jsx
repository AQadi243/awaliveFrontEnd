/* eslint-disable react/prop-types */
import RoomImageSlider from "./RoomImageSlider";
// import arroundImage from "../../../assets/serviceImage1.jpeg";
// import arroundImage2 from "../../../assets/serviceImage2.jpeg";
// import arroundImage3 from "../../../assets/serviceImage3.jpeg";
import RoomDate from "./RoomDate";
import {
  CheckOutlined,
  UserOutlined,
  ArrowsAltOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Image } from "antd";
import { useState } from "react";

const RoomDetailsBody = ({ singleRoomDetails }) => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation("booking");
  const [showAll, setShowAll] = useState(false);

  const {
    description,
    features,
    images,
    maxGuests,
    priceOptions,
    services,
    size,
  } = singleRoomDetails;

  // Toggle the showAll state
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Determine how many services to show
  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-5 py-5">
        <div className="lg:w-2/3 ">
          <RoomImageSlider images={images} />

          {/* Facilities   */}
          <div>
            <div className="py-2">
              <Image.PreviewGroup>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {images.map((url, index) => (
                    <Image
                      key={index}
                      width={150}
                      height={100}
                      src={url}
                      style={{ marginBottom: "10px" }}
                    />
                  ))}
                </div>
              </Image.PreviewGroup>
            </div>
            <div className="flex justify-between py-2 md:py-4 px-2">
              <div className="flex flex-col items-center">
                <p className="text-2xl">
                  <UserOutlined />{" "}
                </p>{" "}
                <p>{maxGuests}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl md:text-2xl">
                  <ArrowsAltOutlined />{" "}
                </p>{" "}
                <p>{size}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl  md:text-xl">{t("SAR")} </p>{" "}
                <p>
                  {currentLanguage === "en"
                    ? priceOptions[0].price.toLocaleString()
                    : priceOptions[0].price.toLocaleString("ar-EG")}{" "}
                  {priceOptions[0].currency}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl  md:text-2xl">
                  <CalendarOutlined />{" "}
                </p>{" "}
              </div>
            </div>
          </div>
          {/* Facilities end  */}
          <hr />
          <p className="py-3 text-sm leading-7">{description}</p>
          <hr />
          <div className="">
            <h2
              className="text-2xl  py-5 md:py-4 "
              style={{ fontFamily: "Gilda Display, serif" }}
            >
              {t("roomFeatures")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {features?.map((feature, index) => (
                <div key={index} className="flex gap-2 items-center text-xs ">
                  {/* <img className="w-6 md:w-8 " src={service.Icon} alt="serviceImage" /> */}
                  <CheckOutlined className="text-green-400" />
                  <p className="text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="">
            <h2
              className="text-2xl  py-4 md:py-4 "
              style={{ fontFamily: "Gilda Display, serif" }}
            >
              {t("roomService")}
            </h2>
            
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {displayedServices.map((service, index) => (
                  <div key={index} className="flex gap-2 items-center text-xs">
                    <CheckOutlined className="text-green-400" />
                    <p className="text-sm">{service}</p>
                  </div>
                ))}
              </div>
              {services.length > 4 && (
                <button
                  className="mt-2 text-sm text-[#5c5c5c] hover:text-[#817070]"
                  onClick={toggleShowAll}
                >
                  {showAll ? "See Less" : "Show More"}
                </button>
              )}
            </div>
          </div>

          {/* Around hotels start */}
          
          {/* Around hotels end */}
        </div>
        <RoomDate singleRoomDetails={singleRoomDetails} />
      </div>
    </>
  );
};

export default RoomDetailsBody;
