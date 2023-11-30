import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BestPromotions = ({ data, loading }) => {
  

  return (
    <section className="w-[90%] mx-auto" style={{ fontFamily: "Gilda Display, serif" }}>
        <div className="p-10 md:py-20">
      <div className=" text-center pb-10 flex flex-col  gap-3 ">
        <p className="tracking-widest text-sm">MONTHLY SALE</p>
        <h2 className="text-2xl md:text-6xl">Best Promo of the Day</h2>
      </div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {data.slice(0, 6).map((room) => (
            <Link to={`/singlePromotionRoom/${room.id}`} key={room.id} className="shadow-lg">
              <div>
              <img src={room.roomImage} alt="" />
              </div>
              <div className="text-center flex flex-col justify-center gap-3 py-8">
                <h3 className="text-xl md:text-3xl">{room.roomName}</h3>
                <p className="text-md font-thin">{room.price} SR</p>
                <div>
                  <button className="py-2 px-4 uppercase text-xs bg-[#1C1C1D] text-white">
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
