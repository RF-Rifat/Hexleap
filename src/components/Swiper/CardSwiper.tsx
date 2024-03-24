"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const CardSwiper: React.FC = () => {
  const [medium, setMedium] = useState<boolean>(true);
  const [small, setSmall] = useState<boolean>(true);
  const mediumDevice = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  useEffect(() => {
    setMedium(mediumDevice);
  }, [mediumDevice]);
  const smallDevice = useMediaQuery({
    query: "(min-width: 768px)",
  });
  useEffect(() => {
    setSmall(!smallDevice);
  }, [smallDevice]);

  const [currentSlider, setCurrentSlider] = useState<number>(0);
  const swiperData = [
    {
      title: "Las Vegas Aviators",
      date: "OCT 15 SUN",
      time: "4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
      imageUrl: "/Collection/img-1.jpeg",
      btnTag: "Take Flight Collection",
    },
    {
      title: "Sacramento River",
      date: "OCT 15 SUN",
      time: "4:30 PM",
      location: "Sutter Health Park, Sacramento, California",
      imageUrl: "/Collection/img-2.jpeg",
      btnTag: "Orange Collection",
    },
    {
      title: "Las Vegas Aviators",
      date: "OCT 15 SUN",
      time: "4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
      imageUrl: "/Collection/img-1.jpeg",
      btnTag: "Take Flight Collection",
    },
    {
      title: "Sacramento River",
      date: "OCT 15 SUN",
      time: "4:30 PM",
      location: "Sutter Health Park, Sacramento, California",
      imageUrl: "/Collection/img-2.jpeg",
      btnTag: "Orange Collection",
    },
    {
      title: "Las Vegas Aviators",
      date: "OCT 15 SUN",
      time: "4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
      imageUrl: "/Collection/img-1.jpeg",
      btnTag: "Take Flight Collection",
    },
  ];

  const prevSlider = () => {
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? swiperData.length - 1 : currentSlider - 1
    );
  };
  const nextSlider = useCallback(() => {
    setCurrentSlider((currentSlider) =>
      currentSlider === swiperData.length - 1 ? 0 : currentSlider + 1
    );
  }, [swiperData.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider, currentSlider]);
  return (
    <div className="relative mx-auto">
      <button
        onClick={prevSlider}
        className="absolute -left-4 md:-left-16 top-1/2 flex h-8 w-6 items-center justify-center md:h-14 md:w-10 border-2 border-[#2C9CF0] rounded-sm"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="icon h-8 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#0095FF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </g>
        </svg>
      </button>
      <button
        onClick={nextSlider}
        className="absolute -right-4 md:-right-16 top-1/2 flex h-8 w-6 items-center justify-center md:h-14 md:w-10 border-2 border-[#2C9CF0] rounded-sm"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="icon h-8 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          transform="rotate(180)"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#0095FF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </g>
        </svg>
      </button>
      <div className="w-full overflow-hidden">
        <div
          className="flex transform-gpu duration-500 ease-linear gap-10 xl:gap-16 px-6"
          style={{
            transform: `translateX(-${
              currentSlider * (small ? 98 : medium ? 34 : 50)
            }%)`,
          }}
        >
          {swiperData.map((item, inx) => (
            <div
              key={inx}
              className="min-w-[100%] md:min-w-[46%] lg:min-w-[30%] rounded-sm bg-white dark:bg-[#818A97] py-4 size-2/4 md:size-full"
            >
              <div className="divide-y-2 divide-[#818A97] dark:divide-white divide-dashed mx-5">
                <Image
                  width={1000}
                  height={1000}
                  src={item?.imageUrl}
                  className=" border-transparent object-cover pb-5"
                  alt={`Slider - ${inx + 1}`}
                />
                <div className="grid justify-center space-y-3 relative">
                  <div className="absolute h-4 w-4 bg-[#f4f2ff] rounded-full dark:bg-[#1F1D2B] -top-2 -left-6 z-50"></div>
                  <div className="absolute h-4 w-4 bg-[#f4f2ff] rounded-full dark:bg-[#201E2C] -top-5  -right-6 z-50"></div>
                  <h2 className="text-xl md:text-2xl font-semibold text-center dark:text-white">
                    {" "}
                    {item.title}
                  </h2>
                  <div className="grid grid-cols-3 divide-x divide-black text-center justify-center w-full">
                    <p className="text-sm md:text-base dark:text-[#DFDFDF]">
                      OCT 15
                    </p>
                    <p className="text-sm md:text-base dark:text-[#DFDFDF]">
                      SUN
                    </p>
                    <p className="text-sm md:text-base text-center dark:text-[#DFDFDF]">
                      {item.time}
                    </p>
                  </div>
                  <p className="text-sm md:text-base  text-center dark:text-[#DFDFDF]">
                    {item.location}
                  </p>
                  <button className="bg-black text-white text-sm py-3 rounded-sm">
                    {item.btnTag}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
