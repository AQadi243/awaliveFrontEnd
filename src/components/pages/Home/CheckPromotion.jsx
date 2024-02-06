// import React from 'react'
import checkImg from "../../../assets/check.jpg";
import singnature from "../../../assets/signature.png";
import caffeeBar from "../../../assets/cofeeCom.jpg";
import luxuryRoom from "../../../assets/luxuryRoomCard.webp";
import familyRoom from "../../../assets/familyCard.jpg";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderImage from "../../../assets/hotel-service.png";

const CheckPromotion = () => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation("home");
  return (
    <>
      <section className="container mx-auto pt-10 md:py-16 text-[#2E2E2E] px-4">
        <div data-aos="fade-up" className=" flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="md:w-[30%] text-center md:text-start">
            <p className=" pb-4 md:pb-6 text-xs tracking-widest">{t("summerOffers")}</p>
            <h2 className="text-2xl md:text-4xl  " style={{ fontFamily: "Gilda Display, serif" }}>
              {t("summerGetaway")}
            </h2>
            <p className="py-4 md:py-6 text-sm text-gray-400">{t("getawayDescription")}</p>
            <div className="flex items-center gap-10">
              <img src={checkImg} alt="" className="rounded-full w-20" />
              <img src={singnature} alt="signature" className="w-[50%]" />
            </div>
          </div>
          <div className="md:w-[70%] relative mx-auto ">
            {/* <img src={caffeeBar} alt="coffee"  className="w-full md:w-[50%]"loading='lazy' /> */}
            <LazyLoadImage
              className="w-full "
              src={caffeeBar}
              alt={`awalive coffee bar`}
              effect="blur"
              placeholderSrc={placeholderImage}
            />
            <div className={`md:absolute ${currentLanguage === "ar" ? "left-10" : "right-10"} top-1/3 md:w-[50%]`}>
              <div className="grid grid-cols-4 gap-6 items-center justify-center h-32">
                <img src={luxuryRoom} alt="" className="col-span-1" />
                <div className="col-span-2">
                  <p className="text-xs tracking-widest">One week</p>
                  <p className="text-xl" style={{ fontFamily: "Gilda Display, serif" }}>
                    Small Sea Room
                  </p>
                </div>
                <p className="bg-[#2E2E2E] py-1 px-3 col-span-1 text-white text-center text-xs md:text-sm">$ 40</p>
              </div>
            </div>
            <div className={`md:absolute ${currentLanguage === "ar" ? "left-10" : "right-10"} top-2/3 md:w-[50%]`}>
              <div className="grid grid-cols-4 gap-6 items-center justify-center h-12 md:h-32">
                <img src={familyRoom} alt="" className="col-span-1" />
                <div className="col-span-2">
                  <p className="text-xs tracking-widest">Two weeks</p>
                  <p className="text-xl" style={{ fontFamily: "Gilda Display, serif" }}>
                    Family Suite
                  </p>
                </div>
                <p className="bg-[#2E2E2E] py-1 px-3 col-span-1 text-white text-center text-xs md:text-sm">$ 40</p>
              </div>
            </div>
            <div className={`md:absolute ${currentLanguage === "ar" ? "left-10" : "right-10"} top-0 md:w-[50%]`}>
              <div className="grid grid-cols-4 gap-6 items-center justify-center h-32">
                <img src={familyRoom} alt="" className="col-span-1" />
                <div className="col-span-2">
                  <p className="text-xs tracking-widest">One month</p>
                  <p className="text-xl" style={{ fontFamily: "Gilda Display, serif" }}>
                    Apartments
                  </p>
                </div>
                <p className="bg-[#2E2E2E] py-1 px-3 col-span-1 text-white text-center text-xs md:text-sm">$ 40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckPromotion;
