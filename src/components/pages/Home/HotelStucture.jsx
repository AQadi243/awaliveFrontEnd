import structure from "../../../assets/Structure.webp";
import structure2 from "../../../assets/structure-2.webp";
import key16 from "../../../assets/icon-16.png";
import Lag15 from "../../../assets/icon-15.png";
import Ser17 from "../../../assets/icon-17.png";
import Wait18 from "../../../assets/icon-18.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const HotelStucture = () => {
  const currentLanguage = i18next.language
  const {t} = useTranslation('home')

  const localizeNumber = (number) => {
    return number.toLocaleString(currentLanguage === 'ar' ? 'ar-EG' : 'en-US');
  };


  return (
    <section className="container mx-auto py-10 md:py-16 px-4">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-[50%]  flex flex-row gap-4 items-center relative overflow-hidden">
          <img src={structure} alt="" className="w-[50%]" />
          <div className="w-20 md:w-28 bg-white py-4  md:py-8  flex flex-col justify-between text-center absolute left-1/2 transform -translate-x-1/2">
            <div>
              <p
                className="text-2xl font-semibold"
                style={{ fontFamily: "Gilda Display, serif" }}
              >
                {localizeNumber(23)}
              </p>
              <p className="text-xs tracking-widest uppercase">{t('rooms.label')}</p>
            </div>
            <div>
              <p
                className="text-2xl font-semibold"
                style={{ fontFamily: "Gilda Display, serif" }}
              >
                {localizeNumber(12)}
              </p>
              <p className="text-xs tracking-widest uppercase">{t('suites.label')}</p>
            </div>
            <div>
              <p
                className="text-2xl font-semibold"
                style={{ fontFamily: "Gilda Display, serif" }}
              >
                {localizeNumber(23)}
              </p>
              <p className="text-xs tracking-widest uppercase">{t('h24.label')}</p>
            </div>
            <div>
              <p
                className="text-2xl font-semibold"
                style={{ fontFamily: "Gilda Display, serif" }}
              >
                {localizeNumber(2)}
              </p>
              <p className="text-[10px] md:text-xs  uppercase">{t('restaurant.label')}</p>
            </div>
          </div>
          <img src={structure2} alt="" className="w-[50%]" />
        </div>
        <div className="lg:w-[50%] flex flex-col gap-3 justify-center ">
          <p className=" text-xs tracking-widest uppercase text-center">
            {t('discover')}
          </p>
          <h2
            className="text-2xl md:text-5xl text-center"
            style={{ fontFamily: "Gilda Display, serif" }}
          >
           {t('discoverTitle')}
          </h2>
          <p className="text-xs md:text-sm ">
            {t('discoverSubtitle')}
          </p>
          <div
            className=" md:py-2  text-[#2E2E2E] text-sm"
            style={{ fontFamily: "Gilda Display, serif" }}
          >
            <div className="flex justify-between mb-1">
              <p>{t('roomService.label')}</p>
              <p>{localizeNumber(98)}%</p>
            </div>
            <div className="w-full bg-white rounded-full h-2">
              <div
                className="bg-[#2E2E2E] h-2 md:h-3 rounded-full"
                style={{ width: "98%" }}
              ></div>
            </div>
          </div>

          <div
            className=" md:py-2  text-[#2E2E2E] text-xs md:text-sm "
            style={{ fontFamily: "Gilda Display, serif" }}
          >
            <div className="flex justify-between mb-1">
              <p>{t('breakfastIncluded.label')}</p>
              <p>{localizeNumber(85)}%</p>
            </div>
            <div className="w-full bg-white rounded-full h-3">
              <div
                className="bg-[#BE9874] h-2 md:h-3 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          <div
            className=" md:py-2  text-[#2E2E2E] text-sm "
            style={{ fontFamily: "Gilda Display, serif" }}
          >
            <div className="flex justify-between mb-1">
              <p>{t('laundryIroning.label')}</p>
              <p>{localizeNumber(95)}%</p>
            </div>
            <div className="w-full bg-white rounded-full h-3">
              <div
                className="bg-[#BE9874] h-2 md:h-3 rounded-full "
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="grid gap-3 md:gap-0 grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
            <img src={key16} alt="Smart Key Icon" className="w-12 md:w-20" />
            <div>
              <p
                className="text-sm md:text-md font-semibold"
                style={{ fontFamily: "Gilda Display, serif" }}
              >
                {t('keyFeatures.smartKey.title')}
              </p>
              <p className="text-xs">
              {t('keyFeatures.smartKey.description')}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center  ">
            <img
              src={Lag15}
              alt="Luggage Storage Icon"
              className="w-12 md:w-20"
            />
            <div>
              <p
                className="text-sm md:text-md font-semibold "
                style={{ fontFamily: "Gilda Display, serif" }}
              >
                {t('keyFeatures.luggageStorage.title')}
              </p>
              <p className="text-xs">
              {t('keyFeatures.luggageStorage.description')}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center ">
            <img src={Ser17} alt="Room Service Icon" className="w-12 md:w-20" />
            <div>
              <p
                className="text-sm md:text-md font-semibold"
                style={{ fontFamily: "Gilda Display, serif" }}
              >
                {t('keyFeatures.roomService.title')}
              </p>
              <p className="text-xs">
              {t('keyFeatures.roomService.description')}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center ">
            <img
              src={Wait18}
              alt="Disinfection Icon"
              className="w-12 md:w-20"
            />
            <div>
              <p
                className="text-sm md:text-md font-semibold"
                style={{ fontFamily: "Gilda Display, serif" }}
              >
               {t('keyFeatures.disinfection.title')}
              </p>
              <p className="text-xs">
              {t('keyFeatures.disinfection.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelStucture;
