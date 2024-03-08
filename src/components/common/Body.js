import React, { useEffect } from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import ThemeColors from "../constants/themeColors"
import { useDispatch } from "react-redux"
import { addUser } from "../../store/userSlice"

const Body = () => {
  const useTheme = ThemeColors()

  const dispatch = useDispatch()

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("users"))

    if (userData) {
      dispatch(addUser(userData))
    }
  }, [])

  return (
    <div className="px-4" style={useTheme}>
      <Header />
      <div className="pt-20 container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Body
