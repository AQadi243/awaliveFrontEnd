import axios from "axios";
import { Skeleton } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomBanner from "./RoomBanner";
import RoomDetailsBody from "./RoomDetailsBody";
// import RoomDate from "./RoomDate";
import SimilarRoom from "./SimilarRoom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import RoomReviewForm from "../../sharedPages/ReviewForm/RoomReviewForm";
import ReviewCard from "../../sharedPages/ReviewForm/ReviewCard";
import AverageReviewStar from "../../sharedPages/ReviewForm/AverageReviewStar";
// import PageAnimation from "../../PageAnimation/PageAnimation";

const RoomDetails = () => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [singleRoomDetails, setSingleRoomDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(true);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(
          `https://type-script-server.vercel.app/api/room/${id}?lang=${currentLanguage}`
        );
        setSingleRoomDetails(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id, currentLanguage, t, setSingleRoomDetails]);

  console.log(reviews.averageRating,'aasdcasdasasd');

  return (
    <>
      {loading ? (
        <div className="h-[20rem] flex  items-center justify-center text-center">
          <Skeleton active />
          
        </div>
      ) : singleRoomDetails ? (
        <>
          <RoomBanner singleRoomDetails={singleRoomDetails} />

          <section className="w-[90%] mx-auto">
            <div className="py-8">
              <div>
                <h1
                  className="text-2xl md:text-5xl py-2"
                  style={{ fontFamily: "Gilda Display, serif" }}
                >
                  {singleRoomDetails.title}
                </h1>
                <div>
                  <p className="" style={{ fontFamily: "Gilda Display, serif" }}> <strong>Bed Room</strong> {" "}:{" "}{singleRoomDetails?.subTitle?.roomOne}</p>
                  {
                    singleRoomDetails.subTitle?.roomTwo && <p className="" style={{ fontFamily: "Gilda Display, serif" }}> <strong>Bed Room 2</strong> {" "}:{" "}{singleRoomDetails?.subTitle?.roomTwo}</p>
                  }
                </div>
                {/* <div className="flex gap-1 items-center text-xs">
                  <p>HOTEL ROME</p>
                  <div className="text-[#BE9874] text-2xl mr-2">
              {'★'.repeat(reviews.averageRating)}{'☆'.repeat(5 - reviews.averageRating)}
            </div>
                </div> */}
                <AverageReviewStar averageRating={reviews.averageRating} /> 
              </div>

              {/* slider  */}
              <RoomDetailsBody singleRoomDetails={singleRoomDetails} />
              <h1 className="text-2xl" style={{ fontFamily: "Gilda Display, serif" }}>Reviews</h1>
              <ReviewCard roomId={id} reviews={reviews} setReviews={setReviews} reviewLoading={reviewLoading} setReviewLoading={setReviewLoading} />
              <RoomReviewForm roomId={id} />
              <SimilarRoom currentRoomId={singleRoomDetails.id} />
            </div>
          </section>
        </>
      ) : (
        <p className="h-screen">Room not found</p>
      )}
    </>
  );
};

export default RoomDetails;
