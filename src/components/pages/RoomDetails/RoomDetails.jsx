import axios from "axios";
import { Spin } from 'antd';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomBanner from "./RoomBanner";
import RoomDetailsBody from "./RoomDetailsBody";
// import RoomDate from "./RoomDate";
import SimilarRoom from "./SimilarRoom";
// import PageAnimation from "../../PageAnimation/PageAnimation";

const RoomDetails = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [singleRoomDetails, setSingleRoomDetails] = useState(null);

  const searchById = parseInt(id)
  

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`https://awalive-server-side-hzpa.vercel.app/rooms/${searchById}`);
        setSingleRoomDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching room data:", error);
        setLoading(false);
      }
    };

    fetchRoom();
  }, [searchById]);  

  return (
    <>
    
      {loading ? (
        <div className="h-[20rem] flex  items-center justify-center text-center">
          <div>
          <Spin />
        <p>Loading...</p>
          </div>
        </div>
      ) : singleRoomDetails ? (
        <>
          <RoomBanner singleRoomDetails={singleRoomDetails} />

          <section className="w-[90%] mx-auto">
            <div className="py-8">
              <div>
                <h1
                  className="text-2xl md:text-5xl py-2"
                  style={{ fontFamily: "Gilda Display, serif" }}
                >
                  {singleRoomDetails.roomName}
                </h1>
                <div className="flex gap-1 items-center text-xs">
                  <p>HOTEL ROME</p>
                  <ul className="text-white text-xs">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </ul>
                </div>
              </div>
              
                  {/* slider  */}
                  <RoomDetailsBody singleRoomDetails={singleRoomDetails} />
                  
                
                <SimilarRoom  currentRoomId={singleRoomDetails._id} /> 
            </div>
          </section>
        </>
      ) : (
        <p className="h-screen" >Room not found</p>
      )}
      
    </>
  );
};

export default RoomDetails;
