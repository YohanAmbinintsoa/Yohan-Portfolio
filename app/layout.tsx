'use client';
import "./globals.css";
import Banner from "../pages/Banner";
import Header from "../components/Header";
import { Open_Sans } from 'next/font/google';

import { useEffect, useState } from 'react'
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader/Preloader";
import About from "@/pages/About";

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({children, }:Readonly<{children: React.ReactNode}>) {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

      }
    )()
  }, [])

  return (
    <html lang="en">
      <body className={`${openSans.className} relative`}>
        {/* <AnimatePresence mode='wait'>
          {isLoading && <Preloader setLoading={setIsLoading} />}
        </AnimatePresence> */}
        <Header loading={isLoading} />
        <Banner loading={isLoading} />
        <About />
      </body>
    </html>
  );
}
