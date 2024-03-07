import React from "react"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
const AccordianUi = ({ data, setIndex, show }) => {
  const handleClick = () => {
    setIndex()
  }
  return (
    <div className="my-2 shadow-lg px-4 py-6">
      <h4
        onClick={handleClick}
        className="text-lg font-semibold mb-4 flex cursor-pointer justify-between items-center"
      >
        {data?.question}{" "}
        {show ? <IoIosArrowUp size={25} /> : <IoIosArrowDown size={25} />}
      </h4>
      <hr className="" />
      {show && <p className="text-base font-normal">{data?.answer}</p>}
    </div>
  )
}

export default AccordianUi
