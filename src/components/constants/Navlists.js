import { createBrowserRouter } from "react-router-dom"
import Body from "../common/Body"
import Bookings from "../../pages/Bookings"
import Mybookings from "../../pages/Mybookings"
import Offers from "../../pages/Offers"
import Login from "../../pages/Login"
import Home from "../../pages/Home"
import Events from "../../pages/Events"
import EventDetails from "../../pages/EventDetails"

export const Navlists = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/event-detail/:id",
        element: <EventDetails />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/mybookings",
        element: <Mybookings />,
      },

      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
])
