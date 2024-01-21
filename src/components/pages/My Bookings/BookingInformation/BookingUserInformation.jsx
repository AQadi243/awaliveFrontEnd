// import React from 'react'

// const BookingUserInformation = ({selectedOrder}) => {
//     const userInfo = selectedOrder.formData
//   return (
//     <div
//                 className="md:w-1/2"
//                 style={{ fontFamily: "Gilda Display, serif" }}
//               >
//                 <div>
//                   <h2 className="text-2xl  pb-3">
//                     Your Order Details :
//                   </h2>
//                   {/* <p className="text-yellow-300">
//                     Please make use you have enter correct Email and phone
//                     number{" "}
//                   </p> */}
//                   <div>
//                     <form className="flex flex-col gap-2 md:gap-5">
//                       <div className="grid grid-cols-1  md:gap-5  ">
//                         <div className="flex items-center">
//                           <p className=" px-2 "> First Name: </p>
//                           <span className=""> {userInfo.firstName} </span>
//                         </div>
//                         <div className="flex items-center">
//                           <p className=" px-2 "> Last Name:</p>
//                           <span className="">{userInfo.lastName}</span>
//                         </div>
                        
//                         <div className="flex items-center">
//                           <p className=" px-2 "> Email:</p>
//                           <p>{userInfo.email}</p>
//                         </div>
//                         <div className="flex items-center">
//                           <p className=" px-2 "> Phone:</p>
//                           <p>{userInfo.phone}</p>
//                           {/* {phoneError && <p className="error-message">{phoneError}</p>} */}
//                         </div>

//                         <div className="flex items-center">
//                           <p className=" px-2 "> Address:</p>
//                           <span className="font-semibold">{userInfo.address? userInfo.address : "N/A" }</span>
//                         </div>
//                         <div className="flex items-center">
//                           <p className=" px-2 "> City:</p>
//                           <span className="font-semibold">{userInfo.city? userInfo.city : "N/A" }</span>
//                         </div>
//                         <div className="flex items-center">
//                           <p className=" px-2 "> ArrivalTime:</p>
//                           <span className="font-semibold"> {userInfo.arrivalTime? userInfo.arrivalTime : "N/A" }</span>
//                         </div>
//                         <div className="flex items-center">
//                           <p className=" px-2 "> Message:</p>
//                           <span className="font-semibold">{userInfo.message? userInfo.message : "N/A" }</span>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//                 {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */}
//               </div>
//   )
// }

// export default BookingUserInformation