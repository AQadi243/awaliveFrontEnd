import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/Error Page/ErrorPage";
import Home from "./components/pages/Home/Home";
import Check from "./components/pages/Check/Check";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Search from "./components/pages/SearchRoooms/Search";
import RoomDetails from "./components/pages/RoomDetails/RoomDetails";
import PrivateRoute from "./components/PrivetAuth/PrivetRoute";
import BookNow from "./components/pages/BookNow/BookNow";
// import BookingConfirm from "./components/pages/BookNow/BookingConfirm";
import MyBookings from "./components/pages/My Bookings/MyBookings";
import SinglePromoRoom from "./components/pages/Promotion/SinglePromoPage/SinglePromoRoom";
import BookTable from "./components/pages/Restaurent/BookTable/BookTable";
import Loginpage from "./components/sharedPages/LoginPage/Loginpage";
import SignUpPage from "./components/sharedPages/SignInPage/SignUpPage";
import BookingConfirm from "./components/pages/BookNow/BookingConfirm";
import Index from "./components/admin/dashboard/Index";
// import Users from "./components/admin/dashboard/component/pages/users";
import AllGuest from "./components/admin/dashboard/component/pages/allGuests/AllGuest";
import Users from "./components/admin/dashboard/component/pages/allGuests/Users";
import AddRoom from "./components/admin/dashboard/component/pages/Rooms/AddRooms/AddRoom";
import ThankYou from "./components/pages/ThankYouPage/ThankYou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/check",
        element: <Check />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/roomSearch",
        element: <Search />,
      },
      {
        path: "/room/:id",
        element: <RoomDetails />,
      },
      {
        path: "/booking",
        element: (
            
            <BookNow />
          
        ),
      },
      {
        path: "/BookingConfirm",
        element: <BookingConfirm />,
      },
      {
        path: "/thank-you",
        element: <ThankYou />,
      },
      {
        path: "/mybookings",
        element: (
          <PrivateRoute>
            
            <MyBookings />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/promotions",
      //   element: <Promotions />,
      // },
      {
        path: "/singlePromotionRoom/:id",
        element: <SinglePromoRoom />,
      },
      {
        path: "/bookTable",
        element: <BookTable />,
      },
      {
        path: "/login",
        element: <Loginpage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Index />
      </PrivateRoute>
    ),  
    children: [
      {
        path: "/dashboard",
        element: <Users />,
      },
      {
        path: "/dashboard/allGuest",
        element: <AllGuest />
      },
      {
        path: "/dashboard/room/add-room",
        element: <AddRoom />
      },
    ],
  },
]);

export default router;
