import bannerImagTwo from "../../../assets/appartment Slider.jpg";
import bannerImagOne from "../../../assets/familySlider .jpg";
import './home.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../About/slider.css";
import { Link } from "react-router-dom";
import i18next from "i18next";
// import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";
// import { useEffect } from "react";
// import AOS from 'aos';


const Banner = () => {
  // const [languageKey, setLanguageKey] = useState(i18next.language);
  const currentLanguage = i18next.language;
  const { t } = useTranslation("home");

  // console.log(languageKey,'key');
  console.log(currentLanguage,'current lang');
  // useEffect(() => {
  //   const handleLanguageChange = (lng) => {
  //     setLanguageKey(lng);
  //   };

  //   i18next.on('languageChanged', handleLanguageChange);

  //   return () => {
  //     i18next.off('languageChanged', handleLanguageChange);
  //   };
  // }, []);
 

  return (
    <>
      <div className="md:relative" >
        <div data-aos="zoom-in" >
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay, ]}
          className={` h-[calc(100vh-74px)] `}
          autoplay={{ delay: 3000 }}
          loop={true}
          dir={!currentLanguage ? "rtl" : "ltr" }
          key={currentLanguage}
        >
          <SwiperSlide
            className="bg-cover bg-center relative"
            style={{ fontFamily: "Gilda Display, serif" }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <img
              className="w-full h-full  object-cover block  "
              src={bannerImagTwo}
              alt=""
            />
            {/* <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div> */}
            <div
              className={`text-content w-full md:w-[80%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white `}
            >
              <div className="text-center flex flex-col gap-2 md:gap-3 uppercase">
                <p className="text-[10px] md:text-[20px] tracking-widest "> {t("headerSemiTitle")} </p>
                <h1 className={`hero-text ${currentLanguage === 'ar' ? 'arabic' : 'english'}`}>{t("titleHero")}</h1>
                <h1 className={`hero-text ${currentLanguage === 'ar' ? 'arabic' : 'english'}`}>{t("subTitleHero")}</h1>

                <div className="py-3">
                  <Link to={'/roomSearch'} className=" py-2 md:py-3  text-xs md:text-sm  px-4 border  md:px-8 md:border tracking-widest heroText">
                    {t("heroButton")}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="bg-cover bg-center relative"
            style={{ fontFamily: "Gilda Display, serif" }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <img
              className="w-full h-full  object-cover block  "
              src={bannerImagOne}
              alt=""
            />
            
            <div
              className={`text-content w-full md:w-[60%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white `}
            >
              <div className="text-center flex flex-col gap-2 md:gap-4 uppercase">
              <p className="text-[10px] md:text-[20px] tracking-widest "> {t("headerSemiTitleTwo")} </p>
                <h1 className={`hero-text ${currentLanguage === 'ar' ? 'arabic' : 'english'}`}>{t("titleSecondImage")}</h1>
                <h1 className={`hero-text ${currentLanguage === 'ar' ? 'arabic' : 'english'}`}>{t("subTitleHeroSecond")}</h1>

                <div className="py-3">
                  <Link to={'/roomSearch'} className=" py-2 md:py-3  text-xs md:text-sm  px-4 border  md:px-8 md:border tracking-widest heroText">
                    {t("heroButton")}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
          <div className="md:absolute   md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-0 md:z-50 w-full">
          <SearchBar  pageContext="home"  />
          </div>
      </div>
    </>
  );
};

export default Banner;
