import React from "react"
import EventsUI from "./EventsUI"
import Nodatafound from "../common/Nodatafound"

const ShowSimilarEvents = ({ eventName, filteredData }) => {
  return (
    <div className="similar">
      <h1 className="text-xl uppercase tracking-widest font-medium">
        Explore similar Events like - {eventName}
      </h1>
      {filteredData?.length ? (
        <div className="div grid grid-cols-3 gap-5">
          {filteredData?.map((item) => {
            return <EventsUI item={item} />
          })}
        </div>
      ) : (
        <Nodatafound userSearch={eventName} />
      )}
    </div>
  )
}

export default ShowSimilarEvents
