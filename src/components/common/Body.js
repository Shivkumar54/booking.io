import React from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import ThemeColors from "../constants/themeColors"

const Body = () => {
  const useTheme = ThemeColors()
  return (
    <div style={useTheme}>
      <Header />
      <div className="pt-20 container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Body
