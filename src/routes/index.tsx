import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/root/Home";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <Root />,
    // errorElement: <NotFoundError />,
    children: [{ index: true, element: <Home /> }],
  },
]);
