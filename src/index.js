import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ErrorPage from "./error-page";
import Contact from './routes/contact'
import Navbar from './components/Navbar';
import Project from './routes/projects';
import Home from './routes/home';
import Shop from './components/shop/shop';
import Product from './components/shop/product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: './components/Navbar.js',
        element: <Navbar />
      },
      {
        path : "shop",
        element : <Shop />,
      },
      {
        path : 'projects',
        element : <Project/>,
      },
      {
        path : '/home',
        element : <Home />
      },
      {
        path : 'contact',
        element : <Contact />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
