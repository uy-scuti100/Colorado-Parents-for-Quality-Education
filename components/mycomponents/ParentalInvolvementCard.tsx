import { CheckCircle2, Verified, VerifiedIcon } from "lucide-react";

export default function ParentalInvolvementCard({
   title,
   content,
}: {
   title: string;
   content: string;
}) {
   return (
      <section className="flex flex-col gap-6 p-2 rounded md:h-[320px] md:w-60 bg-black/5 dark:bg-white/5 shadow">
         <div className="text-xl font-bold whitespace-wrap">{title} </div>

         <div className="text-sm">{content}</div>
      </section>
   );
}
