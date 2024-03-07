import React from "react"
import Nodatafound from "../components/common/Nodatafound"
import { useSelector } from "react-redux"
import MyBookingUi from "../components/content/MyBookingUi"
const Mybookings = () => {
  const { bookingDetails } = useSelector((store) => store.user)
  if (!bookingDetails) {
    return (
      <div className="flex items-center justify-center">
        <Nodatafound
          title="Looks like no Booking found"
          userSearch="My booking"
        />
      </div>
    )
  }
  return (
    <div className="h-[80dvh] mt-9 px-24">
      <div className="flex relative justify-between gap-9">
        {bookingDetails &&
          bookingDetails.map((item, indx) => {
            return <MyBookingUi item={item} />
          })}
      </div>
    </div>
  )
}

export default Mybookings
