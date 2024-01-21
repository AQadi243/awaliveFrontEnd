import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";
import BannerPage from "../../sharedPages/PageBanner/BannerPage";
import { notification } from "antd";
import axios from "axios";
import BookedRooms from "./BookedRooms";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
// import { Modal, Spin, Table, notification  } from 'antd'
// import { Link } from 'react-router-dom'
// import BookingInformation from './BookingInformation/BookingInformation'
// import BookingUserInformation from './BookingInformation/BookingUserInformation'
// import { color } from 'framer-motion'

const MyBookings = () => {
  const currentLanguage = i18next.language
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [userOrders, setUserOrders] = useState([]);
  const { t } = useTranslation("myBooking");

  useEffect(() => {
    if (!user) {
      // If the user is not logged in, show a message and stop the loading
      notification["info"]({
        message: "Please Log In",
        description: "You need to log in to view your bookings.",
        placement: "topRight",
        duration: 3.5,
      });
      setLoading(false);
      return;
    }

    const fetchUserOrders = async () => {
      try {
        const userEmail = user?.email;
        const userToken = localStorage.getItem("token");

        const response = await axios.get(
          `http://localhost:5000/api/booking/${userEmail}?lang=${currentLanguage}`,
          {
            headers: {
              Authorization: `${userToken}`,
              // 'Accept-Language': currentLanguage,
            },
          }
        );
        
        if (response.status === 200) {
          setUserOrders(response.data.data);

          notification["success"]({
            message: response.data.message,
            description: response.data.message,
            placement: "topRight",
            duration: 3.5,
          });
        } else {
          notification["error"]({
            message: "Failed to fetch user orders",
            description: "Failed to fetch user orders",
            placement: "topRight",
            duration: 3.5,
          });
        }
      } catch (error) {
        let errorMessage = "Please Login";

        // Check if it's an Axios error with a response
        if (error.isAxiosError && error.response) {
          // Check if the error response has a data field with issues
          if (error.response.data && error.response.data.issues) {
            const issues = error.response.data.issues;
            if (issues.length > 0 && issues[0].message) {
              errorMessage = issues[0].message;
            }
          } else if (error.response.data && error.response.data.message) {
            // If there are no issues but a message field is present
            errorMessage = error.response.data.message;
          } else {
            // Default message from response statusText
            errorMessage = error.response.statusText || errorMessage;
          }
        } else {
          // For non-Axios errors (like network errors)
          errorMessage = error.message || "An unexpected error occurred.";
        }

        notification["error"]({
          message: "Booking request not accepted",
          description: errorMessage,
          placement: "topRight",
          duration: 3.5,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserOrders();
  }, [user, currentLanguage]);

  //   const {user} = useContext(AuthContext)
  //   const [userToken, setUserToken] = useState("");

  //   const [loading, setLoading] = useState(true);
  //   const [userOrders, setUserOrders] = useState([]);
  //   // const [selectedOrder, setSelectedOrder] = useState(null);
  //   // const [isModalVisible, setIsModalVisible] = useState(false);

  // useEffect(() => {
  //   // Fetch user orders when the component mounts
  //   const token = localStorage.getItem("token");
  //   setUserToken(token)
  //   const fetchUserOrders = async () => {

  //     try {
  //       // Replace 'userEmail' with the actual user's email or get it from your authentication context
  //       const userEmail = user?.email ;
  //       // const response = await fetch(`http://localhost:5000/api/booking/${userEmail}`);
  //       // const response = await fetch(`https://awalive-server-side-hzpa.vercel.app/userOrders/${userEmail}`);
  //       const response = await axios.get(`http://localhost:5000/api/booking/${userEmail}`,
  //         {
  //           headers: {
  //             Authorization: `${userToken}`,
  //           },
  //         }
  //       );
  //       if (response.ok) {
  //         const data = await response.json();
  //         setUserOrders(data.orders);
  //         setLoading(false)
  //       } else {
  //         console.error('Failed to fetch user orders');
  //         setLoading(false)
  //       }
  //     } catch (error) {
  //       let errorMessage = "Please check all info.";

  //       // Check if it's an Axios error with a response
  //       if (error.isAxiosError && error.response) {
  //         // Check if the error response has a data field with issues
  //         if (error.response.data && error.response.data.issues) {
  //           const issues = error.response.data.issues;
  //           if (issues.length > 0 && issues[0].message) {
  //             errorMessage = issues[0].message;
  //           }
  //         } else if (error.response.data && error.response.data.message) {
  //           // If there are no issues but a message field is present
  //           errorMessage = error.response.data.message;
  //         } else {
  //           // Default message from response statusText
  //           errorMessage = error.response.statusText || errorMessage;
  //         }
  //       } else {
  //         // For non-Axios errors (like network errors)
  //         errorMessage = error.message || "An unexpected error occurred.";
  //       }

  //       notification["error"]({
  //         message: "Booking request not accepted",
  //         description: errorMessage,
  //         placement: "topRight",
  //         duration: 3.5,
  //       });
  //     }
  //   };

  //   fetchUserOrders();
  // }, [user?.email,setUserToken, userToken]);

  // console.log(userOrders);
  // const handleRowClick = (record) => {
  //   // Set the state with the data of the clicked row
  //   setSelectedOrder(record);
  //   setIsModalVisible(true);
  // };

  // const columns = [
  //   {
  //     title: 'Room Image',
  //     dataIndex: 'RoomImage',
  //     key: '_id',
  //     render: (text) => <img src={text} alt="Room" style={{ width: '40px', height: '40px' }} />,
  //   },
  //   {
  //     title: 'Room Name',
  //     dataIndex: 'RoomName',
  //     key: '_id',
  //   },
  //   // {
  //   //   title: 'Booking',
  //   //   dataIndex: 'status',
  //   //   key: '_id',

  //   // },
  //   {
  //     title: 'Booking',
  //     dataIndex: 'status',
  //     key: '_id',
  //     render: (text, record) => {
  //       let backgroundColor = '';
  //       switch (text) {
  //         case 'pending':
  //           backgroundColor = 'yellow'; // You can use your preferred color

  //           break;
  //         case 'confirmed':
  //           backgroundColor = 'green';
  //           break;
  //         case 'denied':
  //           backgroundColor = 'red';
  //           break;
  //         default:
  //           break;
  //       }

  //       return <span style={{ backgroundColor,  padding: '0.3em 0.5em', borderRadius: '4px', color: 'black'  }}>{text}</span>;
  //     },
  //   },

  //   {
  //     title: 'Total Price',
  //     dataIndex: 'totalPrice',
  //     key: '_id',
  //   },
  //   {
  //       title: 'Action',
  //       key: '_id',
  //       render: (_, record) => (
  //         <button onClick={() => handleRowClick(record)} className='bg-black text-white px-2 rounded-md' >View Details</button>
  //       ),
  //     },
  // ];
console.log(currentLanguage,"language");
  return (
    <>
      <BannerPage text={t('myBooking')} />

      <BookedRooms loading={loading} bookedData={userOrders} />
      {/* <section className=' md:w-[80%] mx-auto'>
    {loading ?  <Spin />  : (
        <div className='py-10 '>
        <h1 className='text-3xl'>Hello, {user?.name}</h1>
        <h1 className='py-5 text-xl'>Your Bookings</h1>


        {userOrders.length > 0 ? (
          <Table columns={columns} dataSource={userOrders} rowKey={record => record._id} />

        ) : (
            <>
          <p className='py-2 font-semibold' >Your cart is empty.</p>
          <p>

          <Link to={'/roomSearch'} className='px-4 py-2 bg-[#BE9874] text-white '>Return To Rooms </Link >
          </p>
            </>
        )}
      </div>
    ) }
    
    {loading ?    <Spin />     : (
        <Modal
        title="Awalive International Hotel "
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <button key="cancel" onClick={() => setIsModalVisible(false)}>
            Close
          </button>,
        ]}
      >
        {
          selectedOrder ? (
            <div className="flex flex-col md:flex-row gap-3 md:gap-5 py-10 ">

            <BookingInformation selectedOrder={selectedOrder} />
            <BookingUserInformation selectedOrder={selectedOrder} />
            </div>
          ): (
            <div> please refresh </div>
          )
        }
        
          </Modal>
    )}

    </section> */}
    </>
  );
};

export default MyBookings;
