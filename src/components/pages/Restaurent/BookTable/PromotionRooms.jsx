import axios from "axios"
import i18next from "i18next"
import { useEffect, useState } from "react"


const PromotionRooms = () => {
  const currentLanguage = i18next.language
    const [promotion, setPromotionRooms] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const promotionRoomsAll = async () => {
        setLoading(true)
        try {
            const response = await axios.get('PromotionRooms.json')
            setPromotionRooms(response.data)
            setLoading(false)
            
        } catch (error) {
            console.log('promo ', error.message);
            setLoading(false)
        }

      }
      promotionRoomsAll()
    }, [])
    
  return (
    <>
    {loading ? (
        <div> loading...</div>
    ) : (
        <section className="max-w-7xl mx-auto py-20" >
        
          <div className="flex flex-col gap-3 text-center pt-10 text-black">
            <p className="text-sm tracking-[0.2rem] ">SUMMER PROMOTION</p>
            <div className={`py-4 flex flex-col gap-4 ${currentLanguage === "ar" ? "body-ar font-medium " : "body-en-title"} `} >
            <h1 className="text-3xl md:text-6xl ">Check the Mid-Season</h1>
            <h2 className="text-3xl md:text-6xl">Promotions</h2>
            </div>
          </div> 
       


        <div className=" w-full flex flex-col lg:flex-row gap-3  items-center justify-center py-10  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {promotion.map((singleROom) => (
                    <div key={singleROom.id} className="grid md:grid-cols-6 gap-5  ">
                      <div className="col-span-1">
                        <img src={singleROom.roomImage} alt="" className=" w-full h-20 object-cover " />
                      </div>
                       <div className="col-span-4 flex flex-col justify-between gap-2">
                           <h2 className="text-2xl">{singleROom.roomName}</h2>
                           <p className="text-xs">{singleROom.description }</p>
                       </div>
                       <div className="text-xs col-span-1 flex flex-col gap-4">
                           <p className="text-sm">{singleROom.price } $ / night</p>
                           <div>
                           <a href="../promotions/chaletRoom.html" className="bg-[#1C1C1D] text-xs tracking-widest uppercase text-white text-center px-4 ">Sale</a>
                           </div>
                       </div>
                    </div>
                ))}
            </div>
        </div>    
    </section>
    ) }
    </>
  )
}

export default PromotionRooms