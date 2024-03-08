import React from "react"
import Nodatafound from "../components/common/Nodatafound"
import { useSelector } from "react-redux"
import MyBookingUi from "../components/content/MyBookingUi"
const Mybookings = () => {
  const { bookingDetails } = useSelector((store) => store.user)
  return (
    <div className="h-max mt-9 relative mb-24 lg:mb-48 lg:px-12">
      <h1 className="text-2xl mb-5 lg:mb-10 uppercase tracking-widest font-medium">
        Confirmed Tickets{" "}
      </h1>
      {!bookingDetails ? (
        <Nodatafound
          title="No tickets in your lists"
          userSearch="Book Now in Events page"
        />
      ) : (
        <div className="grid grid-col-1 lg:grid-cols-2 gap-12">
          {bookingDetails &&
            bookingDetails.map((item) => {
              return <MyBookingUi key={item?.bookingId} item={item} />
            })}
        </div>
      )}
    </div>
  )
}

export default Mybookings
