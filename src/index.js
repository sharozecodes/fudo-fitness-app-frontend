import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
