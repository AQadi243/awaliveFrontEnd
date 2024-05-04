import { jwtDecode } from 'jwt-decode'
import { Button, Popconfirm, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const RoomDeleteButton = ({roomId}) => {
    const confirm = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            message.error('No token found, authentication failed.');
            return;
        }

        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000; // Current time in seconds

            if (decodedToken.exp < currentTime) {
                message.error('Token has expired.');
                return;
            }

            if (decodedToken.role !== 'admin') {
                message.error('You are not authorized to delete this room.');
                return;
            }

            // If token is valid and user is admin, perform the deletion
            // await axios.delete(`http://localhost:5000/api/room/${roomId}`, {
            await axios.delete(`https://type-script-server.vercel.app/api/room/${roomId}`, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            message.success('Room deleted successfully.');
        } catch (error) {
            console.error('Error during room deletion:', error.response.data.issues[0].message        );
            message.error('Failed to delete the room.');
        }
    };

  return (
    <Popconfirm
      title="Warning"
      description="Are you sure Want to DeActive the This Room "
      onConfirm={confirm}
      onOpenChange={() => console.log('open change')}
      okText="Delete"  // Customize the confirmation button text
      cancelText="Cancel"  // Optionally customize the cancellation button text
    >
      <Button type="primary" className='hover:bg-slate-50 flex justify-center items-center' style={{color:'black'}} ><DeleteOutlined  className="text-white" /></Button>
    </Popconfirm>
  )
}

export default RoomDeleteButton