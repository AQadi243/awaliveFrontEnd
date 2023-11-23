import { useTranslation } from "react-i18next";
import BannerPage from "../../sharedPages/PageBanner/BannerPage";
import PageAnimation from "../../PageAnimation/PageAnimation";
import keyImage from "/src/assets/icon-16.png";
import serImage from "/src/assets/icon-17.png";
import lagImage from "/src/assets/icon-15.png";
import waiImage from "/src/assets/icon-18.png";
import rvImage from "/src/assets/aboutRV.jpg";
import lnImage from "/src/assets/structure-2.jpg";
import spImage from "/src/assets/Structure.jpg";
import bgImage from "/src/assets/relazArea2.jpg";
import { useState } from "react";

const initialFormData = {
  email: "",
  message: "",
};

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access the form data in the 'formData' object
    console.log(formData);

    // Add your form submission logic here
    // For example, you can send the form data to the server

    // Clear the form after submission
    setFormData(initialFormData);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Emily Lewis",
      role: "Hotel Manager",
      email: "emily@hotel.com",
      avatar: "/src/assets/avetar.png",
    },
    // Add more team members as needed
  ];

  const backgroundImageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  return (
    <>
      <PageAnimation>
        <BannerPage text={t("contact_title")} />
        <section className="w-[90%] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 py-20">
            <div className="flex flex-col justify-center gap-5 items-center px-2 md:px-10  ">
              <img src={keyImage} alt="icon" className="w-14 md:w-20" />
              <div className="">
                <p className="text-xs text-center">{t("contact_Key")}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5 items-center px-2 md:px-10 ">
              <img src={serImage} alt="icon" className="w-14 md:w-20" />
              <div>
                <p className="text-xs text-center">{t("contact_ser")}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5 items-center px-2 md:px-10 ">
              <img src={lagImage} alt="icon" className="w-14 md:w-20" />
              <div>
                <p className="text-xs text-center">{t("contact_lag")}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5 items-center px-2 md:px-10 ">
              <img src={waiImage} alt="icon" className="w-14 md:w-20" />
              <div>
                <p className="text-xs text-center">{t("contact_wait")}</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-[90%] mx-auto"
          style={{ fontFamily: "Gilda Display, serif" }}
        >
          <div className="py-10 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
              <div className="  flex flex-col gap-5  ">
                <div className="h-[50%] bg-[#BE9874] overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover"
                    src={rvImage}
                    alt=""
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h2 className="font-semibold tracking-widest">
                      {t("hotel_location")}
                    </h2>
                    <p>{t("hotel_st")}</p>
                    <p>{t("hotel_ph")}</p>
                    <p>{t("hotel_em")}</p>
                  </div>
                </div>

                <div className="h-[50%] bg-[#1C1C1D] text-white flex flex-col justify-center items-center gap-2">
                  <h2 className="font-semibold tracking-widest">RECEPTION</h2>
                  <p className="text-xs">MON ...... 11:00 - 03:00 pm</p>
                  <p className="text-xs">FRY ...... 11:00 - 03:00 pm</p>
                  <p className="text-xs">SAT ...... 11:00 - 03:00 pm</p>
                  <p className="text-xs">SUN ...... 11:00 - 03:00 pm</p>
                </div>
              </div>
              <div className="relative ">
                <img src={lnImage} alt="" />
                <div className="text-white flex flex-col gap-5 text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <h2 className="text-6xl  ">Lunch</h2>
                  <a
                    href="#"
                    className="uppercase tracking-widest text-xs md:font-semibold "
                  >
                    More Info
                  </a>
                </div>
              </div>
              <div className="relative">
                <img src={spImage} alt="" />
                <div className="text-white flex flex-col gap-5 text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <h2 className="text-6xl   ">Spa</h2>
                  <a
                    href="#"
                    className="uppercase tracking-widest text-xs md:font-semibold "
                  >
                    Check Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={backgroundImageStyle}>
          <div className="w-[90%] mx-auto">
            <div className=" w-full flex flex-col md:flex-row items-center justify-center gap-5 py-10 md:py-20">
              {/* <!-- team  --> */}
              <div className="md:w-[50%] text-center md:text-start text-white">
                <p className="text-sm uppercase tracking-widest">Our Team</p>
                <h1 className="text-3xl md:text-5xl tracking-widest py-5">
                  Meet the staff
                </h1>
                <div className="flex flex-col gap-5 pt-10">
                  <div className="flex flex-col text-center md:text-start md:flex-row items-center gap-5">
                    {teamMembers.map((member) => (
                      <div
                        key={member.id}
                        className="flex flex-col md:flex-row items-center justify-center gap-3"
                      >
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-20 md:w-16 rounded-full"
                        />
                        <div>
                          <h2 className="text-xl tracking-widest">
                            {member.name}
                          </h2>
                          <p className="text-sm">{`${member.role} : ${member.email}`}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* <!-- team  end --> */}
              {/* <!-- contact form  --> */}
              <div className="md:w-[50%] text-center bg-white px-10 py-10">
                <h2 className="text-2xl p-2 tracking-widest capitalize">
                  Contact us{" "}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus eu maximus ante, eget sollicitudin metus.
                </p>
                <form
                  className="flex flex-col gap-5 py-10"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="py-2 px-2 border"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="3"
                    placeholder="Message"
                    className="py-2 px-2 border"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button
                    type="submit"
                    className="py-3 px-5 bg-[#BE9874] text-white"
                  >
                    Submit
                  </button>
                </form>
              </div>
              {/* <!-- contact form end --> */}
            </div>
          </div>
        </section>
      </PageAnimation>
    </>
  );
};

export default Contact;
