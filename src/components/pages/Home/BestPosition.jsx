import HeroImg from '../../../assets/HerrooSlid.jpg'
import visa from '../../../assets/visa.png'
import pay from '../../../assets/paypal-logo.png'
import credit from '../../../assets/credit-card.png'
import stripe from '../../../assets/stripe.png'
import twal from '../../../assets/hotelTwl.png'

const BestPosition = () => {

    const styles = {
        backgroundImage: `url(${HeroImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      };
  return (
    <section className=" text-white" style={styles} >
      <div className="w-[90%] mx-auto py-10 md:py-28">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-[50%] flex flex-col gap-3 ">
            <p className="text-xs md:text-sm tracking-widest" style={{ fontFamily: "Gilda Display, serif" }}>BUS STATION NEAR</p>
            <h2 className="text-4xl md:text-6xl" style={{ fontFamily: "Gilda Display, serif" }}>Best City Position</h2>
            <p className='text-sm'>Suspendisse commodo bibendum purus at hendrerit. Vivamus aliquam bibendum fringilla. Praesent cursus felis nunc, quis vulputate sapien posuere vitae. Aliquam erat volutpat. Cras egestas porta massa eget pulvinar. Cras non enim et dui pharetra hendrerit mattis.</p>
            <p className='tracking-widest' style={{ fontFamily: "Gilda Display, serif" }}>PAYMENT OPTIONS :</p>
            <div className="flex gap-5">
              <img src={visa} alt="logo" className="w-14" />
              <img src={pay} alt="logo" className="w-14" />
              <img src={credit} alt="logo" className="w-14" />
              <img src={stripe} alt="logo" className="w-14" />
            </div>
          </div>
          <div className="md:w-[50%] flex flex-col items-center">
            
              <div className="w-56 h-56 bg-[#BE9874] opacity-90 rounded-full text-center flex flex-col justify-center gap-2 offerScale" style={{ fontFamily: "Gilda Display, serif" }}  >
                <p className="text-xs tracking-widest font-semibold ">Up to </p>
                <p className="text-7xl">50%</p>
                <p className="text-xs tracking-widest font-semibold uppercase" >on selected rooms</p>
              </div>
            
            <img src={twal} alt="img" className="w-80 " />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestPosition