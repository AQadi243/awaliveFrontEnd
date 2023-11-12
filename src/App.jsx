import { Outlet } from "react-router-dom";
import Navbar from "./components/sharedPages/Navbar/NavBar";

function App() {
  return (
    <div className="">
          <Navbar />
          <Outlet />
        
    </div>
  );
}

export default App;
