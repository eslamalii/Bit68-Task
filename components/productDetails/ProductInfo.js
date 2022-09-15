import Image from "next/image"
import React from "react"
import { useState } from "react"
import Button from "../ui/Button"
import CardDetails from "../ui/CardDetails"
import ProductRating from "../ui/ProductRating"

const ProductInfo = ({ details }) => {
  const [amount, setAmount] = useState(0)
  return (
    <div className="w-full lg:w-1/2 p-12">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className=" uppercase text-sm text-[#888888]">
            {details.name}
          </span>
          <Image src={"/vuesax-linear-heart.svg"} width={20} height={20} />
        </div>
        <span className=" text-lg">{details.name}</span>
        <div className="flex items-center">
          <ProductRating rating={details.numberOfStars} />
          <span className="text-[#AAAAAA] text-xs">
            ({details.numberOfReviews} reviews)
          </span>
        </div>

        <div className="flex flex-col">
          {details.priceAfterdiscount < details.price ? (
            <div className="flex justify-between items-center">
              <span className=" text-red-500 text-3xl font-bold">
                ${details.priceAfterdiscount}
              </span>
              <span className=" line-through text-lg text-[#A7A9AC]">
                ${details.price}
              </span>
            </div>
          ) : (
            <span className=" text-xl font-bold text-black">
              ${details.price}
            </span>
          )}
          {details.inStock > 0 ? (
            <span className=" text-xs text-[#36BA5C]">In Stock</span>
          ) : (
            <span className=" text-xs text-[#D63030]">Out of Stock</span>
          )}
        </div>

        <div className="flex gap-4 items-center py-4 ">
          <Button
            disabled={amount <= 0 ? true : false}
            onClick={() => setAmount((prev) => prev - 1)}
          >
            -
          </Button>
          <span className=" text-2xl">{amount}</span>
          <Button onClick={() => setAmount((prev) => prev + 1)}>+</Button>
        </div>

        <div className="flex gap-2">
          <CardDetails>Full Price</CardDetails>
          <CardDetails className=" !text-black">Installments</CardDetails>
        </div>

        <div className="flex gap-2">
          <CardDetails>
            <div className=" relative w-20 h-10">
              <Image src={"/CIB_Logo.png"} layout="fill" alt="" />
            </div>
          </CardDetails>
          <CardDetails>
            <div className=" relative w-20 h-10">
              <Image src={"/CIB_Logo.png"} layout="fill" alt="" />
            </div>
          </CardDetails>
          <CardDetails>
            <div className=" relative w-20 h-10">
              <Image src={"/CIB_Logo.png"} layout="fill" alt="" />
            </div>
          </CardDetails>
          <CardDetails>
            <div className=" relative w-20 h-10">
              <Image src={"/CIB_Logo.png"} layout="fill" alt="" />
            </div>
          </CardDetails>
        </div>

        <span className=" font-medium text-xs py-2">Memory</span>

        <div className="flex gap-2">
          <CardDetails className="text-center !text-black !border-black">
            128GB $999.00
          </CardDetails>
          <CardDetails className="text-center">256GB $999.00</CardDetails>
          <CardDetails className="text-center">512GB $999.00</CardDetails>
          <CardDetails className="text-center p-2">1TB $999.00</CardDetails>
        </div>

        <span className=" font-medium text-xs py-2">Color</span>

        <div className="flex gap-2">
          <CardDetails className="flex flex-col justify-evenly !text-[#AAAAAA] ">
            <p className=" text-xs">Silver</p>
            <div className=" rounded-full border border-[#707070] w-8 h-8  bg-[#EDEDED]"></div>
          </CardDetails>
          <CardDetails className="flex flex-col justify-evenly !text-black !border-black ">
            <p className=" text-xs">Silver</p>
            <div className=" rounded-full border border-[#707070] w-8 h-8  bg-[#90BAD1]"></div>
          </CardDetails>
        </div>

        <span className=" font-medium text-xs py-2">Insurance</span>

        <div className="flex gap-2">
          <CardDetails className="text-center p-2 !text-black">
            1 year $99.00
          </CardDetails>
          <CardDetails className="text-center p-2  !text-black !border-black">
            2 year $159.00
          </CardDetails>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <button className=" bg-black w-full text-white p-2 rounded-xl hover:bg-slate-800">
            Add to cart
          </button>

          <div className="border-y-[0.5px] border-[#D8D8D8] my-4"></div>

          <div className="flex gap-2">
            <Image src={"/car.png"} width={20} height={20} alt="" />
            <p className=" text-[#6F6F6F] text-sm">
              Free shipping, arrives by Tue, Nov 23
            </p>
          </div>

          <div className="flex gap-2">
            <Image src={"/convert.png"} width={20} height={20} alt="" />
            <p className=" text-[#6F6F6F] text-sm">
              Free 10-day return window starts Dec 26th Details
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
