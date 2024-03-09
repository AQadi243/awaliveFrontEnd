import React, { useContext, useEffect, useState } from "react";
// import PageAnimation from "../../PageAnimation/PageAnimation";
import Banner from "./Banner";
import BestPosition from "./BestPosition";
import CheckPromotion from "./CheckPromotion";
import HotelStucture from "./HotelStucture";
import MapContact from "./MapContact";
import Relax from "./Relax";
import RoomCards from "./RoomCards";
import RoomPrice from "./RoomPrice";
import StayTune from "./StayTune";
import { Helmet } from "react-helmet";

import { FaArrowUp } from "react-icons/fa";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";
import PageAnimation from "../../PageAnimation/PageAnimation";
import HeroBanner from "./HeroBanner";
import Availability from "./Availability";

const Home = () => {
  const { allRooms, loadingAllRooms, setLoadingAllRooms } = useContext(AuthContext);
  const [roomRates, setRoomRates] = useState([]);
  // const [loading, setLoading] = useState(true)
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setLoadingAllRooms(true);
    if (allRooms && allRooms.length > 0) {
      setRoomRates(allRooms.slice(0, 6)); // Take the first 6 rooms
      setLoadingAllRooms(false);
    }
  }, [allRooms, setLoadingAllRooms]);

  useEffect(() => {
    const handleHomeScrollButton = () => {
      window.scrollY > 30 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleHomeScrollButton);
    return () => {
      window.removeEventListener("scroll", handleHomeScrollButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Awalive Hotel - Luxury Accommodation in Taif</title>
          <meta
            name="description"
            content="Experience luxury and comfort at Awalive Hotel, located in taif. Enjoy top-class amenities, exquisite dining, and exceptional service. Book your stay now!"
          />
          <meta
            name="keywords"
            content="luxury hotel, accommodation, Awalive Hotel, taif hotels, exclusive suites, hotel booking"
          />
          <meta property="og:title" content="Awalive Hotel - Luxury Accommodation in taif" />
          <meta
            property="og:description"
            content="Discover the epitome of luxury at Awalive Hotel with top amenities and bespoke services. Perfect for leisure and business in taif."
          />
          <meta property="og:image" content="[Link to an image showcasing your hotel]" />
          <meta property="og:url" content="awalivehotel.com" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Awalive Hotel - Luxury Accommodation in taif" />
          <meta
            name="twitter:description"
            content="Indulge in unparalleled luxury at Awalive Hotel, offering exquisite rooms and suites in the heart of taif."
          />
          <meta name="twitter:image" content="[Link to an image showcasing your hotel]" />
          {/* Other head elements like canonical link, viewport, language tag */}
        </Helmet>
      </div>

      <PageAnimation>
        {/* <Banner /> */}
        <HeroBanner />
        <div className="container mx-auto flex md:hidden ">
          <Availability />
        </div>
        <Relax />
        <RoomCards roomRates={roomRates} loadingAllRooms={loadingAllRooms} />
        <CheckPromotion />
        <RoomPrice />
        <HotelStucture />
        <BestPosition />
        <StayTune />
        <MapContact />
      </PageAnimation>

      {showButton && (
        <button
          className="  fixed bg-slate-400 bg-opacity-20 z-40 p-5 rounded-full bottom-10 right-5 md:bottom-10 md:right-10"
          onClick={scrollToTop}
        >
          <FaArrowUp />{" "}
        </button>
      )}
    </>
  );
};

export default Home;
