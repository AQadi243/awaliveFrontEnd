import React from 'react'
import { Link } from 'react-router-dom'
import { Tabs } from 'antd';





const PromoRoomDetails = ({singlePromotionData}) => {
    const {roomImage, fullDatails,roomName, price,numberOfGuests, breakfastAvailable, reviews} = singlePromotionData

    const onChange = (key) => {
        console.log(key);
      };

      const items = [
        {
          key: '1',
          label: 'Descriptions',
          children: <>
          <p className="w-full py-4">
               {fullDatails}
              </p>
          </>,
        },
        {
          key: '2',
          label: 'Additional information',
          children: <>
          <div className=" py-5">
              <h2 className="text-2xl">Additional information</h2>
              <div className="md:w-[50%]">
                <div className="grid grid-cols-2 gap-2 py-5">
                  <p>Guests</p>
                  <p>1 Guest, 2 Guests, 3 Guests</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p>Breakfast</p>
                  <p>Included, Not Included, Room Service</p>
                </div>
              </div>
            </div>
          </>,
        },
        {
          key: '3',
          label: 'Reviews',
          children: <>
          <div className=" py-5">
              <p className="pb-5 text-2xl">Reviews</p>
              <div id="reviews-container">
                  {reviews.map((review)=>(
                    <div key={review.id}>
                        <p>{review.rating}</p>
                        <p>{review.comment}</p>
                        <p>{review.username}</p>
                    </div>
                  ))}
               </div>
              <div className="flex flex-col gap-6" id="review-form">
                  <div>
                      <i className="fas fa-star" data-star="1"></i>
                      <i className="fas fa-star" data-star="2"></i>
                      <i className="fas fa-star" data-star="3"></i>
                      <i className="fas fa-star" data-star="4"></i>
                      <i className="fas fa-star" data-star="5"></i>
                  </div>
                  <textarea className="bg-slate-50 outline-none px-5 py-5" name="message" cols="30" rows="5" placeholder="Message"></textarea>
                  <input className="bg-slate-50 outline-none px-5 py-5" type="email" name="email" placeholder="Enter Your Email" />
                  <input className="bg-slate-50 outline-none px-5 py-5" type="text" name="name" placeholder="Your name" />
                  <div>
                      <button type="submit" className="uppercase text-s m bg-[#BE9874] px-5 py-2 text-white">Submit</button>
                  </div>
              </div>
          </div>
          </>,
        },
      ];
    
  return (
    <>
    <section className="w-[90%] mx-auto py-10 md:py-16">
        <div className="flex flex-col md:flex-row gap-5 items-center" style={{ fontFamily: "Gilda Display, serif" }}>
          <div className="w-full md:w-[50%]">
            <img src={roomImage} alt="" className="w-full" />
          </div>
          <div className=" md:w-[50%] flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl md:text-4xl">{roomName}</h2>
              <p className="text-2xl">{price} SR</p>
              <p className='text-xs'>{fullDatails}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between md:w-96">
                <p >Guests</p>
                <p className='font-semibold'>{numberOfGuests}</p>
                
              </div>
              <div className="flex items-center justify-between md:w-96">
                <p >Breakfast</p>
                <p className='font-semibold'>{breakfastAvailable}</p>
            
              </div>
            </div>
            <div className="text-center">
              <Link   className="tracking-wider uppercase bg-[#BE9874] text-sm py-2 px-4 text-white">
                Add To Card
                </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[90%] mx-auto">

      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </section>

      </>
  )
}

export default PromoRoomDetails