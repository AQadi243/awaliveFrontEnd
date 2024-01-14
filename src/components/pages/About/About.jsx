// import { useEffect, useState } from "react";
import PageAnimation from "../../PageAnimation/PageAnimation";
import BestPrice from "./BestPrice";
import Slider from "./Slider";
// import { LanguageContext } from "../../sharedPages/Context/LanguageProvider";
// import i18next from "i18next";

const About = () => {
  // const { isLoading } = useContext(LanguageContext);
  // const [translationsLoaded, setTranslationsLoaded] = useState(false);
  // useEffect(() => {
  //   const loadTranslations = async () => {
  //     const language = i18next.language;
  //     try {
  //       const response = await fetch(`/Languages/${language}/about.json`);
  //       const translations = await response.json();
  //       i18next.addResourceBundle(language, 'about', translations, true, true);
  //       setTranslationsLoaded(true);
  //     } catch (error) {
  //       console.error('Could not load translations for the about page:', error);
  //       // Handle error or load a fallback translation file
  //       setTranslationsLoaded(false);
  //     }
  //   };
  
  //   loadTranslations();
  // }, [i18next.language]);
  

  // if (!translationsLoaded) {
  //   return <div>Loading...</div>; // Or any other loading indicator
  // }

  return (
    <>

      <PageAnimation>
        {/* { isLoading ?  <Spin /> :( */}

          <>
          <Slider />
          <BestPrice />
          </>
          {/* ) */}
      
      </PageAnimation>
    </>
  );
};

export default About;
