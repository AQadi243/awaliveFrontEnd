// import React from 'react'

import { Link } from "react-router-dom";
import bannerImage from "../../../assets/HerrooSlid.webp"; // Update with the actual path
import { useEffect, useState } from "react";
import LazyImage from "../../sharedPages/LazyImage";

const Banner = ({ data, loading }) => {
  const componentStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  

  return (
    <section className="py-20" style={componentStyle}>
      <div className="w-[90%] mx-auto">
        <div style={{ fontFamily: "Gilda Display, serif" }}>
          <div className="md:w-[50%] flex flex-col gap-6 px-2 mx-auto text-center text-white pt-20">
            <h1 className="text-2xl text md:text-5xl">Our Promotion</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci
              nisl, tempus ut sem a, scelerisque sollicitudin arcu. Phasellus
              porttitor dignissim nisl, vel aliquet enim.
            </p>
            <div className="py-10 text-center">
              <Link
                
                className="font-semibold text-sm tracking-widest text-white bg-[#BE9874] py-2 px-6"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
          {loading ? (
            ""
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

              {data.slice(0, 4).map((room) => (
                <div key={room.id} className="grid-cols-1 relative">
                  <LazyImage src={room.roomImage} alt="" />
                  <p className="bg-[#2E2E2E] py-1 px-4 absolute top-5 right-0 text-white text-sm">
                    {room.price} SR
                  </p>
                  <div className="absolute bottom-5 translate-x-[50%]">
                    <h2 className="text-sm text-white tracking-widest">
                      {room.roomName}
                    </h2>
                  </div>
                </div>
              ))}

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
