import Image from "next/image"
import React from "react"

const Card = ({ product }) => {
  return (
    <div className="w-full max-w-sm bg-white border flex flex-col">
      <div className="p-12">
        <Image
          src={product.img[0]}
          width={220}
          height={220}
          objectFit="contain"
          priority={product.id}
        />
      </div>

      <div className="mx-8 flex flex-col justify-between h-32 pb-2 ">
        <span className=" text-base pm-4">Apple 20W USB-C Power Adapter</span>

        <div className="flex flex-col">
          <span className=" text-xl">${product.price}</span>
          {product.inStock > 0 ? (
            <span className=" text-sm text-[#36BA5C]">In Stock</span>
          ) : (
            <span className=" text-sm text-[#D63030]">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  )
}
export default Card
