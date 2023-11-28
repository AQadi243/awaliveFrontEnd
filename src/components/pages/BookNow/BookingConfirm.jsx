import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../sharedPages/Context/AuthProvider';
import BannerPage from '../../sharedPages/PageBanner/BannerPage';
import BookingDate from './BookingDate';
import { Tabs, Modal  } from 'antd';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import PageAnimation from '../../PageAnimation/PageAnimation';




const BookingConfirm = () => {
  const {  user } = useContext(AuthContext);
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const [order, setOrder] = useState('');
  const [loading, setLoading] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({});
  const navigate = useNavigate();

 

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

  //  const handleBookNow = (paymentMethod) => {
  //   setLoading(true);

  //   const bookingInfoWithPaymentMethod = {
  //     ...bookingInfo,
  //     paymentMethod,
  //   };

  //   // Save updated booking information to localStorage
  //   localStorage.setItem('bookingInfo', JSON.stringify(bookingInfoWithPaymentMethod));
  //   setLoading(true)
  //   const UpdateStoredBookingInfo = JSON.parse(localStorage.getItem('bookingInfo')) || {};
    
  //   // Update the state with the retrieved booking information
  //   setBookingInfo(UpdateStoredBookingInfo);

  //   console.log('Booking information saved:', UpdateStoredBookingInfo);
  //   // Open the Ant Design modal
  //   setIsModalVisible(true);

  //   setLoading(false);
  // };


  const handleBookNow = async (paymentMethod) => {
    // ... existing logic
    setLoading(true)
    const bookingData = {
        ...bookingInfo,
        userEmail: user?.email,  // Assuming 'user' has an 'email' field
        paymentMethod,
    };

    // console.log("order cehck", bookingData);
    try {
        const response = await fetch('http://localhost:3000/allOrders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData),
        });

        if (response.ok) {
            const result = await response.json();
            setOrder(result.message); // Or handle the response as needed
            console.log(result.message); // Or handle the response as needed
            setLoading(false)
        } else {
            console.error('Failed to save order');
            setOrder('Failed to save order');
        }
    } catch (error) {
        console.error('Error sending booking info:', error);
    }

    setIsModalVisible(true);
    setLoading(false);
};


  const handleModalCancel = () => {
    // Close the Ant Design modal
    setIsModalVisible(false);
    navigate('/mybookings');

  };


   const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Card Payment',
      children: (
        <div style={{ fontFamily: 'Gilda Display, serif' }}>
          <p>Please inder your Card Number and Date</p>
          <p>Your reservation will be confirmed when we receive the Payment.</p>
          
          <button className="bg-[#BE9874] py-2 px-8 text-sm text-white"  onClick={() => handleBookNow('Card Payment')}>Book Now</button>
          
        </div>
      ),
    },
    {
      key: '2',
      label: 'Payment on Arrive',
      children: (
        <div style={{ fontFamily: 'Gilda Display, serif' }}>       
          <p>NOTE : You could pay directly in our structure with any kind of credit card or cash.</p>       
          <button className="bg-[#BE9874] py-2 px-8 text-sm text-white"  onClick={() => handleBookNow('Payment on Arrival')}>Book Now</button>
        </div>
        )
    },
    {
      key: '3',
      label: 'Booking Request',
      children:(
        <div style={{ fontFamily: 'Gilda Display, serif' }}>       
          <p>	NOTE : This request is not a reservation but a simple request, we will get in touch with you.</p>       
          <button className="bg-[#BE9874] py-2 px-8 text-sm text-white"  onClick={() => handleBookNow('Booking Request')}>Book Now</button>
        </div>
        ),
    },
  ];
  

  return (
    <>
    <PageAnimation>
    <BannerPage text='Checkout' />
    <section className="w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row gap-3 md:gap-5 py-10 md:py-20">
        <BookingDate />
        <div className="md:w-2/3" style={{ fontFamily: 'Gilda Display, serif' }}>
          <div>
            <p className="text-2xl md:text-4xl pb-3">Your Order Details :</p>
            <div>
              <form className="flex flex-col gap-3 md:gap-5">
                <div className="grid md:grid-cols-2 gap-3 md:gap-5  ">
                  <div className='flex items-center'>
                    <p className="py-2 px-2 "> First Name: </p>
                    <span className='font-semibold'> {firstName} </span>
                  </div>
                  <div className='flex items-center'>
                    <p className="py-2 px-2 "> Last Name:</p>
                    <span className='font-semibold'>{lastName}</span>
                  </div>
                  <div className='flex items-center'>
                    <p className="py-2 px-2 "> Email:</p>
                    <span className='font-semibold'>{email}</span>
                  </div>
                  <div className='flex items-center'>
                    <p className="py-2 px-2 "> Phone:</p>
                    <span className='font-semibold'>{phone}</span>
                  </div>
                  <div className='flex items-center'>
                    <p className="py-2 px-2 "> Address:</p>
                    <span className='font-semibold'>{address}</span>
                  </div>
                  <div className='flex items-center'>
                    <p className="py-2 px-2 "> City:</p>
                    <span className='font-semibold'>{city}</span>
                  </div>
                  <div className='flex items-center'>
                    <p className="py-2 px-2 "> ArrivalTime:</p>
                    <span className='font-semibold'>{arrivalTime}</span>
                  </div>
                  <div className='flex items-center'>
                    <p className="py-2 px-2 "> Message:</p>
                    <span className='font-semibold'>{message}</span>
                  </div>
                  
                    
                  
                </div>
                
                
              </form>
            </div>
          </div>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>

      </div>
    </section>
    {
      loading ? <p>Loading...</p>  : 
      (
        <Modal
        title="Booking Information"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={[
          <button key="cancel" onClick={handleModalCancel}>
            Close
          </button>,
        ]}
      >
        <p>{order}</p>
        {/* <pre>{JSON.stringify(bookingInfo, null, 2)}</pre> */}
      </Modal>
      )
    }
    
      </PageAnimation>
    </>
  );
};

export default BookingConfirm;
