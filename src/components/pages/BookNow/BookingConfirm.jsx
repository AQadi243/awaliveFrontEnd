import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";
import BookingDate from "./BookingDate";
import { Tabs, Modal, notification, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import PageAnimation from "../../PageAnimation/PageAnimation";
import axios from "axios";
import { useTranslation } from "react-i18next";

const BookingConfirm = () => {
  const { user } = useContext(AuthContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [order, setOrder] = useState("");
  const [loading, setLoading] = useState(true);
  const [bookingInfo, setBookingInfo] = useState({});
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhone, setEditedPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [userToken, setUserToken] = useState("");
  const navigate = useNavigate();
  const { formData } = bookingInfo;
  const { firstName, lastName, email, address, message, phone, arrivalTime, city } = formData || {};
  const { t } = useTranslation("booking");

  useEffect(() => {
    const token = localStorage.getItem("token");
    // Retrieve booking information from localStorage
    const storedBookingInfo = JSON.parse(localStorage.getItem("bookingInfo")) || {};

    // Convert checkIn and checkOut to ISO format if they exist
    if (storedBookingInfo.checkIn) {
      storedBookingInfo.checkIn = new Date(storedBookingInfo.checkIn).toLocaleDateString();
    }
    if (storedBookingInfo.checkOut) {
      storedBookingInfo.checkOut = new Date(storedBookingInfo.checkOut).toLocaleDateString();
    }

    // Update the state with the retrieved booking information
    setBookingInfo(storedBookingInfo);
    setEditedEmail(email);
    setEditedPhone(phone);
    setUserToken(token);

    setLoading(false);
    // Optionally, you can do something with the retrieved information, such as setLoading or other logic
    // setLoading(false);
  }, [email, phone, setUserToken]); // Empty dependency array to run the effect only once on mount

  const handleBookNow = async (paymentMethod) => {
    setLoading(true);

    const formatDateString = (dateString) => {
      return dateString ? new Date(dateString).toLocaleDateString() : null;
    };

    const bookingData = {
      ...bookingInfo,
      checkIn: formatDateString(bookingInfo.checkIn),
      checkOut: formatDateString(bookingInfo.checkOut),
      userEmail: user.email, // Assuming 'user' has an 'email' field
      paymentMethod,
    };

    try {
      const response = await axios.post("https://type-script-server.vercel.app/api/booking", bookingData, {
        headers: {
          Authorization: `${userToken}`,
        },
      });
      if (response.status === 200) {
        // Checking for HTTP status code 200 (OK)
        const result = response.data;
        notification["success"]({
          message: "Booking request sent",
          description: `${result.message} Please wait for confirmation email.`,
          placement: "topRight",
          duration: 3.5,
        });
        setOrder(result.message);
        localStorage.removeItem("bookingInfo");
        setBookingInfo({});
      } else {
        throw new Error("Failed to save booking");
      }
    } catch (error) {
      // Default error message
      let errorMessage = "Please check all info.";

      // Check if the error response has the expected structure
      if (error.response && error.response.data && error.response.data.issues) {
        // Extract the message from the first issue, if available
        const issues = error.response.data.issues;
        if (issues.length > 0 && issues[0].message) {
          errorMessage = issues[0].message;
        }
      }

      notification["error"]({
        message: "Booking request not accepted",
        description: errorMessage,
        placement: "topRight",
        duration: 3.5,
      });

      navigate("/roomSearch");
      localStorage.removeItem("bookingInfo");
    } finally {
      setLoading(false);
      setIsModalVisible(true);
    }
  };

  const handleModalCancel = () => {
    // Close the Ant Design modal
    setIsModalVisible(false);
    navigate("/mybookings");
  };

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailEdit = () => {
    setIsEditingEmail(true);
  };

  const handlePhoneEdit = () => {
    setIsEditingPhone(true);
  };

  const handleEmailChange = (e) => {
    setEditedEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setEditedPhone(e.target.value);
  };

  const saveEmail = () => {
    if (!editedEmail || !validateEmail(editedEmail)) {
      setEmailError("Invalid email format");
      return;
    }
    // Update email in bookingInfo and close edit mode
    const updatedBookingInfo = {
      ...bookingInfo,
      formData: { ...formData, email: editedEmail },
    };
    setBookingInfo(updatedBookingInfo);

    // Update local storage
    localStorage.setItem("bookingInfo", JSON.stringify(updatedBookingInfo));

    notification["success"]({
      message: "Email change saved",
      placement: "topRight",
      duration: 2.5, // duration in seconds
    });
    setIsEditingEmail(false);
    setEmailError("");
  };

  const savePhone = () => {
    // Update phone in bookingInfo and close edit mode
    const updatedBookingInfo = {
      ...bookingInfo,
      formData: { ...formData, phone: editedPhone },
    };
    setBookingInfo(updatedBookingInfo);

    // Update local storage
    localStorage.setItem("bookingInfo", JSON.stringify(updatedBookingInfo));
    notification["success"]({
      message: "Phone number change saved",
      placement: "topRight",
      duration: 2.5, // duration in seconds
    });
    setIsEditingPhone(false);
    // setPhoneError('')
  };

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "2",
      label: t("paymentOnArrival"),
      children: (
        <div style={{ fontFamily: "Gilda Display, serif" }}>
          <p className="py-2">{t("payAtHotelMessage")}</p>
          {loading ? (
            <Spin />
          ) : (
            <button className="bg-[#BE9874] py-2 px-8 text-sm text-white" onClick={() => handleBookNow("Payment on Arrival")}>
              Book Now
            </button>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <PageAnimation>
        <section className="bg-slate-50">
          <div className="container mx-auto px-2">
            <div className="flex flex-col md:flex-row gap-3 md:gap-5 py-10 md:py-20">
              <BookingDate />
              <div className="md:w-2/3" style={{ fontFamily: "Gilda Display, serif" }}>
                <div>
                  <h2 className="text-2xl md:text-4xl pb-3">{t("yourOrderDetails")} :</h2>
                  <p className="text-yellow-300">{t("emailPhoneError")} </p>
                  <div>
                    <form className="flex flex-col gap-3 md:gap-5">
                      <div className="grid md:grid-cols-2 gap-3 md:gap-5  ">
                        <div className="flex items-center">
                          <p className="py-2 px-2 "> {t("firstN")}: </p>
                          <span className=""> {firstName} </span>
                        </div>
                        <div className="flex items-center">
                          <p className="py-2 px-2 "> {t("lastN")}:</p>
                          <span className="">{lastName}</span>
                        </div>

                        <div className="flex items-center">
                          <p className="py-2 px-2 "> {t("emailN")}:</p>
                          {isEditingEmail ? (
                            <>
                              <input type="email" value={editedEmail} onChange={handleEmailChange} />
                              <button onClick={saveEmail} className="bg-[#BE9874] px-2 rounded-sm text-white">
                                Save
                              </button>
                            </>
                          ) : (
                            <>
                              <span className="" onClick={handleEmailEdit}>
                                {editedEmail}
                              </span>
                              <p className=" px-2 rounded-sm bg-black text-white ml-3 text-xs">Edit</p>
                            </>
                          )}
                          {emailError && <p className="error-message">{emailError}</p>}
                        </div>
                        <div className="flex items-center">
                          <p className="py-2 px-2 "> {t("phoneN")}:</p>
                          {isEditingPhone ? (
                            <>
                              <input type="tel" required value={editedPhone} onChange={handlePhoneChange} />
                              <button onClick={savePhone} className="bg-[#BE9874] px-2 rounded-sm text-white">
                                Save
                              </button>
                            </>
                          ) : (
                            <>
                              <span className="" onClick={handlePhoneEdit}>
                                {editedPhone}
                              </span>
                              <p className=" px-2 rounded-sm bg-black text-white ml-3 text-xs">Edit</p>
                            </>
                          )}
                          {/* {phoneError && <p className="error-message">{phoneError}</p>} */}
                        </div>

                        <div className="flex items-center">
                          <p className="py-2 px-2 "> {t("addressN")}:</p>
                          <span className="font-semibold">{address}</span>
                        </div>
                        <div className="flex items-center">
                          <p className="py-2 px-2 "> {t("city")}:</p>
                          <span className="font-semibold">{city}</span>
                        </div>
                        <div className="flex items-center">
                          <p className="py-2 px-2 "> {t("arrival")}:</p>
                          <span className="font-semibold">{arrivalTime}</span>
                        </div>
                        <div className="flex items-center">
                          <p className="py-2 px-2 "> {t("messageN")}:</p>
                          <span className="font-semibold">{message}</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
              </div>
            </div>
          </div>
        </section>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Modal
            title="Booking Information"
            open={isModalVisible}
            onCancel={handleModalCancel}
            footer={[
              <button key="cancel" onClick={handleModalCancel}>
                Close
              </button>,
            ]}
          >
            <p>{order}</p>
            {/* <pre>{JSON.stringify(bookingInfo, null, 2)}</pre> */}
          </Modal>
        )}
      </PageAnimation>
    </>
  );
};

export default BookingConfirm;
