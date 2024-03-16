import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Body from "../common/Body"
import Bookings from "../../pages/Bookings"
import Mybookings from "../../pages/Mybookings"
import Offers from "../../pages/Offers"
import Login from "../../pages/Login"
import Home from "../../pages/Home"
import Events from "../../pages/Events"
import EventDetails from "../../pages/EventDetails"
import Profile from "../../pages/Profile"
import { useSelector } from "react-redux"
import Nodatafound from "../common/Nodatafound"

const Navlists = () => {
  // const userData = useSelector((store) => store.user)
  const lists = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Nodatafound />,
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
          path: "/events/:id",
          element: <EventDetails />,
        },
        {
          path: "/events/:id/bookingpage",
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
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ])
  return lists
}

export default Navlists
