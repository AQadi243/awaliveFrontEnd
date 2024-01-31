// import relax from '../../../assets/relax.jpg'
import relaxB from "../../../assets/relaxCom.jpg";
import aveter from "../../../assets/check.jpg";
import signature from "../../../assets/signature.png";
import { t } from "i18next";

const Relax = () => {
  return (
    <section data-aos="fade-up" className="container mx-auto py-10 md:py-16 text-[#2E2E2E] px-4 " data-speed="2">
      <div className="md:h-full flex flex-col xl:flex-row gap-10 md:gap-14 xl:gap-28 items-center justify-center ">
        <div className="w-full md:w-[40%] h-full flex items-center justify-center">
          <picture>
            <img src={relaxB} alt="hotel-awalive-image-taif" />
          </picture>
        </div>
        <div className="w-full md:w-[60%]  flex flex-col gap-5 md:gap-6  " data-speed="1">
          <div>
            <p className="uppercase text-xs tracking-widest   ">{t("hotelRelaxSubTitle")}</p>
          </div>
          <div
            className="text-2xl  md:text-4xl xl:text-5xl   tracking-wider flex flex-wrap md:w-[85%]  justify-center text-center md:text-left"
            style={{ fontFamily: "Gilda Display, serif" }}
          >
            <h2>{t("hotelRelaxTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm">
            <p>{t("hotelinTaif")}</p>
            <p>{t("restaurantWithAView")}</p>
            <p>{t("poolAndGym")}</p>
            <p>{t("peacefulHotelStay")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
            <div className="flex flex-col md:flex-row gap-3 md:gap-6  justify-evenly items-center ">
              <img src={aveter} alt="avatar" className="rounded-full w-20" />
              <div>
                <h2 className="text-xl font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>
                  Andrew Stuart
                </h2>
                <p className="text-sm">{t("titleManager")}</p>
              </div>
            </div>
            <div className="text-2xl flex justify-center">
              <img src={signature} alt="signature" className="w-[50%]" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Relax;
