import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FaRegCalendarAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { BiSolidCategory } from "react-icons/bi"
import { IoTime } from "react-icons/io5"
import { FaRupeeSign } from "react-icons/fa"
import { GiTicket } from "react-icons/gi"
import { HiTicket } from "react-icons/hi2"
import { useThemeContext } from "../hooks/useThemeContext"
import { IoIosArrowBack } from "react-icons/io"
import useFilterSimilarEvents from "../hooks/useFilterSimilarEvents"
import ShowSimilarEvents from "../components/content/ShowSimilarEvents"
import { data } from "../components/data/data"
import { useSelector } from "react-redux"
const EventDetails = () => {
  const { id } = useParams()
  const { events } = useThemeContext()
  const eData = events ? events : data
  const [event, setEvent] = useState(eData[id - 1])

  const userData = useSelector((store) => store.user)

  const loggedIn = userData && Object.keys(userData).length > 0

  useEffect(() => {
    setEvent(eData[id - 1])
  }, [id, eData])

  const filteredData = useFilterSimilarEvents(eData, event.id, event?.category)
  return (
    <div>
      <Link className="text-base font-bold flex items-center mb-5" to="/events">
        <IoIosArrowBack /> Go back
      </Link>
      <div className=" lg:flex items-center gap-5 justify-around lg:h-[65dvh] mb-12">
        <div className="img w-full mb-4">
          <img
            src={event?.image}
            className="w-[100%]"
            alt={event?.event_name}
          />
        </div>
        <div className="detail w-full lg:px-6">
          <span className=" text-sm mb-2 lg:text-base uppercase tracking-widest flex items-center gap-2">
            {event?.organizer}
          </span>
          <h1 className="text-3xl lg:text-5xl mb-3 font-extrabold">
            {event?.event_name}
          </h1>
          <p className="text-base lg:text-lg font-normal my-3">
            {event?.description}
          </p>
          <div className="grid grid-cols-2 items-center">
            <span className="text-sm lg:text-base font-medium flex items-center gap-2">
              <BiSolidCategory size={22} className="text-green-600" />{" "}
              {event?.category}
            </span>
            <span className="text-sm lg:text-base font-medium flex items-center gap-2">
              <FaLocationDot size={22} className="text-green-600" />{" "}
              {event?.location}
            </span>
          </div>
          <div className="my-3 grid grid-cols-2 ">
            <span className="text-sm lg:text-base font-medium flex items-center gap-2">
              <FaRegCalendarAlt size={22} className="text-green-600" />{" "}
              {event?.date}
            </span>
            <span className="text-sm lg:text-base font-medium flex items-center gap-2">
              <IoTime size={22} className="text-green-600" /> {event.start_time}{" "}
              - {event.end_time}
            </span>
            <span className="text-sm lg:text-base mt-3 font-medium flex items-center gap-2">
              <GiTicket size={22} className="text-red-600" />{" "}
              {event.tickets_sold} tickets already sold out
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-base lg:my-0 font-medium flex items-center gap-2">
              <FaRupeeSign size={22} className="text-green-600" />{" "}
              <span className="text-xl font-black ">
                {event?.ticket_price * 10}
              </span>{" "}
              for one
            </span>
            <span className="text-base font-medium flex items-center gap-2">
              <HiTicket size={22} className="text-green-600" />
              <span className="text-xl font-black ">
                {event.tickets_available}
              </span>{" "}
              available
            </span>
          </div>
          <Link to={loggedIn ? `/events/${id}/bookingpage` : `/login`}>
            <button className=" text-base rounded uppercase font-semibold bg-green-600 text-white w-full lg:w-56 px-4 py-3 mt-5">
              Reserve My Seat
            </button>
          </Link>
        </div>
      </div>
      <div className="similarEvent">
        <ShowSimilarEvents
          eventName={event?.category}
          filteredData={filteredData}
        />
      </div>
    </div>
  )
}

export default EventDetails
