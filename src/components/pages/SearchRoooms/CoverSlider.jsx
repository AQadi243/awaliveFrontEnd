import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// import './styles.css';

// import required modules

const CoverSlider = ({ images }) => {
  console.log(images);
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full overflow-hidden"
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index} className="">
            <img className="w-full h-full overflow-hidden  aspect-video object-fill" src={img} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CoverSlider;
