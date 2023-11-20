import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import News from "./Pages/News";
import Error from "./Pages/Error";
import Welcome from "./Pages/Welcome";
import News_All from "./Pages/News_All";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <Error />,
  },
  {
    path: "/news/all",
    element: <News_All />,
    errorElement: <Error />,
  },
  {
    path: "/news",
    element: <News />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
