import relaxAreaImage from '../../../assets/relaxArea.webp'
import relaxAreaImage2 from '../../../assets/relazArea2.webp'

const RelaxArea = () => {
  return (
    <section style={{ fontFamily: "Gilda Display, serif" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative"  >
                <picture>
                <img src={relaxAreaImage} alt="" />
                </picture>
                <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 items-center text-white">
                    <p className="text-xs tracking-widest">FREE WIFI</p>
                    <h2 className="text-3xl">Relax Area</h2>
                    <div>
                        <a href="#" className="bg-black py-2 px-4 text-white text-xs md:text-sm">View All </a>
                    </div>
                </div>
            </div>
            
                <div className="relative" >
                    <picture>

                    <img src={relaxAreaImage2} alt="" />
                    </picture>
                    <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 items-center text-white">
                        <p className="text-xs tracking-widest">FREE WIFI</p>
                        <h2 className="text-3xl">Relax Area</h2>
                        <div>
                            <a href="#" className="bg-black py-2 px-4 text-white text-xs md:text-sm">View All </a>
                        </div>
                    </div>
                </div>
            
        </div>
   
      </section>
  )
}

export default RelaxArea