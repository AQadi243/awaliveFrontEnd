import { useTranslation } from "react-i18next";
import BannerPage from "../../sharedPages/PageBanner/BannerPage";
import PageAnimation from "../../PageAnimation/PageAnimation";
import keyImage from "/src/assets/icon-16.png";
import serImage from "/src/assets/icon-17.png";
import lagImage from "/src/assets/icon-15.png";
import waiImage from "/src/assets/icon-18.png";
import rvImage from "../../../assets/5.jpg";
import lnImage from "/src/assets/structure-2.jpg";
import spImage from "/src/assets/Structure.jpg";
import bgImage from "/src/assets/relazArea2.jpg";
import contactImage from "../../../assets/recaption.jpg";
import { useState } from "react";

const initialFormData = {
  email: "",
  message: "",
};

const Contact = () => {
  const { t } = useTranslation("contact");
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
    backgroundImage: `url(${contactImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    
  };

  return (
    <>
      <PageAnimation>
        <BannerPage text={t("contact_title")} contactImg={contactImage} />
        <section className="container mx-auto py-10 md:py-16 px-2">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col justify-center items-center gap-5">
              <img src={keyImage} alt="Key Service Icon" className="w-14 md:w-20" />
              <p className="text-xs text-center">{t("features.keyDescription")}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <img src={serImage} alt="Service Icon" className="w-14 md:w-20" />
              <p className="text-xs text-center">{t("features.serviceDescription")}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <img src={lagImage} alt="Luggage Icon" className="w-14 md:w-20" />
              <p className="text-xs text-center">{t("features.luggageDescription")}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <img src={waiImage} alt="Waiting Service Icon" className="w-14 md:w-20" />
              <p className="text-xs text-center">{t("features.waitersDescription")}</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-2 md:px-1 py-10" style={{ fontFamily: "Gilda Display, serif" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* First Column with two rows */}
            <div className="col-span-1 grid  grid-rows-2 gap-5">
              {/* First Row */}
              <div className="row-span-1 bg-[#BE9874] overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                <img className="w-full h-full object-cover" src={rvImage} alt="" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full px-4   ">
                  <h2 className="font-semibold tracking-widest text-center">{t("hotel_location")}</h2>
                  <div className="flex flex-col gap-2 text-center">
                    <p className="text-xs md:text-md">
                      {" "}
                      <strong className="font-semibold ">Address:</strong>
                      {t("hotel_st")}
                    </p>
                    <p className="text-xs md:text-md">
                      <strong className="font-semibold ">Phone:</strong> [Your Hotel's Phone Number]
                    </p>
                    <p className="text-xs md:text-md">
                      <strong className="font-semibold ">Email:</strong> [Your Hotel's Phone Number]
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="row-span-1 bg-[#1C1C1D] text-white flex flex-col justify-center items-center gap-2">
                <h2 className="font-semibold tracking-widest">{t("reception")}</h2>
                <p className="text-xs">MON ...... 11:00 - 03:00 pm</p>
                <p className="text-xs">FRY ...... 11:00 - 03:00 pm</p>
                <p className="text-xs">SAT ...... 11:00 - 03:00 pm</p>
                <p className="text-xs">SUN ...... 11:00 - 03:00 pm</p>
              </div>
            </div>

            {/* Second Column */}
            <div className="relative col-span-1">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
              <img src={lnImage} alt="" className="w-full h-full object-cover" />
              <div className="text-white flex flex-col gap-5 text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h2 className="text-3xl md:text-4xl xl:text-6xl">{t("lunch_title")}</h2>
                <p className="text-xs ">{t("lunch_description")}</p>
                <a href="#" className="uppercase tracking-widest text-xs md:font-semibold">
                  {t("lunch_more_info")}
                </a>
              </div>
            </div>

            {/* Third Column */}
            <div className="relative col-span-1">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
              <img src={spImage} alt="" className="w-full h-full object-cover" />
              <div className="text-white flex flex-col gap-5 text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h2 className="text-3xl md:text-4xl xl:text-6xl">{t("spa_title")}</h2>
                <p className="text-xs ">{t("spa_description")}</p>
                <a href="#" className="uppercase tracking-widest text-xs md:font-semibold">
                  {t("spa_check_here")}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative"  style={backgroundImageStyle}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="container mx-auto px-2 relative  ">
            <div className=" w-full flex flex-col md:flex-row items-center justify-center gap-5  py-10 md:py-16">
              <div className="md:w-[50%] text-center md:text-start text-white">
                <h1 className="text-3xl md:text-5xl tracking-widest py-5">
                  Meet Our <br /> Dedicated Team
                </h1>
                <p className="text-sm  tracking-widest">{t("team_description")}</p>
                <div className="flex flex-col gap-5 pt-10">
                  <div className="flex flex-col text-center md:text-start md:flex-row items-center gap-5">
                    {teamMembers.map((member) => (
                      <div key={member.id} className="flex flex-col md:flex-row items-center justify-center gap-3">
                        <img src={member.avatar} alt={member.name} className="w-20 md:w-16 rounded-full" />
                        <div>
                          <h2 className="text-xl tracking-widest">{member.name}</h2>
                          <p className="text-sm">{`${member.role} : ${member.email}`}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:w-[50%] text-center bg-white  py-10 ">
                <h2 className="text-2xl p-2 tracking-widest capitalize">{t("contact_title")}</h2>
                <p className="px-2">{t("contact_description")}</p>

                <form className=" w-[95%] mx-auto flex flex-col gap-5 py-10" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={t("form_email_placeholder")}
                    className="py-2 px-2 border"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    id="message"
                    cols="10"
                    rows="3"
                    placeholder={t("form_message_placeholder")}
                    className="py-2 px-2 border"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button type="submit" className="py-3 px-5 bg-[#BE9874] text-white ">
                    {t("form_submit_button")}
                  </button>
                </form>
                {/* <form
                  className=" w-[90%] mx-auto flex flex-col gap-5 py-10"
                  onSubmit={handleSubmit}
                >
                  
                  
                  <button
                    type="submit"
                    className="py-3 px-5 bg-[#BE9874] text-white"
                  >
                    Submit
                  </button>
                </form> */}
              </div>
            </div>
          </div>
        </section>
      </PageAnimation>
    </>
  );
};

export default Contact;
