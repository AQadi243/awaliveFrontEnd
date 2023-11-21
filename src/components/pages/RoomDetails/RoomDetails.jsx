import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomBanner from "./RoomBanner";
import RoomDetailsBody from "./RoomDetailsBody";
// import RoomDate from "./RoomDate";
import SimilarRoom from "./SimilarRoom";

const RoomDetails = () => {
  const { id } = useParams();
  const [allRoomData, setAllRoomData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleRoomDetails, setSingleRoomDetails] = useState(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get("/roomData.json");
        setAllRoomData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching room data", error);
      }
    };

    fetchRoomData();
  }, []);

  useEffect(() => {
    try {
      const room = allRoomData.find((room) => room.id === parseInt(id));
      setSingleRoomDetails(room);
    } catch (error) {
      console.error("error from finding single room data", error);
    }
  }, [allRoomData, id]);

  

  return (
    <>
      {loading ? (
        <p>Loading...</p>
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
                  
                
                <SimilarRoom  allRoomData={allRoomData} loading={loading} />
            </div>
          </section>
        </>
      ) : (
        <p>Room not found</p>
      )}
    </>
  );
};

export default RoomDetails;
