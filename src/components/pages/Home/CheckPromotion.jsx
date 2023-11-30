// import React from 'react'
import checkImg from '../../../assets/check.jpg'
import singnature from '../../../assets/signature.png'
import caffeeBar from '../../../assets/cofee Com.jpg'
import luxuryRoom from '../../../assets/luxuryRoomCard.webp'
import familyRoom from '../../../assets/familyCard .jpg'

const CheckPromotion = () => {
  return (
    <>
    <section className="w-[90%] mx-auto pt-10 md:py-28 text-[#2E2E2E]">
      <div className=" flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="md:w-[30%] text-center md:text-start">
          <p className=" pb-4 md:pb-8 text-sm tracking-widest">BEST SUMMER OFFERS</p>
          <h2 className="text-2xl md:text-6xl  " style={{ fontFamily: "Gilda Display, serif" }}>Check the Promotions</h2>
          <p className="py-6 md:py-10 text-sm">Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non, efficitur diam. Sed condimentum pellentesque eros. Etiam posuere turpis in ultricies ullamcorper.</p>
          <div className="flex items-center gap-10">
            <img src={checkImg} alt=""  className="rounded-full w-20" />
            <img src={singnature} alt="signature" className="w-[50%]"  />
          </div>
        </div>
        <div className="md:w-[70%] " style={{ position: 'relative' }}>
          <img src={caffeeBar} alt="coffee"  className="w-full md:w-[50%]" loading='lazy' />
          <div className="md:w-[50%] md:absolute md:right-10 md:top-1/3">
            <div className="grid grid-cols-4 gap-6 items-center justify-center h-32">
              <img src={luxuryRoom} alt="" className="col-span-1" />
              <div className="col-span-2">
                <p className='text-xs tracking-widest'>One week</p>
                <p className="text-xl" style={{ fontFamily: "Gilda Display, serif" }}>Small Sea Room</p>
              </div>
              <p className="bg-[#2E2E2E] py-1 px-3 col-span-1 text-white text-center text-xs md:text-sm">$ 40</p>
            </div>
          </div>
          <div className="md:w-[50%] md:absolute md:right-10 md:top-2/3">
            <div className="grid grid-cols-4 gap-6 items-center justify-center h-12 md:h-32">
              <img src={familyRoom} alt="" className="col-span-1" />
              <div className="col-span-2">
                <p className='text-xs tracking-widest'>Two weeks</p>
                <p className="text-xl" style={{ fontFamily: "Gilda Display, serif" }}>Family Suite</p>
              </div>
              <p className="bg-[#2E2E2E] py-1 px-3 col-span-1 text-white text-center text-xs md:text-sm">$ 40</p>
            </div>
          </div>
          <div className="md:w-[50%] md:absolute md:right-10 md:top-0">
            <div className="grid grid-cols-4 gap-6 items-center justify-center h-32">
              <img src={familyRoom} alt="" className="col-span-1" />
              <div className="col-span-2">
                <p  className='text-xs tracking-widest'>One month</p>
                <p className="text-xl" style={{ fontFamily: "Gilda Display, serif" }}>Apartments</p>
              </div>
              <p className="bg-[#2E2E2E] py-1 px-3 col-span-1 text-white text-center text-xs md:text-sm">$ 40</p>
            </div>
          </div>
        </div>  
             
      </div>
      
    </section>
   
  </>
  )
}

export default CheckPromotion