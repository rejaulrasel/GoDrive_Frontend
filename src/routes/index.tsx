import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/root/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Recover from "../pages/auth/Recover";
import ProfileSettings from "../pages/profile/ProfileSettings";
import RoleGard from "../utils/protected_route/RoleGard";
import UserRoot from "../pages/dashboard/user/UserRoot";
import UserOverview from "../pages/dashboard/user/UserOverview";
import Bookings from "../pages/dashboard/user/bookings/Bookings";
import Vehicles from "../pages/root/Vehicles";
import VehicleDetails from "../pages/root/VehicleDetails";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <Root />,
    // errorElement: <NotFoundError />,
    children: [
      { index: true, element: <Home /> },
      { path: "/vehicles", element: <Vehicles /> },
      { path: "/vehicles/details/:_id", element: <VehicleDetails /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
      { path: "/auth/recover", element: <Recover /> },
      { path: "/profile/settings", element: <ProfileSettings /> },

      // customer
      {
        path: "/dashboard/user",
        element: (
          <RoleGard role="user">
            <UserRoot />
          </RoleGard>
        ),
        children: [
          { path: "overview", element: <UserOverview /> },
          { path: "bookings/manage", element: <Bookings /> },
        ],
      },
    ],
  },
]);
