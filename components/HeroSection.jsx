import Image from "next/image";
import React from "react";
import AutoCarousel from "./AutoCarousel";

const HeroSection = ({ setBackgroundColor }) => {
  return (
    <section className="flex justify-evenly w-full h-full  ">
      {/* Left Part */}

      <div className="flex flex-col  justify-between w-[643px] h-[593px] mt-[77px] ">
        <div className="flex flex-col justify-evenly w-[643px] h-[311px]">
          {/* Main Heading Text  */}

          <div className="flex flex-col w-full h-[217px]">
            <div className="w-full h-[131px] flex flex-col ">
              <h1 className="gradient-typing-text-1 gradient-text  text-[48px] font-[800] leading-[64px] overflow-hidden whitespace-nowrap  transition ease-in-out duration-600">
                Tailoring Travel
              </h1>
              <h1 className="gradient-typing-text-2 gradient-text  text-[48px] font-[800] leading-[64px] overflow-hidden whitespace-nowrap  transition ease-in-out duration-600">
              Adventures Just for You!
              </h1>
              
            </div>
            <p className="text-[16px] font-[400] text-[#000000B2] w-[576px] h-[66px] leading-7">
              Your Ultimate Travel Itinerary Crafting Companion! Build your Next
              Vacation with AI. Explore More, Plan Less.
            </p>
          </div>

          {/* CTA Buttons  */}

          <div className="flex space-x-3 w-[480px] h-[63px]">
            <button className="h-[63px] w-[233px]  border-[1px] border-[#00000099] hover:shadow-2xl hover:-translate-y-1 rounded-xl px-6 py-4 transition ease-in duration-300  ">
              <a
                href="/"
                className="text-center text-[19px] text-[#000000B2] font-[400]"
              >
                Explore More
              </a>
            </button>
            <button className="group h-[63px] w-[233px] rounded-xl bg-[#2D79EB] hover:bg-[#2D79EB]/20 hover:shadow-2xl hover:-translate-y-1 transition ease-in duration-300 ">
              <a
                href="/"
                className="text-center text-[19px] text-white group-hover:text-[#2D79EB] font-[400] px-6 py-4 "
              >
                Get In Touch
              </a>
            </button>
          </div>
        </div>
        {/* Explore Section with Images  */}
        <div className="flex  flex-col justify-between w-[400px] h-[227px]">
          <div className="flex flex-col  w-[298px] h-[47px]">
            <h1 className="text-[16px] font-[800] text-[#000000CC] leading-6">
              Explore Dream Destination
            </h1>
            <p className="text-[10px] w-[298px] font-[400] text-[#000000B2] leading-6">
              Create a new standard of personalized travel experiences.
            </p>
          </div>

          <div className="flex items-center justify-between w-[400px] h-[150px]">
            <div className="flex flex-col animate-slideInFromLeft">
              <div className="overflow-hidden  ">
                <Image
                  src="/europe__monument.png"
                  width={157}
                  height={125}
                  className="  hover:scale-[1.1] hover:rotate-6 transition ease-in duration-300"
                />
              </div>
              <p className="text-[16px] text-center  font-[600] text-[#000000B2] leading-6">
                Europe
              </p>
            </div>
            <div className="flex flex-col animate-slideInFromLeft ">
              <div className="overflow-hidden  ">
                <Image
                  src="/delhi__monument.png"
                  width={125}
                  height={125}
                  className="  hover:scale-[1.1] hover:rotate-6 transition ease-in duration-300"
                />
              </div>
              <p className="text-[16px] text-center  font-[600] text-[#000000B2] leading-6">
                Delhi
              </p>
            </div>
            <div>
              <button className="h-[25px] w-[25px] rounded flex items-center justify-center bg-[#2D79EB] text-white  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Part */}
      <div className="flex  w-[643px]">
        <AutoCarousel onBackgroundColorChange={setBackgroundColor} />
      </div>
    </section>
  );
};

export default HeroSection;
