import React from "react"
import Products from "../products/Products"
import ImageSection from "./ImageSection"
import ProductInfo from "./ProductInfo"

const Details = ({ details, products }) => {
  return (
    <div className="flex flex-col justify-center gap-2 pb-10">
      <div className="flex flex-wrap">
        <ImageSection images={details.img} />
        <ProductInfo details={details} />
      </div>
      <Products products={products} />
    </div>
  )
}

export default Details
