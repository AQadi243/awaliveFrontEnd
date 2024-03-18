/* eslint-disable react/prop-types */
import axios from "axios";
import userPlaceHolderImg from "../../../assets/userPlaceholderImage.jpg";
import { useEffect, useState } from "react";
import { notification, Pagination, Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';


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

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

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
  // const reviewss = [
  //   { id: 1, date: "2022-01-01", stars: 4, message: "Great experience. asjdasd. asdasdha asdhuah ahsdfue iausuhawe aiuwerhfwerf uawefb auhbf auds aedfuawe iasdfua iaufea iasudfas  asiudfiau aiudnfia iasudiau asefiun ", imageUrl: userPlaceHolderImg },
  //   { id: 2, date: "2022-02-02", stars: 5, message: "Loved it!", imageUrl: userPlaceHolderImg },
  //   { id: 3, date: "2022-03-03", stars: 3, message: "Good, but could be better.", imageUrl:userPlaceHolderImg },
  //   // Add more reviews as needed
  // ];

   // Settings for the slider
  //  const settings = {
  //   className: "center",
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  const settings = {
    
    dots: true,
    infinite: allReviews?.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log(allReviews , 'reviews');  
  return (
    <>
      
    
    <div className='review-slider w-full text-center items-center mx-auto cursor-grab '>
    <Slider {...settings} className="   h-auto ">
      {allReviews?.map(review => (
        <div key={review._id} className="review-card flex flex-col items-center justify-center overflow-hidden  mx-auto py-4  ">
          <img  src={userPlaceHolderImg} alt="Review" className="review-image w-12 h-12 rounded-full mx-auto"/>
          <div className="review-content">
            <div className="review-date text-sm">{new Date(review?.createdAt).toLocaleDateString()}</div>
            <div className="review-stars flex flex-row justify-center gap-2 my-2">
              {/* {Array(review.stars).fill().map((_, index) => (
                <FaStar key={index} />
              ))} */}
              {"★".repeat(review?.rating)}
            </div>
            <p className="review-message flex-wrap">{review?.message}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  </>
  );
};

export default ReviewCard;
