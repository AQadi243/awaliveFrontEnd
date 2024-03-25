import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BestPromotions = ({ data, loading }) => {
  const currentLanguage = i18next.language
  const {t} = useTranslation('promotion')

  

  return (
    <section className="max-w-7xl mx-auto" style={{ fontFamily: "Gilda Display, serif" }}>
        <div className=" py-20">
      <div className=" text-center pb-16  flex flex-col  gap-4 text-black">
        <p className="tracking-[0.2rem] text-sm">{t("MONTHLY SALE")}</p>
        <h2 className="text-3xl md:text-6xl">{t("Best Promo of the Day")}</h2>
      </div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className=" max-w-6xl mx-auto grid md:grid-cols-3 gap-7">
          {data.slice(0, 6).map((room) => (
            <Link to={`/singlePromotionRoom/${room._id}`} key={room._id} className="shadow-lg ">
              <div>
              <img src={room.roomImage} alt="" className="h-full md:h-[350px] w-full object-cover" />
              </div>
              <div className="text-center flex flex-col justify-center gap-4 py-10">
                <h3 className={`text-2xl md:text-2xl ${currentLanguage === 'ar' ? 'body-ar  font-medium  ' : 'body-en-title font-semibold'}  `}>{room.roomName}</h3>
                <p className="text-lg font-thin">{room.price} SR</p>
                <div>
                  <button className="py-2 px-4 uppercase text-sm bg-[#1C1C1D] text-white tracking-widest ">
                    Read More
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      </div>
    </section>
  );
};

export default BestPromotions;
