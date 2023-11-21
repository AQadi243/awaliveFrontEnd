import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import App from './App';
import Home from './components/pages/Home/Home';
import RoomDetails from './components/pages/RoomDetails/RoomDetails';
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import Check from './components/pages/Check/Check';
import AuthProvider from './components/sharedPages/Context/AuthProvider';
import BookNow from './components/pages/BookNow/BookNow';
import BookingConfirm from './components/pages/BookNow/BookingConfirm';

// import 'flag-icon-css/css/flag-icon.min.css'



i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
      // loadPath: './assets/locales/{{lng}}/translation.json',
    },
  })

  const loadingMarkup = (
    <div className="py-4 text-center">
      <h3>Loading..</h3>
    </div>
  )

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    errorElement:<div>Error page</div>,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/check',
        element: <Check />
      },
      {
        path: '/room/:id',
        element: <RoomDetails />
      },
      {
        path: '/booking',
        element: <BookNow />
      },
      {
        path: '/BookingConfirm',
        element: <BookingConfirm />
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </React.StrictMode>
  </Suspense>
);

