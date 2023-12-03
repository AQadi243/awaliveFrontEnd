// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import sldierOne from '../../../assets/katrinSlider.jpg'
import sldierTwo from '../../../assets/adamSlider.jpg'
import sldierThree from '../../../assets/lwsSlider.jpg'
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import './slider.css'
// import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
// import { useEffect,  } from 'react';
// import {  useState } from 'react';


const Slider = () => {
  const { t } = useTranslation("tran");
  const [languageKey, setLanguageKey] = useState(i18next.language);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLanguageKey(lng);
    };

    i18next.on('languageChanged', handleLanguageChange);

    return () => {
      i18next.off('languageChanged', handleLanguageChange);
    };
  }, []);
 
    // const [currentSlide, setCurrentSlide] = useState(0);
    // const slides = [
    //   {
    //     id: 1,
    //     img: '/src/assets/katrinSlider.jpg',
    //     title: 'Ketrin Wilson',
    //     subtitle: 'Hotel Manager',
    //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    //   },
    //   {
    //     id: 2,
    //     img: '/src/assets/lwsSlider.jpg',
    //     title: 'Kabby Wilson',
    //     subtitle: 'Hotel Manager',
    //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    //   },
    //   {
    //     id: 3,
    //     img: '/src/assets/adamSlider.jpg',
    //     title: 'Benzima Wilson',
    //     subtitle: 'Hotel Manager',
    //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    //   }
    // ];
  
    // const plusDivs = (n) => {
    //   setCurrentSlide((prevCurrentSlide) => {
    //     let newSlide = prevCurrentSlide + n;
    //     if (newSlide >= slides.length) {
    //       newSlide = 0;
    //     } else if (newSlide < 0) {
    //       newSlide = slides.length - 1;
    //     }
    //     return newSlide;
    //   });
    // };

  
  return (
 
    
        <div className=''>
      <Swiper key={languageKey} dir={!languageKey ? "rtl" : "ltr"} navigation={true} modules={[Navigation, Autoplay]} className={` h-[calc(100vh-74px)]  overflow-hidden ` }autoplay={{ delay: 3000,  }} loop={true} >
        
          <SwiperSlide className='bg-cover bg-center relative' >
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
          <img className='w-full h-full  object-cover block' src={sldierOne} alt=""  />
            {/* <img className='w-full h-full  object-cover block  ' src={person.image} alt="" /> */}
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            <div className='w-[60%] absolute  top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 text-white '>
              <h2 className='text-2xl md:text-5xl'>{t("About_katrin_name")}</h2>
              <p className='text py-2 md:py-3'>{t("About_katrin_position")}</p>
              <p className='text-xs text-slate-300'>{t("About_katrin_details")}</p>
            </div>
          
        </SwiperSlide>
          <SwiperSlide className='bg-cover bg-center relative' >
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
          <img className='w-full h-full  object-cover block' src={sldierThree} alt=""  />
            {/* <img className='w-full h-full  object-cover block  ' src={person.image} alt="" /> */}
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            <div className='w-[60%] absolute  top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 text-white '>
              <h2 className='text-2xl md:text-5xl'>{t("About_adam_name")}</h2>
              <p className='text py-2 md:py-3'>{t("About_adam_position")}</p>
              <p className='text-xs text-slate-300'>{t("About_adam_details")}</p>
            </div>
          
        </SwiperSlide>
          <SwiperSlide className='bg-cover bg-center relative' >
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
          <img className='w-full h-full  object-cover block' src={sldierTwo} alt=""  />
            {/* <img className='w-full h-full  object-cover block  ' src={person.image} alt="" /> */}
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            <div className='w-[60%] absolute  top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 text-white '>
              <h2 className='text-2xl md:text-5xl'>{t("About_willson_name")}</h2>
              <p className='text py-2 md:py-3'>{t("About_willson_position")}</p>
              <p className='text-xs text-slate-300'>{t("About_willson_details")}</p>
            </div>
          
        </SwiperSlide>
        
      </Swiper>
    </div>
      
  )
}

export default Slider