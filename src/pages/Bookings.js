import React, { useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useThemeContext } from "../hooks/useThemeContext"
import { data } from "../components/data/data"

const Bookings = () => {
  const { id } = useParams()
  const { events } = useThemeContext()
  const eData = events ? events : data
  const [event, setEvent] = useState(eData[id - 1])
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()
  const emailRef = useRef()
  const personRef = useRef()

  

  const CompletePayment = (e) => {
    e.preventDefault()
  }

  return (
    <div className="flex justify-center items-center gap-9 h-[80dvh]">
      <div className="eventDetails w-[100%]">
        <img src={event.image} alt="" />
      </div>
      <div className="form w-[100%]">
        <h2>Booking on way</h2>
        <p className="text-lg font-normal mt-3">
          You're few steps away for the reservation
        </p>
        <p className="text-sm font-normal mt-1">
          Please Note Enter the Email in which you will get pass details
        </p>
        <form className="mt-6 pr-24">
          <input
            ref={emailRef}
            type="email"
            className="text-base font-normal border  bg-transparent outline-none indent-3 py-4 w-full mb-5 rounded"
            placeholder="Enter Email"
          />
          <input
            ref={personRef}
            type="number"
            className="text-base font-normal border  bg-transparent outline-none indent-3 py-4 w-full rounded"
            placeholder="No of people"
          />
          <span className="text-base text-red-600">{message}</span>
          <br />
          <button
            onClick={CompletePayment}
            className="text-xl bg-green-600 text-white font-bold mt-4 w-48 h-14 rounded-sm uppercase"
          >
            {" "}
            Pay {event?.ticket_price * 10}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Bookings
