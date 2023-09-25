import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavStyles = {
  navContainer: "",
  logoContainer: "",
  linkContainer: " ",
  link: "",
  button: "",
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-2 md:py-6 h-[72px]">
      <div className="flex tems-center justify-between space-x-16">
        {/* Logo */}

        <Image src="/website__logo.png" width={150} height={45} />
      </div>

      <div className="flex items-center space-x-8 w-[775px] ">
        {/* Links */}
        <nav className="hidden md:flex md:w-[775px] md:h-[18px] md:items-center md:justify-between md:space-x-6">
          <ul className="underline-animation flex justify-between w-full">
            <li className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in">
              Products
            </li>
            <li className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in ">
              Services
            </li>
            <li className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in ">
              Blog
            </li>
            <li className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in ">
              About Us
            </li>
            <li className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in ">
              Contact
            </li>
          </ul>
        </nav>

        {/* Call To Action Button */}

        <button className="h-[36px] w-[126px]  border-[1px] border-[#000000B2] rounded-md hover:shadow-2xl hover:-translate-y-1 transition ease-in duration-300 ">
          <a
            href="/"
            className="text-center text-[16px] text-[#000000B2] font-[400] "
          >
            Login
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
