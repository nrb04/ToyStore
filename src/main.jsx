import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";

import "./index.css";
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel }, true);
import { RouterProvider } from "react-router-dom";
import router from "./route/Router.jsx";
import { AuthenticationProvider } from "react-auth-provider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
