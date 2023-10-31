"use client";
import React, { useRef, useState, useEffect } from "react";

export default function HeroSection() {
   const [position, setPosition] = useState({ x: 0, y: 0 });
   const posRef = useRef<HTMLDivElement | null>(null);

   const handleMouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
   };

   useEffect(() => {
      const pos = posRef.current;
      if (pos !== null) {
         // Check if pos is not null
         pos.style.setProperty("--x", `${position.x}px`);
         pos.style.setProperty("--y", `${position.y}px`);
      }
   }, [position]);

   return (
      <section
         className="relative flex items-center justify-center bg-black bg-center bg-no-repeat bg-cover md:h-large-screen h-small-screen bg-opacity-60 md:justify-left bg-herobg"
         onMouseMove={handleMouseMove}>
         <div className="md:basis-1/2" />
         <div className="z-40 max-w-[1500px] mx-auto md:px-28 md:basis-1/2 text-center md:text-left px-5 ">
            <h1 className="text-5xl font-bold md:text-6xl text-[#ffffff]  font-[MuseoModerno]">
               {" "}
               COLORADO PARENTS FOR QUALITY{" "}
               <span className="text-[#EB464A]">EDUCATION</span>{" "}
            </h1>

            <h2 className="pt-20 md:pt-0  text-2xl text-white font-[roboto]">
               WE MUST DO BETTER FOR OUR STUDENTS
            </h2>

            <div className="flex items-center justify-center gap-4 pt-10 md:justify-start">
               <button className="w-[148px] h-[51px] px-8 py-4 bg-[#EB464A] rounded backdrop-blur-[80px] justify-center items-center gap-2.5 inline-flex">
                  <div className="text-right text-white text-base font-medium font-['Roboto'] uppercase whitespace-nowrap">
                     Join With Us
                  </div>
               </button>
               <button className="w-[148px] h-[51px] px-8 py-4  border border-[#EB464A] rounded justify-center items-center gap-2.5 inline-flex">
                  <div className="text-right text-white text-base font-medium font-['Roboto'] uppercase whitespace-nowrap">
                     Donate to us
                  </div>
               </button>
            </div>
         </div>

         <div
            className="absolute inset-0 pointer-events-none light-point"
            ref={posRef}
         />
      </section>
   );
}
