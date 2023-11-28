import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const RoomImageSlider = ({singleRoomDetails}) => {
    
    const sliderImage = singleRoomDetails.DetailsImage
    
    // console.log(slideImage);
  return (
    <div className=''>
      <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper   " autoplay={{ delay: 2000 }} loop={true}>
        {sliderImage?.map((image, index) => (
          <SwiperSlide key={index} >
            <picture>
            <img className='w-full aspect-video object-fill' src={image} alt="" />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default RoomImageSlider