// import relax from '../../../assets/relax.jpg'
import relaxB from "../../../assets/relaxCom.jpg";
import aveter from "../../../assets/check.jpg";
import signature from "../../../assets/signature.png";
import { t } from "i18next";

const Relax = () => {
  return (
    <section data-aos="fade-up" className="lg:max-w-[70%] mx-auto py-10 md:py-20 text-[#2E2E2E] px-4 " data-speed="2">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center justify-center ">
        <div
          className=" w-full lg:w-[70%]  h-full  md:py-0  flex items-center justify-center mx-auto "
          style={{
            backgroundImage: `url(${relaxB})`,
            backgroundSize: "cover", // Adjust background size to fit the image within the container
            backgroundRepeat: "no-repeat", // Prevent image from repeating
            backgroundPosition: "center", // Center the background image
            height: "100%",
            // width: "100%"
          }}
        >
          {/* <img src={relaxB} alt="hotel-awalive-image-taif" /> */}
        </div>
        <div className="w-full   flex flex-col gap-5 md:gap-10  ">
          <div>
            <p className="uppercase text-xs tracking-widest  text-center lg:text-left ">{t("hotelRelaxSubTitle")}</p>
          </div>
          <div
            className="text-3xl  md:text-4xl xl:text-5xl   tracking-wider flex flex-wrap md:w-full  justify-center text-center lg:text-left mx-auto md:mx-0 w-[80%]   "
            style={{ fontFamily: "Gilda Display, serif" }}
          >
            <h2>{t("hotelRelaxTitle")}</h2>
            {/* <h2>{t("hotelRelaxTitle")}</h2> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm text-center md:text-left">
            <p className="text-gray-600">{t("hotelinTaif")}</p>
            <p className="text-gray-600">{t("restaurantWithAView")}</p>
            <p className="text-gray-600">{t("poolAndGym")}</p>
            <p className="text-gray-600">{t("peacefulHotelStay")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
            <div className="flex flex-col md:flex-row gap-3 md:gap-6  justify-evenly items-center ">
              <img src={aveter} alt="avatar" className="rounded-full w-20" />
              <div>
                <h2 className="text-xl font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>
                  Andrew Stuart
                </h2>
                <p className="text-sm text-gray-400">{t("titleManager")}</p>
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
