// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import sldierOne from '../../../assets/katrinSlider.jpg'
import sldierTwo from '../../../assets/adamSlider.jpg'
import sldierThree from '../../../assets/lwsSlider.jpg'
import './slider.css'
import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
// import { changeConfirmLocale } from 'antd/es/modal/locale';


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