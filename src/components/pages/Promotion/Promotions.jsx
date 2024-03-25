import React, { useContext, useEffect, useState } from "react";
import PageAnimation from "../../PageAnimation/PageAnimation";
import Banner from "./Banner";
import axios from "axios";
import BestPromotions from "./BestPromotions";
import RelaxArea from "./RelaxArea";
import i18next from "i18next";
import { AuthContext } from "../../sharedPages/Context/AuthProvider";


const Promotions = () => {
  const currentLanguage = i18next.language
  const {
    promotionError,
    promotionLoading,
    promotionsData,} = useContext(AuthContext)
  // const [promotionsData, setPromotionsData] = useState([])
  // const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  

  return (
    <>
      <PageAnimation>
        <Banner data={promotionsData} loading={promotionLoading}  />
        <BestPromotions data={promotionsData} loading={promotionLoading} />
        <RelaxArea />

      </PageAnimation>
    </>
  );
};

export default Promotions;
