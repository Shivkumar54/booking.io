import React from "react"
import { Link } from "react-router-dom"
import { useThemeContext } from "../../hooks/useThemeContext"
import NavElements from "../constants/NavElements"
const Header = () => {
  const lists = NavElements()
  const userLogin = JSON.parse(localStorage.getItem("users"))
  const { theme, changeTheme } = useThemeContext()
  const handleTheme = () => {
    changeTheme()
  }

  const darkTheme = {
    backgroundColor: "black",
    color: "white",
  }
  const lightTheme = {
    backgroundColor: "white",
    color: "black",
  }

  return (
    <div
      style={theme === "light" ? lightTheme : darkTheme}
      className=" w-[100%] px-10 fixed h-[10dvh] flex items-center justify-between z-30"
    >
      <div className="logo">
        <Link to="/">
          <h1 className="text-xl">Booking.io</h1>
        </Link>
      </div>
      <div className="list">
        <ul className="flex gap-10">
          {lists.map((item) => {
            return (
              <Link
                to={item.path}
                key={item?.id}
                className="text-base font-normal"
              >
                {item?.title}
              </Link>
            )
          })}
          <li
            className="capitalize cursor-pointer text-base font-normal"
            onClick={handleTheme}
          >
            {theme === "dark" ? "light" : "dark"} mode
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
