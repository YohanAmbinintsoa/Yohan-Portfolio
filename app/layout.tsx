import "./globals.css";
import Banner from "../pages/Banner";
import Header from "../components/Header";
import { Poppins } from 'next/font/google';


import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader/Preloader";
import LocomotiveScroller from "@/components/LocomotiveScroller";


const openSans = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className={`${openSans.className} relative`}>
        {/* <AnimatePresence mode='wait'>
          {isLoading && <Preloader setLoading={setIsLoading} />}
        </AnimatePresence> */}
        <Header />
        <LocomotiveScroller>
          {children}
        </LocomotiveScroller>
      </body>
    </html>
  );
}
