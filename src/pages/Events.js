import React from "react"
import { FiSearch } from "react-icons/fi"
import { data } from "../components/data/data"
import EventsUI from "../components/content/EventsUI"

const Events = () => {
  const events = data
  return (
    <div>
      <div className=" w-full my-10 px-72">
        <h4 className="font-extrabold mb-0">Search Events</h4>
        <form className="searchbar flex items-center justify-center mt-5">
          <input
            type="search"
            className="border pr-5 bg-transparent text-base font-normal outline-none w-full h-16 indent-5 rounded-lg"
            s
            placeholder="Search Events"
          />
          <span className="w-20 flex justify-center items-center rounded h-16 ml-3  bg-green-600 text-white">
            <FiSearch size={27} />
          </span>
        </form>
      </div>
      <div className="filter"></div>
      <div className="mt-20 px-12 w-full grid grid-cols-3 gap-5 mb-24">
        {events.map((event) => {
          return <EventsUI key={event?.id} item={event} />
        })}
      </div>
    </div>
  )
}

export default Events
