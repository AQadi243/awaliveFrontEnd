import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";
import { CheckOutlined } from '@ant-design/icons';


const BookingDate = () => {
    const authInfo = useContext(AuthContext);
  const [bookingInformation, setBookingInformation] = useState("");
  const { loading, setLoading, } = authInfo;
  console.log(bookingInformation,'checkingh room id ');

useEffect(() => {
    // Retrieve data from localStorage on component mount
    const storedBookingInfo = localStorage.getItem("bookingInfo");
    if (storedBookingInfo) {
      const parsedBookingInfo = JSON.parse(storedBookingInfo);
      setBookingInformation(parsedBookingInfo);

      setLoading(false);
    }
}, [setLoading]);


// tex calculation 
console.log("after", bookingInformation);
const calculatedTexes = bookingInformation && bookingInformation.totalPrice 
        ? parseInt(bookingInformation.totalPrice) * 0.15 // Assuming 15% tax
        : 0;

        // after tex total room price 
  const totalRoomCost = bookingInformation.totalPrice + calculatedTexes
  console.log(totalRoomCost);
  console.log(calculatedTexes);

  return loading ? (
    <div>
      <p>Loading</p>
    </div>
) : (
    <div className="md:w-1/3 relative text-sm" style={{ fontFamily: "Gilda Display, serif" }}>
          <img className="" src={bookingInformation.RoomImage} alt="" />
          <p className="absolute top-3 right-3 text-white">
            {bookingInformation.RoomName}
          </p>
          
          <div className="p-3 px-3 bg-white shadow">
            <div className="flex gap-2 py-2">
              <p className="font-semibold">1 Property:</p>
              <p>{bookingInformation.RoomName}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Check In:</p>
              <p>{bookingInformation.checkIn}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold">Check out:</p>
              <p>{bookingInformation.checkOut}</p>
            </div>
            <div className="">
              {/* <p className="font-semibold">Night Stay:</p> */}
              <p>{bookingInformation.night}-night stay</p>
            </div>
            <h2 className="">Price summery</h2>
          </div>
          <div className="my-3 p-3 px-3 bg-white shadow flex gap-2 text-sm text-green-600">
              <p><CheckOutlined /> </p>
              <p>You have good taste! Book now before someone else grabs it!</p>
          </div>
          <div className=" p-3  flex flex-col gap-2 px-3 bg-white shadow  text-sm">
              <p className="text-xl">Price Summary </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">1 Room X {bookingInformation.night}-nights </p>
                  <p className="text-xs ">{bookingInformation.RoomPrice}-SAR average per night </p>
                </div>
                <div>
                <p>{bookingInformation.totalPrice}-SAR </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p>Texes</p>
                  <p className="text-xs ">15% gov. texes </p>
                </div>
                  <p>{calculatedTexes}-SAR </p>
              </div>
              
              <div className="flex items-center justify-between font-semibold  border-t-2 py-4">
                <div>
                  <p className="text-md">Total Cost Per Room* </p>
                  {/* <p className="text-xs ">*Changes in taxes or fees will affect the total price. </p> */}
                </div>
                  <p>{totalRoomCost}-SAR </p>
              </div>
              {/* <p>You have good taste! Book now before someone else grabs it!</p> */}
          </div>
        </div>
)
}

export default BookingDate