import PageAnimation from "../../../PageAnimation/PageAnimation";
import BannerPage from "../../../sharedPages/PageBanner/BannerPage";
import TableDateAndTime from "./TableDateAndTime";
import img from "../../../../assets/relaxArea.jpg";
import PromotionRooms from "./PromotionRooms";

const BookTable = () => {
  return (
    <PageAnimation>
      <BannerPage text={"Book A Table"} />
      <TableDateAndTime />
      <section
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          fontFamily: "Gilda Display, serif",
        }}
      >
        <div className="w-[90%] mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 content-center gap-5 md:gap-0 text-white">
            <div className="flex gap-5 items-center justify-center">
              <h2 className="text-4xl">13</h2>
              <div>
                <p className="text-sm font-semibold">Rooms</p>
                <p className="text-xs">Dolor Sit Amet</p>
              </div>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <h2 className="text-4xl">65</h2>
              <div>
                <p className="text-sm font-semibold">Suites</p>
                <p className="text-xs">Dolor Sit Amet</p>
              </div>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <h2 className="text-4xl">24</h2>
              <div>
                <p className="text-sm font-semibold">Apartments</p>
                <p className="text-xs">Dolor Sit Amet</p>
              </div>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <h2 className="text-4xl">72</h2>
              <div>
                <p className="text-sm font-semibold">Lofts</p>
                <p className="text-xs">Dolor Sit Amet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PromotionRooms />
    </PageAnimation>
  );
};

export default BookTable;
