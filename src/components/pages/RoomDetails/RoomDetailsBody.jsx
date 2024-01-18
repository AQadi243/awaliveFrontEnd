/* eslint-disable react/prop-types */
import RoomImageSlider from "./RoomImageSlider";
import arroundImage from "../../../assets/serviceImage1.jpeg";
import arroundImage2 from "../../../assets/serviceImage2.jpeg";
import arroundImage3 from "../../../assets/serviceImage3.jpeg";
import RoomDate from "./RoomDate";
import { CheckOutlined, UserOutlined,ArrowsAltOutlined , CalendarOutlined    } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const RoomDetailsBody = ({ singleRoomDetails }) => {
  const {t} = useTranslation('booking')
  
  const {
    description,
    features,
    images,
    maxGuests,
    priceOptions,
    services,
    size,
    
  } = singleRoomDetails;

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-5 py-5">
        <div className="md:w-2/3">
          <RoomImageSlider images={images} />

          {/* Facilities   */}
          <div>
            <div className="flex justify-between py-2 md:py-5 px-2">
              <div className="flex flex-col items-center"><p className="text-2xl"><UserOutlined /> </p> <p>{maxGuests}</p></div>
              <div className="flex flex-col items-center"><p className="text-xl md:text-2xl"><ArrowsAltOutlined /> </p> <p>{size}</p></div>
              <div className="flex flex-col items-center"><p className="text-xl  md:text-xl">{t('SAR')} </p> <p>{priceOptions[0].price}{" "}{priceOptions[0].currency}</p></div>
              <div className="flex flex-col items-center"><p className="text-xl  md:text-2xl"><CalendarOutlined /> </p> </div>
            </div>
          </div>
          {/* Facilities end  */}
          <hr />
          <p className="py-3 text-sm leading-7">{description}</p>
          <hr />
          <div className="">
            <h2
              className="text-2xl md:text-3xl py-5 md:py-5 "
              style={{ fontFamily: "Gilda Display, serif" }}
            >
              {t('roomFeatures')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
              className="text-2xl md:text-3xl py-5 md:py-5 "
              style={{ fontFamily: "Gilda Display, serif" }}
            >
              {t('roomService')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services?.map((service, index) => (
                <div key={index} className="flex gap-2 items-center text-xs ">
                  {/* <img className="w-6 md:w-8 " src={service.Icon} alt="serviceImage" /> */}
                  <CheckOutlined className="text-green-400" />
                  <p className="text-sm">{service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Around hotels start */}
          <div className="py-5">
            <h2
              className="text-2xl md:text-3xl py-3 md:py-5"
              style={{ fontFamily: "Gilda Display, serif" }}
            >
              Around The Hotel
            </h2>
            <div className="flex flex-col md:flex-row gap-2 md:gap-3">
              <div className="relative">
                <img src={arroundImage} alt="" className="w-full h-full" />
                <p
                  className="absolute bottom-4 left-3 text-white"
                  style={{ fontFamily: "Gilda Display, serif" }}
                >
                  Coffee Bar
                </p>
              </div>
              <div className="relative">
                <img src={arroundImage2} alt="" className="w-full h-full" />
                <p
                  className="absolute bottom-4 left-3 text-white"
                  style={{ fontFamily: "Gilda Display, serif" }}
                >
                  Restaurant
                </p>
              </div>
              <div className="relative">
                <img src={arroundImage3} alt="" className="w-full h-full" />
                <p
                  className="absolute bottom-4 left-3 text-white"
                  style={{ fontFamily: "Gilda Display, serif" }}
                >
                  Wellness
                </p>
              </div>
            </div>
          </div>
          {/* Around hotels end */}
        </div>
        <RoomDate singleRoomDetails={singleRoomDetails} />
      </div>
    </>
  );
};

export default RoomDetailsBody;
