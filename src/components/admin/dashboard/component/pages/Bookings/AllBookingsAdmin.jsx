import { Table, Tag, Space, Modal, message } from "antd";
import { useState } from "react";
import { LuMoreHorizontal, LuTrash2 } from "react-icons/lu";
import BookingInfoAdmin from "./BookingInfoAdmin";
import FilterBookingsByDate from "./FilterBookingsByDate";
import axios from "axios";

// Extract unique room names to create filters dynamically
const generateRoomNameFilters = (data) => {
  const uniqueRoomNames = [...new Set(data.map((item) => item.roomName))];
  return uniqueRoomNames.map((name) => ({
    text: name,
    value: name,
  }));
};

// Extract unique room names to create filters dynamically
const generateBookingStatusFilters = (data) => {
  const uniqueBookingStatus = [...new Set(data.map((item) => item.status))];
  return uniqueBookingStatus.map((status) => ({
    text: status,
    value: status,
  }));
};

// eslint-disable-next-line react/prop-types
const AllBookingsAdmin = ({ allBookingData, loading, fetchBookings, setAllBookingData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  // const { t } = useTranslation("booking");

  const showModal = (record) => {
    setSelectedData(record);
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token'); 
    
    try {
      await axios.delete(`https://server.awalivhotel.com/api/booking/${id}`,{
        headers:{
          Authorization: `${token}`
        }
      });
      message.success("Booking deleted successfully");
      fetchBookings(); // Refresh bookings data
    } catch (error) {
      message.error("Failed to delete booking");
    }
  };
  // console.log(allBookingData,'asdasd');

  const columns = [
    {
      title: "Room",
      dataIndex: "roomImage",
      key: "roomImage",
      render: (roomImage) => {
        const defaultImage = "https://via.placeholder.com/100"; // Placeholder image or your default URL
        const imageURL = roomImage || defaultImage;
        return (
          <img
            src={imageURL}
            alt="Room"
            style={{ width: 50, height: "auto", borderRadius: 4 }}
            onError={(e) => {
              e.target.src = defaultImage; // Fallback in case of a broken URL
            }}
          />
        );
      },
    },
    {
      title: "Room Name",
      dataIndex: "roomName",
      key: "roomName",
      filters: generateRoomNameFilters(allBookingData),
      onFilter: (value, record) => record.roomName.startsWith(value),
      filterSearch: true,
    },
    {
      title: "CheckIn",
      dataIndex: "checkIn",
      key: "checkIn",
    },
    {
      title: "CheckOut",
      dataIndex: "checkOut",
      key: "checkOut",
    },
    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
      render: (payment) => {
        let color = payment.toLowerCase() === "pending" ? "volcano" : "green";
        return <Tag color={color}>{payment.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Booking Status",
      dataIndex: "status",
      key: "status",
      filters: generateBookingStatusFilters(allBookingData),
      onFilter: (value, record) => record.status.startsWith(value),
      filterSearch: true,
      render: (status) => {
        let Status = status.toLowerCase();
        let color;

        if (Status === "booked") {
          color = "green";
        } else if (Status === "cancelled") {
          color = "yellow";
        } else if (Status === "completed") {
          color = "volcano";
        } else {
          color = "default"; // This is a fallback color, if the statuses are not matched
        }

        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Guests",
      dataIndex: "guests",
      key: "guests",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="small">
          <LuMoreHorizontal onClick={() => showModal(record)} className="text-lg cursor-pointer text-yellow-600" title="Full Info" />
          <LuTrash2 onClick={() => {
            Modal.confirm({
              title: "Are you sure you want to delete this booking?",
              onOk: () => handleDelete(record.id),
            });
          }} className="text-lg cursor-pointer text-red-400" title="Delete" />
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="py-6">
        <FilterBookingsByDate fetchBookings={fetchBookings} setAllBookingData={setAllBookingData} allBookingData={allBookingData} />
      </div>
      <div>
        {loading ? (
          <div className="min-h-[400px] w-full flex justify-center items-center ">
            <p>Loading....</p>
          </div>
        ) : (
          <Table scroll={{ x: "max-content" }} columns={columns} dataSource={allBookingData} pagination={{ pageSize: 5 }} size="small" />
        )}
      </div>
      <BookingInfoAdmin
        selectedData={selectedData}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        showModal={showModal}
      />
    </>
  );
};

export default AllBookingsAdmin;
