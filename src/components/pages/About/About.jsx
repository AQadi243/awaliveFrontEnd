// import { useEffect, useState } from "react";
import PageAnimation from "../../PageAnimation/PageAnimation";
import BestPrice from "./BestPrice";
import Slider from "./Slider";
// import { LanguageContext } from "../../sharedPages/Context/LanguageProvider";
// import i18next from "i18next";

const About = () => {
  return (
    <>
      <PageAnimation>
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
