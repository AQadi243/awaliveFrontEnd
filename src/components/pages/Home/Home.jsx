import { useEffect, useState } from "react"
import PageAnimation from "../../PageAnimation/PageAnimation"
import Banner from "./Banner"
import BestPosition from "./BestPosition"
import CheckPromotion from "./CheckPromotion"
import HotelStucture from "./HotelStucture"
import MapContact from "./MapContact"
import Relax from "./Relax"
import RoomCards from "./RoomCards"
import RoomPrice from "./RoomPrice"
import StayTune from "./StayTune"
import axios from "axios"

const Home = () => {
  const [roomRates, setRoomRates] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
   
    const fetchRoomRates = async () => {
      try {
        const response = await axios.get('https://awalive-server-side-hzpa.vercel.app/rooms'); 
        setRoomRates(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching room rates:', error);
      }
    };
    
    fetchRoomRates();
    setLoading(false);
  }, []);

  return (
    
    <>
    <PageAnimation>

    <Banner />
    <Relax />
    <RoomCards roomRates={roomRates} loading={loading} />
    <CheckPromotion />
    <RoomPrice />
    <HotelStucture />
    <BestPosition />
    <StayTune />
    <MapContact />
    </PageAnimation>
    </>
  )
}

export default Home 