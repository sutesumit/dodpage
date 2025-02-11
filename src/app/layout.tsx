import type { Metadata } from "next";
import { Italianno, Miriam_Libre } from "next/font/google";
import "@fontsource/cascadia-mono"
import "./globals.css";
import Image from 'next/image'
import Navbar from "./my_components/commons/Navbar";
import Newnav from "./my_components/commons/Newnav";


const italianno = Italianno({
  weight: '400',
  subsets: ['latin'],
});

const miriam = Miriam_Libre({
  weight: '400',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Dramas of Discrimination",
  description: "Art-Based Interactive Workshop by Ambedkar Reading Circle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${italianno.className} ${miriam.className} antialiased text-[var(--primary-white)]`}
      >
        <div className="relative items-center justify-center h-screen w-screen p-10">
          <Newnav />
           {children}
        </div>
        <div className="bg-image bg-[var(--primary-white)] absolute -z-10 inset-0 overflow-hidden">
          <Image className="opacity-75 object-cover h-full w-full"  src="/bg-image.png" alt="bg" width={3590} height={1625} />
        </div>
      </body>
    </html>
  );
}
