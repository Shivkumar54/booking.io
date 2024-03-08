import React, { useRef, useState } from "react"
import { v4 as uuidv4 } from "uuid"

import { useValidateCredientials } from "../../hooks/useValidateCredientials"
import ThemeColors from "../constants/themeColors"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addUser } from "../../store/userSlice"

const LoginForm = () => {
  const useTheme = ThemeColors()
  const navigate = useNavigate()

  const unqId = uuidv4()

  const userId = unqId.slice(0, 7)

  const dispatch = useDispatch()

  const [isSignIn, setIsSignIn] = useState(false)
  const [errMessage, setErrMessage] = useState(null)

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const SendDetailsToLS = (e) => {
    e.preventDefault()
    const message = useValidateCredientials(
      nameRef?.current?.value,
      emailRef?.current?.value,
      passwordRef?.current?.value
    )
    if (!message) {
      const newUser = {
        id: userId,
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        bookingDetails: [],
      }
      dispatch(addUser(newUser))
      localStorage.setItem("users", JSON.stringify(newUser))
      navigate("/")
    } else {
      console.log(message)
      setErrMessage(message)
    }
  }
  return (
    <div>
      <h1 className=" mb-8 text-5xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
      <form style={useTheme} className="w-full">
        {!isSignIn && (
          <input
            type="text"
            ref={nameRef}
            placeholder="Enter Name"
            className="text-base font-normal border  bg-transparent outline-none indent-3 py-4 w-full mb-5 rounded"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Enter Email"
          className="text-base font-normal border bg-transparent  outline-none indent-3 py-4 w-full mb-5 rounded"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter Password"
          className="text-base font-normal border bg-transparent outline-none indent-3 py-4 w-full mb-1 rounded"
        />
        <span className="text-red-600 text-base font-semibold block">
          {errMessage}
        </span>
        <span
          onClick={() => setIsSignIn(!isSignIn)}
          className="text-base font-medium  text-blue-600 cursor-pointer"
        >
          {isSignIn ? " Don't Have an Account?" : "Already have account?"}
        </span>
        <br />
        <button
          onClick={SendDetailsToLS}
          className="text-base bg-green-600 text-white font-medium mt-6 w-48 h-14 rounded-lg"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  )
}

export default LoginForm
