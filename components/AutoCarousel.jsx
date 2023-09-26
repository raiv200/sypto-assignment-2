import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const AutoCarousel = ({onBackgroundColorChange }) => {
 
  const images = [
   {
     src: '/hero__banner1.png',
     width:'560', // in px
     height:'422' // in px
   },
   {
    src: '/hero__banner2.png',
    width:'470',
    height:'655'
  },{
    src: '/hero__banner3.png',
    width:'536',
    height:'505'
  },{
    src: '/hero__banner4.png',
    width:'500',
    height:'630'
  },
  
  ];
  const backgroundColors = [
    'from-white via-white to-sky-200',
    'from-white via-white to-rose-200',
    'from-white via-white to-emerald-100',
    'from-white via-white to-amber-100'
  ];
  const delay = 4000;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    onBackgroundColorChange(backgroundColors[currentIndex]);
  }, [currentIndex, onBackgroundColorChange])



  return (
    <div className="flex justify-center items-center w-full h-full  relative">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`carousel-slide absolute lg:w-${imageUrl.width} lg:h-${imageUrl.height}  transition ease-in-out duration-[3s]  ${
            index === currentIndex ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
        >
          <img
            src={imageUrl.src}
            alt={`Carousel Item ${index}`}
            className=" w-[320px]  lg:w-full lg:h-full object-contain animate-slideInFromRight "
          />
        </div>
      ))}
    </div>

  );
};

export default AutoCarousel;

{/* <div className="carousel-container w-[600px] mx-auto relative">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`carousel-slide absolute w-[600px] h-full transform transition-transform duration-1000 ${
            index === currentIndex ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <img
            src={imageUrl}
            alt={`Carousel Item ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div> */}