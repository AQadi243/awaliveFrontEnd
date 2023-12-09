import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { notification } from 'antd';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [night, setNight] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [roomId, setRoomId] = useState(0);
  const [RoomName, setRoomName] = useState("");
  const [RoomPrice, setRoomPrice] = useState("");
  const [RoomImage, setRoomImage] = useState("");
  const [error, setError] = useState("");

  const [searchCategory , setSearchCategory] = useState('')
  const [searchResults, setSearchResults] = useState([]);
  const [isSearched , setIsSearched] = useState(false)
  const [searchLoading, setSearchLoading] = useState(true);
  const [sortByPrice, setSortByPrice] = useState('')
  const [searchParams, setSearchParams] = useState({
    category: '',
    guests: 1,
    checkIn: '',
    checkOut: ''
  });
  
  console.log(roomId,'room id auth');
  // all are in search value 
  // const [searchResults, setSearchResults] = useState([]);
  // const [searchLoading, setSearchLoading] = useState(true);
  // const[searchCheckIn , setSearchCheckIn] = useState("")
  // const[searchCheckOut , setSearchCheckOut] = useState("")
  // const [searchGuest, setSearchGuest] = useState(2);
  // const [searchNight, setSearchNight] = useState(0);
  // const [searchCategory , setSearchCategory] = useState('')
  // const [isSearched , setIsSearched] = useState(false)


  useEffect(() => {
    // Retrieve booking information from localStorage on component mount
    const storedBookingInfo = localStorage.getItem("bookingInfo");
    if (storedBookingInfo) {
      const parsedBookingInfo = JSON.parse(storedBookingInfo);
      setCheckIn(parsedBookingInfo.checkIn);
      setCheckOut(parsedBookingInfo.checkOut);
      setGuests(parsedBookingInfo.guests || 1);
      setNight(parsedBookingInfo.night);
      setRoomName(parsedBookingInfo.roomName);
      setRoomPrice(parsedBookingInfo.roomPrice);
      setRoomImage(parsedBookingInfo.roomImage);
    }
  }, []);

  useEffect(() => {
    
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
    setLoading(false)
  },[])

  const handleBookNow = () => {
    
    const totalPrice = night * RoomPrice;
    const bookingInfo = {
      roomId,
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
    const response = await axios.post("https://awalive-server-side-hzpa.vercel.app/login", {
      email,
      password
    });

    const data = response.data;
    setUser(data.user);
    localStorage.setItem('userData', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);
    notification['success']({
      message: 'Welcome Nice to see you',
      placement: 'topRight',
      duration: 3.5, 
    });
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error response:", error.response.data);
      setError(error.response.data.message || "Incorrect email or password");
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error request:", error.request);
      setError("No response from the server");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
      setError("Error during login");
    }
    notification['error']({
      message: 'Access denied',
      description: 'PLease check Email and Password is correct',
      placement: 'topRight',
      duration: 3.5, 
    });
  } finally {
    setLoading(false);
  }
};


  
  
  const handleLogout = () => {
    
    // Clear user data and token from state and localStorage
    setUser(null);
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    notification['info']({
      message: 'Log out success',
      description: 'See you. Come back soon',
      placement: 'topRight',
      duration: 3.5, 
    });
    

  };

  // search logic start
  

  useEffect(() => {
    setSearchParams({
      searchCategory: searchCategory,
      searchGuests: guests,
      searchCheckIn: checkIn,
      searchCheckOut: checkOut,
    });
  }, [guests, checkIn, checkOut,searchCategory]);
  

useEffect(()=>{

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://awalive-server-side-hzpa.vercel.app/searchRooms', { params: searchParams });
      // Display the search results
      setSearchResults(  response.data);
      // console.log( 'search rooms auth', response.data);
      setIsSearched(true)
      setSearchLoading(false)
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
    setSearchLoading(false)
  };
  
  handleSearch()
  
},[searchParams]) 
  // search execution end  

  // all that field are search all in a obj 
  const searchValue = {
    searchLoading,
    setSearchLoading,
    // searchCheckIn,
    // setSearchCheckIn,
    // searchCheckOut,
    // setSearchCheckOut,
    // searchGuest,
    // setSearchGuest,
    // searchNight,
    // setSearchNight,
    sortByPrice,
    setSortByPrice,
    searchCategory,
    setSearchCategory,
    setIsSearched,
    isSearched,
    setSearchResults,
    searchResults,


  }

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
    // roomId,
    setRoomImage,
    setRoomPrice,
    setRoomName,
    setRoomId,
    // bookingInfo,
    handleLogin,
    handleLogout,
    error,
    user,
    searchValue
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
