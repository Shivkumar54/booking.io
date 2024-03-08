import React, { useState } from "react"
import { BiSolidCategory } from "react-icons/bi"
import { FaRegCalendarAlt } from "react-icons/fa"
import QRCode from "react-qr-code"
const MyBookingUi = ({ item }) => {
  const [showQR, setShowQR] = useState(false)

  const toggleQRModal = () => {
    setShowQR(!showQR)
  }

  return (
    <>
      <div className="lg:flex lg:gap-4 lg:items-center">
        <div className="img ">
          {!showQR ? (
            <img
              src={item?.event?.image}
              className="mb-5 w-[343px] h-[343px] lg:w-64 lg:h-64  object-cover"
              alt={item?.event?.event_name}
            />
          ) : (
            <QRCode className="w-full h-full mb-5" value={item.bookingId} />
          )}
        </div>
        <div className="txt">
          <h5 className="tracking-widest uppercase text-sm font-medium">
            {item?.event?.organizer}
          </h5>
          <h1 className="text-2xl font-bold my-2">{item?.event?.event_name}</h1>
          <div className="flex justify-between gap-6 mt-2">
            <h5 className="flex items-center gap-2 text-base font-medium">
              <FaRegCalendarAlt className="text-green-600" />{" "}
              {item?.event?.date}
            </h5>
            <h5 className="flex items-center gap-2 text-base font-medium">
              <BiSolidCategory className="text-green-600" /> {item?.event?.date}
            </h5>
          </div>
          <h5 className="flex items-center justify-between gap-2 text-base font-bold uppercase mt-2">
            Conirmation Code
            <span className="uppercase tracking-widest">{item.bookingId}</span>
          </h5>

          <button
            onClick={toggleQRModal}
            className="bg-green-600 text-white w-full text-base uppercase px-6 py-4 mt-4 rounded"
          >
            {showQR ? "Close Qr code" : "Show QR Code"}
          </button>
        </div>
      </div>
    </>
  )
}

export default MyBookingUi
