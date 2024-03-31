// import axios from 'axios';
// import   { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import BannerPage from '../../../sharedPages/PageBanner/BannerPage';
// import PromoRoomDetails from './PromoRoomDetails';
// import i18next from 'i18next';
// import PromotionBanner from './PromotionBanner';
// import PageAnimation from '../../../PageAnimation/PageAnimation';

// const SinglePromoRoom = () => {
//   const currentLanguage = i18next.language
//   const { id } = useParams();
//   const [singlePromotionData, setSinglePromotionData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

  
//   useEffect(() => {
//     const fetchData = async () => {
//         setLoading(true);
//         setError(null); // Clear previous errors

//         try {
//             const response = await axios.get(`https://type-script-server.vercel.app/api/promotion/${id}?lang=${currentLanguage}`);
//             setSinglePromotionData(response.data.data.room);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             if (error.response) {
//                 // The request was made and the server responded with a status code
//                 // that falls out of the range of 2xx
//                 setError(error.response.data.message || `Error: ${error.response.status}`);
//             } else if (error.request) {
//                 // The request was made but no response was received
//                 setError('The server did not respond to the request.');
//             } else {
//                 // Something happened in setting up the request that triggered an Error
//                 setError('Error setting up the request.');
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     fetchData();
// }, [id, currentLanguage]); // Make sure to include all dependencies here


//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!singlePromotionData) {
//     return <div>Promotion not found</div>;
//   }

//   return (
//     <PageAnimation>

    
//     {/* <BannerPage text={singlePromotionData.roomName} /> */}
//     <PromotionBanner text={singlePromotionData.roomName} />
//     <PromoRoomDetails singlePromotionData={singlePromotionData} loading={loading}  currentLanguage={currentLanguage} />

//     </PageAnimation>
//   );
// };

// export default SinglePromoRoom;
