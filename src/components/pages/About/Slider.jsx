// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './slider.css'


const Slider = () => {
    const [loading, setLoading] = useState(true)
    const [slider, setSlider] = useState([])

    useEffect(() => {
        setLoading(true);
        const fetchRoomData = async () => {
          try {
            const response = await axios.get("/staff.json");
            setSlider(response.data);
            
            setLoading(false);
          } catch (error) {
            // setLoading(false);
            console.error("Error fetching room data", error);
          }
        };
    
        fetchRoomData();
      }, []);
    
    // const sliderImage = singleRoomDetails.DetailsImage
    
    // console.log(slideImage);

  
  return (
    <div className=''>
      <Swiper navigation={true} modules={[Navigation, Autoplay]} className={` h-[calc(100vh-74px)]  overflow-hidden ` }autoplay={{ delay: 3000,  }} loop={true} >
        {slider?.map((person) => (
          <SwiperSlide className='bg-cover bg-center relative' key={person.id} style={{ fontFamily: "Gilda Display, serif" }}>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            <img className='w-full h-full  object-cover block  ' src={person.image} alt="" />
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            <div className='w-[60%] absolute  top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 text-white '>
              <h2 className='text-2xl md:text-5xl'>{person.name}</h2>
              <p className='text py-2 md:py-3'>{person.position}</p>
              <p className='text-xs text-slate-300'>{person.details}</p>
            </div>
          
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider