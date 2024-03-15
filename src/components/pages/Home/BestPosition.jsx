import awaliveRoom from "../../../assets/awaliveRoom.jpg";
import visa from "../../../assets/visa.png";
import pay from "../../../assets/paypal-logo.png";
import credit from "../../../assets/credit-card.png";
import stripe from "../../../assets/stripe.png";
import twal from "../../../assets/hotelTwl.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const BestPosition = () => {
  const { t } = useTranslation("home");
  const currentLanguage = i18next.language


  return (
    <section
      style={{
        backgroundImage: `url(${awaliveRoom})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className={`bg-black bg-opacity-60 py-15 md:py-28 ${currentLanguage === 'ar' ? 'body-ar  font-medium ' : 'body-en '}`}>
        <div className="max-w-6xl mx-auto  text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-[50%] flex flex-col gap-5 md:gap-8 px-5 text-center md:text-start ">
              <p className="text-sm  tracking-widest" >
                {t("exploreCity")}
              </p>
              <h2 className={`text-4xl md:text-6xl ${currentLanguage === 'ar' ? 'body-ar  font-medium ' : 'body-en-title '}`}>
                {t("primeLocationTitle")}
              </h2>
              <p className="text-sm text-gray-300 py-6">{t("primeLocationDescription")}</p>
              <p className="tracking-widest text-xs font-bold " style={{ fontFamily: "Gilda Display, serif" }}>
                {t("paymentOptions")}
              </p>
              <div className="flex gap-5">
                <img src={visa} alt="logo" className="w-14" />
                <img src={pay} alt="logo" className="w-14" />
                <img src={credit} alt="logo" className="w-14" />
                <img src={stripe} alt="logo" className="w-14" />
              </div>
            </div>
            <div  className="md:w-[50%] flex flex-col gap-5 items-center">
              <div
                className="w-48 h-48 bg-[#BE9874] opacity-90 rounded-full text-center flex flex-col justify-center gap-4 offerScale"
                
              >
                <p className="text-xs tracking-widest font-semibold ">{t("exclusiveOffer.label")} </p>
                <p className={`text-6xl body-en-title `}>50%</p>
                <p className="text-[9px] tracking-widest  uppercase">{t("exclusiveOffer.description")}</p>
              </div>

              <img  data-aos="fade-left" src={twal} alt="img" className="w-[60%] " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPosition;
