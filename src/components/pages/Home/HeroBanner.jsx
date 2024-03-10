import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bannerImageTwo from "../../../assets/5.jpg";
import bannerImageOne from "../../../assets/awaliveRoom.jpg";
import Availability from "./Availability";

const HeroBanner = () => {
  const imageData = useMemo(
    () => [
      { src: bannerImageOne, title: "Enjoy a Luxury", subtitle: "Experience" },
      { src: bannerImageTwo, title: "Best Luxury Room", subtitle: "Experience" },
    ],
    []
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Preload images
    imageData.forEach((data) => {
      new Image().src = data.src;
    });

    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    }, 10000); // 9000 for display, 1000 for transition

    return () => clearInterval(interval);
  }, [imageData]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      // Ensure this transitions to transparent
      transition: { duration: 2, when: "beforeChildren", staggerChildren: 1 },
    },
    exit: { opacity: 0, transition: { duration: 2 } },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    exit: { y: -20, opacity: 0, transition: { duration: 1 } },
  };

  return (
          <motion.div className={` bg-[#1C1C1D] flex justify-center items-center relative `}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImageIndex}
          className={ `carousel overflow-hidden bg-gray-600 flex justify-center items-center w-full h-[calc(100vh-120px)]`} 
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          style={{
            backgroundImage: `url(${imageData[activeImageIndex].src})`,
            backgroundSize: "cover", // Adjust background size to fit the image within the container
            backgroundRepeat: "no-repeat", // Prevent image from repeating
            backgroundPosition: "center", // Center the background image
            // width: "100vw", // Set width to viewport width
            // height: "100vh", // Set height to viewport height
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <motion.div
            className="text-container relative z-10 text-center flex flex-col items-center justify-center"
            variants={textVariants}
            style={{ fontFamily: "Gilda Display, serif" }}
          >
            <motion.p className="text-xs text-white uppercase mt-2 mb-4 tracking-[0.2rem]" variants={textVariants}>
              Luxury Hotel & Best Resort
            </motion.p>
            <div className="w-12 h-[1px] bg-white items-center mb-8"></div>
            <motion.h2 className="text-2xl md:text-6xl text-white uppercase mt-2  font-semibold" variants={textVariants}>
              {imageData[activeImageIndex].title}
            </motion.h2>
            <motion.p className=" text-2xl md:text-6xl text-white uppercase mt-2  tracking-widest font-semibold" variants={textVariants}>
              {imageData[activeImageIndex].subtitle}
            </motion.p>
            <motion.p className="text-md md:text-xl text-white mt-5" variants={textVariants}>
              <button href="#" className="text-white uppercase text-sm font-bold border border-gray-50 py-2 px-6 tracking-widest">
                Rooms & suits
              </button>{" "}
              {/* Update your link text and href here */}
            </motion.p>
          </motion.div>
        </motion.div>
        <div className="hidden md:flex md:absolute   md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-10 md:z-50 w-full">
          {/* <SearchBar pageContext="home" /> */}
          <Availability />
        </div>
      </AnimatePresence>
    </motion.div>
      
  );
};

export default HeroBanner;
