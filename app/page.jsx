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
      className={`flex flex-col min-h-screen w-full  bg-gradient-to-br ${backgroundColor} transition ease-in-out duration-[3s]`}
    >
      {/* <AutoCarousel onBackgroundColorChange={setBackgroundColor} /> */}
      <div className="flex flex-col h-screen w-full mx-auto md:max-w-[1350px] 2xl:max-w-9xl ">
        <Navbar />
        <HeroSection setBackgroundColor={setBackgroundColor} />
      </div>
    </div>
  );
}
