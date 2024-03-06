import React from "react"
import { useSelector } from "react-redux"

const NavElements = () => {
  const userData = useSelector((store) => store.user)

  const loggedIn = userData && Object.keys(userData).length > 0
  const lists = [
    { id: 0, title: "Events", path: "/events" },
    { id: 2, title: "My bookings", path: "/mybookings" },
    { id: 3, title: "Offers", path: "/offers" },
    loggedIn
      ? { id: 5, title: "Profile", path: "/profile" }
      : { id: 4, title: "Login", path: "/login" },
  ]

  return lists
}

export default NavElements
