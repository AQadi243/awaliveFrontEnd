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

import { FaArrowUp } from "react-icons/fa";


const Home = () => {
  const [roomRates, setRoomRates] = useState([]);
  const [loading, setLoading] = useState(true)
  const [showButton, setShowButton] = useState(false)

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

  useEffect(()=>{
    const handleHomeScrollButton = ()=>{
      window.scrollY> 30 ? setShowButton(true) : setShowButton(false)
    }

    window.addEventListener('scroll', handleHomeScrollButton)

    return()=>{
      window.removeEventListener('scroll', handleHomeScrollButton)
    }
  },[])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
    

    {
        showButton &&  <button className="  fixed bg-slate-400 bg-opacity-20 z-40 p-5 rounded-full bottom-10 right-5 md:bottom-10 md:right-10" onClick={scrollToTop}><FaArrowUp /> </button>
    }
    
    </>
  )
}

export default Home 