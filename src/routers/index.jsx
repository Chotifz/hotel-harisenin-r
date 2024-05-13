import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/home";
import Services from "../pages/services";
import Restaurant from "../pages/services/Restaurant";
import ServiceInclueded from "../pages/services/ServiceInclueded";
import ServiceOnRequest from "../pages/services/ServiceOnRequest";
import About from "../pages/About";
import Rooms from "../pages/Rooms";
import Contact from "../pages/Contact";
import Signin from "../pages/auth/Signin";
import Register from "../pages/auth/Register";
import ErrorPage from "../component/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/restaurant",
        element: <Restaurant />,
      },
      {
        path: "services/service-inclueded",
        element: <ServiceInclueded />,
      },
      {
        path: "services/service-on-request",
        element: <ServiceOnRequest />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/auth/signin",
        element: <Signin />,
      },
      {
        path: "/auth/signup",
        element: <Register />,
      },
    ],
  },
]);
