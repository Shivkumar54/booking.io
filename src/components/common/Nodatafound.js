import React from "react"
import NoDataImage from "../images/nodata.svg"
const Nodatafound = ({ userSearch }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="w-72 h-72" src={NoDataImage} alt="NoDataImage" />
      <h1 className="text-xl font-medium">
        Looks like no data found for the result - {userSearch}
      </h1>
    </div>
  )
}

export default Nodatafound
