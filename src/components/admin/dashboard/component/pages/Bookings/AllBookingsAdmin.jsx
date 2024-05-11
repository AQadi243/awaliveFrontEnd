import { Table, Tag, Space, Button,   } from 'antd';
import axios from 'axios';
import i18next from 'i18next';
import { useEffect, useState } from 'react';
import BookingInfoAdmin from './BookingInfoAdmin';
import {  LuMoreHorizontal, LuTrash2 } from "react-icons/lu";
import FilterBookingsByDate from './FilterBookingsByDate';


// const { RangePicker } = DatePicker;

// const data = [
//   {
//     key: '1',
//     id: 1865,
//     roomName: 'Deluxe King Double Bed',
//     checkIn: '28/02/2024',
//     checkOut: '05/03/2024',
//     proof: 'Passport',
//     payment: 'Cash',
//     amount: '$800',
//     roomNo: 'Deluxe: 304, 305',
//     guests: '7 Member / 2 Room',
//   },
//   {
//     key: '2',
//     id: 1865,
//     roomName: 'Deluxe King Double Bed',
//     checkIn: '28/02/2024',
//     checkOut: '05/03/2024',
//     proof: 'Passport',
//     payment: 'Cash',
//     amount: '$800',
//     roomNo: 'Deluxe: 304, 305',
//     rooms: '7 Member / 2 Room',
//   },
//   {
//     key: '3',
//     id: 1865,
//     roomName: 'dDeluxe King Double Bed',
//     checkIn: '28/02/2024',
//     checkOut: '05/03/2024',
//     proof: 'Passport',
//     payment: 'Cash',
//     amount: '$800',
//     roomNo: 'Deluxe: 304, 305',
//     rooms: '7 Member / 2 Room',
//   },
//   {
//     key: '4',
//     id: 1865,
//     roomName: 'eDeluxe King Double Bed',
//     checkIn: '28/02/2024',
//     checkOut: '05/03/2024',
//     proof: 'Passport',
//     payment: 'Cash',
//     amount: '$800',
//     roomNo: 'Deluxe: 304, 305',
//     rooms: '7 Member / 2 Room',
//   },
//   {
//     key: '5',
//     id: 1865,
//     roomName: 'fDeluxe King Double Bed',
//     checkIn: '28/02/2024',
//     checkOut: '05/03/2024',
//     proof: 'Passport',
//     payment: 'Cash',
//     amount: '$800',
//     roomNo: 'Deluxe: 304, 305',
//     rooms: '7 Member / 2 Room',
//   },
//   {
//     key: '6',
//     id: 1865,
//     roomName: 'Deluxe King Double Bed',
//     checkIn: '28/02/2024',
//     checkOut: '05/03/2024',
//     proof: 'Passport',
//     payment: 'Cash',
//     amount: '$800',
//     roomNo: 'Deluxe: 304, 305',
//     rooms: '7 Member / 2 Room',
//   },
//   {
//     key: '7',
//     id: 1865,
//     roomName: 'Deluxe King Double Bed',
//     checkIn: '28/02/2024',
//     checkOut: '05/03/2024',
//     proof: 'Passport',
//     payment: 'Cash',
//     amount: '$800',
//     roomNo: 'Deluxe: 304, 305',
//     rooms: '7 Member / 2 Room',
//   },
//   {
//     key: '8',
//     id: 1865,
//     roomName: 'Deluxe King Double Bed',
//     checkIn: '28/02/2024',
//     checkOut: '05/03/2024',
//     proof: 'Passport',
//     payment: 'Cash',
//     amount: '$800',
//     roomNo: 'Deluxe: 304, 305',
//     rooms: '7 Member / 2 Room',
//   },
//   {
//     key: '9',
//     id: 1865,
//     roomName: 'Deluxe King Double Bed',
//     checkIn: '28/02/2024',
//     checkOut: '05/03/2024',
//     proof: 'Passport',
//     payment: 'Cash',
//     amount: '$800',
//     roomNo: 'Deluxe: 304, 305',
//     rooms: '7 Member / 2 Room',
//   },
//   {
//     key: '10',
//     id: 1865,
//     roomName: 'Deluxe King Double Bed',
//     checkIn: '28/02/2024',
//     checkOut: '05/03/2024',
//     proof: 'Passport',
//     payment: 'Cash',
//     amount: '$800',
//     roomNo: 'Deluxe: 304, 305',
//     rooms: '7 Member / 2 Room',
//   },
//   {
//     key: '11',
//     id: 1865,
//     roomName: 'Deluxe King Double Bed',
//     checkIn: '28/02/2024',
//     checkOut: '05/03/2024',
//     proof: 'Passport',
//     payment: 'Cash',
//     amount: '$800',
//     roomNo: 'Deluxe: 304, 305',
//     rooms: '7 Member / 2 Room',
//   },
//   // Add more data here
// ];

// // Extract unique room names to create filters dynamically
// const uniqueRoomNames = [...new Set(data.map(item => item.roomName))];

// // Create filters for the room names
// const roomNameFilters = uniqueRoomNames.map(name => ({
//   text: name,
//   value: name,
// }));

const transformData = (data) => {
  return data.map((item, index) => ({
    key: index + 1,
    // id: item._id,
    roomImage: item.roomId?.images[0] ?? 'N/A',
    roomName: item.roomId?.title ?? "Unknown", // Safeguard in case `roomId` or `title` is missing
    checkIn: item.checkIn,
    checkOut: item.checkOut,
    payment: item.paymentStatus,
    amount: item.roomId?.priceOptions?.[0]?.price ?? "N/A", // Safeguard in case price is not available
    // roomNo: item.roomId?._id ?? "N/A", // Adjust this field according to your needs
    guests: `${item.numberOfGuests} Guests`,
    guestEmail: item.userId ,
    status: item.bookingStatus ,
    firstName: item.guestData.firstName,
    lastName: item.guestData.lastName,
    email: item.guestData.email,
    phone: item.guestData.phone,
    guestNote: item.guestData.message,
    address: item.guestData.address ,
    city: item.guestData.city ,
    arrivalTime: item.guestData.arrivalTime ,
    // guestData.email,
    // guestData.phone,
    // guestData.message,
    // guestData.address,
    // guestData.arrivalTime,
    // guestData.city,
  }));
};

// Extract unique room names to create filters dynamically
const generateRoomNameFilters = (data) => {
  const uniqueRoomNames = [...new Set(data.map((item) => item.roomName))];
  return uniqueRoomNames.map((name) => ({
    text: name,
    value: name,
  }));
};



  

const AllBookingsAdmin = () => {
  const [allBookingData, setAllBookingData] = useState([]);
  // const [dates, setDates] = useState([]);
  const [loading, setLoading]= useState(false)
  const currentLanguage = i18next.language;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
    // const { t } = useTranslation("booking");

    const showModal = (record) => {
      setSelectedData(record);
      setIsModalVisible(true);
    };


    // useEffect(() => {
    //     const fetchRoom = async () => {
    //       try {
    //         const response = await axios.get(`http://localhost:5000/api/booking/hazzadmdap@gmail.com?lang=${currentLanguage}`,{
    //             headers: { Authorization: `${localStorage.getItem("token")}` },
    //           });
    //         // const response = await axios.get(`http://localhost:5000/api/room/${id}?lang=${currentLanguage}`);
    //         console.log(response.data.data,'booking data');
    //         const transformedData = transformData(response.data.data);
    //     setAllBookingData(transformedData);
    //         // setAllBookingData(response.data.data);
    //         setLoading(false);
    //       } catch (error) {
    //         console.log(error);
    //         setLoading(false);

    //       }
    //     };
    
    //     fetchRoom();
    //   }, [ setLoading, setAllBookingData, currentLanguage]);


  //   const handleDateChange = (dates, dateStrings) => {
  //     console.log("Selected Dates:", dateStrings);
  
  //     if (dates && dates.length === 2) {
  //         // Convert Moment dates to JavaScript Date objects
  //         const startDate = dates[0].toDate();
  //         const endDate = dates[1].toDate();
          
  //         // Ensure the end date includes the whole day by setting to 23:59:59
  //         endDate.setHours(23, 59, 59, 999);
  
  //         // Filter based on check-in dates falling within the selected range
  //         const filteredData = data.filter(item => {
  //             const checkInDate = new Date(item.checkIn.split('/').reverse().join('-'));
  //             return checkInDate >= startDate && checkInDate <= endDate;
  //         });
  
  //         console.log("Filtered Data Length:", filteredData.length);
  //         setAllBookingData(filteredData);
  //     } else {
  //         // Reset to original data if no valid date range is selected
  // setAllBookingData(data);
  //     }
  // };
  
  // Function to fetch data
  
  
  const fetchBookings = async () => {
    setLoading(true);  // Start loading before the request
    try {
      // const response = await axios.get(`http://localhost:5000/api/booking?lang=${currentLanguage}`, {
      const response = await axios.get(`https://type-script-server.vercel.app/api/booking?lang=${currentLanguage}`, {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      });
      console.log(response.data.data, 'booking data');
      const transformedData = transformData(response.data.data);
      setAllBookingData(transformedData);
    } catch (error) {
      console.error("Error fetching booking data:", error);
      // Optionally handle the error, e.g., by setting an error message in state
    } finally {
      setLoading(false);  // Stop loading after the data is processed or an error occurred
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [currentLanguage]);


  

  
  const columns = [
    {
      title: 'Room',
      dataIndex: 'roomImage',
      key: 'roomImage',
      // sorter: (a, b) => a.id - b.id,
      render: (roomImage) => {
        // Fallback to a default image if no valid URL is provided
        const defaultImage = 'https://via.placeholder.com/100'; // Placeholder image or your default URL
        const imageURL = roomImage || defaultImage;
        return (
          <img
            src={imageURL}
            alt="Room"
            style={{ width: 50, height: 'auto', borderRadius: 4 }}
            onError={(e) => {
              e.target.src = defaultImage; // Fallback in case of a broken URL
            }}
          />
        );
      },
    },
    {
      title: 'Room Name',
      dataIndex: 'roomName',
      key: 'roomName',
      // sorter: (a, b) => a.roomName.localeCompare(b.roomName),
      // filters: roomNameFilters,
      filters: generateRoomNameFilters(allBookingData),
      onFilter: (value, record) => record.roomName.startsWith(value),
      filterSearch: true,
    },
    {
      title: 'CheckIn',
      dataIndex: 'checkIn',
      key: 'checkIn',
    },
    {
      title: 'CheckOut',
      dataIndex: 'checkOut',
      key: 'checkOut',
    },
    
    {
      title: 'Payment',
      dataIndex: 'payment',
      key: 'payment',
      render: payment => {
        let color = payment.toLowerCase() === 'pending' ? 'volcano' : 'green';
        return <Tag color={color}>{payment.toUpperCase()}</Tag>;
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Booking Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Guests',
      dataIndex: 'guests',
      key: 'guests',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
           {/* <LuFileEdit onClick={() => showModal(record)} className='text-lg cursor-pointer text-yellow-600' /> */}
           <LuMoreHorizontal onClick={() => showModal(record)} className='text-lg cursor-pointer text-yellow-600' title='Full Info' />
           <LuTrash2 className='text-lg cursor-pointer text-red-400' title='Delete' />
        </Space>
      ),
    },
  ];

    return (
      <>
      <div className='py-6'>
      
      <FilterBookingsByDate fetchBookings={fetchBookings} setAllBookingData={setAllBookingData} allBookingData={allBookingData} />
      </div>
      <div>
        {loading ? <p>Loading....</p> : (
          <Table scroll={{ x: "max-content" }} columns={columns} dataSource={allBookingData} pagination={{ pageSize: 5 }} />
        )}
        
      </div>
      <BookingInfoAdmin selectedData={selectedData}  setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} showModal={showModal} />
      </>
    );
  };

export default AllBookingsAdmin