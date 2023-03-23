import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/animation.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Config from "./components/Config";
/* import Test from "./components/Test"; */
import Error from "./components/Error";
import reportWebVitals from "./reportWebVitals";

const route = createBrowserRouter([
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
  /* {
    path: "/test",
    element: <Test />,
    errorElement: <Error />,
  }, */
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
