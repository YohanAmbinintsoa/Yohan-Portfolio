"use client";

import styles from "./styles/about.module.css";
import { useRef } from "react";
import gsap from "gsap";
import sary from "@/public/sary.png";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

interface BannerProps {
  loading: boolean;
}

const phrases = ["Je suis Yohan Ambinintsoa, un développeur lambda qui reve de grandeur.", 
" Diplomé de l'IT University, je suis habitué aux demandes difficiles et aux deadlines sérrés.",
"N'hesitez pas à me contacter pour une quelconque collaboration."];

const About = () => {
  const containerRef = useRef(null);
  const imageContainer = useRef(null);

  
  return (
    <section ref={containerRef} data-scroll-section id="about" className={`${styles.about_section} w-full relative bg-transparent gap-[100px] items-center my-6 flex flex-col justify-center`}>
      <div className={`${styles.container} w-[90%]`}>
        <div className="">
          <h1 data-scroll data-scroll-speed="0.08" data-scroll-delay="0.06" className="">RABEARIVELOARISOA Ambinintsoa Yohan.</h1>
          <h4 data-scroll data-scroll-speed="0.08" className="text-teal-400">Developpeur/Data Analyst.</h4>
          <div data-scroll data-scroll-speed="0.08">
            {
              phrases.map((phrase, index) => (
                <AnimatedText key={index} >{phrase}</AnimatedText>
              ))
            }
          </div>
        </div>
        <div className={` relative h-[840px] overflow-hidden`} >
            <div ref={imageContainer} className={`${styles.image} w-[100%] h-full overflow-hidden relative`}>
              <Image data-scroll data-scroll-speed="-0.35" className={`${styles.sary} absolute rounded-md h-full top-[-200px] w-[105%]`} src={sary} alt="" />
              <div className="absolute z-10 w-full h-full">
                yohanrabepro@gmail.com
              </div>
            </div>
        </div>
      </div>

    </section>
  );
};

function AnimatedText({ children }: { children: string }) {
  const text = useRef(null);
  useGSAP(async () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        scrub: true,
        end: "bottom+=400px bottom",
      },
      x: -50,
      opacity: 0,
      ease: "power3.Out",
      stagger:0.1
    })
  })

  return <h3 ref={text}>{children}</h3>
}

export default About;
