import React, { useState } from "react"
import EventsUI from "../components/content/EventsUI"
import MarqueeUi from "../components/content/MarqueeUi"
import { accData } from "../components/data/accordianData"
import AccordianUi from "../components/content/AccordianUi"
import { Link } from "react-router-dom"
import { useThemeContext } from "../hooks/useThemeContext"
import { data } from "../components/data/data"
const Home = () => {
  const { events } = useThemeContext()
  const newdata = events ? events.slice(0, 3) : data.slice(0, 3)
  const [index, setIndex] = useState(null)
  return (
    <div>
      <div className="px-0 mb-12 h-[75dvh] flex flex-col justify-center items-center text-center lg:px-48">
        <span className="text-4xl lg:text-6xl font-extrabold mb-8 lg:text-9xl ">
          Booking.io
        </span>
        <p className="text-base px-3 font-normal lg:text-lg w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          exercitationem magnam reiciendis provident error eaque repellat,
          ducimus a eos illo alias hic illum, rem dolores culpa expedita quam id
          assumenda.
        </p>
        <Link
          to="/events"
          className="text-lg font-semibold flex items-center justify-center bg-green-600 text-white  mt-6 w-48 h-12 rounded-lg"
        >
          Book Now
        </Link>
      </div>

      <div className="mb-24">
        <h1 className="mb-8 font-medium text-lg uppercase tracking-widest ">
          New Events on cards{" "}
        </h1>
        <div className="grid grid-cols-1 lg:px-12 w-full lg:grid lg:grid-cols-3 gap-5">
          {newdata &&
            newdata.map((item) => {
              return <EventsUI item={item} key={item.id} />
            })}
        </div>
      </div>
      <div className="scoller mb-24 lg:mb-48">
        <MarqueeUi />
      </div>
      <div className=" lg:flex justify-center items-end gap-5 mb-12 lg:mb-28">
        <div className="image w-[100%]">
          <h1 className=" tetxt-6xl lg:text-9xl">FAQ?</h1>
          <p className="text-base font-normal mt-4  lg:pr-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            quia, tempore, delectus recusandae numquam.
          </p>
        </div>
        <div className=" w-full">
          {accData.map((item, indx) => {
            return (
              <AccordianUi
                key={item.id}
                data={item}
                show={indx === index ? true : false}
                setIndex={() => setIndex(indx)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
