import type { Metadata } from "next";
import { Italianno } from "next/font/google";
import "@fontsource/cascadia-mono"
import "./globals.css";
import Image from 'next/image'


const italianno = Italianno({
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
        className={`${italianno.className} antialiased text-[var(--primary-white)]`}
      >
        {children}
        <div className="bg-image bg-[var(--primary-white)] absolute -z-10 inset-0 overflow-hidden">
          <Image className="opacity-75 object-cover h-full w-full"  src="/bg-image.png" alt="bg" width={3590} height={1625} />
        </div>
      </body>
    </html>
  );
}
