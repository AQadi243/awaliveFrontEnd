import { useContext, useEffect, useState } from "react";
import PageAnimation from "../../PageAnimation/PageAnimation";
import BannerPage from "../../sharedPages/PageBanner/BannerPage";
import DatesSearch from "./DatesSearch";
// import axios from "axios";
import AllRooms from "./AllRooms";
import { FaChevronDown } from "react-icons/fa6";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";
// import SearchBar from "../Home/SearchBar";

import axios from "axios";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Spin } from "antd";
import { Helmet } from "react-helmet";

const Search = () => {
  const {
    category,
    setSortByPrice,
    setCategory,
    allRooms,
    checkIn,
    checkOut,
    sortByPrice,
    numberOfGuests,
    loadingAllRooms,
    setLoadingAllRooms,
  } = useContext(AuthContext);
  const { t } = useTranslation("search");
  const currentLanguage = i18next.language;
  const [categories, setCategories] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(true);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [loadingAvailableRooms, setLoadingAvailableRooms] = useState(true);

  const formatDateString = (dateString) => {
    return dateString ? new Date(dateString).toLocaleDateString() : null;
  };
  const formetDateCheckIn = formatDateString(checkIn);
  const formetDateCheckOut = formatDateString(checkOut);

  // console.log(sortByPrice);
  useEffect(() => {
    setLoadingAvailableRooms(true);
    const fetchAllRooms = async () => {
      try {
        const response = await axios.get(
          `https://type-script-server.vercel.app/api/room/available/?lang=${currentLanguage}&checkInDate=${formetDateCheckIn}&checkOutDate=${formetDateCheckOut}&sortOrder=${sortByPrice}&maxGuests=${numberOfGuests},&categoryId=${category}`
        );

        setAvailableRooms(response.data.data);
        // setCategories(response.data.data);
        // setSearchLoading(false);
        setLoadingAvailableRooms(false);
      } catch (error) {
        console.error("Error fetching room rates:", error?.response?.data?.error?.statusCode);
        console.error("Error fetching room rates:", error?.response?.data?.issues[0]?.message);
        // setSearchLoading(false);
      }
      setLoadingAvailableRooms(false);
    };
    fetchAllRooms();
    // setSearchLoading(false)
  }, [setLoadingAvailableRooms, formetDateCheckIn, formetDateCheckOut, sortByPrice, numberOfGuests, currentLanguage, category]);

  useEffect(() => {
    const fetchAllRooms = async () => {
      try {
        const response = await axios.get(
          `https://type-script-server.vercel.app/api/category/?lang=${currentLanguage}`
          // "https://awalive-server-side-hzpa.vercel.app/rooms"
        );

        setCategories(response.data.data);
        // setSearchLoading(false);
        setLoadingCategory(false);
      } catch (error) {
        console.error("Error fetching room rates:", error);
        // setSearchLoading(false);
      }
      setLoadingCategory(false);
    };
    fetchAllRooms();
    // setSearchLoading(false)
  }, [currentLanguage, setLoadingCategory]);

  const handleValue = (value) => {
    setSortByPrice(value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Room Search - Awalive Hotel | Find Your Perfect Stay in Taif</title>
        <meta
          name="description"
          content="Explore and book your ideal room at Awalive Hotel. Discover our wide range of accommodations to suit all preferences and budgets. Start your unforgettable stay in Taif now!"
        />
        <meta
          name="keywords"
          content="hotel room search, Awalive Hotel rooms, book hotel in Taif, luxury rooms, accommodation in Taif, hotel booking"
        />
        <meta property="og:title" content="Room Search - Awalive Hotel | Find Your Perfect Stay in Taif" />
        <meta
          property="og:description"
          content="Easily find and book your ideal room at Awalive Hotel in Taif. Comfort, luxury, and style await you."
        />
        <meta property="og:image" content="[Link to an image showcasing the hotel or rooms]" />
        <meta property="og:url" content="awalivehotel.com/room-search" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Room Search - Awalive Hotel | Find Your Perfect Stay in Taif" />
        <meta
          name="twitter:description"
          content="Looking for the perfect room in Taif? Explore the various accommodations at Awalive Hotel and book your stay today."
        />
        <meta name="twitter:image" content="[Link to an image showcasing the hotel or rooms]" />
        {/* <!-- Other head elements like canonical link, viewport, language tag --> */}
      </Helmet>
      <PageAnimation>
        <BannerPage text={t("search")} />

        <section className="bg-[#1a1919]  py-4  " style={{ fontFamily: "Gilda Display, serif" }}>
          {/* <SearchBar
            // setAllRooms={setAllRooms}
            // setNoRoomsMessage={setNoRoomsMessage}
            pageContext="search"
          /> */}
          <div className="max-w-lg mx-auto px-2 md:px-0 grid grid-cols-2 gap-2 py-3   ">
            <div className="w-full ">
              <li className="relative group list-none">
                <div className="flex gap-2 items-center">
                  <p className="text-white">{t("sortByPrice")}</p>
                  <FaChevronDown className="font-thin text-xs text-white" />
                </div>

                {/* Dropdown Content */}
                <ul className="absolute w-36 left-0 hidden pt-2 bg-[#1a1919] drop-shadow-md text-md text-zinc-400 group-hover:block z-10 rounded-sm">
                  <li>
                    <option
                      value={"asc"}
                      className="p-2 block hover:bg-slate-50 transition duration-300 ease-in-out cursor-pointer "
                      onClick={() => handleValue("asc")}
                    >
                      {t("lowPrice")}
                    </option>
                  </li>
                  <li>
                    <option
                      value={"desc"}
                      className="p-2 block hover:bg-slate-50 transition duration-300 ease-in-out  cursor-pointer "
                      onClick={() => handleValue("desc")}
                    >
                      {t("highPrice")}
                    </option>
                  </li>
                </ul>
              </li>
            </div>

            <div className="w-full ">
              <select
                id=""
                className="text-white bg-transparent outline-none w-full"
                onChange={handleCategoryChange}
                value={category} // This is important to make the selected value controlled
              >
                <option className="bg-[#1C1C1D] py-2 border-b hover:bg-[#BE9874]" value="">
                  {t("allCategories")}
                </option>
                {loadingCategory ? (
                  <Spin />
                ) : (
                  categories.map((categoryItem) => (
                    <option
                      key={categoryItem.id} // Replace 'id' with the actual property name that uniquely identifies a category
                      className="bg-[#1C1C1D] py-2 border-b"
                      value={categoryItem.id} // Replace 'name' with the property that holds the category name
                    >
                      {categoryItem.title}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto py-20 px-2 md:px-0">
          <div className="flex flex-col md:flex-row gap-5">
            <DatesSearch />
            <AllRooms
              allRooms={allRooms}
              availableRooms={availableRooms}
              loadingAvailableRooms={loadingAvailableRooms}
              // noRoomsMessage={noRoomsMessage}
              loadingAllRooms={loadingAllRooms}
              setLoadingAllRooms={setLoadingAllRooms}
            />
          </div>
        </section>
      </PageAnimation>
    </>
  );
};

export default Search;
