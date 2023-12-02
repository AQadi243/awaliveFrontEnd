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
  const [loading, setLoading] = useState(true);
  const [bookingInfo, setBookingInfo] = useState({});
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [editedEmail, setEditedEmail] = useState('');
  const [editedPhone, setEditedPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  // const [phoneError, setPhoneError] = useState('');
  const navigate = useNavigate();


  console.log("confo", bookingInfo);
  // Destructure properties only if formData exists in bookingInfo
  const { formData } = bookingInfo;
  const { firstName, lastName, email, address, message, phone, arrivalTime, city } = formData || {};

  useEffect(() => {
    
    // Retrieve booking information from localStorage
    const storedBookingInfo = JSON.parse(localStorage.getItem('bookingInfo')) || {};
    
    // Update the state with the retrieved booking information
    setBookingInfo(storedBookingInfo);
     setEditedEmail(email);
    setEditedPhone(phone);
    
    setLoading(false)
    // Optionally, you can do something with the retrieved information, such as setLoading or other logic
    // setLoading(false);
  }, [email, phone]); // Empty dependency array to run the effect only once on mount

  



  const handleBookNow = async (paymentMethod) => {
    // if (!validateEmail(editedEmail) || !validatePhone(editedPhone)) {
    //   setEmailError(!validateEmail(editedEmail) ? 'Invalid email format' : '');
    //   // setPhoneError(!validatePhone(editedPhone) ? 'Invalid phone format' : '');
    //   return;
    // }
    // ... existing logic
    setLoading(true)
    const bookingData = {
        ...bookingInfo,
        userEmail: user?.email,  // Assuming 'user' has an 'email' field
        paymentMethod,
    };

    // console.log("order cehck", bookingData);
    try {
        const response = await fetch('https://awalive-server-side-hzpa.vercel.app/allOrders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData),
        });

        if (response.ok) {
            const result = await response.json();
            setOrder(result.message); // Or handle the response as needed
            console.log(result.message); // Or handle the response as needed
            // Clear bookingInfo from local storage after successful booking
            await localStorage.removeItem('bookingInfo');

          // Optionally reset bookingInfo state
            setBookingInfo({});
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

  // Validation functions
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// const validatePhone = (phone) => {
//   // validate phone field 
//   // const re = /^[0-9]{7,15}$/; 
//   // return re.test(String(phone));
// };


  const handleEmailEdit = () => {
    setIsEditingEmail(true);
  };

  const handlePhoneEdit = () => {
    setIsEditingPhone(true);
  };

  const handleEmailChange = (e) => {
    setEditedEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setEditedPhone(e.target.value);
  };

  const saveEmail = () => {
    if (!editedEmail || !validateEmail(editedEmail)) {
      setEmailError('Invalid email format');
      return;
    }
    // Update email in bookingInfo and close edit mode
    const updatedBookingInfo = { ...bookingInfo, formData: { ...formData, email: editedEmail } };
    setBookingInfo(updatedBookingInfo);
  
    // Update local storage
    localStorage.setItem('bookingInfo', JSON.stringify(updatedBookingInfo));
  
    setIsEditingEmail(false);
    setEmailError('');
  };
  
  const savePhone = () => {
    // if (!editedPhone || !validatePhone(editedPhone)) {
    //   setPhoneError('Invalid phone format');
    //   return;
    // }

    // Update phone in bookingInfo and close edit mode
    const updatedBookingInfo = { ...bookingInfo, formData: { ...formData, phone: editedPhone } };
    setBookingInfo(updatedBookingInfo);
  
    // Update local storage
    localStorage.setItem('bookingInfo', JSON.stringify(updatedBookingInfo));
  
    setIsEditingPhone(false);
    // setPhoneError('')
  };


  


   const onChange = (key) => {
    console.log(key);
  };
  const items = [
    
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
            <h2 className="text-2xl md:text-4xl pb-3">Your Order Details :</h2>
            <p className='text-yellow-300'>Please make use you have enter correct Email and phone number </p>
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
                  {/* <div className='flex items-center'>
                    <p className="py-2 px-2 "> Email:</p>
                    <span className='font-semibold'>{email}</span>
                  </div>
                  <div className='flex items-center'>
                    <p className="py-2 px-2 "> Phone:</p>
                    <span className='font-semibold'>{phone}</span>
                  </div> */}
                    <div className='flex items-center'>
        <p className="py-2 px-2 "> Email:</p>
        {isEditingEmail ? (
          <>
            <input type="email" value={editedEmail} onChange={handleEmailChange} />
            <button onClick={saveEmail} className='bg-[#BE9874] px-2 rounded-sm text-white'>Save</button>
          </>
        ) : (
          <>
            <span className='font-semibold' onClick={handleEmailEdit}>{editedEmail}</span>
            <p className=' px-2 rounded-sm bg-black text-white ml-3 text-xs'>Edit</p>
          </>
        )}
        {emailError && <p className="error-message">{emailError}</p>}
      </div>
      <div className='flex items-center'>
        <p className="py-2 px-2 "> Phone:</p>
        {isEditingPhone ? (
          <>
            <input type="tel" required value={editedPhone} onChange={handlePhoneChange} />
            <button onClick={savePhone} className='bg-[#BE9874] px-2 rounded-sm text-white' >Save</button>
            
          </>
        ) : (
          <>
            <span className='font-semibold' onClick={handlePhoneEdit}>{editedPhone}</span>
            <p className=' px-2 rounded-sm bg-black text-white ml-3 text-xs' >Edit</p>
          </>
        )}
        {/* {phoneError && <p className="error-message">{phoneError}</p>} */}
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
