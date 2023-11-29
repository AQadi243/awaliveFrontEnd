import axios from 'axios';
import   { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BannerPage from '../../../sharedPages/PageBanner/BannerPage';

const SinglePromoRoom = () => {
  const { id } = useParams();
  const [singlePromotionData, setSinglePromotionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/PromotionRooms.json');
        const allPromotionData = response.data;  
        // Find the data with the matching ID
        const foundPromotion = allPromotionData.find(promo => parseInt(promo.id) === parseInt(id));
        if (foundPromotion) {
          setSinglePromotionData(foundPromotion);
        } else {
          setError(`Promotion with ID ${id} not found`);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!singlePromotionData) {
    return <div>Promotion not found</div>;
  }

  return (
    <>
    <BannerPage text={singlePromotionData.roomName} />
    
    </>
  );
};

export default SinglePromoRoom;
