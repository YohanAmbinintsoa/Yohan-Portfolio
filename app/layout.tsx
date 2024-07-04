'use client';
import "./globals.css";
import Banner from "./pages/Banner";
import Header from "./components/Header";
import { Open_Sans } from 'next/font/google';

import { useEffect, useState } from 'react'
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader/Preloader";

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})




export default function RootLayout() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <html lang="en">
      {/* Apply the Roboto font class */}
      <body className={`${openSans.className} relative`}>
        <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Header />
        <Banner />
      </body>
    </html>
  );
}
