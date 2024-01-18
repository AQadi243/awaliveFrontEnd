import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


// const shuffleArray = (array) => {
//   let currentIndex = array.length,
//     randomIndex;

//   // While there remain elements to shuffle.
//   while (currentIndex !== 0) {
//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// };

const SimilarRoom = ({ currentRoomId }) => {
  // const [loading, setLoading] = useState(true);
  const {allRooms, setLoading,loading} = useContext(AuthContext);
  const [similarRooms, setSimilarRooms] = useState(allRooms);
  const { t } = useTranslation("booking");
  // const currentLanguage = i18next.language;

  useEffect(() => {
    const fetchRoomRates = async () => {
      try {
        
        // Select first 3 rooms, ensuring the current room is not included
        const selectedRooms = allRooms.slice(0, 3);
        setSimilarRooms(selectedRooms);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching room rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomRates();
  }, [currentRoomId,allRooms, setSimilarRooms, setLoading]);

  
console.log(similarRooms,'chcking similer rooms');
  return (
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       {loading ? (
        <p>Loading...</p>
      ) : similarRooms?.map((room) => (
        <div
          key={room.id}
          className="col-span-1 border border-gray-200 flex flex-col gap-3 card"
          data-price="56"
          style={{ fontFamily: "Gilda Display, serif" }}
        >
          <img
            src={room.images[0]}
            alt=""
            className="w-full aspect-video object-fill "
          />
          <div className="px-4 py-2 flex flex-col gap-3">
            <h2 className="text-2xl  text-slate-900  ">{room.title}</h2>
            <div className="flex  gap-2 md:gap-3 items-center  text-sm md:text-md">
              <p className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </p>
              <p>{room.maxGuests} {t('guest')} </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                />
              </svg>
              <p>{room.size}</p>
            </div>
            <p className="text-sm ">
              {room.description.length > 100
                ? `${room.description.slice(0, 100)}...`
                : room.description}
            </p>
            <div>
              <Link
                to={`/room/${room.id}`}
                // data-price={room.roomPrice}
                className="px-4 py-2 md:px-6 md:py-2 border border-[#BE9874] text-[#BE9874] uppercase text-sm tracking-widest font-semibold  "
              >
                {t('bookNowFor')}{" "}
                <span className="">
                  {room.priceOptions[0].price}{" "}{room.priceOptions[0].currency}
                </span>
              
              </Link>
            </div>
            <hr className="mt-2" />
            <div className="grid grid-cols-3 justify-between">
              {room?.features?.map((feature, index) => (
                <div key={index} className="">
                  {/* <img className="w-full" src={service.Icon} alt="" /> */}
                  <p className="text-xs">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))
    }
    </div>
  

)};

export default SimilarRoom;
