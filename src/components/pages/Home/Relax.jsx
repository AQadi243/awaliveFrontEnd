
import relax from '../../../assets/relax.jpg'
import aveter from '../../../assets/avetar.png'
import signature from '../../../assets/signature.png'

const Relax = () => {
  return (
    <section  className="w-[90%] mx-auto py-10 md:py-20 text-[#2E2E2E] " data-speed="2">
      <div className="md:h-full flex flex-col md:flex-row gap-10 md:gap-14 xl:gap-28 items-center justify-center ">
        <div  className="w-full md:w-[40%] h-full">
          <img  className="w-full h-full" src={relax} alt="image" />
        </div>
        <div  className="w-full md:w-[60%]  flex flex-col gap-5 md:gap-6 justify-center text-center md:text-left " data-speed="1" >
          <p className="uppercase text-xs tracking-widest text-center md:text-left ">HOTEL BAYVIEW</p>
          <div className="text-2xl  md:text-4xl xl:text-7xl  tracking-wider flex flex-wrap md:w-[85%]  justify-center text-center md:text-left" style={{ fontFamily: "Gilda Display, serif" }}>
            <h2>Relax in our Hotel Resort</h2>
            {/* <!-- <h2>Hotel Resort</h2> --> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm">
            <p>Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.</p>
            <p>Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis.</p>           
            <p>Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.</p>
            <p>Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
            <div className="flex flex-col md:flex-row gap-3 md:gap-6  justify-evenly items-center ">
              <img src={aveter} alt="avatar" className="rounded-full w-20" />
              <div >
                <h2 className="text-xl font-semibold" style={{ fontFamily: "Gilda Display, serif" }}>Andrew Stuart</h2>
                <p className="text-sm">Hotel Manager</p>
              </div>
            </div>
            <div className="text-2xl flex justify-center">
              <img src={signature} alt="signature" className="w-[50%]" />
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>

    </section>
  )
}

export default Relax