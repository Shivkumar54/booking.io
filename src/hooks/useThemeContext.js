import { createContext, useContext, useEffect, useState } from "react"
import { data } from "../components/data/data"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const eventData = data
  const [theme, setTheme] = useState("light")
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(eventData))
  }, [])

  const events = JSON.parse(localStorage.getItem("events"))

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, events }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  return useContext(ThemeContext)
}
