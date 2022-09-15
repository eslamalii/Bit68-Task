import React from "react"

const Button = (props) => {
  return (
    <button
      className={`text-xl rounded-full disabled:opacity-25 border border-black w-12 h-12 flex items-center justify-center ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
