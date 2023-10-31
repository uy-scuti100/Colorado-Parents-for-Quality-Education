import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function Navbar() {
   return (
      <nav className="flex justify-center ">
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
         <div className=" hidden md:flex justify-between fixed w-full z-50 top-[81px] items-center max-w-[1500px] md:px-10 lg:px-40 py-4 bg-white backdrop-blur-[30px] ">
            <Link
               href="/"
               className="text-sm font-medium text-zinc-600 whitespace-nowrap ">
               Home
            </Link>
            <Separator orientation="vertical" />
            <Link
               href="/"
               className="text-sm font-medium text-zinc-600 whitespace-nowrap ">
               About us
            </Link>
            <Separator orientation="vertical" />
            <Link
               href="/"
               className="text-sm font-medium text-zinc-600 whitespace-nowrap ">
               Donations Matter
            </Link>
            <Separator orientation="vertical" />
            <Link
               href="/"
               className="text-sm font-medium text-zinc-600 whitespace-nowrap ">
               CPQE CARE Program
            </Link>
            <Separator orientation="vertical" />
            <Link
               href="/"
               className="text-sm font-medium text-zinc-600 whitespace-nowrap ">
               Pages
            </Link>
            <Separator orientation="vertical" />
            <Link
               href="/"
               className="text-sm font-medium text-zinc-600 whitespace-nowrap ">
               Store
            </Link>
            <Separator orientation="vertical" />
            <Link
               href="/"
               className="text-sm font-medium text-zinc-600 whitespace-nowrap ">
               Survey
            </Link>
            <Separator orientation="vertical" />
            <Link
               href="/"
               className="text-sm font-medium text-zinc-600 whitespace-nowrap">
               Calendar Events
            </Link>
         </div>
         <div className="fixed z-50 w-full md:hidden">
            <div className="flex  justify-center items-center p-5 border-b border-black border-opacity-40 backdrop-blur-[30px] bg-white">
               <Image
                  src="/logo4.png"
                  height={50}
                  width={450}
                  alt="logo"
                  className="w-full"
               />
            </div>
         </div>
      </nav>
   );
}
