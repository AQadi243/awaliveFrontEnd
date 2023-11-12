import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './components/pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    errorElement:<div>Error page</div>,
    children:[
      {
        path: '/',
        element: <Home />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
