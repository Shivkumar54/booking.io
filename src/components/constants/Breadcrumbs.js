import React from "react"
import { Link, useLocation } from "react-router-dom"

const Breadcrumbs = () => {
  const { pathname } = useLocation()
  const path = pathname.split("/").filter((x) => x)
  let breadCrumbPath = ""
  return (
    <div>
      {path.length > 0 && (
        <Link
          className="text-base font-semibold uppercase tracking-widest text-green-500"
          to="/"
        >
          Home
        </Link>
      )}
      {path.map((item, index) => {
        breadCrumbPath += `/${item}`
        const isLast = index === path.length - 1
        return isLast ? (
          <span
            key={breadCrumbPath}
            className="text-base text-gray-400 font-semibold uppercase tracking-widest"
          >
            {" "}
            / {item}
          </span>
        ) : (
          <span
            key={breadCrumbPath}
            className="text-base font-semibold uppercase tracking-widest"
          >
            <Link className="text-green-500" to={breadCrumbPath}>
              {" "}
              / {item}
            </Link>
          </span>
        )
      })}
    </div>
  )
}

export default Breadcrumbs
