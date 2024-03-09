import i18next, { t } from "i18next";
import avatar from "../../../../public/img/avatar.jpg";
import { notification } from "antd";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";

const NotificationBar = () => {
  const currentLanguage = i18next.language;
  const { user, userRole, handleLogout } = useContext(AuthContext);
  console.log(user,'asdaseawefwefwe');

  const changeLanguage = (languageCode) => {
    i18next.changeLanguage(languageCode);
    notification["warning"]({
      message: "Language Changed",
      description: `Language has been changed to ${languageCode.toUpperCase()}.`,
      placement: "topRight",
      duration: 3.5,
    });
    document.body.dir = languageCode === "ar" ? "rtl" : "ltr";
  };

  return (
    <section className="  container mx-auto ">
      <div className="hidden lg:flex justify-between font-black ">
        <div className="flex gap-6 text-[12px] tracking-widest py-3 items-center">
          <div>
            <p>Payment options</p>
          </div>

          <div>
            <p>Terms Conditions</p>
          </div>
          <div className="flex gap-3">
            <p
              className="cursor-pointer"
              onClick={() => changeLanguage("en")}
              style={{ opacity: currentLanguage === "en" ? 0.5 : 1 }}
            >
              ENG
            </p>
            <p
              className="cursor-pointer"
              onClick={() => changeLanguage("ar")}
              style={{ opacity: currentLanguage === "ar" ? 0.5 : 1 }}
            >
              AR
            </p>
          </div>
        </div>
        <div className="flex gap-6 ">
          <div className="flex gap-6 text-[12px] tracking-widest py-3 items-center">
            <div>
              {/* <p>My Bookings</p> */}
              {user?.fullName ? <Link to={"/mybookings"}>{t("myBookings")}</Link> : <Link to={"/login"}>{t("myBookings")}</Link>}
            </div>

            <div>
              <p>Add your Review </p>
            </div>
          </div>
          {user?.fullName ? (
            <>
            <div to={'/login'} className="flex gap-2 bg-[#BE9874] py-3 px-4 cursor-pointer">
            <img src={avatar} alt="" className="w-8 " />
            <div className="text-white ">
              <p className="text-[10px] tracking-[0.2rem] font-thin">{user?.fullName}</p>
              <p className="text-[12px]  font-thin" onClick={handleLogout}>LOG OUT</p>
            </div>
          </div>
            </>
          ) : (
            <Link to={'/login'} className="flex gap-2 bg-[#BE9874] py-3 px-4 cursor-pointer ">
            <img src={avatar} alt="" className="w-8 " />
            <div className="text-white ">
              <p className="text-[10px] tracking-[0.2rem] font-thin">My Account</p>
              <p className="text-[12px]  font-thin">LOG IN</p>
            </div>
          </Link>
          ) }
        </div>
      </div>
    </section>
  );
};

export default NotificationBar;
