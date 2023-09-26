"use client";
import Image from "next/image";
import React from "react";

const MobileNavDrawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-40 ${
        isOpen ? "block " : "hidden"
      } transition ease-in duration-300`}
    >
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-40  ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transform transition ease-in duration-500   ${
          isOpen ? "translate-x-0 animate-slideInNav" : "-translate-x-full "
        }`}
      >
        <aside
          className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
            isOpen
              ? "translate-x-0 animate-slideInNav"
              : "-translate-x-full animate-slideOutNav"
          }`}
        >
          <div onClick={onClose} className={`absolute z-100 top-2 right-2`}>
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
          <span className="flex w-full items-center p-4 border-b">
            <Image
              src="/website__logo.png"
              width={150}
              height={45}
              className="scale-[0.82] lg:scale-100"
            />
          </span>
          <ul className="mt-6 space-y-4">
            <li>
              <a
                href="#"
                className="w-[100px] text-[14px] font-[500] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[100px] text-[14px] font-[500] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[100px] text-[14px] font-[500] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[100px] text-[14px] font-[500] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[100px] text-[14px] font-[500] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in"
              >
                Contact
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default MobileNavDrawer;

{
  /* <ul className="mt-6 space-y-4">
          <li>
            <a href="#" className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in">Products</a>
          </li>
          <li>
            <a href="#" className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in">Services</a>
          </li>
          <li>
            <a href="#" className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in">Blog</a>
          </li>
          <li>
            <a href="#" className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in">About Us</a>
          </li>
          <li>
            <a href="#" className="w-[100px] text-[14px] font-[400] text-[#000000B2] text-center py-1 px-3   rounded-md cursor-pointer transition duration-300 ease-in">Contact</a>
          </li>
        </ul> */
}
