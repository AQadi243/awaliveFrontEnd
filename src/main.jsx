import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./components/pages/Home/Home";
import RoomDetails from "./components/pages/RoomDetails/RoomDetails";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import Check from "./components/pages/Check/Check";
import AuthProvider from "./components/sharedPages/Context/AuthProvider";
import BookNow from "./components/pages/BookNow/BookNow";
import BookingConfirm from "./components/pages/BookNow/BookingConfirm";
import Search from "./components/pages/SearchRoooms/Search";
import { AnimatePresence } from "framer-motion";
import Contact from "./components/pages/Contact/Contact";
import About from "./components/pages/About/About";
import BookTable from "./components/pages/Restaurent/BookTable/BookTable";
import Loginpage from "./components/sharedPages/LoginPage/Loginpage";
import SignUpPage from "./components/sharedPages/SignInPage/SignUpPage";
import PrivateRoute from "./components/PrivetAuth/PrivetRoute";
import { Spin } from "antd";
import MyBookings from "./components/pages/My Bookings/MyBookings";
import ErrorPage from "./components/Error Page/ErrorPage";
import Promotions from "./components/pages/Promotion/Promotions";
import SinglePromoRoom from "./components/pages/Promotion/SinglePromoPage/SinglePromoRoom";
// import ScrollToTop from './components/sharedPages/ScrollToTop';

// import 'flag-icon-css/css/flag-icon.min.css'

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },

    backend: {
      // loadPath: '/locales/{{lng}}/translation.json',
      loadPath: "/Languages/{{lng}}/translation.json",
      // loadPath: './assets/locales/{{lng}}/translation.json',
    },
  });

const loadingMarkup = (
  <div className=" h-screen flex flex-col items-center justify-center text-center gap-5">
    <h1 className="text-6xl">Awalive</h1>
    <Spin />
    <h3 className="text-3xl">Loading..</h3>
  </div>
);

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
          <PrivateRoute>
            {" "}
            <BookNow />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/BookingConfirm",
        element: (
          <PrivateRoute>
            {" "}
            <BookingConfirm />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/mybookings",
        element: (
          <PrivateRoute>
            {" "}
            <MyBookings />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/promotions",
        element: <Promotions />,
      },
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
        <AuthProvider>
          <AnimatePresence mode="wait">
            <RouterProvider router={router} />
          </AnimatePresence>
        </AuthProvider>
    </React.StrictMode>
  </Suspense>
);
