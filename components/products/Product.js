import React from "react"
import { Navigation, Scrollbar, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import Card from "../ui/card"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md"

const Product = ({ products }) => {
  return (
    <div>
      <div className="p-12 md:block relative hidden  ">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Scrollbar, Pagination]}
          scrollbar={{ draggable: true }}
          navigation={{
            nextEl: ".swiperP-next ",
            prevEl: ".swiperP-prev",
          }}
          pagination={{
            el: ".swiperP-pagination",
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <Card product={product} />
              </SwiperSlide>
            )
          })}
        </Swiper>

        <div className="swiperP-next absolute left-2/3 !w-auto bottom-0 z-10 flex cursor-pointer items-center justify-center">
          <MdOutlineKeyboardArrowRight
            size={30}
            className="rounded-full border opacity-40 transition-all bg-white hover:bg-secondary-100 hover:opacity-100 md:h-10 md:w-10"
          />
        </div>

        <div className="swiperP-pagination !w-auto absolute left-1/2 bottom-1 drop-shadow-lg p-1 flex items-center justify-center rounded-lg z-10 cursor-pointer bg-white gap-3 "></div>

        <div className="swiperP-prev absolute right-2/3  !w-auto bottom-0 z-10 flex cursor-pointer items-center justify-center">
          <MdOutlineKeyboardArrowLeft
            size={30}
            className="rounded-full border opacity-40 transition-all bg-white hover:bg-secondary-100 hover:opacity-100 md:h-10 md:w-10"
          />
        </div>
      </div>

      <div className="p-12 md:hidden grid grid-cols-2">
        {products.map((item) => {
          return <Card product={item} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default Product
