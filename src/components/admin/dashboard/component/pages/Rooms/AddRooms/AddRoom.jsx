
import CategorySelector from "./CategorySelector";
import ImageField from "./ImageField";
import RoomFeatures from "./RoomFeatures";
import RoomServiceAdd from "./RoomServiceAdd";

const AddRoom = () => {
  // const [isChecked, setIsChecked] = useState(false);
  return (
    <section>
      <>
      <form className="space-y-6  p-4 rounded shadow-lg max-w-3xl mx-auto my-8  border-stroke bg-white  dark:border-strokedark dark:bg-boxdark">
  <h2 className="text-2xl font-semibold text-center mb-4">Room Details</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Title */}
    <div>
      <label htmlFor="titleEn" className="block text-sm font-medium  text-black dark:text-white">Title (EN) <span className="text-meta-1">*</span></label>
      <input type="text" id="titleEn" name="titleEn" className="mt-1 block py-2 px-2 w-full border  border-gray-300 shadow-sm text-black outline-none transition  dark:border-form-strokedark dark:bg-form-input dark:text-white"  />
    </div>
    
    <div>
      <label htmlFor="titleAr" className="block text-sm font-medium text-black dark:text-white">Title (AR) <span className="text-meta-1">*</span></label>
      <input dir="rtl" type="text" id="titleAr" name="titleAr" className="mt-1 block py-2 px-2 w-full  border border-gray-300 shadow-sm text-black outline-none transition    dark:border-form-strokedark dark:bg-form-input dark:text-white" />
    </div>
    
    {/* SubTitle */}
    <div>
      <label htmlFor="subTitleRoomOneEn" className="block text-sm font-medium text-black dark:text-white">SubTitle Room One (EN)<span className="text-meta-1">*</span></label>
      <input type="text" id="subTitleRoomOneEn" name="subTitleRoomOneEn" className="mt-1 block py-2 px-2 w-full  border border-gray-300 shadow-sm text-black outline-none transition  dark:border-form-strokedark dark:bg-form-input dark:text-white" />
    </div>
    
    <div>
      <label htmlFor="subTitleRoomOneAr" className="block text-sm font-medium text-black dark:text-white">SubTitle Room One (AR)<span className="text-meta-1">*</span></label>
      <input dir="rtl" type="text" id="subTitleRoomOneAr" name="subTitleRoomOneAr" className="mt-1 block py-2 px-2 w-full  border border-gray-300 shadow-sm text-black outline-none transition  dark:border-form-strokedark dark:bg-form-input dark:text-white" />
    </div>

    {/* Max Guests */}
    <div>
      <label htmlFor="maxGuests" className="block text-sm font-medium text-black dark:text-white">Max Guests <span className="text-meta-1">*</span></label>
      <input type="number" id="maxGuests" name="maxGuests" className="mt-1 block py-2 px-2 w-full  border border-gray-300 shadow-sm text-black outline-none transition  dark:border-form-strokedark dark:bg-form-input dark:text-white" />
    </div>
    
    {/* Room Quantity */}
    <div>
      <label htmlFor="roomQTY" className="block text-sm font-medium text-black dark:text-white">Room Quantity <span className="text-meta-1">*</span></label>
      <input type="number" id="roomQTY" name="roomQTY" className="mt-1 block py-2 px-2 w-full  border border-gray-300 shadow-sm text-black outline-none transition  dark:border-form-strokedark dark:bg-form-input dark:text-white" />
    </div>
    
    {/* Room Size */}
    <div>
      <label htmlFor="size" className="block text-sm font-medium text-black dark:text-white">Room Size <span className="text-meta-1">*</span></label>
      <input type="number" id="size" name="size" className="mt-1 block py-2 px-2 w-full  border border-gray-300 shadow-sm text-black outline-none transition  dark:border-form-strokedark dark:bg-form-input dark:text-white" />
    </div>
    
    {/* Description */}
    <div className="col-span-1 md:col-span-2">
      <label htmlFor="descriptionEn" className="block text-sm font-medium text-black dark:text-white">Description (EN) <span className="text-meta-1">*</span></label>
      <textarea id="descriptionEn" name="descriptionEn" rows={3} className="mt-1 block w-full border text-black  border-gray-300 rounded-md shadow-sm px-2 py-2"></textarea>
    </div>

    {/* Description */}
    <div className="col-span-1 md:col-span-2">
      <label htmlFor="descriptionEn" className="block text-sm font-medium text-black dark:text-white">Description (AR) <span className="text-meta-1">*</span></label>
      <textarea dir="rtl" id="descriptionEn" name="descriptionEn" rows={3} className="mt-1 block w-full border text-black  border-gray-300 rounded-md shadow-sm px-2 py-2"></textarea>
    </div>
    
    {/* Images */}
    <ImageField />
    
    
    {/* Services - Repeat for each service */}
    <div className="col-span-1 md:col-span-2">
      <label htmlFor="service" className="block text-sm font-medium text-black dark:text-white">Services</label>
      <div className="flex items-center space-x-3">
        <input type="text" id="serviceEn" name="serviceEn" placeholder="Service Name (EN)" className="mt-1 block flex-1  border border-gray-300 rounded-md shadow-sm" />
        <input type="text" id="serviceAr" name="serviceAr" placeholder="Service Name (AR)" className="mt-1 block flex-1  border border-gray-300 rounded-md shadow-sm" />
        <input type="text" id="serviceImage" name="serviceImage" placeholder="Image URL" className="mt-1 block flex-1  border border-gray-300 rounded-md shadow-sm" />
      </div>
    </div>
    
    {/* Price Options */}
    <div className="col-span-1 md:col-span-2">
      <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
      <input type="number" id="price" name="price" className="mt-1 block py-2 px-2 w-full  border border-gray-300 shadow-sm text-black outline-none transition  dark:border-form-strokedark dark:bg-form-input dark:text-white" />
    </div>
    
    {/* Tags */}
    <div className="col-span-1 md:col-span-2">
      <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
      <input type="text" id="tags" name="tags" placeholder="Use comma to separate tags" className="mt-1 block py-2 px-2 w-full  border border-gray-300 shadow-sm text-black outline-none transition  dark:border-form-strokedark dark:bg-form-input dark:text-white" />
    </div>
    
    {/* Price History */}
    <div>
      <label htmlFor="priceHistory" className="block text-sm font-medium text-gray-700">Price History</label>
      <input type="number" id="priceHistory" name="priceHistory" className="mt-1 block py-2 px-2 w-full  border border-gray-300 shadow-sm text-black outline-none transition  dark:border-form-strokedark dark:bg-form-input dark:text-white" />
    </div>
    
    {/* Buttons */}
    <div className="col-span-1 md:col-span-2 text-center">
      <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
    </div>
  </div>
</form>

      </>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">Add Room</h3>
              <h6 className="font-normal text-gray-400 dark:text-gray-500">Please add both english and arabic language</h6>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Room Title in English <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Title"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Room Title in Arabic <span className="text-meta-1">*</span>
                    </label>
                    <input
                      dir="rtl"
                      type="text"
                      placeholder="Enter Title"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5.5 mb-4.5">
                  <CategorySelector />
                </div>
                <div className="flex flex-col gap-5.5 mb-4.5">
                  <RoomFeatures />
                </div>
                <div className="flex flex-col gap-5.5 mb-4.5">
                  <RoomServiceAdd />
                </div>
                {/* <div>
                    
                  <label htmlFor="checkboxLabelOne" className="flex cursor-pointer select-none items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="checkboxLabelOne"
                        className="sr-only"
                        onChange={() => {
                          setIsChecked(!isChecked);
                        }}
                      />
                      <div
                        className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                          isChecked && "border-primary bg-gray dark:bg-transparent"
                        }`}
                      >
                        <span className={`h-2.5 w-2.5 rounded-sm ${isChecked && "bg-primary"}`}></span>
                      </div>
                    </div>
                    Checkbox Text
                  </label>
                </div> */}
                <ImageField />

                {/* <SelectGroupOne /> */}

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">Details <span className="text-meta-1">*</span></label>
                  <textarea
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">Details In arabivc</label>
                  <textarea
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Add Room 
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* <div className="flex flex-col gap-9"> */}
        {/* <!-- Sign In Form --> */}
        {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">Sign In Form</h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2.5 block text-black dark:text-white">Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mt-5 mb-5.5 flex items-center justify-between">
                  <label htmlFor="formCheckbox" className="flex cursor-pointer">
                    <div className="relative pt-0.5">
                      <input type="checkbox" id="formCheckbox" className="taskCheckbox sr-only" />
                      <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark">
                        <span className="text-white opacity-0">
                          <svg
                            className="fill-current"
                            width="10"
                            height="7"
                            viewBox="0 0 10 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                              fill=""
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p>Remember me</p>
                  </label>

                  <Link to="#" className="text-sm text-primary hover:underline">
                    Forget password?
                  </Link>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Sign In
                </button>
              </div>
            </form>
          </div> */}

        {/* <!-- Sign Up Form --> */}
        {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">Sign Up Form</h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-5.5">
                  <label className="mb-2.5 block text-black dark:text-white">Re-type Password</label>
                  <input
                    type="password"
                    placeholder="Re-enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Sign Up
                </button>
              </div>
            </form>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default AddRoom;
