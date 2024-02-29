import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignUp from './pages/signup/index'
import Landing from './pages/landing/index'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "sign-app/",
    element: <App/>,
  },
  {
    path: "sign-app/signup",
    element: <SignUp />,
  },
  {
    path: "sign-app/landing",
    element: <Landing />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

