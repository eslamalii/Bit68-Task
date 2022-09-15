import React from "react"
import Rating from "react-rating"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const ProductRating = (props) => {
  return (
    <Rating
      readonly={!props.editable}
      initialRating={props.rating}
      emptySymbol={<AiOutlineStar color="#AAAAAA" size={23} />}
      fullSymbol={<AiFillStar color="#FFCF09" size={23} />}
      className={`!flex items-center w-fit ${props.className}`}
      onClick={(value) => {
        props.onClick(value)
      }}
    />
  )
}

export default ProductRating
