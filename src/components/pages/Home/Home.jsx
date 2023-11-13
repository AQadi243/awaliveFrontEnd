import Banner from "./Banner"
import BestPosition from "./BestPosition"
import CheckPromotion from "./CheckPromotion"
import HotelStucture from "./HotelStucture"
import MapContact from "./MapContact"
import Relax from "./Relax"
import RoomCards from "./RoomCards"
import RoomPrice from "./RoomPrice"
import StayTune from "./StayTune"

const Home = () => {
  return (
    
    <>
    <Banner />
    <Relax />
    <RoomCards />
    <CheckPromotion />
    <RoomPrice />
    <HotelStucture />
    <BestPosition />
    <StayTune />
    <MapContact />
    </>
  )
}

export default Home