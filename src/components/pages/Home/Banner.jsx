
import bannerImagTwo from "../../../assets/apartment Room.jpg";
import bannerImagOne from "../../../assets/familyroom.jpg";
// // import DatePicker from "./DatePicker";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import '../About/slider.css'
import { Link } from "react-router-dom";


const Banner = () => {
  
    
  return (
    <>

<div className=''>
      <Swiper navigation={true} modules={[Navigation, Autoplay]} className={` h-[calc(100vh-74px)]  overflow-hidden ` }autoplay={{ delay: 5000,   }} loop={true} >
        
      <SwiperSlide className='bg-cover bg-center relative'  style={{ fontFamily: "Gilda Display, serif" }}>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
            <img className='w-full h-full  object-cover block  ' src={bannerImagTwo} alt="" />
            {/* <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div> */}
            <div className='w-full md:w-[60%] absolute  top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 text-white '>
            <div className="text-center flex flex-col gap-2 md:gap-4">
              <p className='text-[8px] md:text-sm tracking-widest uppercase'>Luxury Hotel & Best Resort </p>
              <h1 className=" text-3xl md:text-7xl  ">Enjoy A Luxury</h1>
              <h1 className="text-3xl md:text-7xl tracking-widest ">Experience</h1>
              
              <div className="py-3">
              <Link
              className=" py-2 md:py-3  text-xs md:text-sm  px-4 border  md:px-8 md:border tracking-widest heroText"
            >
              Rooms & Suites
            </Link>
              </div>
              </div>
            </div>
          
        </SwiperSlide>
        <SwiperSlide className='bg-cover bg-center relative'  style={{ fontFamily: "Gilda Display, serif" }}>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
            <img className='w-full h-full  object-cover block  ' src={bannerImagOne} alt="" />
            {/* <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div> */}
            <div className='w-full md:w-[60%] absolute  top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 text-white '>
            <div className="text-center flex flex-col gap-2 md:gap-4">
              <p className='text-[8px] md:text-sm tracking-widest uppercase'>Luxury Hotel & Best Resort </p>
              <h1 className=" text-3xl md:text-7xl  ">Enjoy A Luxury</h1>
              <h1 className="text-3xl md:text-7xl tracking-widest ">Experience</h1>
              
              <div className="py-3">
              <Link
              className=" py-2 md:py-3  text-xs md:text-sm  px-4 border  md:px-8 md:border tracking-widest heroText"
            >
              Rooms & Suites
            </Link>
              </div>
              </div>
            </div>
          
        </SwiperSlide>
      {/* <DatePicker /> */}
      </Swiper>
    </div>

    </>
  );
};

export default Banner;
