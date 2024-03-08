import React from "react"
import LoginImg from "../components/images/sign.svg"
import LoginForm from "../components/content/loginForm"
import ThemeColors from "../components/constants/themeColors"
const Login = () => {
  const useTheme = ThemeColors()
  return (
    <div className="bg-green-600 w-full h-[80dvh] flex justify-center items-center ">
      <div className="hidden lg:flex w-[100%] p-4  justify-center items-baseline ">
        <img src={LoginImg} alt="banner" className="w-96 h-96" />
      </div>
      <div
        style={useTheme}
        className="w-96 lg:w-[90%] lg:p-[80px] h-[60vh] flex flex-col justify-center items-center"
      >
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
