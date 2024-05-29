import { useNavigate, useParams } from "react-router-dom";
import logo from "../../../../../../../public/img/awalive-Blaack.png";
import InvoiceTable from "./InvoiceTable";
import { message } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import i18next from "i18next";

const Invoice = () => {
  const navigate = useNavigate();
  const currentLanguage = i18next.language;
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [bookedRooms, setBookedRooms] = useState([]);

 




 useEffect(() => {
  if (!id) {
    navigate('/dashboard/room/all-bookings'); // Navigate to a fallback route if id is undefined
    message.error("Error in finding booking id")
    return; // Stop further execution
  }

    const fetchUserOrders = async () => {
      try {
        const bookingId = id;
        const userToken = localStorage.getItem("token");

        const response = await axios.get(
          // `https://type-script-server.vercel.app/api/booking/${userEmail}?lang=${currentLanguage}`,
          `https://www.awalivhotel.com/api/booking/invoice/${bookingId}?lang=${currentLanguage}`,
          // `https://type-script-server.vercel.app/api/booking/invoice/${bookingId}?lang=${currentLanguage}`,
          // `http://localhost:5000/api/booking/invoice/${bookingId}?lang=${currentLanguage}`,
          {
            headers: {
              Authorization: `${userToken}`,
              // 'Accept-Language': currentLanguage,
            },
          }
        );
        if (response.status === 200) {
          setBookedRooms(response.data.data);

          
          message.success(response.data.message)
        } else {
          
          message.error("Failed to fetch user orders")
        }
      } catch (error) {
        let errorMessage = "Please Login";

        // Check if it's an Axios error with a response
        if (error.isAxiosError && error.response) {
          // Check if the error response has a data field with issues
          if (error.response.data && error.response.data.issues) {
            const issues = error.response.data.issues;
            if (issues.length > 0 && issues[0].message) {
              errorMessage = issues[0].message;
            }
          } else if (error.response.data && error.response.data.message) {
            // If there are no issues but a message field is present
            errorMessage = error.response.data.message;
          } else {
            // Default message from response statusText
            errorMessage = error.response.statusText || errorMessage;
          }
        } else {
          // For non-Axios errors (like network errors)
          errorMessage = error.message || "An unexpected error occurred.";
        }

        message.error(errorMessage)
      } finally {
        setLoading(false);
      }
    };

    fetchUserOrders();
  }, [id, currentLanguage, navigate]);


  console.log(bookedRooms,'booking datasa');

  if (loading) {
    return <div>Loading...</div>; // Or handle this case appropriately
  }
  return (
    <>
      <section className=" max-w-5xl mx-auto border ">
        <div className="p-6">
          <div className="flex flex-row justify-between items-center pb-4 border-b">
            <div>
              <p className="font-semibold">Invoice</p>
            </div>
            {
              bookedRooms.paymentStatus==='Pending' ?(
                <div className="flex gap-4 items-center justify-center ">
                <button className=" py-2 px-4 text-xs">Payment :</button>
                <button className="border py-2 px-4 bg-red-300 rounded-md  text-xs" >{bookedRooms.paymentStatus}</button>
              </div>
              ):
              <div className="flex gap-4 items-center justify-center ">
              <button className="border py-2 px-4 bg-green-300 rounded-md text-xs">Save</button>
              <button className="border py-2 px-4 bg-red-300 rounded-md  text-xs" >print</button>
            </div>
            }

           
          </div>
          {/* heaser start */}
            <div className="flex justify-between items-center">
              <div className="py-4">
                {/* <Link to={"/"} className=" text-sm md:text-xl  "> */}
                {/* {t("Awalive Hotel")} */}
                <img src={logo} alt="awalive-hotel-logo" className=" h-24 max-w-32 " />
                {/* </Link> */}
              </div>
              <div>
                <p className="text-sm font-semibold mb-2">Details</p>
                <div className="text-xs fl">
                  <p>TAX : 5835FA5****5S</p>
                  <p>Bank : Lotus bank</p>
                  <p>IFCS : LOT125****US</p>
                  <p>VAT: PL6541215450</p>
                </div>
              </div>
            </div>
          {/* heaser end */}
        {/* dates start  */}
          <div className="py-6 bg-pink-100 rounded-md">
            <div className="flex justify-around text-xs">
            <div>
                <p>Invoice</p>
                <p className="font-semibold">{bookedRooms?.bookingNumber}</p>
            </div>
            <div>
                <p>Amount</p>
                <p className="font-semibold">SAR {bookedRooms?.invoiceDetails?.total} </p>
            </div>
            <div>
                <p>CheckIn</p>
                <p className="font-semibold">{bookedRooms?.checkIn}</p>
            </div>
            <div>
                <p>CheckOut</p>
                <p className="font-semibold">{bookedRooms?.checkOut}</p>
            </div>
            </div>
          </div>
        {/* dates start  */}
        <div className=" min-h-67  rounded-md mt-3 ">
            <InvoiceTable  bookedRooms={bookedRooms}  />
        </div>
        <div className="grid grid-cols-5  gap-4">
            <div className="bg-pink-100 rounded-md col-span-4 p-4 text-xs">
                <p className="font-semibold mt-2">Note</p>
                <p className="text-gray-400">Your country territory tax has been apply.</p>
                <p className="text-gray-400">Your voucher cannot be applied, because you enter wrong code.</p>
            </div>
            <div className="flex flex-col gap-2 col-span-1 text-sm font-semibold">
                <div className="flex justify-between">
                    <p className="">Subtotal</p>
                    <p>SAR {bookedRooms?.invoiceDetails?.subtotal}</p>
                </div>
                <div className="flex justify-between">
                    <p>Vat(15%)</p>
                    <p>SAR {bookedRooms?.invoiceDetails?.vat}</p>
                </div>
                <div className="flex justify-between">
                    <p>Total</p>
                    <p>SAR {bookedRooms?.invoiceDetails?.total}</p>
                </div>
            </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Invoice;
