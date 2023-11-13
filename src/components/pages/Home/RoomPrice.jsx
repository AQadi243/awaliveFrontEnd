
import heroSlide from '../../../assets/HerrooSlid.jpg'

const RoomPrice = () => {
  return (
    <section className="text-[#2E2E2E]" style={{ backgroundImage: `url(${heroSlide})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}>
      <div className="w-[90%] mx-auto py-10 md:py-16">
        <div className="text-center py-10 text-white">
          <p className="text-xs md:text-sm tracking-widest uppercase">OUR ROOM PRICES</p>
          <h2 className="text-4xl py-4 md:text-6xl md:py-3" style={{ fontFamily: "Gilda Display, serif" }}>The Best Prices</h2>
        </div>
        {/* pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="grid-cols-1 bg-white text-center items-center  py-10 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl " style={{ fontFamily: "Gilda Display, serif" }}>Single Room</h2>
            <p className="py-3 md:py-5 text-xl md:text-2xl">$ <span className="text-3xl md:text-5xl" style={{ fontFamily: "Gilda Display, serif" }}>45</span> / night</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Proin lacinia vehicula amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Morbi lacinia sagittis acum</li>
              <li>consectetur adipiscing elit</li>
            </ul>
            <div className="py-10">
              <a href="#" className="uppercase py-3 px-4 bg-[#BE9874] hover:bg-[#2E2E2E] text-white text-sm md:text-md">more info</a>
            </div>
          </div>
          {/* 2nd price card start */}
          <div className="grid-cols-1 bg-[#BE9874] text-white text-center py-10 cardScale priceBest items-center flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl " style={{ fontFamily: "Gilda Display, serif" }}>Single Room</h2>
            <p className="py-3 text-xl md:text-2xl">$ <span className="text-3xl md:text-5xl" style={{ fontFamily: "Gilda Display, serif" }}>45</span> / night</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Proin lacinia vehicula amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Morbi lacinia sagittis acum</li>
              <li>consectetur adipiscing elit</li>
            </ul>
            <div className="py-10">
              <a href="#" className="uppercase py-3 px-4 bg-[#2E2E2E] text-white text-sm md:text-md">more info</a>
            </div>
          </div>
          {/* 2nd price card end */}
          {/* 3rd price card start */}
          <div className="grid-cols-1 bg-white text-center py-10">
            <h2 className="text-2xl md:text-2xl " style={{ fontFamily: "Gilda Display, serif" }}>Single Room</h2>
            <p className="py-3 text-xl md:text-2xl">$ <span className="text-3xl md:text-5xl" style={{ fontFamily: "Gilda Display, serif" }}>45</span > / night</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Proin lacinia vehicula amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Morbi lacinia sagittis acum</li>
              <li>consectetur adipiscing elit</li>
            </ul>
            <div className="py-10">
              <a href="#" className="uppercase py-3 px-4 bg-[#BE9874] hover:bg-[#2E2E2E] text-white text-sm md:text-md">more info</a>
            </div>
          </div>
          {/* 3rd price card end */}
        </div>
        {/* pricing cards end */}
      </div>
    </section>
  )
}

export default RoomPrice