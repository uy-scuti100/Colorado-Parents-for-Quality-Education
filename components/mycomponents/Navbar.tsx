"use client";
import { useState } from "react";
import Image from "next/image";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import {
   Menubar,
   MenubarContent,
   MenubarItem,
   MenubarMenu,
   MenubarTrigger,
} from "@/components/ui/menubar";

import Link from "next/link";
import { ModeToggle } from "@/providers/ThemeToggle";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <nav className="flex justify-center ">
         {/* desktop */}
         <div className="fixed w-full z-50 max-w-[1500px] md:px-10 lg:px-28 py-4 bg-white border-b border-black border-opacity-40 backdrop-blur-[30px] items-center md:flex justify-between hidden">
            <div>
               <Image
                  src="/logo4.png"
                  height={50}
                  width={250}
                  alt="logo"
                  className="w-[150px] md:w-[250px]"
               />
            </div>

            <button className="px-8 py-3 text-white bg-gray-800 rounded">
               Donate
            </button>
         </div>

         <div className=" hidden md:flex justify-center fixed w-full z-50 top-[81px] items-center max-w-[1500px] md:px-10 lg:px-40 py-4 bg-background backdrop-blur-[30px] ">
            <Menubar>
               <MenubarMenu>
                  <MenubarTrigger>Home</MenubarTrigger>
                  <MenubarContent>
                     <MenubarItem>Report Card for District 2</MenubarItem>
                     <MenubarItem>Report Card for District 3</MenubarItem>
                     <MenubarItem>Report Card for District 11</MenubarItem>
                     <MenubarItem>Report Card for District 20</MenubarItem>
                     <MenubarItem>Report Card for District 49</MenubarItem>
                  </MenubarContent>
               </MenubarMenu>
               <MenubarMenu>
                  <MenubarTrigger>About Us</MenubarTrigger>
               </MenubarMenu>
               <MenubarMenu>
                  <MenubarTrigger>Donation Matter</MenubarTrigger>
               </MenubarMenu>
               <MenubarMenu>
                  <MenubarTrigger>CPQE CARE Program</MenubarTrigger>
                  <MenubarContent>
                     <MenubarItem> CARE Program Application </MenubarItem>
                     <MenubarItem> CPQE CARE Information </MenubarItem>
                  </MenubarContent>
               </MenubarMenu>
               <MenubarMenu>
                  <MenubarTrigger>Pages</MenubarTrigger>
                  <MenubarContent>
                     <MenubarItem>Blog</MenubarItem>
                     <MenubarItem>
                        Barriers Affecting Urban Parental Involvement
                     </MenubarItem>
                     <MenubarItem>Become a Volunteer</MenubarItem>
                     <MenubarItem>Contact CPQE</MenubarItem>
                  </MenubarContent>
               </MenubarMenu>
               <MenubarMenu>
                  <MenubarTrigger>Store</MenubarTrigger>
                  <MenubarContent>
                     <MenubarItem>Shop</MenubarItem>
                     <MenubarItem>Cart</MenubarItem>
                     <MenubarItem>Single Events</MenubarItem>
                  </MenubarContent>
               </MenubarMenu>
               <MenubarMenu>
                  <MenubarContent>Survey</MenubarContent>
               </MenubarMenu>
               <MenubarMenu>
                  <MenubarContent>Calendar Events</MenubarContent>
               </MenubarMenu>
            </Menubar>
            <div className="ml-3">
               <ModeToggle />
            </div>
         </div>
         {/* mobile */}
         <div className="fixed z-50 w-full bg-white md:hidden ">
            <div className="flex  justify-center items-center p-5 border-b border-black border-opacity-40 backdrop-blur-[30px] ">
               <Image
                  src="/logo4.png"
                  height={50}
                  width={450}
                  alt="logo"
                  className="w-full"
               />
            </div>

            <div
               className="flex items-center justify-center w-full py-2 m-1 border border-b"
               onClick={() => setIsOpen((prev) => !prev)}>
               <p
                  className={`${
                     isOpen && "rotate-[360deg]"
                  }  transition-all duration-500 font-semibold cursor-pointer text-black`}>
                  {isOpen ? "Close" : "Menu"}
               </p>
            </div>

            <div
               className={`absolute w-full pb-32 h-screen overflow-auto  text-foreground bg-background ${
                  isOpen
                     ? "top-[100%] transition-all duration-500"
                     : "-top-[2000px]"
               }`}>
               <div className="px-5 py-2">
                  <Accordion type="single" collapsible className="w-full">
                     <AccordionItem value="item-1">
                        <AccordionTrigger className="font-bold">
                           Home
                        </AccordionTrigger>
                        <AccordionContent className="py-2 hover:opacity-50">
                           <Link href="/">Report Card for District 2</Link>
                        </AccordionContent>
                        <AccordionContent className="py-2 hover:opacity-50">
                           <Link href="/">Report Card for District 3</Link>
                        </AccordionContent>
                        <AccordionContent className="py-2 hover:opacity-50">
                           <Link href="/">Report Card for District 11</Link>
                        </AccordionContent>
                        <AccordionContent className="py-2 hover:opacity-50">
                           <Link href="/">Report Card for District 20</Link>
                        </AccordionContent>
                        <AccordionContent className="py-2 hover:opacity-50">
                           <Link href="/">Report Card for District 49</Link>
                        </AccordionContent>
                     </AccordionItem>
                     <AccordionItem value="item-2">
                        <AccordionTrigger className="font-bold">
                           CPQE CARE Program
                        </AccordionTrigger>
                        <AccordionContent className="py-2 hover:opacity-50">
                           <Link href="/">CARE Program Application</Link>
                        </AccordionContent>
                        <AccordionContent className="py-2 hover:opacity-50">
                           <Link href="/">CPQE CARE Information</Link>
                        </AccordionContent>
                     </AccordionItem>
                     <AccordionItem value="item-3">
                        <AccordionTrigger className="font-bold">
                           Pages
                        </AccordionTrigger>
                        <AccordionContent className="py-2 hover:opacity-50">
                           Blog
                        </AccordionContent>
                        <AccordionContent className="py-2 hover:opacity-50">
                           Barriers Affecting Urban Parental Involvement
                        </AccordionContent>
                        <AccordionContent className="py-2 hover:opacity-50">
                           Become a Volunteer
                        </AccordionContent>
                        <AccordionContent className="py-2 hover:opacity-50">
                           Contact CPQE
                        </AccordionContent>
                     </AccordionItem>
                     <AccordionItem value="item-4">
                        <AccordionTrigger className="font-bold">
                           Store
                        </AccordionTrigger>
                        <AccordionContent className="py-2 hover:opacity-50">
                           <Link href="/">Shop</Link>
                        </AccordionContent>
                        <AccordionContent className="py-2 hover:opacity-50">
                           <Link href="/">Cart</Link>
                        </AccordionContent>
                        <AccordionContent className="py-2 hover:opacity-50">
                           <Link href="/">Single Events</Link>
                        </AccordionContent>
                        <AccordionContent className="py-2 hover:opacity-50">
                           <Link href="/">Checkout</Link>
                        </AccordionContent>
                        <AccordionContent className="py-2 hover:opacity-50">
                           <Link href="/">My Account</Link>
                        </AccordionContent>
                     </AccordionItem>
                  </Accordion>
                  <div className="flex flex-col gap-5 pt-5">
                     <Link href="/" className="py-1 text-sm font-bold">
                        About Us
                     </Link>
                     <Link href="/" className="py-1 text-sm font-bold">
                        Donations Matter
                     </Link>
                     <Link href="/" className="py-1 text-sm font-bold">
                        Survey
                     </Link>
                     <Link href="/" className="py-1 text-sm font-bold">
                        Calendar Events
                     </Link>
                  </div>
               </div>

               <div className="px-5 py-3">
                  <ModeToggle />
               </div>
            </div>
         </div>
      </nav>
   );
}
