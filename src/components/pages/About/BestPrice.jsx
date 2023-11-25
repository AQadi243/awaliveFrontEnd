import { Link } from "react-router-dom";
import img from "../../../assets/aboutRV.jpg";
import imgAVT from "../../../assets/avetar.png";
import bgim from "../../../assets/paralox.jpeg";
import roomImg from "../../../assets/luxuryRoom.jpg";
import roomImg2 from "../../../assets/doubleRoom.jpg";
import keyImg from "../../../assets/icon-16.png";
import lagg from "../../../assets/icon-15.png";
import ser from "../../../assets/icon-17.png";
import wait from "../../../assets/icon-18.png";
const BestPrice = () => {
  return (
    <>
    <section className={` h-[calc(100vh-20%)]   w-[90%] mx-auto py-20`} style={{ fontFamily: "Gilda Display, serif" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
        <div className="h-full flex flex-col justify-between gap-2 ">
          <p className="text-xs tracking-widest">HOTEL FACILITIES</p>
          <h2 className="text-4xl md:text-6xl">The Structure</h2>
          <p className="text-xs">
            Quisque sollicitudin, nunc sit amet ullamcorper lobortis, lorem ante
            vehicula felis, non elementum dui magna nec leo. Quisque et sapien
            metus. Fusce sodales mauris a ligula aliquet tincidunt. Sed congue
            enim at tellus ullamcorper commodo quis eget dui.
          </p>
          <div className="flex justify-between  bg-[#BE9874] py-2 px-2 text-white text-sm">
            <p className="text-xs">Room Service</p>
            <p>82%</p>
          </div>
          <div className="flex justify-between bg-[#2E2E2E] py-2 px-2 text-white text-sm">
            <p className="text-xs">Breakfast Included</p>
            <p>82%</p>
          </div>
          <div className="flex justify-between bg-[#2E2E2E] py-2 px-2 text-white text-sm">
            <p className="text-xs">Laundry & Ironing</p>
            <p>82%</p>
          </div>
        </div>
        <div className="md:h-[25rem] relative">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover"
           
          />
          <div className=" absolute w-full px-2 md:px-4 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center text-white flex flex-col items-center">
            <img
              src={imgAVT}
              alt="avatar"
              className="rounded-full   w-16"
            />
            <p className="text-xs pt-4">
              Cras consectetur placerat nisl, ullamcorper feugiat est aliquet
              eu. Quisque in dolor euismod, interdum felis mattis, dignissim
              velit. Vestibulum ultricies euismod arcu tincidunt pellentesque.
            </p>
            <ul className="text-white text-sm py-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </ul>
            <h2 className="text-xl">Abby Prince</h2>
            <p className="text-sm">Hotel Customer</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className=" h-screen flex items-center relative " style={{backgroundImage: `url(${bgim})`, backgroundRepeat: "no-repeat", backgroundPosition:'center center',  backgroundSize: 'cover',fontFamily: "Gilda Display, serif" }}>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
        <div className="w-[70%]  text-center text-white flex flex-col gap-1 md:gap-4 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 ">
          <h1 className="text-2xl md:text-6xl">Our Goal is your</h1>
          <h2 className="text-2xl md:text-6xl">Relaxation & Safety</h2>
          <p className="text-xs md:text-sm md:w-[60%] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lobortis diam. Pellentesque nec enim ipsum. Fusce ex nisi, efficitur vel odio eu, egestas mattis .
          </p>
          <div className="py-4">
            <Link to={'/contact'} className="uppercase text-white bg-[#BE9874] py-3 px-6 text-sm "> Contact us</Link>
          </div>
        </div>
      </div>
    </section>
    <section className="w-[90%] mx-auto py-10 md:py-20" style={{ fontFamily: "Gilda Display, serif" }}>
    <div className="flex flex-col md:flex-row gap-6 justify-between  items-center">
        <div className="md:w-[40%] flex flex-col text-center md:items-end text-2xl  md:text-5xl ">
          <p>We make the best</p>
          <p>for all our Guests</p>
          <p>Come to visit our</p>
          <p>Sea Hotel</p>
        </div>
        <div className="md:w-[60%] grid grid-col-1 md:grid-cols-2 gap-6 h-full">
          <div className=" h-full relative" >
            <img src={roomImg} alt="" className="h-full" />
            <div className="absolute bottom-5 left-3 text-white">
              <p>Room Service </p>
              <p className="text-xs">Included</p>
            </div>
          </div>
          <div className=" h-full relative" >
            <img src={roomImg2} alt="" className="h-full" />
            <div className="absolute bottom-5 left-3 text-white">
              <p>Laundry</p>
              <p className="text-xs">Additional</p>
            </div>
          </div>
        </div>
    </div>
      <div className="w-[80%] mx-auto">
        <div className="pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row  gap-5 items-center ">
              <img src={keyImg} alt="icon" className="w-14 md:w-20" />
              <div className="text-center md:text-start">
                <p className="text-sm">Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus. Ut velit augue, imperdiet vel leo id, cursus vehicula urna.</p>
                <p className="text-xs font-semibold tracking-widest pt-2 ">Learn More</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-5 items-center ">
              <img src={lagg} alt="icon" className="w-14 md:w-20" />
              <div className="text-center md:text-start">
                <p className="text-sm  ">Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus. Ut velit augue, imperdiet vel leo id, cursus vehicula urna.</p>
                <p className="text-xs font-semibold tracking-widest pt-2 ">Learn More</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-5 items-center ">
              <img src={ser} alt="icon" className="w-14 md:w-20" />
              <div className="text-center md:text-start">
                <p className="text-sm ">Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus. Ut velit augue, imperdiet vel leo id, cursus vehicula urna.</p>
                <p className="text-xs font-semibold tracking-widest pt-2 ">Learn More</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-5 items-center ">
              <img src={wait} alt="icon" className="w-14 md:w-20"/>
              <div className="text-center md:text-start">
                <p className="text-sm ">Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus. Ut velit augue, imperdiet vel leo id, cursus vehicula urna.</p>
                <p className="text-xs font-semibold tracking-widest pt-2 ">Learn More</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 text-center">
          <Link to={'/roomSearch'} className="font-semibold text-xs tracking-widest text-white bg-[#BE9874] py-3 px-6">BOOK NOW</Link>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default BestPrice;
