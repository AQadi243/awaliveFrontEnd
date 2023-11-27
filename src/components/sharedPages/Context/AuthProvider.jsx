import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [night, setNight] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [RoomName, setRoomName] = useState("");
  const [RoomPrice, setRoomPrice] = useState("");
  const [RoomImage, setRoomImage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    
    // Retrieve booking information from localStorage on component mount
    const storedBookingInfo = localStorage.getItem("bookingInfo");
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

  useEffect(() => {
    setLoading(true)
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
    setLoading(false)
  },[])

  const handleBookNow = () => {
    setLoading(true);
    const totalPrice = night * RoomPrice;
    const bookingInfo = {
      checkIn,
      checkOut,
      guests,
      night,
      RoomName,
      RoomPrice,
      RoomImage,
      totalPrice,
    };

    // Save booking information to localStorage
    localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));

    console.log("Booking information saved:", bookingInfo);
  };

  // const handleLogin = async (email, password) => {

  //   try {
  //     // Make an HTTP POST request to the login endpoint
  //     const response = await fetch('http://localhost:3000/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     // Check if the request was successful
  //     if (response.ok) {
  //       const data = await response.json();
  //       // Assuming the backend sends a token upon successful login
  //       console.log('Login successful. Token:', data.token);
  //       console.log('Login successful. Token:', data);
  //       // You can set user information in the context here
  //       // setError("Success")
  //     } else {
  //       // Login failed, handle the error
  //       setError("Incorrect email or password")
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     setError("Pleas Try Again")
  //   }
  // };

  // const handleLogin = async (email, password) => {
  //   try {
  //     const response = await fetch("http://localhost:3000/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("Login successful. Token:", data.token);

  //       // Set user information here
  //       // Assuming the backend sends user details along with the token
  //       // Save user data to state and localStorage
  //     setUser(data.user);
  //     localStorage.setItem('userData', JSON.stringify(data.user));
  //     localStorage.setItem('token', data.token);
  //     } else {
  //       setError("Incorrect email or password");
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //     setError("Please Try Again");
  //   }
  // };

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        localStorage.setItem('userData', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
      } else {
        setError("Incorrect email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Please Try Again");
    } finally {
      setLoading(false);
    }
  };

  
  
  const handleLogout = () => {
    
    // Clear user data and token from state and localStorage
    setUser(null);
    localStorage.removeItem('userData');
    localStorage.removeItem('token'); 
    

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
    handleLogin,
    handleLogout,
    error,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
