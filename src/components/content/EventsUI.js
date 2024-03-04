import React from "react"
import { FaRegCalendarAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { BiSolidCategory } from "react-icons/bi"
import { IoTime } from "react-icons/io5"
import { FaRupeeSign } from "react-icons/fa"
import { GiTicket } from "react-icons/gi"
import { HiTicket } from "react-icons/hi2"
import { Link } from "react-router-dom"
const EventsUI = ({ item }) => {
  return (
    <div className="my-4">
      <img
        src={item?.image}
        alt={item.event_name}
        className="w-full h-52 object-cover mb-5"
      />
      <div className="px-2">
        <h5 className="text-sm font-medium uppercase my-2">
          {item?.organizer}
        </h5>
        <h1 className="text-xl font-bold mb-4">{item?.event_name}</h1>
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-normal flex items-center gap-1 my-2">
            <FaLocationDot className="text-green-600" size={20} />{" "}
            {item?.location}
          </h4>
          <h4 className="text-base font-normal flex items-center gap-1 my-2">
            <GiTicket className="text-red-600" size={20} />
            {item?.tickets_sold} sold
          </h4>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-base font-normal flex items-center gap-1 my-2">
            <FaRegCalendarAlt className="text-green-600" size={20} />{" "}
            {item?.date}
          </h4>
          <h4 className="text-base font-normal flex items-center gap-1 my-2">
            <BiSolidCategory className="text-green-600" size={20} />{" "}
            {item?.category}
          </h4>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-base font-normal flex items-center gap-1 my-2">
            <IoTime className="text-green-600" size={20} /> {item?.start_time} -{" "}
            {item.end_time}
          </h4>
          <h4 className="text-base font-normal flex items-center gap-1 my-2">
            <FaRupeeSign className="text-green-600" size={20} />
            {item?.ticket_price * 10} per one
          </h4>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-base font-semibold flex items-center gap-1 my-2">
            <HiTicket className="text-green-600" size={20} />{" "}
            {item?.tickets_available} available
          </h4>
          <Link
            to={`/events/event-detail/${item.id}`}
            className="text-sm rounded uppercase font-semibold bg-green-600 text-white px-4 py-3 mt-3"
          >
            Book your seat now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EventsUI
