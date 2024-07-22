"use client";
import "./globals.css";
import Banner from "../pages/Banner";
import About from "@/pages/About";
import 'locomotive-scroll/locomotive-scroll.css';
import { useEffect } from "react";

export default function Home() {
  useEffect( () => {

    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll(
            {smooth: true, el:document.getElementById('main')!,multiplier: -0.5},
          );
      }

    )()

  }, [])
  return (
    <main id="main">
      <Banner />
      <About />
    </main>
  );
}
