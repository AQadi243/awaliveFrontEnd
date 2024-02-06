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
  const getCancellationDate = (checkInDate) => {
    const checkInDateTime = new Date(checkInDate);
    const cancellationDateTime = new Date(checkInDateTime.getTime() - 24 * 60 * 60 * 1000); // Subtracting 24 hours
    const now = new Date();

    if (cancellationDateTime < now) {
      // If the cancellation date is in the past, return a message or handle as needed
      return t("cancelMessage");
    } else {
      // Otherwise, return the formatted cancellation date
      return cancellationDateTime.toLocaleDateString();
    }
  };

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
              {selectedRoom.bookingStatus === "Booked" ? (
                <button className="bg-slate-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded transition duration-300">
                  Request Cancellation
                </button>
              ) : (
                <button className="bg-slate-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded transition duration-300">
                  Review
                </button>
              )}

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

// <div className="max-w-4xl px-2 mx-auto py-10">
//   {bookedData.length === 0 ? (
//     <div>No data</div>
//   ) : (
//     bookedData.map((booking, index) => (
//       <div key={index} className="grid grid-cols-1 md:grid-cols-4  md:gap-3 mb-4 text-[#2E2E2E]" style={{ fontFamily: "Gilda Display, serif" }}>
//         {booking.roomId.images && booking.roomId.images.length > 0 && (
//           <img
//             className="aspect-video w-full  bg-black col-span-1"
//             src={booking.roomId.images[0]}
//             alt={`Image of ${booking.roomId.title}`}
//           />
//         )}
//         <div className="col-span-3 py-2  ">
//           <h2 className="text-lg font-semibold  capitalize" >
//             {t("room")} : {booking.roomId.title}
//           </h2>
//           <div className="flex flex-row  justify-between">
//             <div>
//               <p className="font-light text-md  capitalize">
//                 <span className="font-semibold ">{t("from")} :</span> {new Date(booking.checkIn).toLocaleDateString()}
//               </p>
//               <p className="font-light text-md py-2  capitalize">
//                <span className="font-semibold"> {t("to")} :</span> {new Date(booking.checkOut).toLocaleDateString()}{" "}
//               </p>
//             </div>
//             <div>
//               <p className="capitalize">
//                 {t("total")} : <span className="font-semibold tracking-widest" >{localizeNumber(booking?.totalWithTax)}</span> {t("SAR")}
//               </p>
//               <p className="py-2 ">
//                 {t("payment")} : {booking.paymentStatus}
//               </p>
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <p className="capitalize font-semibold">{t("cancel")} : </p>
//             <p>
//               {" "}
//                 {getCancellationDate(booking.checkIn)}
//             </p>
//           </div>
//         </div>
//       </div>
//     ))
//   )}
// </div>

{
  /* <div className="container mx-auto mt-10 p-4">
  <h1 className="text-2xl font-semibold text-center mb-8">My Bookings</h1>
  <div className="space-y-8">
    {bookedData.map((booking, index) => (
      <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
       
        {booking.roomId.images && booking.roomId.images.length > 0 && (
              <img
              className="w-full md:w-1/3 object-cover"
                src={booking.roomId.images[0]}
                alt={`Image of ${booking.roomId.title}`}
              />
            )}
        <div className="p-4 md:p-8 flex flex-col justify-between leading-normal">
          <div>
            <h2 className="font-bold text-xl mb-2">{booking.roomName}</h2>
            <p className="text-gray-700 text-base mb-4">
              Check-in: <span className="font-semibold">{booking.checkInDate}</span>
            </p>
            <p className="text-gray-700 text-base mb-4">
              Check-out: <span className="font-semibold">{booking.checkOutDate}</span>
            </p>
            <p className="text-gray-700 text-base">
              Total: <span className="font-semibold text-lg">{booking.totalPrice}</span>
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
          <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        View Details
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} booking={booking} />
            <button className="text-sm bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Modify
            </button>
            <button className="text-sm bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Cancel
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div> */
}
