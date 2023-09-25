import React from 'react'

export default function empty() {
  return (
    <div className="flex flex-col  justify-between border-2 border-[#ff2929b2] w-[643px] h-[593px]">
          <h1 className="animate-typing text-[48px] font-[800] text-[#000000CC] leading-[64px] overflow-hidden whitespace-nowrap">
                Tailoring Travel
              </h1>
              <h1 className="animate-typing text-[48px] font-[800] text-[#000000CC] leading-[64px] overflow-hidden whitespace-nowrap">
                Adventures Just for You!
              </h1>

              <nav className="hidden md:flex md:w-[775px] md:h-[18px] md:items-center md:justify-between md:space-x-6">
          <ul className="animation-underline flex justify-between w-full">
            <li className="w-[100px]">
              <Link
                href="/"
                className=" text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in"
              >
                Products
              </Link>
            </li>
            <li className="w-[100px] ">
              <Link
                href="/"
                className=" text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in"
              >
                Services
              </Link>
            </li>
            <li className="w-[100px] ">
              <Link
                href="/"
                className=" text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in"
              >
                Blog
              </Link>
            </li>
            <li className="w-[100px] ">
              <Link
                href="/"
                className=" text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in"
              >
                About Us
              </Link>
            </li>
            <li className="w-[100px] ">
              <Link
                href="/"
                className=" text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in"
              >
                Contact
              </Link>
            </li>
            
             
            
          </ul>
        </nav>
      </div>
  )
}
