import React, { useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import { FreeMode, Navigation, Thumbs } from "swiper"
import Image from "next/image"

const ImageSection = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div className=" w-full lg:w-1/2 p-12">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-1/2 relative"
      >
        {images.map((img, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex  max-h-[400px] items-center justify-center"
            >
              <Image
                src={img}
                width={300}
                height={300}
                alt={index}
                objectFit="contain"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      {images.length >= 2 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={images.length}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className=" mt-3  relative"
        >
          {images.map((img, index) => {
            return (
              <SwiperSlide key={index} className="flex !h-[150px] items-center">
                <div className="cursor-pointer ">
                  <Image
                    src={img}
                    layout="fill"
                    objectFit="contain"
                    alt={index}
                    priority={img.id}
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}
    </div>
  )
}

export default ImageSection
