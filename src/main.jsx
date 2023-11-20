import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import News from "./Pages/News";
import Error from "./Pages/Error";
import Welcome from "./Pages/Welcome";
import News_Category from "./Pages/News_Category";
import "./index.css";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <Error />,
  },
  {
    path: "/news/:cat",
    element: <News_Category />,
    errorElement: <Error />,
  },
  {
    path: "/news/:cat/:newsId",
    element: <News />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
