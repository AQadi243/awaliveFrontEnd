/* eslint-disable react/prop-types */
import { Modal, Spin } from "antd";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
// import Modal from "./ModalDetails";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import dayjs from "dayjs";
import NewBookedRoom from "./NewBookedRoom";
import BookedHistory from "./BookedHistory";
// import ModalDetails from "./ModalDetails";

const BookedRooms = ({ loading, bookedData }) => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation("booking");
  const [open, setOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState();

  const newBookings = bookedData.filter((booking) => booking.bookingStatus === "Booked");
  const completedBookings = bookedData.filter((booking) => booking.bookingStatus === "completed");

  const showModal = (room) => {
    setSelectedRoom(room);
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  // const showModal = (selectedRoom) => {
  //   // Set the selectedRoom in your component state or handle it as needed
  //   // For example, if using state:

  //   setIsModalOpen(true);
  // };

  // Function to calculate cancellation date
  // const getCancellationDate = (checkInDate) => {
  //   const checkInDateTime = new Date(checkInDate);
  //   const cancellationDateTime = new Date(checkInDateTime.getTime() - 24 * 60 * 60 * 1000); // Subtracting 24 hours
  //   const now = new Date();

  //   if (cancellationDateTime < now) {
  //     // If the cancellation date is in the past, return a message or handle as needed
  //     return t("cancelMessage");
  //   } else {
  //     // Otherwise, return the formatted cancellation date
  //     return cancellationDateTime.toLocaleDateString();
  //   }
  // };

  const localizeNumber = (number) => {
    return number.toLocaleString(currentLanguage === "ar" ? "ar-EG" : "en-US");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-5">
        <Spin />
      </div>
    );
  }

  return (
    <>
      <NewBookedRoom newBookings={newBookings} showModal={showModal} localizeNumber={localizeNumber} />

      <BookedHistory completedBookings={completedBookings} showModal={showModal} localizeNumber={localizeNumber} />
      <Modal
        width={800}
        open={open}
        title={t("Booking Details")}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn }) => (
          <>
            <div className=" flex justify-evenly">
              <button className="bg-[#151516] hover:bg-[#1d1d1f] text-white font-bold py-1 px-3 rounded transition duration-300">
                Print Details
              </button>
              

              {/* <CancelBtn  /> */}
              <OkBtn />
            </div>
          </>
        )}
      >
        {/* Your booking details markup */}
        {selectedRoom && (
          <div className="container mx-auto mt-5 p-4">
            <div className="md:flex">
              <div className="md:w-1/2">
                {selectedRoom.roomId.images && selectedRoom.roomId.images.length > 0 && (
                  <LazyLoadImage
                    className=" w-full h-64 object-cover    relative"
                    src={selectedRoom.roomId.images[0]}
                    alt={`awalive $room.roomId.images[0]}`}
                    effect="blur"
                    placeholderSrc={""}
                  />
                )}
              </div>
              <div className="md:w-1/2 px-4 md:px-8">
                <h2 className="text-xl font-bold mb-3">{selectedRoom?.roomId.title}</h2>
                <p className="text-gray-600 mb-2">
                  {t("Confirmation Status")}: <span className="font-semibold"> {selectedRoom.bookingStatus}</span>
                </p>
                <p className="text-gray-600 mb-2">
                  {t('from')}: <span className="font-semibold"> {dayjs(selectedRoom.checkIn).format("MMM D, YYYY")}</span>
                </p>
                <p className="text-gray-600 mb-2">
                  {t('to')}: <span className="font-semibold">{dayjs(selectedRoom.checkOut).format("MMM D, YYYY")}</span>
                </p>
                <p className="text-gray-600 mb-2">
                  {t('guest')}: <span className="font-semibold">{selectedRoom.numberOfGuests}</span>
                </p>
                <p className="text-gray-600 mb-2">
                  {t('night')}: <span className=" font-semibold">{selectedRoom.night}</span>
                </p>
                <p className="text-gray-600 ">
                  {t('total')}: <span className="text-lg font-semibold">{selectedRoom.totalWithTax} {t('SAR')}</span>
                </p>
                <p className="text-[10px] text-gray-400 italic mb-4"> {t('Including 15% vat')} </p>
                <div className="border-t-[1px] border-gray-200 pt-4">
                  <h3 className="text-xl font-semibold mb-2">{t("Amenities")}</h3>
                  <ul className="list-disc pl-5">
                    <li className="text-gray-600 mb-1">{selectedRoom.roomId?.subTitle?.roomOne}</li>
                    <li className="text-gray-600 mb-1">
                      {selectedRoom?.roomId?.subTitle?.roomTwo && selectedRoom.roomId.subTitle.roomTwo}
                    </li>
                    {/* Map over your amenities and display them here */}
                    {/* {booking.amenities.map((amenity, index) => (
              <li key={index} className="text-gray-600 mb-1">{amenity}</li>
            ))} */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 md:p-8 border-t-[1px] border-gray-200">
              <h3 className="text-xl font-semibold mb-3">{t("Special Instructions")}</h3>
              <p className="text-gray-600">
                {selectedRoom.formData.message ? selectedRoom.formData.message : "No message Special Instructions"}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default BookedRooms;

