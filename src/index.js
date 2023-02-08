import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/animation.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Config from "./components/Config";
import Error from "./components/Error";
import reportWebVitals from "./reportWebVitals";

/* const home = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "config",
        element: <Config />,
        errorElement: <Error />,
      },
    ],
  },
]); */

const home = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/config",
    element: <Config />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={home} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
