import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { LuChevronDown, LuLayoutGrid } from "react-icons/lu";

const CategorySelector = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  const fetchData = async () => {
    // Using axios to make the API call
    const { data } = await axios.get(`http://localhost:5000/api/category?lang=en`);
    return data;
  };

  const { isFetching, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchData,
  });


  console.log(selectedOption, "category");
  //   console.log(isOptionSelected, 'category slected');

  return (
    <div>
      <label className="mb-3 block text-black dark:text-white">Select Category <span className="text-meta-1">*</span></label>

      <div className="relative  bg-white dark:bg-form-input">
        <span className="absolute top-1/2 left-4 z-20 -translate-y-1/2">
          <LuLayoutGrid />
        </span>

        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            changeTextColor();
          }}
          className={`relative z-10 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
            isOptionSelected ? "text-black dark:text-white" : ""
          }`}
        >
          {isFetching ? (
            <option>Loading...</option>
          ) : error ? (
            <option className="text-red-400">An error has occurred: {error.message}</option>
          ) : (
            <>
              <option value="" disabled>
                Select Category
              </option>
              {data?.data?.map((category) => (
                <option key={category.id} value={category.id} className="text-body dark:text-bodydark hover:bg-gray-100">
                  {category.title}
                </option>
              ))}
            </>
          )}
        </select>

        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
          <LuChevronDown  />
        </span>
      </div>
    </div>
  );
};

export default CategorySelector;
