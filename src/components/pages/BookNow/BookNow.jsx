import PageAnimation from "../../PageAnimation/PageAnimation";
import BannerPage from "../../sharedPages/PageBanner/BannerPage";
import BookingDate from "./BookingDate";
import BookingForm from "./BookingForm";


const BookNow = () => {
  

  return   (
    <>
    <PageAnimation>
    <BannerPage text={'Booking'} />
    <section className="w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row gap-5 py-10 md:py-20">
        <BookingDate />
        <BookingForm />

      </div>
    </section>
    </PageAnimation>
    </>
  );
};

export default BookNow;
