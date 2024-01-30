/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import placeholderImage from "../../../assets/hotel-service.png";

const CoverSlider = ({ images }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full overflow-hidden cursor-grab  "
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index} className="">
           
            <LazyLoadImage
              className="w-full h-full aspect-video object-fill z-0"
              src={img}
              alt={`Slide ${index}`}
              effect="blur" // Optional: choose an effect like 'blur' or leave it out
              placeholderSrc={placeholderImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CoverSlider;
