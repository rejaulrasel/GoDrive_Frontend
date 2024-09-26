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
import Contact from "../pages/root/Contact";
import About from "../pages/root/About";
import AdminOverview from "../pages/dashboard/admin/AdminOverview";
import AdminRoot from "../pages/dashboard/admin/AdminRoot";
import Admins from "../pages/dashboard/admin/users/Admins";
import Customers from "../pages/dashboard/admin/users/Customers";
import UpcomingBookings from "../pages/dashboard/admin/bookings/UpcomingBookings";
import OngoingBookings from "../pages/dashboard/admin/bookings/OngoingBookings";
import SuccessfulBookings from "../pages/dashboard/admin/bookings/SuccessfulBookings";
import CanceledBookings from "../pages/dashboard/admin/bookings/CanceledBookings";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <Root />,
    // errorElement: <NotFoundError />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/vehicles", element: <Vehicles /> },
      { path: "/vehicles/details/:_id", element: <VehicleDetails /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
      { path: "/auth/recover", element: <Recover /> },
      { path: "/profile/settings", element: <ProfileSettings /> },

      // admin (protected)
      {
        path: "/dashboard/admin",
        element: (
          <RoleGard role="admin">
            {" "}
            <AdminRoot />
          </RoleGard>
        ),
        children: [
          { path: "overview", element: <AdminOverview /> },
          { path: "bookings/manage/upcoming", element: <UpcomingBookings /> },
          { path: "bookings/manage/ongoing", element: <OngoingBookings /> },
          { path: "bookings/manage/success", element: <SuccessfulBookings /> },
          { path: "bookings/manage/canceled", element: <CanceledBookings /> },
          { path: "users/manage/admins", element: <Admins /> },
          { path: "users/manage/customers", element: <Customers /> },
        ],
      },

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
