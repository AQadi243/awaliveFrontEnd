import { Spin } from "antd";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const BookedRooms = ({ loading, bookedData }) => {
  const currentLanguage = i18next.language
  const { t } = useTranslation("myBooking");

  // Function to calculate cancellation date
  const getCancellationDate = (checkInDate) => {
    const cancellationDateTime = new Date(checkInDate).getTime() - (24 * 60 * 60 * 1000); // Subtracting 24 hours
    return new Date(cancellationDateTime).toLocaleDateString();
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center py-5">
        <Spin />
      </div>
    );
  }

  console.log(bookedData, "akjdshfg");

  return (
    <div className="w-[90%] md:w-[60%] mx-auto py-10"  style={{ fontFamily: "Gilda Display, serif" }}>
      { bookedData.length === 0? <div>No data</div>
      : bookedData.map((booking, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
          {booking.roomId.images && booking.roomId.images.length > 0 && (
            <img
              className="aspect-video w-full h-full bg-black col-span-1"
              src={booking.roomId.images[0]}
              alt={`Image of ${booking.roomId.title}`}
            />
          )}
          <div className="col-span-3">
            <h2 className="text-lg font-semibold text-gray-70 capitalize">
              {t("room")}{" "} :{" "}  {booking.roomId.title}
            </h2>
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-light text-sm text-gray-600 capitalize">
                  {t('from')}{" "} :{" "}  {new Date(booking.checkIn).toLocaleDateString()}
                </p>
                <p className="font-light text-sm text-gray-600 capitalize">
                  {t('to')}{" "} :{" "}  {new Date(booking.checkOut).toLocaleDateString()}{" "}
                </p>
              </div>
              <div>
                <p className="capitalize">{t('total')}{" "} :{" "} {currentLanguage === 'en'? booking?.totalWithTax?.toLocaleString():booking?.totalWithTax?.toLocaleString("ar-EG")}{' '} {t("SAR")}</p>
                <p>{t('payment')} : {booking.paymentStatus.toLocaleString(currentLanguage)}</p>

                </div>
                
            </div>
            <div className="flex gap-2">
                  <p className="capitalize font-semibold">{t("cancel")}{" "} :{" "} </p>
                  <p> {t('cancelBy')} {getCancellationDate(booking.checkIn)}</p>
                </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookedRooms;
