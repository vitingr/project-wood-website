"use client"

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { HighlighProps } from "@/types";

const SwiperCards = ({ content }: { content: HighlighProps[] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={8}
      scrollbar={{ draggable: true, hide: true, el: "no-scrollbar" }}
      className="w-full no-scrollbar"
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 200,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 100,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 100,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 125,
        },
        1328: {
          slidesPerView: 5,
          spaceBetween: 130,
        },
        1712: {
          slidesPerView: 5,
          spaceBetween: 195,
        },
      }}
    >
      {content.map((item: HighlighProps, index: number) => (
        <SwiperSlide key={index} className="cursor-pointer"> 
          <div className="w-[250px]">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={600}
              className="w-[250px] h-[325px] selection:bg-transparent rounded-lg cursor-pointer"
            />
            <h2 className="mt-4 font-semibold">{item.title}</h2>
            <h3 className="mt-1 text-[#717171] text-sm">{item.description}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCards;
