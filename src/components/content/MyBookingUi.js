import React, { useState } from "react"
import { BiSolidCategory } from "react-icons/bi"
import { FaRegCalendarAlt } from "react-icons/fa"
import QRCode from "react-qr-code"
import { IoCloseCircle } from "react-icons/io5"
const MyBookingUi = ({ item }) => {
  const [showQR, setShowQR] = useState(false)

  const toggleQRModal = () => {
    setShowQR(!showQR)
  }

  return (
    <>
      <div className="flex gap-4">
        <div className="img">
          <img
            src={item?.event?.image}
            className="w-36 h-36 object-cover"
            alt={item?.event?.event_name}
          />
        </div>
        <div className="txt">
          <h5 className="tracking-widest uppercase text-sm font-medium">
            {item?.event?.organizer}
          </h5>
          <h1 className="text-2xl font-bold my-2">{item?.event?.event_name}</h1>
          <div className="flex justify-between mt-2">
            <h5 className="flex items-center gap-2 text-base font-medium">
              <FaRegCalendarAlt className="text-green-600" />{" "}
              {item?.event?.date}
            </h5>
            <h5 className="flex items-center gap-2 text-base font-medium">
              <BiSolidCategory className="text-green-600" /> {item?.event?.date}
            </h5>
          </div>
          <button
            onClick={toggleQRModal}
            className="bg-green-600 text-white text-sm uppercase px-6 py-2 mt-4 rounded"
          >
            Show QR Code
          </button>
        </div>
      </div>
      {showQR && (
        <div className="backdrop-blur-3xl absolute flex flex-col h-[75dvh] w-full items-center justify-center">
          <QRCode className=" w-64 h-64" value={item.bookingId} />
          <h1 className="text-lg font-medium uppercase tracking-wider my-4">
            {item.bookingId}
          </h1>
          <span onClick={toggleQRModal}>
            <IoCloseCircle />
          </span>
        </div>
      )}
    </>
  )
}

export default MyBookingUi
