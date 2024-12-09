
import line from "../../../../public/img/line.jpg";
import ent_pwd from "../../../../public/img/1_ent_pwd.jpg";
import signs_pwd from "../../../../public/img/2_signs_pwd.jpg";
import elev_pwd from "../../../../public/img/3_elev_pwd.jpg";
import room_m_pwd from "../../../../public/img/4_room_m_pwd.jpg";
import bath_m_pwd from "../../../../public/img/5_bath_m_pwd.jpg";
import room_e_pwd from "../../../../public/img/6_room_e_pwd.jpg";
import bath_e_pwd from "../../../../public/img/7_bath_e_pwd.jpg";
import hca1 from "../../../assets/hca1.png";
import hca2 from "../../../assets/hca2.png";
import hca3 from "../../../assets/hca3.png";
import hca4 from "../../../assets/hca4.png";
import hca5 from "../../../assets/hca5.png";
import hca6 from "../../../assets/hca6.png";

import { CiWifiOn, CiRouter, CiUser, CiBank } from "react-icons/ci";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const FullaccessDetails = () => {
    const currentLanguage = i18next.language
    const {t} = useTranslation('fullaccess')


  return (
    <>

  
      <section className=" max-w-5xl mx-auto ">
        <div className="py-10 md:py-20 flex flex-col  items-center gap-10">
          <p className={`text-4xl lg:text-6xl text-gray-800 text-center ${currentLanguage === 'ar' ? 'body-ar  font-medium  ' : 'body-en-title'}`} >{t("What's Includes")}</p>
          <div className="flex flex-wrap gap-4 p-4">
            
            {/* --- */}
<div className={`mt-10 md:mt-20 ${currentLanguage === 'ar' ? 'body-ar  font-medium ' : 'body-en '}`}>
      
      <div className="grid gap-5 md:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center text-center md:text-start">
          <img src={hca1} alt="" className="w-20 md:w-28" />
          <div>
            <p className={`text-xl md:text-xl font-semibold py-4 ${currentLanguage === 'ar' ? 'body-ar  font-medium ' : 'body-en-title '}`} >
              {t("keyFeatures.hca1.title")}
            </p>
            <p className="text-xs text-gray-400">{t("keyFeatures.hca1.description1")}</p>
            <p className="text-xs text-gray-400">{t("keyFeatures.hca1.description2")}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center text-center md:text-start ">
          <img src={hca2} alt="" className="w-20 md:w-28" />
          <div>
            <p className={`text-xl md:text-xl font-semibold py-4 ${currentLanguage === 'ar' ? 'body-ar  font-medium ' : 'body-en-title '}`}>
              {t("keyFeatures.hca2.title")}
            </p>
            <p className="text-xs text-gray-400">{t("keyFeatures.hca2.description1")}</p>
            <p className="text-xs text-gray-400">{t("keyFeatures.hca2.description2")}</p>

          </div>
          
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center text-center md:text-start ">
          <img src={hca3} alt="" className="w-20 md:w-28" />
          <div>
            <p className={`text-xl md:text-xl font-semibold py-4 ${currentLanguage === 'ar' ? 'body-ar  font-medium ' : 'body-en-title '}`}>
              {t("keyFeatures.hca3.title")}
            </p>
            <p className="text-xs text-gray-400">{t("keyFeatures.hca3.description")}</p>
            
          </div>
        </div>

      </div>
      <br></br>
      <br></br>

      <div className="grid gap-5 md:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center text-center md:text-start">
          <img src={hca4} alt="" className="w-20 md:w-28" />
          <div>
            <p className={`text-xl md:text-xl font-semibold py-4 ${currentLanguage === 'ar' ? 'body-ar  font-medium ' : 'body-en-title '}`} >
              {t("keyFeatures.hca4.title")}
            </p>
            <p className="text-xs text-gray-400">{t("keyFeatures.hca4.description")}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center text-center md:text-start ">
          <img src={hca5} alt="" className="w-20 md:w-28" />
          <div>
            <p className={`text-xl md:text-xl font-semibold py-4 ${currentLanguage === 'ar' ? 'body-ar  font-medium ' : 'body-en-title '}`}>
              {t("keyFeatures.hca5.title")}
            </p>
            <p className="text-xs text-gray-400">{t("keyFeatures.hca5.description")}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center text-center md:text-start ">
          <img src={hca6} alt="" className="w-20 md:w-28" />
          <div>
            <p className={`text-xl md:text-xl font-semibold py-4 ${currentLanguage === 'ar' ? 'body-ar  font-medium ' : 'body-en-title '}`}>
              {t("keyFeatures.hca6.title")}
            </p>
            <p className="text-xs text-gray-400">{t("keyFeatures.hca6.description")}</p>
            
          </div>
        </div>

      </div>
      <br></br>
      <br></br>
    
      </div>
        {/* --- */}

                       
          </div>
        </div>



      </section>
      <section className="max-w-7xl mx-auto pb-20">
        <div className=" md:h-[500px] flex flex-col md:flex-row md:justify-between items-center md:items-start p-6 gap-8">
          <div className={`w-full md:w-1/2 lg:1/3 space-y-4 text-black text-center md:text-start ${currentLanguage === 'ar' ? 'body-ar  font-medium  ' : 'body-en-title'} `}>
            <p className="text-xs uppercase tracking-widest text-gray-500">{t("One")}</p>
            <h2 className="text-4xl lg:text-6xl ">{t("Easy Entrance")}</h2>
            <h2 className="text-4xl lg:text-6xl ">{t("Easy Entrance2")} </h2>
            <p className={`text-sm text-gray-600 ${currentLanguage === 'ar' ? 'body-ar  font-medium  ' : 'body-en'}`}>
              {t("Easy Entrance D")}
            </p>

          </div>

          <div className="w-full md:1/2 lg:w-2/3 relative ">
            <img className="w-full h-full object-cover" src={ent_pwd} alt="" />
          </div>

          
        </div>
       
      </section>
      
   <section className="max-w-7xl mx-auto pb-20">
         <div className=" ">
            <img className="" src={line} alt="" />
          </div>
    </section>
      
      <section className="max-w-7xl mx-auto pb-20">
      

        <div className="md:h-[500px] flex flex-col md:flex-row md:justify-between items-center md:items-start p-6 gap-8">
          

          <div className="w-full md:1/2 lg:w-2/3 relative ">
            <img className="w-full h-full object-cover" src={signs_pwd} alt="" />
            
          </div>

          <div className={`w-full md:w-1/2 lg:1/3 space-y-4 text-black ${currentLanguage === 'ar' ? 'body-ar  font-medium  ' : 'body-en-title'} `}>
            <p className="text-xs uppercase tracking-widest text-gray-500">{t("Two")}</p>
            <h2 className="text-4xl lg:text-6xl ">{t("Signs Front Elevators")} </h2>
            <h2 className="text-4xl lg:text-6xl ">{t("Signs Front Elevators2")} </h2>
            <p className="text-sm text-gray-600">
            {t("Signs Front Elevators D")}
            </p>
          </div>
        </div>
      </section>



      <section className="max-w-7xl mx-auto pb-20">
         <div className=" ">
            <img className="" src={line} alt="" />
          </div>
    </section>


      <section className="max-w-7xl mx-auto pb-20">
        <div className=" md:h-[500px] flex flex-col md:flex-row md:justify-between items-center md:items-start p-6 gap-8">
          <div className={`w-full md:w-1/2 lg:1/3 space-y-4 text-black text-center md:text-start ${currentLanguage === 'ar' ? 'body-ar  font-medium  ' : 'body-en-title'} `}>
            <p className="text-xs uppercase tracking-widest text-gray-500">{t("Three")}</p>
            <h2 className="text-4xl lg:text-6xl ">{t("Floor Signs")}</h2>
            <h2 className="text-4xl lg:text-6xl ">{t("Floor Signs2")} </h2>
            <p className={`text-sm text-gray-600 ${currentLanguage === 'ar' ? 'body-ar  font-medium  ' : 'body-en'}`}>
              {t("Floor Signs D")}
            </p>
            
          </div>

          <div className="w-full md:1/2 lg:w-2/3 relative ">
            <img className="w-full h-full object-cover" src={elev_pwd} alt="" />
           
          </div>
        </div>
       
      </section>
      
      


      <section className="max-w-7xl mx-auto pb-20">
         <div className=" ">
            <img className="" src={line} alt="" />
          </div>
    </section>



      
      <section className="max-w-7xl mx-auto pb-20">
        <div className="md:h-[500px] flex flex-col md:flex-row md:justify-between items-center md:items-start p-6 gap-8">
          

          <div className="w-full md:1/2 lg:w-2/3 relative ">
            <img className="w-full h-full object-cover" src={room_m_pwd} alt="" />
            
          </div>

          <div className={`w-full md:w-1/2 lg:1/3 space-y-4 text-black ${currentLanguage === 'ar' ? 'body-ar  font-medium  ' : 'body-en-title'} `}>
            <p className="text-xs uppercase tracking-widest text-gray-500">{t("Four")}</p>
            <h2 className="text-4xl lg:text-6xl ">{t("Locomotor Room")} </h2>
            <h2 className="text-4xl lg:text-6xl ">{t("Locomotor Room2")} </h2>
            <p className="text-sm text-gray-600">
            {t("Locomotor Room D")}
            </p>
            
          </div>
        </div>
      </section>
      
         


      <section className="max-w-7xl mx-auto pb-20">
         <div className=" ">
            <img className="" src={line} alt="" />
          </div>
    </section>


   

      <section className="max-w-7xl mx-auto pb-20">
        <div className=" md:h-[500px] flex flex-col md:flex-row md:justify-between items-center md:items-start p-6 gap-8">
          <div className={`w-full md:w-1/2 lg:1/3 space-y-4 text-black text-center md:text-start ${currentLanguage === 'ar' ? 'body-ar  font-medium  ' : 'body-en-title'} `}>
            <p className="text-xs uppercase tracking-widest text-gray-500">{t("Five")}</p>
            <h2 className="text-4xl lg:text-6xl ">{t("Locomotor Bath")}</h2>
            <h2 className="text-4xl lg:text-6xl ">{t("Locomotor Bath2")} </h2>
            <p className={`text-sm text-gray-600 ${currentLanguage === 'ar' ? 'body-ar  font-medium  ' : 'body-en'}`}>
              {t("Locomotor Bath D")}
            </p>
            
          </div>

          <div className="w-full md:1/2 lg:w-2/3 relative ">
            <img className="w-full h-full object-cover" src={bath_m_pwd} alt="" />
           
          </div>
        </div>
       
      </section>
      
      


      <section className="max-w-7xl mx-auto pb-20">
         <div className=" ">
            <img className="" src={line} alt="" />
          </div>
    </section>



      
      
      <section className="max-w-7xl mx-auto pb-20">
        <div className="md:h-[500px] flex flex-col md:flex-row md:justify-between items-center md:items-start p-6 gap-8">
          

          <div className="w-full md:1/2 lg:w-2/3 relative ">
            <img className="w-full h-full object-cover" src={room_e_pwd} alt="" />
            
          </div>

          <div className={`w-full md:w-1/2 lg:1/3 space-y-4 text-black ${currentLanguage === 'ar' ? 'body-ar  font-medium  ' : 'body-en-title'} `}>
            <p className="text-xs uppercase tracking-widest text-gray-500">{t("Six")}</p>
            <h2 className="text-4xl lg:text-6xl ">{t("Blindness and Hearing Room")} </h2>
            <h2 className="text-4xl lg:text-6xl ">{t("Blindness and Hearing Room2")} </h2>
            <p className="text-sm text-gray-600">
            {t("Blindness and Hearing Room D")}
            </p>
            
          </div>
        </div>
      </section>





      <section className="max-w-7xl mx-auto pb-20">
         <div className=" ">
            <img className="" src={line} alt="" />
          </div>
    </section>



      <section className="max-w-7xl mx-auto pb-20">
        <div className=" md:h-[500px] flex flex-col md:flex-row md:justify-between items-center md:items-start p-6 gap-8">
          <div className={`w-full md:w-1/2 lg:1/3 space-y-4 text-black text-center md:text-start ${currentLanguage === 'ar' ? 'body-ar  font-medium  ' : 'body-en-title'} `}>
            <p className="text-xs uppercase tracking-widest text-gray-500">{t("Seven")}</p>
            <h2 className="text-4xl lg:text-6xl ">{t("Blindness and Hearing Bath")}</h2>
            <h2 className="text-4xl lg:text-6xl ">{t("Blindness and Hearing Bath2")} </h2>
            <p className={`text-sm text-gray-600 ${currentLanguage === 'ar' ? 'body-ar  font-medium  ' : 'body-en'}`}>
              {t("Blindness and Hearing Bath D")}
            </p>
            
          </div>

          <div className="w-full md:1/2 lg:w-2/3 relative ">
            <img className="w-full h-full object-cover" src={bath_e_pwd} alt="" />
           
          </div>
        </div>
       
      </section>
      

    </>
  );
};

export default FullaccessDetails;
