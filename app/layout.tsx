import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/mycomponents/Navbar";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Colorado Parents For- Quality Education",
   description:
      "Empower parents with  resources, information and networking opportunities to be effective, powerful, formidable advocates for their children’s educational rights!",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <ReactQueryProvider>
               <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange>
                  <Navbar />
                  {children}
               </ThemeProvider>
            </ReactQueryProvider>
         </body>
      </html>
   );
}
