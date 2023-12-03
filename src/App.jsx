import { Outlet } from "react-router-dom";
import Navbar from "./components/sharedPages/Navbar/NavBar";
import Footer from "./components/sharedPages/Navbar/Footer";
import './App.css'
import AOS from 'aos';

import 'aos/dist/aos.css';
import { useEffect } from "react";
// import ScrollToTop from "./components/sharedPages/ScrollToTop";

function App() {
 
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 1,
      easing: "ease-in-out",    
     
    });
  }, []);
  

  return (
    <>
    {/* <ScrollToTop> */}

    <div className="App">
          <Navbar />
          <Outlet />
          <Footer />
        
    </div>
    {/* </ScrollToTop> */}
    </>
  );
}

export default App;
