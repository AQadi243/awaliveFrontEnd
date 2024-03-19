import { useTranslation } from "react-i18next";
import PageAnimation from "../../PageAnimation/PageAnimation";
import BannerPage from "../../sharedPages/PageBanner/BannerPage";
import BookingDate from "./BookingDate";
import BookingForm from "./BookingForm";
import axios from "axios";
import { differenceInCalendarDays } from "date-fns";
import { useEffect, useState } from "react";
import i18next from "i18next";

const BookNow = () => {
  const currentLanguage = i18next.language
  const { t } = useTranslation("booking");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [nights, setNights] = useState(0);
  const [guests, setGuests] = useState(1); // Default to 1 guest
  const [roomDetails, setRoomDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      setLoading(true); // Start loading
      // Retrieve data from localStorage on component mount
      const storedBookingInfo = await localStorage.getItem("bookingInfo");
    if (storedBookingInfo) {
      const {roomId, checkIn: storedCheckIn, checkOut: storedCheckOut, numberOfGuests: storedGuests } = JSON.parse(storedBookingInfo);
      const inDate = new Date(storedCheckIn);
      const outDate = new Date(storedCheckOut);

      setCheckIn(inDate);
      setCheckOut(outDate);
      setGuests(storedGuests || 1);
      setNights(differenceInCalendarDays(outDate, inDate))

        try {
          const response = await axios.get(`https://type-script-server.vercel.app/api/room/${roomId}?lang=${currentLanguage}`);
          setRoomDetails(response.data.data); // Set your state based on response
          console.log(response.data.data, "room resposne ");
        } catch (err) {
          setError(err.message); // Set error message in state
        } finally {
          setLoading(false); // Finish loading regardless of the outcome
        }
        
      }
    };

    fetchRoomDetails();
  }, [currentLanguage]);

   // Calculate total price and VAT
   const perNightPrice = roomDetails ? roomDetails.priceOptions[0].price : 0;
   const totalPriceBeforeVAT = perNightPrice * nights;
   const VAT = totalPriceBeforeVAT * 0.15; // 15% VAT
   const totalPrice = totalPriceBeforeVAT + VAT;




  return (
    <>
      <PageAnimation>
        <BannerPage text={t("booking")} />
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-2">
            <div className="flex flex-col md:flex-row gap-5 py-10 md:py-20">
              <BookingDate totalPrice={totalPrice} checkIn={checkIn} checkOut={checkOut} guests={guests} loading={loading} error={error} roomDetails={roomDetails} nights={nights} />
              <BookingForm />
            </div>
          </div>
        </section>
      </PageAnimation>
    </>
  );
};

export default BookNow;
