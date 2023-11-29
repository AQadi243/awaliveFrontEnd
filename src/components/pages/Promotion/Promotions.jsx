import React, { useEffect, useState } from "react";
import PageAnimation from "../../PageAnimation/PageAnimation";
import Banner from "./Banner";
import axios from "axios";
import BestPromotions from "./BestPromotions";
import RelaxArea from "./RelaxArea";

const Promotions = () => {
  const [promotionsData, setPromotionsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get('/PromotionRooms.json');
        const firstFourItems = response.data
    
        console.log('Fetched data:', firstFourItems);
        setPromotionsData(firstFourItems)
        setLoading(false)
      } catch (error) {
        if (error.response) {
          // The request was made, but the server responded with an error status
          console.error('Server responded with an error:', error.response.data);
          console.error('Status code:', error.response.status);
          setLoading(false)
          setError(error.response.status || error.response.data )
        } else if (error.request) {
          // The request was made, but no response was received
          console.error('No response received from the server');
          setLoading(false)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up the request:', error.message);
          setLoading(false)
        }
        
        // Handle the error as needed
      }
    };
    
    fetchData(); // Call the async function
    setLoading(false)
  }, []); 

  return (
    <>
      <PageAnimation>
        <Banner data={promotionsData} loading={loading}  />
        <BestPromotions data={promotionsData} loading={loading} />
        <RelaxArea />

      </PageAnimation>
    </>
  );
};

export default Promotions;
