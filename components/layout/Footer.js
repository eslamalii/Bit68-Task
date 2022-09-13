import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#1C1C1C] flex flex-col items-center justify-between p-6 gap-4">
      <ul className="flex flex-wrap justify-evenly items-center mt-3 w-1/2">
        <li>
          <Image src="/Group-729.svg" height={60} width={60} />
        </li>
        <li>
          <Image src="/Group-730.svg" height={60} width={60} />
        </li>
        <li>
          <Image src="/Group-731.svg" height={60} width={60} />
        </li>
        <li>
          <Image src="/Group-732.svg" height={60} width={60} />
        </li>
      </ul>

      <span className=" text-xs text-white text-center ">
        Copyright © 2022 - All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
