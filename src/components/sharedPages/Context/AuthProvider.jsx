import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { notification } from "antd";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const [allRooms, setAllRooms] = useState([]);

  const [roomId, setRoomId] = useState(0);
  const [RoomName, setRoomName] = useState("");
  const [RoomPrice, setRoomPrice] = useState(0);
  const [RoomImage, setRoomImage] = useState("");
  const [sortByPrice, setSortByPrice] = useState("asc");
  const [error, setError] = useState("");

  const [searchLoader, setSearchLoader] = useState(true);
  const [category, setCategory] = useState("");
  const [night, setNight] = useState(0);
  const [checkIn, setCheckIn] = useState("Check-In");
  const [checkOut, setCheckOut] = useState("Check-Out");
  const [calender, setCalender] = useState([
    { startDate: null, endDate: null, key: "selection" },
  ]);
  // const [guests, setGuests] = useState(1);
  const [numberOfGuests, setGuests] = useState(null);
  const [child, setChild] = useState(0);
  const [childAges, setChildAges] = useState([]);

  const currentLanguage = i18next.language;
  const { t } = useTranslation();

  const handleBookNow = () => {
    const totalPrice = night * RoomPrice;
    const taxPercentage = 0.15; // 15% tax rate
    const tax = parseFloat((totalPrice * taxPercentage).toFixed(2));
    const totalWithTax = parseFloat((totalPrice + tax).toFixed(2));
    // const tax = totalPrice * taxPercentage;
    // const totalWithTax = totalPrice + tax;
    const formattedTotalPrice = totalPrice.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const formattedTax = tax.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const formattedTotalWithTax = totalWithTax.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const bookingInfo = {
      roomId,
      checkIn,
      checkOut,
      // guests,
      numberOfGuests,
      tax: formattedTax,
      totalWithTax: formattedTotalWithTax,
      night,
      RoomName,
      RoomPrice,
      RoomImage,
      totalPrice: formattedTotalPrice,
    };

    // Save booking information to localStorage
    localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));

    console.log("Booking information saved:", bookingInfo);
  };

  // login the user
  const handleLogin = async (email, password) => {
    // console.log(handleLogin,'alksjhlkashlil');
    setLoading(true);

    try {
      const response = await axios.post(
        // "https://awalive-server-side-hzpa.vercel.app/login",
        "https://type-script-server.vercel.app/api/auth/login",
        {
          email,
          password,
        }
      );
      const data = response.data;
      console.log(data.data, "users data ");
      setUser(data.data.user);
      localStorage.setItem("userData", JSON.stringify(data.data.user));
      localStorage.setItem("token", data.data.accessToken);
      notification["success"]({
        message: "Welcome Nice to see you",
        placement: "topRight",
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
      notification["error"]({
        message: "Access denied",
        description: "PLease check Email and Password is correct",
        placement: "topRight",
        duration: 3.5,
      });
    } finally {
      setLoading(false);
    }
  };

  // const handleLogout = () => {
  //   // Clear user data and token from state and localStorage
  //   // setUser(null);
  //   // localStorage.removeItem("userData");
  //   // localStorage.removeItem("token");
  //   // notification["info"]({
  //   //   message: "Log out success",
  //   //   description: "See you. Come back soon",
  //   //   placement: "topRight",
  //   //   duration: 3.5,
  //   // });
  //    useEffect(() => {
  //   const checkTokenExpiration = () => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       const tokenExpiration = JSON.parse(atob(token.split('.')[1])).exp;
  //       const currentTime = Date.now() / 1000; // current time in seconds
  //       if (tokenExpiration < currentTime) {
  //         handleLogout();
  //       }
  //     }
  //   };

  //   const intervalId = setInterval(checkTokenExpiration, 60000); // check every minute

  //   return () => clearInterval(intervalId); // clear interval on component unmount
  // }, []);
  // };

  const handleLogout = () => {
    // Clear user data and token from state and localStorage
    // setUser(null);
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setUser('')
    // notification logic here
  };

  // checking if user token is expire or not 
  useEffect(() => {
    const checkTokenExpiration = () => {
      const token = localStorage.getItem("token");
      if (token) {
        const tokenExpiration = JSON.parse(atob(token.split('.')[1])).exp;
        const currentTime = Date.now() / 1000; // current time in seconds
        if (tokenExpiration < currentTime) {
          handleLogout();
        }
      }
    };
    const intervalId = setInterval(checkTokenExpiration, 60000); // check every minute
    return () => clearInterval(intervalId); // clear interval on component unmount
  }, []);


  useEffect(() => {
    // Retrieve booking information from localStorage on component mount
    const storedBookingInfo = localStorage.getItem("bookingInfo");
    if (storedBookingInfo) {
      const parsedBookingInfo = JSON.parse(storedBookingInfo);
      setCheckIn(parsedBookingInfo.checkIn);
      setCheckOut(parsedBookingInfo.checkOut);
      setGuests(parsedBookingInfo.numberOfGuests);
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
    setLoading(false);
  }, []);

  // fetching all rooms from db
  useEffect(() => {
    const fetchAllRooms = async () => {
      try {
        const response = await axios.get(
          `https://type-script-server.vercel.app/api/room/?lang=${currentLanguage}`
          // "https://awalive-server-side-hzpa.vercel.app/rooms"
        );
        setAllRooms(response.data.data);
        // setSearchLoading(false);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching room rates:", error);
        // setSearchLoading(false);
      }
      setLoading(false);
    };
    fetchAllRooms();
    // setSearchLoading(false)
  }, [currentLanguage, t]);


  const authInfo = {
    loading,
    setLoading,
    // guests,
    numberOfGuests,
    RoomImage,
    RoomPrice,
    RoomName,
    searchLoader,
    sortByPrice,
    childAges,
    allRooms,
    calender,
    checkIn,
    checkOut,
    category,
    child,
    night,
    setChild,
    setNight,
    setGuests,
    setCheckIn,
    setCalender,
    setCheckOut,
    setAllRooms,
    setChildAges,
    setSortByPrice,
    setCategory,
    setSearchLoader,
    handleBookNow,
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
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
