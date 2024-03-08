import React, { useEffect, useState } from "react"
import EventsUI from "../components/content/EventsUI"
import { useThemeContext } from "../hooks/useThemeContext"
import Nodatafound from "../components/common/Nodatafound"
import { data } from "../components/data/data"
const Events = () => {
  const { events } = useThemeContext()
  const eData = events ? events : data
  const [filteredEvents, setFilteredEvents] = useState(eData)
  const [userSearch, setUserSearch] = useState("")

  const handleChange = (e) => {
    setUserSearch(e.target.value.toLowerCase())
  }
  useEffect(() => {
    const newFilteredData = eData?.filter(
      (item) =>
        item?.event_name.toLowerCase().includes(userSearch) ||
        item.category.toLowerCase().includes(userSearch) ||
        item.organizer.toLowerCase().includes(userSearch) ||
        item.location.toLowerCase().includes(userSearch)
    )
    setFilteredEvents(newFilteredData)
  }, [userSearch, eData])

  return (
    <div className="">
      <div className="w-full flex items-center justify-center">
        <form className="searchbar w-[50rem] mt-10 mb-5 lg:mb-10 ">
          <h4 className=" text-2xl mb-3 font-semibold lg:font-extrabold lg:mb-5">
            Search Events
          </h4>
          <input
            value={userSearch}
            onChange={handleChange}
            type="search"
            className="border pr-5 bg-transparent text-base font-normal outline-none h-16 indent-5 rounded-lg w-full "
            s
            placeholder="Search Events by event name, category, organizer, location... "
          />
        </form>
      </div>
      <div className="filter"></div>
      {filteredEvents && filteredEvents?.length ? (
        <div className="grid grid-cols-1 lg:px-12 w-full lg:grid lg:grid-cols-3 gap-5">
          {filteredEvents &&
            filteredEvents?.map((event) => {
              return <EventsUI key={event?.id} item={event && event} />
            })}
        </div>
      ) : (
        <Nodatafound
          title="Looks like no data found for"
          userSearch={userSearch}
        />
      )}
    </div>
  )
}

export default Events
