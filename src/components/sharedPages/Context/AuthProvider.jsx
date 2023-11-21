import  { createContext, useEffect, useState } from 'react'


export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [night, setNight] = useState(0);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(1);
    const [RoomName, setRoomName] = useState("");
    const [RoomPrice, setRoomPrice] = useState("");
    const [RoomImage, setRoomImage] = useState("");


    useEffect(() => {
        // Retrieve booking information from localStorage on component mount
        const storedBookingInfo = localStorage.getItem('bookingInfo');
        if (storedBookingInfo) {
          const parsedBookingInfo = JSON.parse(storedBookingInfo);
          setCheckIn(parsedBookingInfo.checkIn);
          setCheckOut(parsedBookingInfo.checkOut);
          setGuests(parsedBookingInfo.guests);
          setNight(parsedBookingInfo.night);
          setRoomName(parsedBookingInfo.roomName);
          setRoomPrice(parsedBookingInfo.roomPrice);
          setRoomImage(parsedBookingInfo.roomImage);
        }
      }, []);

    // const bookingInfo = {
    //     checkIn,
    //     checkOut,
    //     guests,
    //     night,
    //     RoomName,
    //     RoomPrice,
    //     RoomImage,
    
    // }

    const handleBookNow = () => {
        setLoading(true)
        const bookingInfo = {
          checkIn,
          checkOut,
          guests,
          night,
          RoomName,
          RoomPrice,
          RoomImage,
        };
    
        // Save booking information to localStorage
        localStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));
    
        console.log('Booking information saved:', bookingInfo);
      };

  



    const authInfo = {
        loading,
        setLoading,
        night,
        setNight,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        guests,
        setGuests,
        handleBookNow,
        RoomImage,
        RoomPrice,
        RoomName,
        setRoomImage,
        setRoomPrice,
        setRoomName,
        // bookingInfo,
      };


  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider