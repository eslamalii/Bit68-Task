import React from "react"

const Subscribe = () => {
  return (
    <div className="mt-4 h-80 bg-[#F0F0F0] flex gap-6 flex-col justify-center items-center">
      <p className=" text-3xl font-extralight">
        Subscribe our newsletter to be notified when it’ll be live.
      </p>
      <div className="flex w-full justify-center">
        <input
          type="text"
          placeholder="Email address"
          className="border-[#AAAAAA] border rounded-lg px-2 py-2 w-1/4 bg-transparent"
        />
        <button className="bg-black rounded-lg text-white px-6 text-base">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Subscribe
