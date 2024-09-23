/* previous imports */
import App from "../main/App";
import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,  
        element: <Home />,
      },
      {
        path:"/users",
        element: <UserCrud />,
      },
    ],
  }
]);

export default router;
