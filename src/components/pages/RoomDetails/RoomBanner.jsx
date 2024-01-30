import React from 'react'
import bgImg from "../../../assets/singleRoomCover.jpg";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const RoomBanner = ({singleRoomDetails}) => {
  const currentLanguage = i18next.language
  const { t } = useTranslation('booking');
  const {priceOptions,} = singleRoomDetails;

  const containerStyle = {
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 25%, rgba(0, 0, 0, 0) 100%), url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
};

  return (
    <section className="h-[350px] w-full relative" style={containerStyle}>
          <div className="absolute bottom-0 w-full">
            {/* <p className="text-3xl md:text-6xl text-white">Search Room</p>  */}
            <div className="container mx-auto px-2 flex flex-col md:flex-row justify-between py-10 text-white tracking-widest">
              <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-xs">
                <div className="flex gap-2 items-center">
                  <p className=" uppercase">{t('description')}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className=" uppercase">{t('roomServices')}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className=" uppercase">{t('aroundTheHotel')}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className=" uppercase">{t('similarRooms')}</p>
                </div>
              </div>
              <div>
                <p className='uppercase'>
                  <span id="roomPrice" className="text-4xl  italic " style={{ fontFamily: "Gilda Display, serif" }}>
                    {/* {priceOptions[0].price} */}
                    {currentLanguage === "en"? priceOptions[0].price.toLocaleString():priceOptions[0].price.toLocaleString('ar-EG')}
                  </span>{" "}
                  {t('averagePerNight')}
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default RoomBanner