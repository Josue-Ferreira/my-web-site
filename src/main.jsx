import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import Games from './pages/Games.jsx';
import ContactMe from './pages/ContactMe.jsx';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/:lang",
    element: <Home />,
  },
  {
    path: "/coming-soon/:page/:lang",
    element: <ComingSoon />,
  },
  {
    path: "/projects/:lang",
    element: <Games />,
  },
  {
    path: "/contact-me/:lang",
    element: <ContactMe />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
