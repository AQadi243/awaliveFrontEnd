/* eslint-disable react/prop-types */
import axios from "axios";
import userPlaceHolderImg from "../../../assets/userPlaceholderImage.jpg";
import { useEffect, useState } from "react";
import { notification, Pagination, Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const ReviewCard = ({ roomId, reviews, setReviews, reviewLoading, setReviewLoading }) => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation("booking");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 5; // Number of reviews per page
  const allReviews = reviews.reviews;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setReviewLoading(true);
        const response = await axios.get(
          `https://type-script-server.vercel.app/api/review/${roomId}?page=${currentPage}&limit=${pageSize}`
        );
        setReviews(response.data.data);

        const totalReviewsCount = response.data.data.totalReviews || 0;
        setTotalPages(Math.ceil(totalReviewsCount / pageSize));
      } catch (err) {
        notification.error({
          message: "Error",
          description: "Failed to fetch reviews.",
          placement: "topRight",
        });
      } finally {
        setReviewLoading(false);
      }
    };

    // if (roomId) {
    fetchReviews();
    // }
  }, [roomId, currentPage, pageSize, setReviews, setTotalPages, setReviewLoading]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const skeletonCount = 5;

  // if (reviewLoading) return <p>Loading reviews...</p>;
  if (reviewLoading)
    return (
      <div className="max-w-sm">
        {Array.from({ length: skeletonCount }, (_, index) => (
          <Skeleton key={index} active />
        ))}
      </div>
    );
  if (allReviews?.length === 0) return <div className="py-5">{t("notFound")}</div>;

  return (
    <div  className="space-y-4">
      <p>asdasds</p>
      {allReviews?.map((review) => (
        <div key={review._id} className={`max-w-sm  overflow-hidden bg-white p-4  ${currentLanguage === 'ar' ? 'body-ar' : 'body-en'} `} >
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 mr-3">
              {/* Placeholder for user image */}
              <img className="w-10 h-10 rounded-full" src={userPlaceHolderImg} alt="User profile" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg">{review?.userId?.fullName}</div> {/* Replace with dynamic user name */}
              <p className="text-gray-600">{new Date(review?.createdAt).toLocaleDateString()}</p>{" "}
              {/* Replace with dynamic date */}
            </div>
          </div>
          <div className="flex items-center mb-4">
            {/* Star Rating */}
            <div className="text-[#BE9874] text-xl mr-2">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </div>
          <p className="text-gray-700 text-base">{review.message}</p>
        </div>
      ))}
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        total={totalPages * pageSize}
        pageSize={pageSize}
        showSizeChanger={false}
      />
    </div>
  );
};

export default ReviewCard;
