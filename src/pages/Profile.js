import React from "react"
import { useDispatch } from "react-redux"
import { removeUser } from "../store/userSlice"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const getUserData = JSON.parse(localStorage.getItem("users"))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const deleteUser = () => {
    localStorage.removeItem("users")
    dispatch(removeUser())
    navigate("/login")
  }

  return (
    <div className="h-[65dvh] w-full flex flex-col items-center mt-16">
      <img
        className="w-48 h-48 object-cover rounded-full mb-4"
        src="https://cdn.dribbble.com/userupload/12438494/file/original-de200458e5b30357e01b830d981700af.jpg?resize=400x0"
        alt="DummyIcon"
      />
      <h2 className="capitalize text-5xl mb-2">{getUserData.name}</h2>
      <h2 className="text-xl font-normal my-1">Email - {getUserData.email}</h2>
      <h2 className="text-xl font-normal">
        User ID - <span className="uppercase"> {getUserData.id}</span>{" "}
      </h2>
      <button
        onClick={deleteUser}
        className="text-sm rounded uppercase font-semibold bg-red-600 text-white px-4 py-3 mt-3"
      >
        Delete My Account
      </button>
    </div>
  )
}

export default Profile
