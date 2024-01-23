import { useContext, useEffect, useState } from "react";
import PageAnimation from "../../PageAnimation/PageAnimation";
import BannerPage from "../../sharedPages/PageBanner/BannerPage";
import DatesSearch from "./DatesSearch";
// import axios from "axios";
import AllRooms from "./AllRooms";
import { FaChevronDown } from "react-icons/fa6";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";
import SearchBar from "../Home/SearchBar";
import CoverSlider from "./CoverSlider";
import axios from "axios";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Search = () => {
  const {t} = useTranslation('search')
  const currentLanguage = i18next.language;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const {  category, setSortByPrice, setCategory, allRooms } = useContext(AuthContext);

  // console.log(sortByPrice);

  useEffect(() => {
    const fetchAllRooms = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/category/?lang=${currentLanguage}`
          // "https://awalive-server-side-hzpa.vercel.app/rooms"
        );
        console.log(response.data, "chategories");
        setCategories(response.data.data);
        // setSearchLoading(false);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching room rates:", error);
        // setSearchLoading(false);
      }
      setLoading(false);
    };
    fetchAllRooms();
    // setSearchLoading(false)
  }, [currentLanguage, setLoading]);

  

  const handleValue = (value) => {
    setSortByPrice(value);
  };


  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <PageAnimation>
      <BannerPage text={t('search')} />
      <CoverSlider />
      <section
        className="bg-[#1a1919]  py-8  "
        style={{ fontFamily: "Gilda Display, serif" }}
      >
        <SearchBar
          // setAllRooms={setAllRooms}
          // setNoRoomsMessage={setNoRoomsMessage}
          pageContext="search"
        />
        <div className="flex gap-5 py-3 justify-center items-center">
          <div>
            <li className="relative group list-none">
              <div className="flex gap-2 items-center">
                <p className="text-white">{t('sortByPrice')}</p>
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
                    {t('lowPrice')}
                  </option>
                </li>
                <li>
                  <option
                    value={"desc"}
                    className="p-2 block hover:bg-slate-50 transition duration-300 ease-in-out  cursor-pointer "
                    onClick={() => handleValue("desc")}
                  >
                    {t('highPrice')}
                  </option>
                  
                </li>
              </ul>
            </li>
          </div>

          <div>
            <select
              id=""
              className="text-white bg-transparent outline-none"
              onChange={handleCategoryChange}
              value={category} // This is important to make the selected value controlled
            >
              <option
                className="bg-[#1C1C1D] py-2 border-b hover:bg-[#BE9874]"
                value=""
              >
                {t('allCategories')}
              </option>
              {categories.map((categoryItem) => (
                <option
                  key={categoryItem.id} // Replace 'id' with the actual property name that uniquely identifies a category
                  className="bg-[#1C1C1D] py-2 border-b"
                  value={categoryItem.id} // Replace 'name' with the property that holds the category name
                >
                  {categoryItem.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
      <section className="w-[90%] mx-auto py-10">
        <div className="flex flex-col md:flex-row gap-5">
          <DatesSearch />

          <AllRooms
            allRooms={allRooms}
            // noRoomsMessage={noRoomsMessage}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </section>
    </PageAnimation>
  );
};

export default Search;
