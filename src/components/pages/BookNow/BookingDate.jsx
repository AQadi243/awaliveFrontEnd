import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";


const BookingDate = () => {
    const authInfo = useContext(AuthContext);
  const [bookingInformation, setBookingInformation] = useState("");
  const { loading, setLoading, guests, night } = authInfo;

useEffect(() => {
    // Retrieve data from localStorage on component mount
    const storedBookingInfo = localStorage.getItem("bookingInfo");
    if (storedBookingInfo) {
      const parsedBookingInfo = JSON.parse(storedBookingInfo);
      setBookingInformation(parsedBookingInfo);

      setLoading(false);
    }
}, [setBookingInformation, setLoading]);

  // Assuming checkInDate and checkOutDate are date strings
  const checkInDate = bookingInformation.checkIn;
  const checkOutDate = bookingInformation.checkOut;
  const price = bookingInformation.RoomPrice;
  const Night = bookingInformation.night;
  const Total = bookingInformation.totalPrice;

const formatDateString = (dateString) => {
    const dateObject = new Date(dateString);
    const day = dateObject.toLocaleDateString("en-US", { weekday: "short" });
    const date = dateObject.getDate();
    const month = dateObject.toLocaleDateString("en-US", { month: "short" });

    return `${day} ${date} ${month}`;
};

  // const calculatedPrice = parseInt(price ) * parseInt(Night)
  const formattedCheckIn = formatDateString(checkInDate);
  const formattedCheckOut = formatDateString(checkOutDate);



  console.log("after", bookingInformation);

  return loading ? (
    <div>
      <p>Loading</p>
    </div>
) : (
    <div className="md:w-1/3 relative" style={{ fontFamily: "Gilda Display, serif" }}>
          <img className="" src={bookingInformation.RoomImage} alt="" />
          <p className="absolute top-3 right-3 text-white">
            {bookingInformation.RoomName}
          </p>
          <div className="flex flex-col gap-5 items-center justify-center text-center bg-[#1C1C1D] py-5 px-5 md:py-10 md:px-10">
            <p className="text-white text-sm tracking-widest w-full py-2">
              Your Reservation
            </p>
            <div className="grid grid-cols-2 gap-5 w-full">
              <div
                id="start-container"
                className="bg-black py-2 px-2 flex flex-col items-center justify-center cursor-pointer date-picker"
              >
                <label htmlFor="start-date" className="text-sm text-[#BE9874]">
                  Check-In
                </label>
                <p
                  id="start-date"
                  className="bg-transparent outline-none w-28 text-[#BE9874] text-sm md:text-xl"
                >
                  {formattedCheckIn}
                </p>
              </div>
              <div
                id="end-container"
                className="bg-black py-2 px-2 flex flex-col items-center justify-center cursor-pointer date-picker"
              >
                <label htmlFor="end-date" className="text-sm text-[#BE9874]">
                  Check-Out
                </label>
                <p
                  id="end-date"
                  className="bg-transparent outline-none w-28 text-[#BE9874] text-sm md:text-xl"
                >
                  {formattedCheckOut}
                </p>
              </div>
              <div
                id="guest-container"
                className="bg-black py-2 px-2 flex flex-col items-center justify-center cursor-pointer date-picker"
              >
                <label htmlFor="guestNumber" className="text-2xl text-white">
                   
                  {guests}
                </label>
                <p
                  id="guest-number"
                  className="bg-transparent outline-none w-28 text-[#BE9874] text-xs  uppercase"
                >
                  Guest
                </p>
              </div>
              <div
                id="days-container"
                className="bg-black py-2 px-2 flex flex-col items-center justify-center cursor-pointer date-picker"
              >
                <label htmlFor="numberOfNight" className="text-2xl text-white">
                  
                  {night}
                </label>
                <p
                  id="numberOfNight"
                  className="bg-transparent outline-none w-28 text-[#BE9874] text-xs uppercase"
                >
                  Night
                </p>
              </div>
            </div>
            <p
              id="bookingButton"
              className="py-2 uppercase text-xs text-white w-full tracking-widest"
            >
              <span id="total-price" className="text-6xl">
                {Total}
              </span>{" "}
              / Total
            </p>
          </div>
        </div>
)
}

export default BookingDate