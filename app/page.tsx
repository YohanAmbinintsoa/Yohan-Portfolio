import "./globals.css";
import Banner from "../pages/Banner";
import About from "@/pages/About";
import LocomotiveScroller from "@/components/LocomotiveScroller";

export default function Home() {
  
  return (
    <LocomotiveScroller>
        <Banner />
        <About />
    </LocomotiveScroller>
  );
}
