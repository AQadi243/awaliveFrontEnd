
import bannerImagVD from "../../../assets/video (1080p).mp4";
import DatePicker from "./DatePicker";



const Banner = () => {
  return (
    <>
      <section className="relative">
        <div className="relative">
          <div className="bg-black bg-opacity-75 w-full h-full absolute top-0 left-0"></div>
          <video
            className="md:h-screen w-full object-cover"
            loop={true}
            autoPlay
          >
            <source src={bannerImagVD} type="video/mp4" />
            {/* Add other video sources (e.g., WebM, Ogg) for cross-browser compatibility */}
          </video>
          <div className="flex flex-col gap-3 md:gap-6 items-center justify-center h-full w-full absolute top-0 left-0 text-white " >
            <p className="text-xs md:text-sm tracking-widest heroText">
              Luxury Hotel & Best Resort
            </p>
            <div
              className="text-2xl md:text-6xl font-semibold md:font-extrabold text-white flex flex-col items-center tracking-wider uppercase"
              style={{ fontFamily: "Gilda Display, serif" }}
            >
              <h1 className="mb-2 md:mb-3 ">Enjoy A Luxury</h1>
              <h1 className="heroText">Experience</h1>
            </div>
            <a
              href="#"
              className="text-xs md:text-sm py-0.5 px-4 border md:py-2 md:px-6 md:border-2 tracking-widest heroText"
            >
              Rooms & Suites
            </a>
          </div>
        </div>
        <div className=" absolute w-full bottom-[10%] left-[50%] -translate-x-[50%]  z-30 ">

        <DatePicker />
        </div>
      </section>
    </>
  );
};

export default Banner;
