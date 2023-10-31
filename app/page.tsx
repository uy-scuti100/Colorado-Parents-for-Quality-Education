import HeroSection from "@/components/mycomponents/HeroSection";
import OurMissionComponent from "@/components/mycomponents/OurMissionComponent";

export default function Home() {
   return (
      <main className="pt-[81px] md:pt-[134px] overflow-x-hidden max-w-[1500px] mx-auto min-h-screen">
         <HeroSection />
         <OurMissionComponent />
      </main>
   );
}
