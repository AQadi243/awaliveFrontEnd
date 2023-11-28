
import { useContext, useEffect, useState } from 'react';
import { Spin } from 'antd';
import img from '../../../assets/relaxArea.jpg'
import { Link, useLocation, useNavigate,  } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
// import { Link } from 'react-router-dom';

const Loginpage = () => {
  const navigate = useNavigate()
  const { handleLogin , error, user, } = useContext(AuthContext);
  const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: "",
        password: ""   
      });
      const location = useLocation();
  const from = location.state?.from?.pathname || '/';
      
      console.log(user);
      const validateFields = () => {
        const newErrors = {
         
          email: email ? "" : "Email is required",
          password: password ? "" : "Phone is required",
        };
    
        setErrors(newErrors);
    
        return Object.values(newErrors).every((error) => error === "");
      };

      

      const handleLoginClick = async () => {
        setLoading(true)
        if (validateFields()) {
          await handleLogin(email, password);
        }
      
        setLoading(false)
      };

      useEffect(() => {
        if (user) { // If user is logged in
          navigate(from, { replace: true }); // Navigate to the 'from' route or default '/'
        }
      }, [user, navigate, from]);


  return (
    
       <section className='w-[90%] mx-auto'>
        <div className='  md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 justify-between px-4 md:px-10 py-10' style={{ fontFamily: "Gilda Display, serif" }}>
            <div className='md:w-[80%]'>
                <h1 className='text-3xl'>Welcome to Awalive International</h1>
                <p className='text-xl py-5'>Log In to your account</p>
                <div className="w-full flex flex-col gap-5 " id="guest-info-form">
                    
                    
                    
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`py-2 px-2 border bg-slate-50 ${errors.email && 'border-red-500'}`}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`py-2 px-2 border bg-slate-50 ${errors.password && 'border-red-500'}`}
                      required
                    />
                    {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                    {error && <p className="text-red-500 text-xs">{error}</p>}

                    {loading ? <Spin /> : (
                      <button
                      type="button"
                      id="confirm-button"
                      className="uppercase bg-[#BE9874] text-xs text-white py-3"
                      onClick={handleLoginClick}
                    >
                      Log In
                    </button>
                    ) 
                    }
                    
                  </div>
                  <p className='text-red-500 text-xs '>Forget Password</p>
                  
            </div>
            <div className='md:w-[80%] flex flex-col gap-4'>
                {/* <p className='text-xl py-5'>Log In to your account</p> */}
                <h2 className='text-xl '>Join Awalive International</h2>
                <img className='' src={img} alt="" />
                

                <li className='text-xs ' >Enjoy our lowest rates, all the time</li>
                <li className='text-xs '>Free in-room Wi-Fi</li>
                
                
                    <Link  to={'/signup'} className='w-full py-4  px-2 text-center  bg-[#BE9874] text-white  '>
                        Join now
                  
                    </Link>
                
            </div>
        </div>
       </section>
     
  )
}

export default Loginpage