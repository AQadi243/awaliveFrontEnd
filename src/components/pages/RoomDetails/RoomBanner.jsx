import React from 'react'
import bgImg from "../../../assets/singleRoomCover.jpg";

const RoomBanner = ({singleRoomDetails}) => {
  const {priceOptions,} = singleRoomDetails;

    const containerStyle = {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      };

  return (
    <section className="h-[350px] w-full relative" style={containerStyle}>
          <div className="absolute bottom-0 w-full">
            {/* <p className="text-3xl md:text-6xl text-white">Search Room</p>  */}
            <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between py-10 text-white tracking-widest">
              <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-xs">
                <div className="flex gap-2 items-center">
                  <p className=" uppercase">Description</p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className=" uppercase">ROOM SERVICES</p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className=" uppercase">AROUND THE HOTEL</p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className=" uppercase">SIMILAR ROOMS</p>
                </div>
              </div>
              <div>
                <p className='uppercase'>
                  <span id="roomPrice" className="text-4xl  italic " style={{ fontFamily: "Gilda Display, serif" }}>
                    {priceOptions[0].price}
                  </span>{" "}
                  /SAR Per Night
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default RoomBanner