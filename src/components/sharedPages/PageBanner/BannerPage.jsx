import React from 'react'
import bgImg from '../../../assets/relaxArea.jpg'

const BannerPage = ({text}) => {

    const containerStyle = {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      };

  return (
    <section className='relative h-[50vh]'  style={containerStyle}>
        <div className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ fontFamily: "Gilda Display, serif" }}>
            <h2 className='text-center text-2xl md:text-6xl  capitalize text-white'>{text}</h2>
        </div>
        
    </section>
  )
}

export default BannerPage