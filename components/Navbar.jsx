"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MobileNavDrawer from "./MobileNavigation";

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <header className="flex items-center justify-between px-4 py-2 lg:px-2 lg:py-6 h-[72px]">
      <div className="flex justify-center">
        {/* Logo */}
        <div
          onClick={toggleMobileNav}
          className=" flex items-center lg:hidden text-[#000000B2] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
        {isMobileNavOpen && (
          <MobileNavDrawer isOpen={isMobileNavOpen} onClose={toggleMobileNav} />
        )}

        <Image
          src="/website__logo.png"
          width={150}
          height={45}
          className="scale-[0.82] lg:scale-100"
        />
      </div>

      <div className="flex items-center space-x-8 lg:w-[775px] ">
        {/* Links */}
        <nav className="hidden md:flex md:w-[775px] md:h-[18px] md:items-center md:justify-between md:space-x-6">
          <ul className="underline-animation flex justify-between w-full">
            <li className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in">
              <Link href="/">Products</Link>
            </li>
            <li className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in ">
              <Link href="/">Services</Link>
            </li>
            <li className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in ">
              <Link href="/">Blog</Link>
            </li>
            <li className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in ">
              <Link href="/">About Us</Link>
            </li>
            <li className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in ">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Call To Action Button */}

        <button className="h-[36px] w-[126px]  border-[1px] border-[#00000099] hover:shadow-2xl hover:-translate-y-1 rounded-lg transition ease-in duration-300  ">
          <a
            href="/"
            className=" text-[14px] h-[20px] w-[75px] mx-auto text-[#000000B2] font-[400] leading-5"
          >
            Login
          </a>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
