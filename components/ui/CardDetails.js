import React from "react"

const CardDetails = (props) => {
  return (
    <div
      className={` flex items-center justify-center border border-[#C3C3C3] rounded-lg  w-28 h-20  text-[#C3C3C3] cursor-pointer ${props.className}`}
    >
      {props.children}
    </div>
  )
}

export default CardDetails
