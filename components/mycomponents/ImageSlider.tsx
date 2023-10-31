"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function ImageSlider() {
   const images = [
      "/slider2.webp",
      "/slider1.webp",
      "/bg.webp",
      "/slider3.webp",
      "/slider4.webp",
      "/slider5.webp",
      "/slider6.webp",
      "/slider7.webp",
      "/slider8.webp",
   ];
   return (
      <Swiper
         modules={[Pagination, Navigation]}
         navigation={true}
         loop
         autoplay
         pagination={{
            clickable: true,
         }}
         breakpoints={{
            320: {
               slidesPerView: 1,
               spaceBetween: 30,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 30,
            },
            1024: {
               slidesPerView: 3,
               spaceBetween: 30,
            },
            1440: {
               slidesPerView: 3,
               spaceBetween: 30,
            },
         }}
         className="px-5 productSlider">
         {images?.map((image, i) => {
            return (
               <SwiperSlide key={i} className="mt-6 mb-10 h-[300px]">
                  <Image
                     src={image}
                     alt="slider-images"
                     height={300}
                     width={500}
                     className="object-cover h-[300px] rounded"
                  />
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
}
