import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import i18next from 'i18next';


const RoomImageSlider = ({images}) => {
  const [languageKey, setLanguageKey] = useState(i18next.language);
console.log(images);
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLanguageKey(lng);
    };

    i18next.on('languageChanged', handleLanguageChange);

    return () => {
      i18next.off('languageChanged', handleLanguageChange);
    };
  }, [setLanguageKey]);
 
    
    
    
    // console.log(slideImage);
  return (
    <div className=''>
      <Swiper key={languageKey} dir={!languageKey ? "rtl" : "ltr"} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper   " autoplay={{ delay: 2000 }} loop={true}>
        {images?.map((image, index) => (
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