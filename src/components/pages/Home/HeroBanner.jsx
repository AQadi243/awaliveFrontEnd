import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bannerImageTwo from "../../../assets/hero-tree.jpg";
import bannerImageOne from "../../../assets/hero-four.jpg";
import Availability from "./Availability";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18next from "i18next";

const HeroBanner = () => {
  const currentLanguage = i18next.language
  const { t } = useTranslation("home");
  const imageData = useMemo(
    () => [
      { src: bannerImageOne, title: t("enjoyALuxuryExperience"), subtitle: t("EXPERIENCE") },
      { src: bannerImageTwo, title: t("Best Luxury Room"), subtitle: t("EXPERIENCE") },
    ],
    [t]
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
      transition: { duration: 1, when: "beforeChildren", staggerChildren: 1 },
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    exit: { y: -20, opacity: 0, transition: { duration: 1 } },
  };

  return (
          <motion.div className={` bg-[#1C1C1D] flex justify-center items-center relative h-screen lg:h-[calc(100vh-50px)]  `}>
      <AnimatePresence mode="wait" >
        <motion.div
          key={activeImageIndex}
          className={ `carousel overflow-hidden  flex justify-center items-center w-full `} 
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          style={{
            backgroundImage: `url(${imageData[activeImageIndex].src})`,
            backgroundSize: "cover", // Adjust background size to fit the image within the container
            backgroundRepeat: "no-repeat", // Prevent image from repeating
            backgroundPosition: "center", // Center the background image
            width: "100%", // Set width to viewport width
            height: "100%", // Set height to viewport height
          }}
        >
          
          <motion.div
            className={`text-container relative z-10 text-center flex flex-col items-center justify-center pb-20 ${currentLanguage === 'ar' ? 'body-ar  font-medium ' : 'body-en-title '}`}
            variants={textVariants}
            
          >
            <motion.p className={`text-xs md:text-sm text-white uppercase mt-2 mb-4 tracking-[0.2rem]  ${currentLanguage === 'ar' ? 'body-ar text-xl font-medium ' : 'body-en'}`} variants={textVariants} >
              {t("Luxury Hotel & Best Resort")}
            </motion.p>
            <div className="w-12 h-[1px] bg-white items-center mb-5"></div>
            <motion.h2 className="text-3xl md:text-6xl text-white uppercase mt-2  font-semibold" variants={textVariants}>
              {imageData[activeImageIndex].title}
            </motion.h2>
            <motion.p className=" text-3xl md:text-6xl text-white uppercase mt-2  tracking-widest font-semibold" variants={textVariants}>
              {imageData[activeImageIndex].subtitle}
            </motion.p>
            <motion.p className=" text-md md:text-xl text-white mt-10 md-mt-10 xl:mt-10" variants={textVariants}>
              <Link to={'/roomSearch'} className={`text-white uppercase  font-bold border-2 border-gray-50 py-3 px-10 tracking-widest ${currentLanguage === 'ar' ? 'body-ar text-sm font-medium ' : 'body-en text-xs '}`} style={{ fontFamily: "poppins, serif" }}>
               {t("roomsAndSuits")}
              </Link>{" "}
              {/* Update your link text and href here */}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
        <div className="hidden md:flex md:absolute   md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-8 md:z-10 w-full">
          {/* <SearchBar pageContext="home" /> */}
          <Availability />
        </div>
    </motion.div>
      
  );
};

export default HeroBanner;
