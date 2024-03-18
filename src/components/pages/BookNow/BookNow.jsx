import { useTranslation } from "react-i18next";
import PageAnimation from "../../PageAnimation/PageAnimation";
import BannerPage from "../../sharedPages/PageBanner/BannerPage";
import BookingDate from "./BookingDate";
import BookingForm from "./BookingForm";

const BookNow = () => {
  const { t } = useTranslation("booking");

  return (
    <>
      <PageAnimation>
        <BannerPage text={t("booking")} />
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-2">
            <div className="flex flex-col md:flex-row gap-5 py-10 md:py-20">
              <BookingDate />
              <BookingForm />
            </div>
          </div>
        </section>
      </PageAnimation>
    </>
  );
};

export default BookNow;
