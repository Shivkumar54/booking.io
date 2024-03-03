import "./App.css"
import { RouterProvider } from "react-router-dom"
import { Navlists } from "./components/constants/Navlists"
import { ThemeProvider } from "./hooks/useThemeContext"

function App() {
  const routes = Navlists

  return (
    <ThemeProvider>
      <div>
        <h1 className="text-4xl font-bold">
          <RouterProvider router={routes} />
        </h1>
      </div>
    </ThemeProvider>
  )
}

export default App
