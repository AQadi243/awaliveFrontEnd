import { Outlet } from "react-router-dom";
import Navbar from "./components/sharedPages/Navbar/NavBar";
import Footer from "./components/sharedPages/Navbar/Footer";

function App() {
  return (
    <div className="">
          <Navbar />
          <Outlet />
          <Footer />
        
    </div>
  );
}

export default App;
