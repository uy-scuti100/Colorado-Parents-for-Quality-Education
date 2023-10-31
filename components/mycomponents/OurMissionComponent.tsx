import { contents } from "@/constants/cardContents";
import ParentalInvolvementCard from "./ParentalInvolvementCard";
import ImageSlider from "./ImageSlider";
export default function OurMissionComponent() {
   return (
      <section className="py-20 padding">
         <div className="flex flex-col gap-10">
            <div className="text-center">
               <div className="flex items-center justify-center gap-1">
                  <div className="w-[50px] h-[2px] bg-foreground"></div>
                  <div className="relative text-2xl md:text-6xl">
                     Our Mission
                  </div>
                  <div className="w-[50px] h-[2px] bg-foreground"></div>
               </div>
               <p className="pt-10">
                  Empower parents with resources, information and networking
                  opportunities to be effective, powerful, formidable advocates
                  for their children’s educational rights!
               </p>
            </div>
            <div className="flex justify-center">
               <div>
                  <video
                     src="/pta.mp4"
                     className="w-full h-auto rounded-md"
                     autoPlay
                     muted
                     loop
                  />
               </div>
            </div>
         </div>

         {/* parentals */}
         <div className="flex flex-col gap-10 pt-20">
            <div className="text-center">
               <div className="flex items-center justify-center gap-1">
                  <div className="w-[50px] h-[2px] bg-foreground"></div>
                  <div className="relative text-2xl md:text-6xl">
                     PARENTAL INVOLVEMENT
                  </div>
                  <div className="w-[50px] h-[2px] bg-foreground"></div>
               </div>
               <p className="pt-10">
                  Colorado Parents for Quality Education believes, when exposed
                  to factual information, unlimited resources, parents
                  understand, they, have the “Ultimate Responsibility” for the
                  successful results of their child’s/children’s education!!
               </p>
            </div>
            <div className="flex justify-center">
               <div>
                  <video
                     src="/pnc.mp4"
                     className="w-full h-auto rounded-md"
                     autoPlay
                     muted
                     loop
                  />
               </div>
            </div>
         </div>

         <div className="flex flex-wrap items-center justify-center gap-10 pt-20">
            {contents.map((content, i) => (
               <ParentalInvolvementCard
                  key={i}
                  title={content.title}
                  content={content.content}
               />
            ))}
         </div>

         <div className="flex justify-center pt-20 ">
            <ImageSlider />
         </div>
      </section>
   );
}
