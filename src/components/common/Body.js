import React, { useEffect } from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import ThemeColors from "../constants/themeColors"
import { useDispatch } from "react-redux"
import { addUser } from "../../store/userSlice"
import Breadcrumbs from "../constants/Breadcrumbs"

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
      <div className="pt-[4.5rem] mb-4 bradcrumbs">
        <Breadcrumbs />
      </div>
      <div className=" container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Body
