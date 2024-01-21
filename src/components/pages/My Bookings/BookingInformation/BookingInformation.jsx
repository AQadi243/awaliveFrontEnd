// import React from 'react'
// import { CheckOutlined } from '@ant-design/icons';

// const BookingInformation = ({selectedOrder}) => {
//     console.log(selectedOrder, 'lalalal');
//   return (
//     <div className="md:w-1/2  text-sm" style={{ fontFamily: "Gilda Display, serif" }}>
//           {/* <img className="" src={selectedOrder.RoomImage} alt="" /> */}
          
          
//           <div className="p-3 px-3 bg-white shadow text-xs">
//             <div className="flex gap-2 py-2">
//               <p className="font-semibold  ">1 Property:</p>
//               <p>{selectedOrder.RoomName}</p>
//             </div>
//             <div className="flex gap-2">
//               <p className="font-semibold">Check In:</p>
//               <p>{selectedOrder.checkIn}</p>
//             </div>
//             <div className="flex gap-2">
//               <p className="font-semibold">Check out:</p>
//               <p>{selectedOrder.checkOut}</p>
//             </div>
//             <div className="">
//               {/* <p className="font-semibold">Night Stay:</p> */}
//               <p>{selectedOrder.night}-night stay</p>
//             </div>
//             <h2 className="">Price summery</h2>
//           </div>
//           {/* <div className="my-3 p-3 px-3 bg-white shadow flex gap-2 text-sm text-green-600">
//               <p><CheckOutlined /> </p>
//               <p>You have good taste! Book now before someone else grabs it!</p>
//           </div> */}
//           <div className=" p-3  flex flex-col gap-2 px-3 bg-white shadow  text-sm">
//               <p className="text-xl">Price Summary </p>
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm">1 Room X {selectedOrder.night}-nights </p>
//                   <p className="text-xs ">{selectedOrder.RoomPrice}-SAR average per night </p>
//                 </div>
//                 <div>
//                 <p>{selectedOrder.totalPrice}-SAR </p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p>Texes</p>
//                   <p className="text-xs ">15% gov. texes </p>
//                 </div>
//                   <p>{selectedOrder.tax}-SAR </p>
//               </div>
              
//               <div className="flex  justify-between font-semibold  border-t-2 py-4">
//                 <div>
//                   <p className="text-xs">Total Cost Per Room* </p>
//                   <p className="text-[10px] ">*Changes in taxes or fees will affect the total price. </p>
//                  </div>
//                   <p className='text-xs'>{selectedOrder.totalWithTax}-SAR </p>
//               </div>
//               <p>Thank you for booking.</p> 
//           </div> 
//       </div>
//     // <div>hello</div>
//   )
// }

// export default BookingInformation