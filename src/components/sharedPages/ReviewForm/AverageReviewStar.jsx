

const AverageReviewStar = ({averageRating }) => {
    // Round the average rating to 4.5 if it's greater than 4.5
  const roundedRating = averageRating > 4.5 ? 4.5 : averageRating;
  // Calculate full stars
  const fullStars = Math.floor(roundedRating);
  // Calculate half stars (1 if the rating has a decimal part)
  const halfStars = roundedRating % 1 > 0 ? 1 : 0;
  // Calculate empty stars
  const emptyStars = 5 - fullStars - halfStars;
    return (
        <div className="text-[#BE9874] text-2xl mr-2">
          {'★'.repeat(fullStars)}
          {halfStars ? '½' : ''}
          {'☆'.repeat(emptyStars)}
        </div>
      );
    };

export default AverageReviewStar