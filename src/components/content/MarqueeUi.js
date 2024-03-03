import React from "react"
import Marquee from "react-fast-marquee"
import { marqueeData } from "../data/marqueeData"
const MarqueeUi = () => {
  const data = marqueeData
  return (
    <div className="">
      <h1 className="mb-14 font-medium text-lg uppercase tracking-widest ">
        Peoples we have associated with{" "}
      </h1>
      <div className="px-14 mb-5">
        <Marquee speed={80}>
          {data.map((img, index) => {
            return (
              <img
                className="w-64 h-24 object-cover gap-2 mx-3 rounded-md"
                src={img}
                alt="Images "
                key={index}
              />
            )
          })}
        </Marquee>
      </div>
      <div className="px-14 mb-5">
        <Marquee speed={80} direction="right">
          {data.map((img, index) => {
            return (
              <img
                className="w-64 h-24 object-cover gap-2 mx-3 rounded-md"
                src={img}
                alt="Images "
                key={index}
              />
            )
          })}
        </Marquee>
      </div>
    </div>
  )
}

export default MarqueeUi
