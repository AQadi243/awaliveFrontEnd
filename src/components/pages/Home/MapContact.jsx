import ReactMap from "./ReactMap"

const MapContact = () => {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row text-white">
        <div className="w-full md:w-[50%]">
            <ReactMap />
          {/* <iframe className="w-full border-0" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1854.2410791708492!2d39.12836462878631!3d21.64509348623772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssa!4v1694594481671!5m2!1sen!2ssa" width="600" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
        <div className="bg-[#1C1C1C] w-full md:w-[25%] py-6 px-8 flex flex-col  justify-evenly">
            <h2 className="text-xl md:text-3xl" style={{ fontFamily: "Gilda Display, serif" }}>Contact Us</h2>         
          <div className="text-sm">
            <p>Reservation :</p>
            <p>+ 202 303 404</p>
          </div>
          <div className="text-sm">
            <p>Reservation :</p>
            <p>+ 202 303 404</p>
          </div>
        </div>
        <div className="bg-[#BE9874] w-full md:w-[25%] py-6 px-8 flex flex-col justify-evenly" >
            <h2 className="text-xl md:text-3xl" style={{ fontFamily: "Gilda Display, serif" }}>Drop A Line</h2>         
          <div className="text-sm">
            <p>Reservation :</p>
            <p>+ 202 303 404</p>
          </div>
          <div className="text-sm">
            <p>Reservation :</p>
            <p>+ 202 303 404</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapContact