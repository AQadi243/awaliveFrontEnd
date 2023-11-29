import axios from "axios"
import { useEffect, useState } from "react"


const PromotionRooms = () => {
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
        <section className="w-[90%] mx-auto py-10" style={{ fontFamily: "Gilda Display, serif" }}>
        
          <div className="flex flex-col gap-3 text-center pt-10">
            <p className="text-sm tracking-widest ">SUMMER PROMOTION</p>
            <h1 className="text-2xl md:text-5xl ">Check the Mid-Season</h1>
            <h2 className="text-2xl md:text-5xl">Promotions</h2>
          </div> 
       


        <div className=" w-full flex flex-col lg:flex-row gap-3  items-center justify-center py-10  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {promotion.map((singleROom) => (
                    <div key={singleROom.id} className="grid md:grid-cols-8 gap-5 items-center justify-center">
                        <img src={singleROom.roomImage} alt="" className="col-span-2" />
                       <div className="col-span-5 flex flex-col gap-2">
                           <h2 className="text-2xl">{singleROom.roomName}</h2>
                           <p className="text-xs">{singleROom.description }</p>
                       </div>
                       <div className="text-xs col-span-1 flex flex-col gap-4">
                           <p className="text-lg">{singleROom.price } $ / night</p>
                           <a href="../promotions/chaletRoom.html" className="bg-[#1C1C1D] text-xs tracking-widest uppercase text-white text-center ">Sale</a>
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