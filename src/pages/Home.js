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
      <div className="HeroContainer h-[70dvh] flex flex-col justify-center items-center  text-center">
        <span className="text-9xl font-extrabold mb-5 ">Booking.io</span>
        <p className="font-normal text-xl w-[900px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          exercitationem magnam reiciendis provident error eaque repellat,
          ducimus a eos illo alias hic illum, rem dolores culpa expedita quam id
          assumenda?
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
        <div className="px-12 w-full grid grid-cols-3 gap-5">
          {newdata &&
            newdata.map((item) => {
              return <EventsUI item={item} key={item.id} />
            })}
        </div>
      </div>
      <div className="scoller mb-48">
        <MarqueeUi />
      </div>
      <div className="accordian flex justify-center items-end gap-5 mb-28">
        <div className="image w-[100%]">
          <h1 className="text-9xl">FAQ?</h1>
          <p className="text-base font-normal mt-4 pr-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            quia, tempore, delectus recusandae numquam atque nostrum aperiam
            nisi beatae odio est, ea nobis molestias! Aut cum corporis quas
            ipsam labore eos nobis aspernatur earum vero?
          </p>
        </div>
        <div className="accord w-[100%]">
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
