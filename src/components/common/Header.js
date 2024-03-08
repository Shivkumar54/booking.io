import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useThemeContext } from "../../hooks/useThemeContext"
import NavElements from "../constants/NavElements"
import { LuMenu } from "react-icons/lu"
import { IoCloseCircleOutline } from "react-icons/io5"
import { HiMiniSun } from "react-icons/hi2"
import { IoMoon } from "react-icons/io5"

const Header = () => {
  const lists = NavElements()
  const { theme, changeTheme } = useThemeContext()
  const [showMenu, setShowMenu] = useState(false)
  const handleTheme = () => {
    changeTheme()
  }

  const changeShowMenu = () => {
    setShowMenu((prevState) => !prevState)
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
    <div className="relative">
      <div
        style={theme === "light" ? lightTheme : darkTheme}
        className="container mx-auto w-full fixed h-[12dvh] z-30 flex items-center justify-between"
      >
        <div className="logo w-full lg:w-[72] py-4 lg:py-0">
          <Link to="/">
            <h1
              onClick={() => setShowMenu(false)}
              className="text-xl uppercase tracking-widest"
            >
              Booking.io
            </h1>
          </Link>
        </div>
        <div className="w-full">
          <ul className="flex gap-10 text-right items-center justify-end">
            {lists.map((item) => {
              return (
                <Link
                  to={item.path}
                  key={item?.id}
                  className="text-base font-normal hidden lg:flex"
                >
                  {item?.title}
                </Link>
              )
            })}
            <li
              className="capitalize cursor-pointer text-base font-normal"
              onClick={handleTheme}
            >
              {theme === "dark" ? (
                <HiMiniSun className="text-[#FAC517]" size={30} />
              ) : (
                <IoMoon className="text-gray-600" size={30} />
              )}
            </li>
            <li className="lg:hidden pr-8">
              {!showMenu ? (
                <LuMenu onClick={changeShowMenu} />
              ) : (
                <IoCloseCircleOutline onClick={changeShowMenu} />
              )}
            </li>
          </ul>
        </div>
      </div>
      {showMenu && (
        <div
          style={theme === "light" ? lightTheme : darkTheme}
          className="absolute z-20 shadow-sm pt-20 pb-10 w-full h-[88]"
        >
          {showMenu && (
            <ul className=" md:lg:hidden py-6">
              {lists.map((item) => {
                return (
                  <Link
                    onClick={changeShowMenu}
                    to={item?.path}
                    key={item?.id}
                    className="text-xl my-3 px-2 text-left w-[72] font-semibold block "
                  >
                    {item?.title}
                  </Link>
                )
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default Header
