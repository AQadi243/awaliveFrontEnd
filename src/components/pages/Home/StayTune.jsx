import family from '../../../assets/familyroom.jpg'
import roomv from '../../../assets/roomsview.jpg'



const StayTune = () => {
  return (
    <section className="bg-[#F9F9F9]" >
      <div className="w-[90%] mx-auto py-10 md:py-24 ">
        <div className="text-center">
          <p className="text-sm tracking-widest" style={{ fontFamily: "Gilda Display, serif" }}>HOTEL NEWS & EVENT</p>
          <h2 className="text-4xl md:text-6xl py-5" style={{ fontFamily: "Gilda Display, serif" }}>Stay Tuned</h2>
          <p className="text-sm w-[50%] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci nisl, tempus ut sem a, scelerisque sollicitudin arcu</p>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-4">
            <div className="bg-white row-span-3 ">
              <img src={family} alt="" />
              <div className="py-8 px-8 flex flex-col gap-2">
                <p className="text-xs tracking-widest">MARCH 14, 2022</p>
                <h2 className="text-2xl" style={{ fontFamily: "Gilda Display, serif" }}>New Website</h2>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae cupiditate delectus incidunt omnis, voluptate quod sit, molestias natus mollitia sunt sequi aut voluptatum nostrum tempora harum ex. Nostrum, adipisci.</p>
                <div>
                  <a href="#" className="text-sm bg-[#BE9874] text-white py-1 px-2 uppercase">Read more</a>
                </div>
              </div>
            </div>
            <div className="bg-[#BE9874]  py-8 px-8 text-center ">
              <p className="text-xl text-white" style={{ fontFamily: "Gilda Display, serif" }}> Follow Our Luxury hotels and Resorts</p>
            </div>
            <div className="bg-zinc-700 row-span-2 relative" >
              <img src={roomv} alt="img" className="h-full" />
              <div className="absolute bottom-5 left-5 text-white flex flex-col gap-2" >
                <p className="text-xs tracking-widest">MERCH 12, 2023</p>
                <p className="text-2xl  " style={{ fontFamily: "Gilda Display, serif" }}>Daily Walk</p>
              </div>
            </div>
            <div className="bg-white row-span-3 ">
              <img src={family} alt="" />
              <div className="py-8 px-8 flex flex-col gap-2">
                <p className="text-xs tracking-widest ">MARCH 14, 2022</p>
                <h2 className="text-2xl" style={{ fontFamily: "Gilda Display, serif" }}>Aroun Us</h2>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae cupiditate delectus incidunt omnis, voluptate quod sit, molestias natus mollitia sunt sequi aut voluptatum nostrum tempora harum ex. Nostrum, adipisci.</p>
                <div>
                  <a href="#" className="text-sm bg-[#BE9874] text-white py-1 px-2 uppercase">Read more</a>
                </div>
              </div>
            </div>
            <div className="bg-zinc-700 row-span-2 relative">
              <img src={roomv} alt="img" className="h-full" />
              <div className="absolute bottom-5 left-5 text-white flex flex-col gap-2" >
                <p className="text-xs tracking-widest ">MERCH 12, 2023 </p>
                <p className="text-2xl " style={{ fontFamily: "Gilda Display, serif" }}>Relax Zone</p>
              </div>
            </div>
            <div className="bg-black  row-span-1 py-8 px-8 text-center ">
              <p className="text-xl text-white" style={{ fontFamily: "Gilda Display, serif" }}> Follow Our Luxury hotels and Resorts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StayTune