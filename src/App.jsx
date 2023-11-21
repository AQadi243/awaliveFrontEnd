import { Outlet } from "react-router-dom";
import Navbar from "./components/sharedPages/Navbar/NavBar";
import Footer from "./components/sharedPages/Navbar/Footer";
import './App.css'

function App() {
  return (
    <div className="App">
          <Navbar />
          <Outlet />
          <Footer />
        
    </div>
  );
}

export default App;
