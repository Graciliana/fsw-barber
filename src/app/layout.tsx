import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Footer } from "./_components/footer";


const nunito  = Nunito ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fsw",
  description: "Project de full stack week de sistema de barbeiaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
       
{children}
         <Footer />
        
        
      </body>
      
    </html>
  );
}
