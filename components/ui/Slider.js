// import Swiper core and required modules
import {
  EffectCreative,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md"
import Image from "next/image"

const Slider = ({ data }) => {
  return (
    <div className="relative">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: ["-10%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay, EffectFade, Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-next ",
          prevEl: ".swiper-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-[200px] md:h-[400px] bg-[#F1F1F1] w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.img}
              layout="fill"
              objectFit="contain"
              alt={item.id}
              priority={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-next absolute top-1/2 mx-12 -right-0 z-10 flex cursor-pointer items-center justify-center">
        <MdOutlineKeyboardArrowRight
          size={30}
          className="rounded-full border opacity-40 transition-all bg-white hover:bg-secondary-100 hover:opacity-100 md:h-10 md:w-10"
        />
      </div>
      <div className="swiper-prev absolute top-1/2 mx-12 -left-0 z-10 flex cursor-pointer items-center justify-center">
        <MdOutlineKeyboardArrowLeft
          size={30}
          className="rounded-full border opacity-40 transition-all bg-white hover:bg-secondary-100 hover:opacity-100 md:h-10 md:w-10"
        />
      </div>

      <div className="swiper-pagination !left-1/2 transform !-translate-x-1/2 absolute bottom-3 !w-auto drop-shadow-lg p-1 flex items-center justify-center rounded-lg z-10 cursor-pointer bg-white gap-3 "></div>
    </div>
  )
}

export default Slider
