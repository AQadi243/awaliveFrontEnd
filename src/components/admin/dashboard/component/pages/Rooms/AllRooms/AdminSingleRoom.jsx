import { Link } from "react-router-dom";
import CoverSlider from "../../../../../../pages/SearchRoooms/CoverSlider";
import { LuUserCircle } from "react-icons/lu";
import { CiViewTable } from "react-icons/ci";
// import { LuClipboardEdit } from "react-icons/lu";
import pool from "/img/swmming-pool.png";
import drinks from "/img/welcome-drink.png";
import smoking from "/img/no-smoking.png";
import bath from "/img/private-bathroom.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import RoomDeleteButton from "./RoomDeleteButton";
import { Spin } from "antd";
import PermanentDeleteRoomButton from "./PermanentDeleteRoomButton";

// eslint-disable-next-line react/prop-types
const AdminSingleRoom = ({ allRooms, loadingAllRooms, setLoadingAllRooms,onUpdate  }) => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation("booking");

  if (loadingAllRooms) {
    return <div className="flex items-center justify-center w-full h-[300px]">
      
      <Spin> </Spin>
      </div>;
  }

  console.log(allRooms,'all rooms');
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {allRooms?.map((room) => (
          <div
            key={room.id}
            className={`col-span-1 border border-gray-200 dark:border-strokedark  flex flex-col gap-3 card ${
              currentLanguage === "ar" ? "body-ar font-normal" : "body-en"
            } `}
            data-price={room.priceOptions[0].price}
            // className={}
          >
            <CoverSlider images={room.images} tags={room.tags}  />
            <div className="px-4 py-2 flex flex-col gap-3">
              <div className="flex justify-between items-center">
              <Link
                to={`/room/${room.id}`}
                className={`text-xl md:text-xl   capitalize ${currentLanguage === "ar" ? "body-ar font-semibold  " : "body-en-title "} `}
              >
                {room.title}
              </Link>
              <div>
                {room.isActive?(
                    <p className="font-bold text-green-400">Active</p>
                ):(
                    <p className="font-bold text-red-400">InActive</p>
                ) }
              </div>
              </div>
              <div className="flex gap-10  ">
                <div className="flex gap-2 items-center justify-center">
                  <LuUserCircle className="text-2xl text-gray-400 " />

                  <p className="text-sm">{room.maxGuests}</p>
                  <p className="uppercase text-sm">{t("guest")}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <p className="text-xl md:text-2xl">
                    {/* <ArrowsAltOutlined />{" "} */}
                    <CiViewTable className="text-gray-400" />
                  </p>{" "}
                  <p className="text-sm">
                    {room.size} {t("ft")}{" "}
                  </p>
                </div>
              </div>

              <p className="text-sm py-3 ">
                {/* {room.description.length > 100 ? `${room.description.slice(0, 100)}...` : room.description} */}
                {room.description}
              </p>
              <div>
                <Link
                  to={`/room/${room.id}`}
                  className="px-4 py-2 md:px-6 md:py-2  border-2  uppercase text-sm tracking-widest font-semibold  "
                >
                  {t("bookNowFor")}{" "}
                  <strong>
                    {room.priceOptions[0].price.toLocaleString()}
                    {/* {currentLanguage === "en"
                        ? room.priceOptions[0].price.toLocaleString()
                        : room.priceOptions[0].price.toLocaleString("ar-EG")} */}
                  </strong>{" "}
                  {room.priceOptions[0].currency}
                </Link>
              </div>
              <hr className="mt-2" />
            </div>
            <div className="px-6 flex justify-between items-center pb-4">
              <div className="flex gap-2 flex-row items-center justify-center ">
                <img className="w-5 h-5" src={pool} alt="" />
                <img className="w-5 h-5" src={drinks} alt="" />
                <img className="w-5 h-5" src={smoking} alt="" />
                <img className="w-5 h-5" src={bath} alt="" />
              </div>
              <div>
                <Link to={`/room/${room.id}`} className="text-xs tracking-widest cursor-pointer">
                  {t("FULL INFO")}
                </Link>
              </div>
            </div>
            <div className="flex gap-2 pb-4 items-center justify-between px-4">
                {/* <button className="bg-yellow-800 w-32 py-2 rounded-sm flex justify-center items-center hover:bg-yellow-900 " title="Edit Room">

            <LuClipboardEdit className="text-white" />
                </button> */}
                {/* <button className="bg-red-500 w-32 py-2 rounded-sm flex justify-center items-center hover:bg-red-400 " title="Delete Rooms">

            <LuClipboardEdit className="text-white" />
                </button> */}
                <PermanentDeleteRoomButton onUpdate={onUpdate }  roomId={room.id} />
              
                <RoomDeleteButton onUpdate={onUpdate } isActive={room.isActive} roomId={room.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminSingleRoom;
