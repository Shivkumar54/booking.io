import React, { useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useThemeContext } from "../hooks/useThemeContext"
import { useValidateCredientials } from "../hooks/useValidateCredientials"
import { data } from "../components/data/data"
import { v4 as uuidv4 } from "uuid"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../store/userSlice"
const Bookings = () => {
  const { id } = useParams()
  const { events } = useThemeContext()
  const addUsers = useSelector((store) => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const eData = events ? events : data
  const [event, setEvent] = useState(eData[id - 1])
  const [message, setMessage] = useState(null)
  const emailRef = useRef()
  const personRef = useRef()
  const lsUsers = JSON.parse(localStorage.getItem("users"))
  const unqId = uuidv4().slice(0, 7)

  const CompletePayment = (e) => {
    e.preventDefault()
    const message = useValidateCredientials("", emailRef.current.value, "")
    const noOftickets = personRef.current.value
    if (message) {
      setMessage(message)
    }
    if (!noOftickets) {
      setMessage("Please select the Tickets")
    }
    if (noOftickets >= 5) {
      setMessage("Excceds Maximum tickets 5 ")
    }
    if (!message && noOftickets > 0 && noOftickets <= 5) {
      setMessage(null)
      const newBookingData = {
        event: event,
        bookingId: unqId,
        emailTicket: emailRef.current.value,
        noOfPerson: noOftickets,
      }
      localStorage.setItem(
        "users",
        JSON.stringify({
          ...lsUsers,
          bookingDetails: [...lsUsers?.bookingDetails, newBookingData],
        })
      )
      dispatch(
        addUser({
          ...addUsers,
          bookingDetails: [...addUsers?.bookingDetails, newBookingData],
        })
      )
      navigate("/mybookings")
    }
  }

  return (
    <div className="lg:flex justify-center items-center gap-9 mt-8 mb-24 lg:mt-0 lg:mb-0 lg:h-[80dvh]">
      <div className="eventDetails w-[100%] mb-4">
        <img src={event.image} alt="" />
      </div>
      <div className="form w-[100%]">
        <h2 className="text-3xl mb-2">Booking on way</h2>
        <p className="text-base font-normal mt-1">
          Tickets will be recieved in email you enter
        </p>
        <form onSubmit={CompletePayment} className="mt-6 lg:pr-24">
          <input
            ref={emailRef}
            type="text"
            className="text-base font-normal border bg-transparent outline-none indent-3 py-4 w-full mb-5 rounded"
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
          <button className="text-xl bg-green-600 text-white font-bold mt-4 w-full lg:w-48 h-14 rounded-sm uppercase">
            {" "}
            Pay {event?.ticket_price * 10}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Bookings
