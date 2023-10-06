import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  // {
  //   path: "/:zodiacSign",
  //   element: <Zodiac />,
  // },
  // {
  //   path: "/userlist",
  //   element: <UserList />,
  // },
  // {
  //   path: "/:zodiacSign/horoscope",
  //   element: <Horoscope />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
