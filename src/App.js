import "./App.css"
import { RouterProvider } from "react-router-dom"
import Navlists from "./components/constants/Navlists"
import { ThemeProvider } from "./hooks/useThemeContext"
import { Provider } from "react-redux"
import store from "./store/store"
function App() {
  const links = Navlists()

  return (
    <ThemeProvider>
      <div>
        <h1 className="text-4xl font-bold">
          <RouterProvider router={links} />
        </h1>
      </div>
    </ThemeProvider>
  )
}

export default App
