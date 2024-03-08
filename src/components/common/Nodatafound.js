import React from "react"
import NoDataImage from "../images/nodata.svg"
const Nodatafound = ({ title, userSearch }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[75dvh]">
      <img className="w-72 h-72" src={NoDataImage} alt="NoDataImage" />
      <h1 className="text-xl text-center font-medium">
        {title} - {userSearch}
      </h1>
    </div>
  )
}

export default Nodatafound
