import  { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../sharedPages/Context/AuthProvider'
import BannerPage from '../../sharedPages/PageBanner/BannerPage'
import { Modal, Spin, Table  } from 'antd'
import { Link } from 'react-router-dom'

const MyBookings = () => {
    const {user} = useContext(AuthContext)
    
    const [loading, setLoading] = useState(false);
    const [userOrders, setUserOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);


  useEffect(() => {
    // Fetch user orders when the component mounts
    const fetchUserOrders = async () => {
        setLoading(true)
      try {
        // Replace 'userEmail' with the actual user's email or get it from your authentication context
        const userEmail = user?.email ;
        const response = await fetch(`https://awalive-server-side-hzpa.vercel.app/userOrders/${userEmail}`);
        if (response.ok) {
          const data = await response.json();
          setUserOrders(data.orders);
          setLoading(false)
        } else {
          console.error('Failed to fetch user orders');
          setLoading(false)
        }
      } catch (error) {
        console.error('Error fetching user orders:', error);
        setLoading(false)
      }
    };

    fetchUserOrders();
  }, [user]);

  const handleRowClick = (record) => {
    // Set the state with the data of the clicked row
    setSelectedOrder(record);
    setIsModalVisible(true);
  };

  const columns = [
    {
      title: 'Room Image',
      dataIndex: 'RoomImage',
      key: 'RoomImage',
      render: (text) => <img src={text} alt="Room" style={{ width: '40px', height: '40px' }} />,
    },
    {
      title: 'Room Name',
      dataIndex: 'RoomName',
      key: 'RoomName',
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
    },
    
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <button onClick={() => handleRowClick(record)}>View Details</button>
        ),
      },
  ];


  return (
    <>
    <BannerPage text={'Cart'} />
    <section className=' md:w-[80%] mx-auto'>
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
        title="Booking Information"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <button key="cancel" onClick={() => setIsModalVisible(false)}>
            Close
          </button>,
        ]}
      >
        {selectedOrder ? (
          <div>
            <img className='w-full h-[8rem] object-cover aspect-video' src={selectedOrder?.RoomImage} alt={selectedOrder.RoomImage} />
            <p>Room Name: {selectedOrder?.RoomName}</p>
            <p>Payment Method: {selectedOrder?.paymentMethod}</p>
            <p>Payment Method: {selectedOrder?.totalPrice}</p>
            <p>Payment Method: {selectedOrder?.checkIn}</p>
            <p>Payment Method: {selectedOrder?.checkOut}</p>
            {/* ... display other fields from the selected order */}
          </div>
        ) : (
          <p>No details available.</p>
        )}
          </Modal>
    )}

    </section>
    </>
  )
}

export default MyBookings