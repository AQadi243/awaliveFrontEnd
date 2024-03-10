import structure from "../../../assets/Structure.webp";
import structure2 from "../../../assets/structure-2.webp";
import key16 from "../../../assets/icon-16.png";
import Lag15 from "../../../assets/icon-15.png";
import Ser17 from "../../../assets/icon-17.png";
import Wait18 from "../../../assets/icon-18.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const HotelStucture = () => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation("home");

  const localizeNumber = (number) => {
    return number.toLocaleString(currentLanguage === "ar" ? "ar-EG" : "en-US");
  };

  // Create a ref for the section using Intersection Observer
  const { ref, inView } = useInView({
    /* Optional settings: 
      threshold: 0, // Trigger the animation when the first pixel appears
      triggerOnce: true // Ensures animation only occurs once
    */
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="max-w-6xl  mx-auto py-10 md:py-20 px-4">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-[50%]  flex flex-row gap-4 items-center  relative overflow-hidden">
          <img src={structure} alt="" className="w-[50%]" />
          <div
            ref={ref}
            className="w-20 md:w-28 bg-white text-black py-4  md:py-10  flex flex-col gap-3 justify-between text-center absolute left-1/2 transform -translate-x-1/2"
          >
            <div className="">
              <p className="text-3xl font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>
                <CountUp start={0} end={inView ? localizeNumber(23) : 0} duration={2.75} preserveValue />
              </p>
              <p className="text-xs tracking-widest uppercase">{t("rooms.label")}</p>
            </div>
            <div>
              <p className="text-3xl font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>
                <CountUp start={0} end={inView ? localizeNumber(12) : 0} duration={2.75} preserveValue />
              </p>
              <p className="text-xs tracking-widest uppercase">{t("suites.label")}</p>
            </div>
            <div>
              <p className="text-3xl font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>
                <CountUp start={0} end={inView ? localizeNumber(23) : 0} duration={2.75} preserveValue />
              </p>
              <p className="text-xs tracking-widest uppercase">{t("h24.label")}</p>
            </div>
            <div>
              <p className="text-3xl font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>
                <CountUp start={0} end={inView ? localizeNumber(2) : 0} duration={2.75} preserveValue />
              </p>
              <p className="text-[10px] md:text-xs  uppercase">{t("restaurant.label")}</p>
            </div>
          </div>
          <img src={structure2} alt="" className="w-[50%]" />
        </div>
        <div ref={ref} className="lg:w-[50%] flex flex-col gap-3 justify-center  ">
          <p className=" text-sm tracking-[0.2rem] uppercase text-center md:text-start">{t("discover")}</p>
          <h2 className="text-3xl md:text-5xl text-black text-center md:text-start" style={{ fontFamily: "Gilda Display, serif" }}>
            {t("discoverTitle")}
          </h2>
          <p className="text-xs md:text-sm text-gray-600 text-center md:text-start">{t("discoverSubtitle")}</p>
          

          

          <div ref={ref} className="w-full bg-gray-200  h-6 dark:bg-gray-700" style={{ fontFamily: "Gilda Display, serif" }}>
            <div className={`bg-[#2E2E2E] h-6  transition-all duration-1000 ease-in-out ${inView ? `w-[${95}%]` : "w-0"}`}>
              <div className="flex justify-between items-center h-full text-white px-2 text-xs ">
                <p>{t("roomService.label")}</p>
                {inView && (
                  <CountUp start={0} end={95} delay={0} duration={2.5}>
                    {({ countUpRef }) => <div className="text-sm font-medium" ref={countUpRef} />}
                  </CountUp>
                )}
              </div>
            </div>
          </div>

          <div ref={ref} className="w-full bg-gray-200  h-6 dark:bg-gray-700 my-2" style={{ fontFamily: "Gilda Display, serif" }}>
            <div className={`bg-[#BE9874] h-6  transition-all duration-1000 ease-in-out ${inView ? `w-[${90}%]` : "w-0"}`}>
              <div className="flex justify-between items-center h-full text-white px-2 text-xs ">
              <p>{t("breakfastIncluded.label")}</p>
                {inView && (
                  <CountUp start={0} end={localizeNumber(90)} delay={0} duration={2.5}>
                    {({ countUpRef }) => <div className="text-sm font-medium" ref={countUpRef} />}
                  </CountUp>
                )}
              </div>
            </div>
          </div>
          <div ref={ref} className="w-full bg-gray-200  h-6 dark:bg-gray-700" style={{ fontFamily: "Gilda Display, serif" }}>
            <div className={`bg-[#2E2E2E] h-6  transition-all duration-1000 ease-in-out ${inView ? `w-[${95}%]` : "w-0"}`}>
              <div className="flex justify-between items-center h-full text-white px-2 text-xs ">
              <p>{t("laundryIroning.label")}</p>
                {inView && (
                  <CountUp start={0} end={localizeNumber(95)} delay={0} duration={2.5}>
                    {({ countUpRef }) => <div className="text-sm font-medium" ref={countUpRef} />}
                  </CountUp>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="grid gap-3 md:gap-0 grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
            <img src={key16} alt="Smart Key Icon" className="w-12 md:w-20" />
            <div>
              <p className="text-sm md:text-md font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>
                {t("keyFeatures.smartKey.title")}
              </p>
              <p className="text-xs text-gray-400">{t("keyFeatures.smartKey.description")}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center  ">
            <img src={Lag15} alt="Luggage Storage Icon" className="w-12 md:w-20" />
            <div>
              <p className="text-sm md:text-md font-semibold " style={{ fontFamily: "Gilda Display, serif" }}>
                {t("keyFeatures.luggageStorage.title")}
              </p>
              <p className="text-xs text-gray-400">{t("keyFeatures.luggageStorage.description")}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center ">
            <img src={Ser17} alt="Room Service Icon" className="w-12 md:w-20" />
            <div>
              <p className="text-sm md:text-md font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>
                {t("keyFeatures.roomService.title")}
              </p>
              <p className="text-xs text-gray-400">{t("keyFeatures.roomService.description")}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center ">
            <img src={Wait18} alt="Disinfection Icon" className="w-12 md:w-20" />
            <div>
              <p className="text-sm md:text-md font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>
                {t("keyFeatures.disinfection.title")}
              </p>
              <p className="text-xs text-gray-400">{t("keyFeatures.disinfection.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelStucture;
