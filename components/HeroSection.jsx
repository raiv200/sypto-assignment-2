import Image from "next/image";
import React from "react";
import AutoCarousel from "./AutoCarousel";

const HeroSection = ({ setBackgroundColor }) => {
  return (
    <section className="relative grid grid-cols-1 px-1 justify-evenly w-full h-full lg:flex lg:px-0 lg:justify-evenly lg:w-full lg:h-full">
      {/* Left Part */}

      <div className="flex flex-col  justify-between items-center w-full h-full py-10  lg:items-start lg:w-[643px] lg:h-[593px] lg:mt-[77px] lg:py-0 ">
        <div className="flex flex-col justify-evenly w-full h-[311px] lg:justify-evenly lg:w-[643px] lg:h-[311px]">
          {/* Main Heading Text  */}

          <div className="flex flex-col w-full h-[217px]  space-y-0 lg:space-y-2 border-2">
            <div className="w-full h-[131px] flex flex-col  lg:items-start  ">
              <h1 className="gradient-typing-text-1 gradient-text text-[30px] font-[800]  lg:text-[48px] lg:font-[800] lg:leading-[64px] overflow-hidden whitespace-nowrap  transition ease-in-out duration-600">
                Tailoring Travel
              </h1>
              <h1 className="gradient-typing-text-2 gradient-text text-[28px] font-[800]  lg:text-[48px] lg:font-[800] lg:leading-[64px] overflow-hidden whitespace-nowrap  transition ease-in-out duration-600">
                Adventures Just for You!
              </h1>
              {/* <div className="flex flex-col md:hidden">
                <h1 className="gradient-typing-text-2 gradient-text text-[34px] font-[800] leading-1 lg:hidden overflow-hidden whitespace-nowrap  transition ease-in-out duration-600">
                  Adventures Just
                </h1>
                <span className="gradient-typing-text-2 gradient-text text-[34px] font-[800] leading-1">
                  for You!
                </span>
              </div> */}
            </div>
            <p className=" text-start text-[14px] font-[400] text-[#000000B2] w-full h-[66px] leading-1 lg:text-start  lg:w-[576px] lg:h-[66px] lg:leading-7 lg:text-[16px] lg:font-[400]">
              Your Ultimate Travel Itinerary Crafting Companion! Build your Next
              Vacation with AI. Explore More, Plan Less.
            </p>
          </div>

          {/* CTA Buttons  */}

          <div className="flex items-center  space-x-4 w-full h-[63px] lg:space-x-3 lg:w-[480px] lg:h-[63px]">
            <button className="flex  items-center justify-center h-[50px] w-[160px] lg:h-[63px] lg:w-[233px]  border-[1px] border-[#00000099] hover:shadow-2xl hover:-translate-y-1 rounded-xl px-6 py-4 transition ease-in duration-300  ">
              <a
                href="/"
                className="text-center  text-[16px] lg:text-[19px] text-[#000000B2] font-[400]"
              >
                Explore More
              </a>
            </button>
            <button className="flex  items-center justify-center group h-[50px] w-[160px] lg:h-[63px] lg:w-[233px] rounded-xl bg-[#2D79EB] hover:bg-[#2D79EB]/20 hover:shadow-2xl hover:-translate-y-1 transition ease-in duration-300 ">
              <a
                href="/"
                className="text-center text-[16px] lg:text-[19px] text-white group-hover:text-[#2D79EB] font-[400] px-6 py-4 "
              >
                Get In Touch
              </a>
            </button>
          </div>
        </div>
        {/* Explore Section with Images  */}
        <div className="flex  flex-col justify-between  w-full h-[227px] mt-[430px] lg:mt-0 lg:w-[400px] lg:h-[227px]">
          <div className="flex flex-col w-full h-[47px] items-center lg:items-start lg:w-[298px] lg:h-[47px]">
            <h1 className="text-[16px] font-[800] text-[#000000CC] leading-6">
              Explore Dream Destination
            </h1>
            <p className="text-[10px] w-[298px] font-[400] text-[#000000B2] leading-6">
              Create a new standard of personalized travel experiences.
            </p>
          </div>

          <div className="flex items-center justify-evenly w-full h-[150px] lg:justify-between lg:w-[400px] lg:h-[150px]">
            <div className="flex flex-col animate-slideInFromLeft">
              <div className="overflow-hidden  ">
                <Image
                  src="/europe__monument.png"
                  width={157}
                  height={125}
                  className=" scale-[0.78] hover:scale-[0.89] lg:scale-100  lg:hover:scale-[1.1] hover:rotate-6 transition ease-in duration-300"
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
                  className=" scale-[0.78] hover:scale-[0.89] lg:scale-100  lg:hover:scale-[1.1] hover:rotate-6 transition ease-in duration-300"
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
      <div className="absolute top-[560px] w-full lg:top-0 lg:flex lg:relative lg:w-[643px]">
        <AutoCarousel onBackgroundColorChange={setBackgroundColor} />
      </div>
    </section>
  );
};

export default HeroSection;
