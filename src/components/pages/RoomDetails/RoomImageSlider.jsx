/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import i18next from 'i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholerImage from "../../../assets/hotel-service.png";


const RoomImageSlider = ({images}) => {
  const [languageKey, setLanguageKey] = useState(i18next.language);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLanguageKey(lng);
    };

    i18next.on('languageChanged', handleLanguageChange);

    return () => {
      i18next.off('languageChanged', handleLanguageChange);
    };
  }, [setLanguageKey]);
 

  return (
    <div className=''>
      <Swiper key={languageKey} dir={!languageKey ? "rtl" : "ltr"} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper   " autoplay={{ delay: 2000 }} loop={true}>
        {images?.map((image, index) => (
          <SwiperSlide key={index} >
            <LazyLoadImage
              className="w-full aspect-video object-fill object-center"
              src={image}
              alt={`awalive ${index}`}
              effect="blur" // Optional: choose an effect like 'blur' or leave it out
              placeholderSrc={placeholerImage}
            />
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default RoomImageSlider