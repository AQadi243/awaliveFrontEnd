import {  useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode'
// import { AuthContext } from "../../../../../../sharedPages/Context/AuthProvider";
import AdminSingleRoom from "./AdminSingleRoom";
import axios from "axios";
import i18next from "i18next";
import { message } from "antd";
// import { useTranslation } from "react-i18next";

const AdminAllRooms = () => {
  const currentLanguage = i18next.language
  const [AllRooms, setAllRooms] = useState([])
  const [loadingAllRooms, setLoadingAllRooms] = useState(true)

  useEffect(() => {
    const fetchAllRooms = async () => {
      const token = await localStorage.getItem('token');
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


        const response = await axios.get(
          `https://server.awalivhotel.com/api/room/admin/room?lang=${currentLanguage}`,{
          // `https://type-script-server.vercel.app/api/room/admin/room?lang=${currentLanguage}`,{
          // `http://localhost:5000/api/room/admin/room?lang=${currentLanguage}`,{
            headers: {
                'Authorization': `${token}`
            }}
          // `http://localhost:5000/api/room/admin/room?lang=${currentLanguage}`,{
          //   headers: {
          //       'Authorization': `${token}`
          //   }}
          // `http://localhost:5000/api/room/?lang=${currentLanguage}`
          // "https://awalive-server-side-hzpa.vercel.app/rooms"
        );
        let adminRooms = response.data.data;
        
        setAllRooms(adminRooms);
        // setSearchLoading(false);
        setLoadingAllRooms(false);
      } catch (error) {
        console.error("Error fetching room rates:", error);

        // setSearchLoading(false);
      }
      setLoadingAllRooms(false);
    };
    fetchAllRooms();
    // setSearchLoading(false)
  }, [currentLanguage, setLoadingAllRooms]);

  return (

    <>
    <p>asdasd</p>
    <section className="max-w-7xl mx-auto py-16 px-2 md:px-0">
          <div className="flex flex-col md:flex-row gap-5">
            
            <AdminSingleRoom
            // viewMode={viewMode}
              allRooms={AllRooms}
              // notFoundRoom={notFoundRoom}
              // resetSearch={resetSearch}
              // errorMessage={errorMessage}
              // availableRooms={availableRooms}
              // loadingAvailableRooms={loadingAvailableRooms}
              // noRoomsMessage={noRoomsMessage}
              loadingAllRooms={loadingAllRooms}
              setLoadingAllRooms={setLoadingAllRooms}
            />
          </div>
        </section>
    
    </>
    
  )
}

export default AdminAllRooms