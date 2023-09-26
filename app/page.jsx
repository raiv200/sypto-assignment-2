"use client";

import AutoCarousel from "@/components/AutoCarousel";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState(
    "from-white via-white to-sky-200"
  );

  return (
    <div
      className={`flex flex-col  bg-gradient-to-br ${backgroundColor} h-full w-full lg:min-h-screen lg:w-full  transition ease-in-out duration-[3s]  overflow-hidden`}
    >
      {/* <AutoCarousel onBackgroundColorChange={setBackgroundColor} /> */}
      <div className="flex flex-col w-full h-full lg:h-screen lg:w-full mx-auto md:max-w-[1350px] 2xl:max-w-9xl ">
        <Navbar />
        <HeroSection setBackgroundColor={setBackgroundColor} />
      </div>
    </div>
  );
}
