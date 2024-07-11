import "./globals.css";
import Banner from "../pages/Banner";
import Header from "../components/Header";
import { Open_Sans } from 'next/font/google';


import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader/Preloader";


const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({children, }:Readonly<{children: React.ReactNode}>) {

  return (
    <html lang="en">
      <body className={`${openSans.className} relative`}>
        {/* <AnimatePresence mode='wait'>
          {isLoading && <Preloader setLoading={setIsLoading} />}
        </AnimatePresence> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
