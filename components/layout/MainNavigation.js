import Image from "next/image";
import React from "react";

const MainNavigation = () => {
  return (
    <header>
      <nav className="bg-[#1C1C1C] w-full h-20 flex py-4 text-white items-center justify-center gap-14  ">
        <div>
          <Image src="/Group-2925.svg" height={60} width={60} />
        </div>
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

        <div className="flex gap-4">
          <Image
            src="/vuesax-linear-search-normal.svg"
            height={24}
            width={24}
          />
          <Image src="/vuesax-linear-profile.svg" height={24} width={24} />
          <Image src="/vuesax-linear-bag-2.svg" height={24} width={24} />
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
