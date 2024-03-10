import { useEffect, useRef } from "react";
import heroSlide from "../../../assets/5.jpg";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const RoomPrice = () => {
  // useEffect(() => {
  //   AOS.init({
  //     // Global settings:
  //     once: true, // whether animation should happen only once - while scrolling down
  //     mirror: false, // whether elements should animate out while scrolling past them
  //   });
  // }, [])
    // Create a ref for your card element
    const zoomCardRef = useRef(null);

    useEffect(() => {
      const isMdScreen = () => window.innerWidth >= 768;
      // Define the callback function for the Intersection Observer
      const observerCallback = (entries) => {
        entries.forEach(entry => {
          // Apply the zoom effect only if on a screen larger than 'md'
          if (entry.isIntersecting && isMdScreen()) {
            entry.target.style.transform = 'scale(1.2)';
          } else {
            entry.target.style.transform = 'scale(1)';
          }
        });
      };
  
      // Create the Intersection Observer instance
      const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });
  
      // Start observing the element if it exists
      if (zoomCardRef.current) {
        observer.observe(zoomCardRef.current);
      }
  
      // Clean up the observer on component unmount
      return () => {
        if (zoomCardRef.current) {
          observer.unobserve(zoomCardRef.current);
        }
      };
    }, []);
  return (
    <section
      className="text-[#2E2E2E] relative "
      style={{
        backgroundImage: `url(${heroSlide})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 "></div>
      <div className="container mx-auto py-20 px-4  ">
        <div data-aos="fade-up" className="text-center pb-6 text-white">
          <p className="text-xs  tracking-[0.2rem] uppercase ">OUR ROOM PRICES</p>
          <h2 className="text-4xl py-4 md:text-6xl md:py-3" style={{ fontFamily: "Gilda Display, serif" }}>
            The Best Prices
          </h2>
        </div>
        {/* pricing cards */}
        <div className=" max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-6 md:py-10">
          <div data-aos="zoom-in-up" className="grid-cols-1 bg-white text-center items-center py-10 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl" style={{ fontFamily: "Gilda Display, serif" }}>
              Deluxe Single Room
            </h2>
            <p className="py-3 md:py-4 text-xl md:text-2xl">
              ${" "}
              <span className="text-3xl md:text-5xl" style={{ fontFamily: "Gilda Display, serif" }}>
                55
              </span>{" "}
              / night
            </p>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li>Elegant decor with modern amenities</li>
              <li>Stunning city views</li>
              <li>Complimentary high-speed Wi-Fi</li>
              <li>24-hour room service</li>
            </ul>
            <div className="py-10">
              <a href="#" className="uppercase py-3 px-4 bg-[#BE9874] hover:bg-[#2E2E2E] text-white text-sm md:text-md transition duration-300">
                Discover More
              </a>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="grid-cols-1 bg-[#BE9874] text-white text-center py-10 cardScale priceBest items-center flex flex-col justify-center"
            style={{
              transition: 'transform 0.9s ease',
              transform: 'scale(1)',
            }}
            ref={zoomCardRef} 
          >
            <h2 className="text-xl md:text-2xl " style={{ fontFamily: "Gilda Display, serif" }}>
              Single Room
            </h2>
            <p className="py-3 text-xl md:text-2xl">
              ${" "}
              <span className="text-3xl md:text-5xl" style={{ fontFamily: "Gilda Display, serif" }}>
                45
              </span>{" "}
              / night
            </p>
            <ul className="flex flex-col gap-2 text-sm ">
              <li>Proin lacinia vehicula amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Morbi lacinia sagittis acum</li>
              <li>consectetur adipiscing elit</li>
            </ul>
            <div className="py-10">
              <a href="#" className="uppercase py-3 px-4  hover:bg-[#BE9874] bg-[#2E2E2E] text-white text-sm md:text-md transition duration-300">
                more info
              </a>
            </div>
          </div>
          <div data-aos="fade-up" className="grid-cols-1 bg-white text-center py-10">
            <h2 className="text-2xl md:text-2xl " style={{ fontFamily: "Gilda Display, serif" }}>
              Single Room
            </h2>
            <p className="py-3 text-xl md:text-2xl">
              ${" "}
              <span className="text-3xl md:text-5xl" style={{ fontFamily: "Gilda Display, serif" }}>
                45
              </span>{" "}
              / night
            </p>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li>Proin lacinia vehicula amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Morbi lacinia sagittis acum</li>
              <li>consectetur adipiscing elit</li>
            </ul>
            <div className="py-10">
              <a href="#" className="uppercase py-3 px-4 bg-[#BE9874] hover:bg-[#2E2E2E] text-white text-sm md:text-md transition duration-300">
                more info
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomPrice;
