import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";
import { CheckOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const BookingDate = () => {
  const authInfo = useContext(AuthContext);
  const [bookingInformation, setBookingInformation] = useState("");
  const { loading, setLoading } = authInfo;
  const { t } = useTranslation('booking');

  useEffect(() => {
    // Retrieve data from localStorage on component mount
    const storedBookingInfo = localStorage.getItem("bookingInfo");
    if (storedBookingInfo) {
      const parsedBookingInfo = JSON.parse(storedBookingInfo);
      setBookingInformation(parsedBookingInfo);

      setLoading(false);
    }
  }, [setLoading]);

  return loading ? (
    <div>
      <p>Loading</p>
    </div>
  ) : (
    <div
      className="md:w-1/3 relative text-sm"
      style={{ fontFamily: "Gilda Display, serif" }}
    >
      <img className="" src={bookingInformation.RoomImage} alt="" />
      <p className="absolute top-3 right-3 text-white">
        {bookingInformation.RoomName}
      </p>

      <div className="p-3 px-3 bg-white shadow">
        <div className="flex gap-2 py-2">
          <p className="font-semibold">{t('property')}</p>
          <p>{bookingInformation.RoomName}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-semibold">{t(`from`)}:</p>
          <p>{bookingInformation.checkIn}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-semibold">{t('to')}:</p>
          <p>{bookingInformation.checkOut}</p>
        </div>
        <div className="">
          {/* <p className="font-semibold">Night Stay:</p> */}
          <p>{bookingInformation.night}-{t('nightStay')}</p>
        </div>
        <h2 className="">{t('priceSummary')}</h2>
      </div>
      <div className="my-3 p-3 px-3 bg-white shadow flex gap-2 text-sm text-green-600">
        <p>
          <CheckOutlined />{" "}
        </p>
        <p>{t('goodTasteMessage')}</p>
      </div>
      <div className=" p-3  flex flex-col gap-2 px-3 bg-white shadow  text-sm">
        <p className="text-xl">{t('priceSummary')}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm">
              1 {t('room')} X {bookingInformation.night}-{t('nights')}
            </p>
            <p className="text-xs font-semibold ">
              {bookingInformation.RoomPrice} {t('averagePerNight')}{" "}
            </p>
          </div>
          <div>
            <p>{bookingInformation.totalPrice}{" "}-{" "} {t('SAR')} </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p>{t('taxes')}</p>
            <p className="text-xs ">{t('governmentTaxes')} </p>
          </div>
          <p>{bookingInformation.tax}-{t('SAR')} </p>
        </div>

        <div className="flex items-center justify-between font-semibold  border-t-2 py-4">
          <div>
            <p className="text-md">{t('totalCostPerRoom')} </p>
            {/* <p className="text-xs ">*Changes in taxes or fees will affect the total price. </p> */}
          </div>
          <p>{bookingInformation.totalWithTax}-{t('SAR')} </p>
        </div>
        {/* <p>You have good taste! Book now before someone else grabs it!</p> */}
      </div>
    </div>
  );
};

export default BookingDate;
