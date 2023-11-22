import PageAnimation from "../../PageAnimation/PageAnimation"




const Footer = () => {
  return (
    <>
    <PageAnimation> 
    <section className="bg-[#1D1D1D]" style={{ fontFamily: "Gilda Display, serif" }}>
      <div className="">
        <div className="px-8 py-10 grid grid-cols-1 md:grid-cols-3 text-white text-center gap-3">
          <div className="">
            <p className="text-lg md:text-xl" >Phone Support</p>
            <p className="text-xs md:text-sm text-gray-400" >24 HOURS A DAY</p>
            <p className="py-3 text-lg md:text-xl" >+ 01 345 647 745</p>
          </div>
          <div className="">
            <p className="text-lg md:text-xl" >Connect With Us</p>
            <p className="text-xs md:text-sm text-gray-400" >SOCIAL MEDIA CHANNELS</p>
            <ul className="py-3 text-lg md:text-xl">
              <li className="flex gap-5 justify-center">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-youtube"></i>
              </li>
            </ul>
          </div>
          <div className="" style={{ fontFamily: "Gilda Display, serif" }}>
            <p className="text-lg md:text-xl">Newsletter</p>
            <p className="text-xs md:text-sm text-gray-400" >SIGN UP FOR SPECIAL OFFERS</p>
            <div className="py-3 text-lg md:text-xl flex justify-center">
              <input className=" py-2 px-4 md:px-6 bg-black text-sm " type="text" name="" id="" placeholder="Insert you email" />
              <button className="uppercase bg-[#BE9874] py-2 px-6 text-sm  " >SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="bg-[#151516] py-8" style={{ fontFamily: "Gilda Display, serif" }}>
      <div className="w-[90%] mx-auto flex flex-col md:flex-row ">
        <div className="md:w-[50%] "> 
          <ul className="flex justify-between md:gap-3 text-white md:justify-start w-full text-sm">
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Booking</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="md:w-[50%] flex justify-between md:gap-3 md:justify-end">
          <div className="text-md font bold text-white">
            YouTube
        </div>
        <div className="text-md font bold text-white">
          Pinterest
      </div>
      <div className="text-md font bold text-white">
        Instagram
    </div>
        </div>
      </div>
    </footer>
    </PageAnimation>
    </>
  )
}

export default Footer