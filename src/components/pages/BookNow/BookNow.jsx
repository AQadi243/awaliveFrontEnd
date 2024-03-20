import { useTranslation } from "react-i18next";
import PageAnimation from "../../PageAnimation/PageAnimation";
import BannerPage from "../../sharedPages/PageBanner/BannerPage";
import BookingDate from "./BookingDate";
import BookingForm from "./BookingForm";
import axios from "axios";
import { differenceInCalendarDays, format } from "date-fns";
import { useEffect, useState } from "react";
import i18next from "i18next";

const BookNow = () => {
  const currentLanguage = i18next.language
  const { t } = useTranslation("booking");
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [nights, setNights] = useState(0);
  const [guests, setGuests] = useState(1); // Default to 1 guest
  const [roomDetails, setRoomDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Effect running...');
    const fetchRoomDetails = async () => {
      console.log('Fetching room details...');
      setLoading(true);
      const storedBookingInfo = localStorage.getItem("bookingInfo");
      if (storedBookingInfo) {
        const { roomId, checkIn: storedCheckIn, checkOut: storedCheckOut, numberOfGuests: storedGuests } = JSON.parse(storedBookingInfo);
        const inDate = new Date(storedCheckIn);
        const outDate = new Date(storedCheckOut);
  
        setCheckIn(inDate);
        setCheckOut(outDate);
        setGuests(storedGuests || 1);
        setNights(differenceInCalendarDays(outDate, inDate));
  
        try {
          const response = await axios.get(`https://type-script-server.vercel.app/api/room/${roomId}?lang=${currentLanguage}`);
          setRoomDetails(response.data.data);
          console.log('Room details fetched:', response.data.data);
        } catch (err) {
          setError(err.message);
          console.error('Error fetching room details:', err);
        } finally {
          console.log('Setting loading to false');
          setLoading(false);
        }
      } else {
        console.log('No stored booking info found');
        setLoading(false); // Ensure loading is also set to false if there's no storedBookingInfo
      }
    };
  
    fetchRoomDetails();
  }, [currentLanguage]);
  

   // Calculate total price and VAT
   const perNightPrice = roomDetails.priceOptions?.[0]?.price ?? 0;
  //  const perNightPrice = roomDetails ? roomDetails.priceOptions[0].price : 0;
   const totalPriceBeforeVAT = perNightPrice * nights;
   const VAT = totalPriceBeforeVAT * 0.15; // 15% VAT
   const totalPrice = totalPriceBeforeVAT + VAT;

    console.log( format(checkIn, "EEEE"), "forrmtt");
    console.log(nights, "forrmtt");

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
