/* eslint-disable react/prop-types */
import axios from 'axios';
import userPlaceHolderImg from '../../../assets/userPlaceholderImage.jpg';
import { useEffect } from 'react';
import { notification } from 'antd';

const ReviewCard = ({ roomId,reviews,setReviews,reviewLoading,setReviewLoading }) => {
 
  const allReviews = reviews.reviews

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setReviewLoading(true);
        const response = await axios.get(`https://type-script-server.vercel.app/api/review/${roomId}`);
        setReviews(response.data.data);
        console.log(response.data.data, 'Reviews fetched successfully');
      } catch (err) {
        console.error('Error fetching reviews:', err);
        notification.error({
          message: 'Error',
          description: 'Failed to fetch reviews.',
          placement: 'topRight',
        });
      } finally {
        setReviewLoading(false);
      }
    };

    if (roomId) {
      fetchReviews();
    }
  }, [roomId, setReviewLoading, setReviews]);

  if (reviewLoading) return <p>Loading reviews...</p>;

  if (allReviews.length === 0) return <div className='py-5'>No reviews found.</div>;

  return (
    <div className="space-y-4">
      
      {allReviews.map((review) => (
        <div key={review._id} className="max-w-sm  overflow-hidden bg-white p-4" style={{ fontFamily: 'Gilda Display, serif' }}>
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 mr-3">
              {/* Placeholder for user image */}
              <img className="w-10 h-10 rounded-full" src={userPlaceHolderImg} alt="User profile" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg">{review?.userId?.fullName}</div> {/* Replace with dynamic user name */}
              <p className="text-gray-600">{new Date(review.createdAt).toLocaleDateString()}</p> {/* Replace with dynamic date */}
            </div>
          </div>
          <div className="flex items-center mb-4">
            {/* Star Rating */}
            <div className="text-[#BE9874] text-xl mr-2">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
          </div>
          <p className="text-gray-700 text-base">
            {review.message}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
