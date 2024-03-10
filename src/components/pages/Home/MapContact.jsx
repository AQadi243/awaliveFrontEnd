import { useTranslation } from "react-i18next";
import MapImage from "../../../assets/google map.png";

const MapContact = () => {
  const { t } = useTranslation("footer");
  const googleMapsUrl = "https://maps.app.goo.gl/d1FkZCNpjUtvkY4t6";
  return (
    <section className="">
      <div className="flex flex-col md:flex-row text-white">
        <div className="w-full md:w-[50%]">
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-black">
            <img src={MapImage} alt="awalive-map-image" />
          </a>
        </div>
        <div className="bg-[#1C1C1C] w-full md:w-[25%] py-6 px-8 flex flex-col gap-6  justify-center text-center md:text-start">
          <h2 className="text-xl md:text-3xl" style={{ fontFamily: "Gilda Display, serif" }}>
            {t("contact.contactUs")}
          </h2>
          <div className="text-sm">
            <p>{t("contact.reservation")} :</p>
            <p>+ 202 303 404</p>
          </div>
          <div className="text-sm">
            <p>{t("contact.reservation")}:</p>
            <p>+ 202 303 404</p>
          </div>
        </div>
        <div className="bg-[#BE9874] w-full md:w-[25%] py-6 px-8 flex flex-col gap-6  justify-center text-center md:text-start">
          <h2 className="text-xl md:text-3xl" style={{ fontFamily: "Gilda Display, serif" }}>
            {t("contact.dropALine")}
          </h2>
          <div className="text-sm">
            <p>{t("contact.reservation")} :</p>
            <p>+ 202 303 404</p>
          </div>
          <div className="text-sm">
            <p>{t("contact.reservation")} :</p>
            <p>+ 202 303 404</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapContact;
