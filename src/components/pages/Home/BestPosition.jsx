import awaliveRoom from "../../../assets/awaliveRoom.jpg";
import visa from "../../../assets/visa.png";
import pay from "../../../assets/paypal-logo.png";
import credit from "../../../assets/credit-card.png";
import stripe from "../../../assets/stripe.png";
import twal from "../../../assets/hotelTwl.png";
import { useTranslation } from "react-i18next";

const BestPosition = () => {
  const { t } = useTranslation("home");

  return (
    <section
      style={{
        backgroundImage: `url(${awaliveRoom})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black bg-opacity-60 py-10 md:py-16">
        <div className="max-w-4xl mx-auto  text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-[50%] flex flex-col gap-3 px-5 text-center md:text-start ">
              <p className="text-xs  tracking-widest" style={{ fontFamily: "Gilda Display, serif" }}>
                {t("exploreCity")}
              </p>
              <h2 className="text-2xl md:text-5xl" style={{ fontFamily: "Gilda Display, serif" }}>
                {t("primeLocationTitle")}
              </h2>
              <p className="text-xs text-gray-400">{t("primeLocationDescription")}</p>
              <p className="tracking-widest " style={{ fontFamily: "Gilda Display, serif" }}>
                {t("paymentOptions")}
              </p>
              <div className="flex gap-5">
                <img src={visa} alt="logo" className="w-14" />
                <img src={pay} alt="logo" className="w-14" />
                <img src={credit} alt="logo" className="w-14" />
                <img src={stripe} alt="logo" className="w-14" />
              </div>
            </div>
            <div data-aos="fade-up" className="md:w-[50%] flex flex-col items-center">
              <div
                className="w-48 h-48 bg-[#BE9874] opacity-90 rounded-full text-center flex flex-col justify-center gap-2 offerScale"
                style={{ fontFamily: "Gilda Display, serif" }}
              >
                <p className="text-xs tracking-widest font-semibold ">Up to </p>
                <p className="text-5xl">50%</p>
                <p className="text-[9px] tracking-widest  uppercase">{t("exclusiveOffer.description")}</p>
              </div>

              <img src={twal} alt="img" className="w-[50%] " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPosition;
