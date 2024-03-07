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
    <div>
      <div className=" w-full my-10 px-72">
        <h4 className="font-extrabold mb-0">Search Events</h4>
        <form className="searchbar flex items-center justify-center mt-5">
          <input
            value={userSearch}
            onChange={handleChange}
            type="search"
            className="border pr-5 bg-transparent text-base font-normal outline-none w-full h-16 indent-5 rounded-lg"
            s
            placeholder="Search Events by event name, category, organizer, location... "
          />
        </form>
      </div>
      <div className="filter"></div>
      {filteredEvents && filteredEvents?.length ? (
        <div className="mt-20 px-12 w-full grid grid-cols-3 gap-5 mb-24">
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
