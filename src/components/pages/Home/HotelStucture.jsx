import structure from '../../../assets/Structure.webp'
import structure2 from '../../../assets/structure-2.webp'
import key16 from '../../../assets/icon-16.png'
import Lag15 from '../../../assets/icon-15.png'
import Ser17 from '../../../assets/icon-17.png'
import Wait18 from '../../../assets/icon-18.png'

const HotelStucture = () => {
  return (
    <section className="w-[90%] mx-auto py-10 md:py-24">
      <div className="flex flex-col md:flex-row gap-20">
        <div className="md:w-[50%] flex flex-col md:flex-row gap-10 items-center relative" >
          <img src={structure} alt="" className="md:w-[50%]" />
          <div className="w-24 bg-white py-8 px-5 flex flex-col justify-between md:absolute   right-[38%] top-10 h-96 text-center">
            <div>
              <p className="text-2xl font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>23</p>
              <p className='text-xs tracking-widest uppercase'>Rooms</p>
            </div>
            <div>
              <p className="text-2xl font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>12</p>
              <p className='text-xs tracking-widest uppercase'>SUITES</p>
            </div>
            <div>
              <p className="text-2xl font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>24</p>
              <p className='text-xs tracking-widest uppercase'>H/24</p>
            </div>
            <div>
              <p className="text-2xl font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>16</p>
              <p className='text-xs tracking-widest uppercase'>Lorem</p>
            </div>
          </div>
          <img src={structure2} alt="" className="md:w-[50%]" />
        </div>
        <div className="md:w-[50%] flex flex-col gap-3 justify-center">
          <p className="text-xs md:text-sm tracking-widest" style={{ fontFamily: "Gilda Display, serif" }}>HOTEL FACILITIES</p>
          <h2 className="text-4xl md:text-6xl" style={{ fontFamily: "Gilda Display, serif" }}>The Structure</h2>
          <p className='text-sm'>Quisque sollicitudin, nunc sit amet ullamcorper lobortis, lorem ante vehicula felis, non elementum dui magna nec leo. Quisque et sapien metus. Fusce sodales mauris a ligula aliquet tincidunt. Sed congue enim at tellus ullamcorper commodo quis eget dui.</p>
          <div className="flex justify-between bg-[#BE9874] py-2 px-2 text-white text-sm" style={{ fontFamily: "Gilda Display, serif" }}>
            <p>Room Service</p>
            <p>82%</p>
          </div>
          <div className="flex justify-between bg-[#2E2E2E] py-2 px-2 text-white text-sm" style={{ fontFamily: "Gilda Display, serif" }}>
            <p>Breakfast Included</p>
            <p>82%</p>
          </div>
          <div className="flex justify-between bg-[#2E2E2E] py-2 px-2 text-white text-sm" style={{ fontFamily: "Gilda Display, serif" }}>
            <p>Laundry & Ironing</p>
            <p>82%</p>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="grid gap-3 md:gap-0 grid-cols-2 md:grid-cols-4">
          <div className="flex gap-2 md:gap-5 items-center ">
            <img src={key16} alt="icon" className="w-10 md:w-20" />
            <div>
              <p className="text-sm md:text-md  font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>Smart Key</p>
              <p className="text-xs">Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-5 items-center ">
            <img src={Lag15} alt="icon" className="w-10 md:w-20" />
            <div>
              <p className="text-sm md:text-md font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>Store Luggage</p>
              <p className="text-xs">Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-5 items-center " >
            <img src={Ser17} alt="icon" className="w-10 md:w-20" />
            <div>
              <p className="text-sm md:text-md  font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>Room Service </p>
              <p className="text-xs">Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-5 items-center ">
            <img src={Wait18} alt="icon" className="w-10 md:w-20" />
            <div>
              <p className="text-sm md:text-md  font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>Disinfection </p>
              <p className="text-xs">Lorem ipsum dolor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HotelStucture