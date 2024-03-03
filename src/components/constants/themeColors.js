import { useThemeContext } from "../../hooks/useThemeContext"

const ThemeColors = () => {
  const { theme } = useThemeContext()
  const darkTheme = {
    backgroundColor: "black",
    color: "white",
    width: "100%",
    height: "100%",
  }
  const lightTheme = {
    backgroundColor: "white",
    color: "black",
    width: "100%",
    height: "100%",
  }

  const useTheme = theme === "light" ? lightTheme : darkTheme

  return useTheme
}

export default ThemeColors
