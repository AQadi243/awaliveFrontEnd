import { Spin } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUpPage = () => {
  const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [errorMessageReg, setErrorMessageReg] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""   
      });


      const validateFields = () => {
        const newErrors = {  
          name: name ? "" : "Email is required",
          email: email ? "" : "Email is required",
          phone: email ? "" : "Email is required",
          password: password ? "" : "Phone is required",
        };
    
        setErrors(newErrors);
    
        return Object.values(newErrors).every((error) => error === "");
      };

        
      // };
      const handleRegister = async () => {
        setLoading(true)
        // Validate fields before proceeding
        if (!validateFields()) {
          return;
        }
      
        // Consolidate all information into an object
        const registerData = {
          name: name,
          email: email,
          phone: phone,
          password: password,
        };
      
        try {
          
          const response = await axios.post('https://awalive-server-side-hzpa.vercel.app/register', registerData);
          console.log('User registered successfully:', response.data);
          setErrorMessageReg('User registered successfully')
          setLoading(false)

        } catch (error) {
          // Registration failed, handle the error
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Registration failed:', error.response.data);
            setErrorMessageReg('Registration failed:', error.response.data)
          setLoading(false)

          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
            setErrorMessageReg('No response received:', error.request)
        setLoading(false)

          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error:', error.message);
            setErrorMessageReg('Error:', error.message)
        setLoading(false)

          }
        }
        navigate('/login')
        setLoading(false)

      };
      
      



  return (
   
      <section className="w-[90%] md:w-[60%] mx-auto">
        <div className="shadow-lg py-10" style={{ fontFamily: "Gilda Display, serif" }}>
            <h1 className="text-3xl nd:text-4xl">Become a Member</h1>
            <h1 className="text-2xl"> Its free to join!</h1>
        <div className="py-20 px-4 md:px-10">
          <div className="w-full flex flex-col gap-5 " id="guest-info-form">
            <input
              type="name"
              name="name"
              id="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`py-2 px-2 border bg-slate-50 ${
                errors.name && "border-red-500"
              }`}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`py-2 px-2 border bg-slate-50 ${
                errors.email && "border-red-500"
              }`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`py-2 px-2 border bg-slate-50 ${
                errors.name && "border-red-500"
              }`}
              required
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone}</p>
            )}

            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`py-2 px-2 border bg-slate-50 ${
                errors.password && "border-red-500"
              }`}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
            {errorMessageReg && (
              <p className="text-red-500 text-xs">{errorMessageReg}</p>
            )}
            {
              loading ?  <Spin />   : (
                <button
              type="button"
              id="confirm-button"
              className="uppercase bg-[#BE9874] text-xs text-white py-3"
              onClick={handleRegister}
            >
              Join
            </button>
              )
            }
            
          </div>
        </div>
        </div>
      </section>
    
  );
};

export default SignUpPage;
