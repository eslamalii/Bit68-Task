import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross } from "react-icons/im"

const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-[#1C1C1C] w-full h-24 flex py-4 px-10 text-white justify-between md:justify-evenly gap-14 text-base lg:text-lg   ">
        <div className="cursor-pointer ">
          <Link href="/">
            <Image
              src="/Group-2925.svg"
              priority
              width={70}
              height={70}
              layout="fixed"
              alt=""
            />
          </Link>
        </div>

        <div className="md:flex items-center hidden">
          <ul className="flex gap-6 py-3">
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>TV</li>
            <li>Accessories</li>
            <li>Offers</li>
            <div className="flex-grow border-r border-white"></div>
            <li>Support</li>
            <li>Services</li>
            <li>Locations</li>
          </ul>
        </div>

        <div className="md:flex gap-4 hidden items-center">
          <Image
            src="/vuesax-linear-search-normal.svg"
            height={24}
            width={24}
            alt=""
            layout="fixed"
          />
          <Image
            src="/vuesax-linear-profile.svg"
            height={24}
            alt=""
            width={24}
            layout="fixed"
          />
          <Image
            src="/vuesax-linear-bag-2.svg"
            height={24}
            width={24}
            alt=""
            layout="fixed"
          />
        </div>

        <button
          className="block items-end md:hidden"
          onClick={() => setShowMenu(true)}
        >
          <GiHamburgerMenu size={30} />
        </button>
      </nav>

      {showMenu && (
        <div className="h-full flex flex-col items-center p-12 fixed z-50 top-0 right-0 w-full bg-[#1C1C1C] opacity-95 text-white">
          <button onClick={() => setShowMenu(false)}>
            <ImCross />
          </button>

          <div className="flex gap-4 items-center mt-12">
            <Image
              src="/vuesax-linear-search-normal.svg"
              height={24}
              alt=""
              width={24}
              layout="fixed"
            />
            <Image
              src="/vuesax-linear-profile.svg"
              height={24}
              width={24}
              alt=""
              layout="fixed"
            />
            <Image
              src="/vuesax-linear-bag-2.svg"
              height={24}
              width={24}
              layout="fixed"
              alt=""
            />
          </div>

          <div className="flex items-center text-center p-12">
            <ul className="flex flex-col gap-6 py-3">
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>TV</li>
              <li>Accessories</li>
              <li>Offers</li>
              <li>Support</li>
              <li>Services</li>
              <li>Locations</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

export default MainNavigation
