import React from "react";

import img from "/img/cafe.jpg";
import bgim from "../../../../../public/img/staff1.jpg";
import awalive from "../../../../../public/img/awalive.png";
import hand from "../../../../../public/img/hand.png";
// import bgim from "../../../../assets";
import i18next from "i18next";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CafeDetails = () => {
  const currentLanguage = i18next.language;
  const {t} = useTranslation('cafe')
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-8 lg:h-[500px] my-10 md:my-20">
        <div className="flex flex-wrap items-center h-full">
          {/* <!-- Text Section --> */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 text-black">
            <div className={`${currentLanguage === "ar" ? "body-ar font-semibold  " : "body-en-title "}`}>
              <h5 className="text-sm uppercase tracking-widest  mb-3">{t("Hotel Facilities")}</h5>
              <h2 className="text-6xl  tracking-widest  mb-4">{t("Hotel Best")} </h2>
              <h2 className="text-6xl  tracking-widest  mb-4">{t("Restaurants")}</h2>
            </div>
            <p className="text-base text-gray-700 mb-4">
              {t("RestaurantDetails")}
            </p>

            <button className="px-6 py-2 bg-black text-white uppercase font-medium hover:bg-gray-800 transition duration-300">
              {t("Menu")}
            </button>
          </div>
          {/* <!-- Image and Badge Section --> */}
          <div className="w-full lg:w-1/2 px-4 h-full">
            <div
              className={`flex flex-col lg:flex-row gap-4 h-full ${currentLanguage === "ar" ? "body-ar font-normal  " : "body-en-title "}`}
            >
              <div className="flex flex-col gap-3 lg:w-1/2 h-full">
                <div className="col-span-2 py-7 bg-black ">
                  <p className="text-center text-xl text-white">{t("Roof Top Cafe")}</p>
                </div>
                <div className="h-full w-full">
                  <img src={img} alt="" className=" h-[300px] lg:h-full w-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:w-1/2 h-full">
                <div className="h-full w-full">
                  <img src={img} alt="" className=" w-full h-[300px] lg:h-full object-cover" />
                </div>
                <div className="col-span-2 py-7 bg-black ">
                  <p className="text-center text-xl text-white">{t("Hotel Rasaureant")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" my-20">
        <div
          className={`h-[calc(100vh-20vh)] flex items-center relative `}
          style={{
            backgroundImage: `url(${bgim})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            
          }}
        >
          {/* <div className={`absolute top-0 left-0 w-full h-full bg-black opacity-70  `}></div> */}
          <div className=" max-w-7xl mx-auto  lg:w-[34rem]  px-1   text-black flex flex-col gap-1 md:gap-4 absolute   lg:left-1/2 ">
            <h1 className={`text-4xl md:text-6xl capitalize   ${currentLanguage === 'ar' ? 'body-ar  font-semibold ' : 'body-en-title '}`}>{t("Enjoy & Eat In Our")}</h1>
            <h2 className={` text-4xl md:text-6xl capitalize  ${currentLanguage === 'ar' ? 'body-ar  font-semibold ' : 'body-en-title '}`}>{t("Hotel Restaurant")}</h2>
            <p className={`text-sm text-gray-800 py-3 ${currentLanguage === 'ar' ? 'body-ar  font-medium ' : 'body-en '}`}>{t("RestaurantDetails")}</p>
            <div className="py-4 flex   flex-row gap-5 items-center justify-center">
              {/* <Link to={"/contact"} className="uppercase text-white bg-[#BE9874] py-3 px-6 text-sm ">
                {t("contact_us")}
              </Link> */}
              <img src={awalive} alt="" className="w-30 md:w-48 md:h-48 object-cover" />
              <img src={hand} alt="" className="w-30 md:w-48 md:h-48 object-cover" />
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CafeDetails;
