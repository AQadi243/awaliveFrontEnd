import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../sharedPages/Context/AuthProvider';
import BannerPage from '../../sharedPages/PageBanner/BannerPage';
import BookingDate from './BookingDate';

const BookingConfirm = () => {
  const authInfo = useContext(AuthContext);
  const { setLoading, loading } = authInfo;

  // State to store the retrieved booking information
  const [bookingInfo, setBookingInfo] = useState({});

  useEffect(() => {
    setLoading(true)
    // Retrieve booking information from localStorage
    const storedBookingInfo = JSON.parse(localStorage.getItem('bookingInfo')) || {};
    
    // Update the state with the retrieved booking information
    setBookingInfo(storedBookingInfo);
    
    setLoading(false)
    // Optionally, you can do something with the retrieved information, such as setLoading or other logic
    // setLoading(false);
  }, [setLoading]); // Empty dependency array to run the effect only once on mount

  console.log("confo", bookingInfo);
   // Destructure properties only if formData exists in bookingInfo
   const { formData } = bookingInfo;
   const { firstName, lastName, email, address, message, phone, arrivalTime, city } = formData || {};

  return (
    <>
    <BannerPage text='Checkout' />
    <section className="w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 py-10 md:py-20">
        <BookingDate />
        <div className="md:w-2/3">
          <div>
            <p className="text-xl md:text-2xl pb-3">Add Your Informations :</p>
            <div>
              <form className="flex flex-col gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                    <p className="py-2 px-2 "> First Name: <span id="firstName"> {firstName} </span></p>
                    <p className="py-2 px-2 "> Last Name: <span id="lastName">{lastName}</span></p>
                    <p className="py-2 px-2 "> Email: <span id="email">{email}</span></p>
                    <p className="py-2 px-2 "> Phone: <span id="phone">{phone}</span></p>
                    <p className="py-2 px-2 "> Address: <span id="address">{address}</span></p>
                    <p className="py-2 px-2 "> City: <span id="city">{city}</span></p>
                    <p className="py-2 px-2 "> Arrival Time: <span id="arrivalTime">{arrivalTime}</span></p>
                    <p className="py-2 px-2 "> Message: <span id="message">{message}</span></p>
                  
                </div>
                
                
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default BookingConfirm;
