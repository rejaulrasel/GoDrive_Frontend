import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/root/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Recover from "../pages/auth/Recover";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <Root />,
    // errorElement: <NotFoundError />,
    children: [
      { index: true, element: <Home /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
      { path: "/auth/recover", element: <Recover /> },
    ],
  },
]);
