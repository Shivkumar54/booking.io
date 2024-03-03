import React from "react"
import LoginImg from "../components/images/sign.svg"
import LoginForm from "../components/content/loginForm"
import ThemeColors from "../components/constants/themeColors"
const Login = () => {
  const useTheme = ThemeColors()
  return (
    <div className="bg-green-600 w-full h-[85dvh] flex justify-center items-center">
      <div className="imageSection w-[100%] p-4 flex justify-center items-baseline">
        <img src={LoginImg} alt="" className="w-96 h-96" />
      </div>
      <div
        style={useTheme}
        className="formSection w-[90%] p-[80px] h-full flex flex-col justify-center"
      >
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
