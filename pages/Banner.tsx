"use client";

import styles from "./styles/banner.module.css";
import ParticlesContainer from "../components/ParticlesContainer";
import Image from "next/image";
import sary from "@/public/sary.png";
import Magnetic from "../components/Magnetic/Magnetic";
import { IoMdMail } from "react-icons/io";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface BannerProps {
  loading: boolean;
}

const Banner =() => {
  const accroche = ["Transformez vos idées", "en solutions numériques efficaces."];
  const animation = {
    initial: { y: "100%", opacity: 0 },
    enter: (i: number) => ({
      y: "0",
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i },
    }),
  };

  useGSAP(() => {
        const tl=gsap.timeline();
        tl.from('.sary',{
          scale:0,
          duration:0.8,
          ease:"back"
        });
        tl.from('.phrase',{
          opacity: 0,
          y: 100,
          rotateY: 90,
          duration: 0.8,
          stagger: 0.075,
          ease: "back.inOut"
        });
  },[]);


  return (
    <section data-scroll-section id="accueil" className={`${styles.banner_section} w-full relative bg-transparent flex items-center flex-col justify-center`}>
      {/* <ParticlesContainer /> */}
      <div className={ `${styles.container} flex flex-col items-center w-full`}>
        <div className={`${styles.presentation}`}>
          <Magnetic>
            <Image data-scroll data-scroll-speed="0.08" className={`${styles.sary} sary`} alt="Pas trouve" src={sary} />
          </Magnetic>
          <h4 data-scroll data-scroll-speed="0.08" className={`${styles.bonjour}`}>
            Bonjour! Je suis <span className={`${styles.nom}`}>Yohan Ambinintsoa.</span>
          </h4>
        </div>
        <div className={`${styles.description} w-full flex flex-col items-center mt-3 justify-center`}>
          <div data-scroll data-scroll-speed="0.09" className="accroche overflow-hidden">
            {accroche.map((phrase, index) => (
              <h1
                key={index}
                className={`${styles.accroche} w-full phrase`}
              >
                {phrase}
              </h1>
            ))}
          </div>
          <p data-scroll data-scroll-speed="0.08" className={`${styles.description_text} text-center mt-5 w-[40%]`}>
            Spécialisé en <strong>développement web</strong> et création de <strong>solutions logicielles sur mesure.</strong>
          </p>
        </div>
        <div data-scroll data-scroll-speed="0.08" className={`${styles.contact} mt-7 w-[50%] flex gap-20 flex-row items-center justify-center`}>
          <Magnetic>
            <a href="mailto:yohanrabepro@gmail.com" className={`${styles.contact_button}`}>
              Contactez-moi<span>
                <IoMdMail />
              </span>
            </a>
          </Magnetic>
        </div>
      </div>
      <div data-scroll data-scroll-speed="0.08" className={`${styles.banner_footer} flex flex-row justify-between`}>
        <div className={`${styles.contact_info}`}>
            <p className="text-sm">yohanrabepro@gmail.com</p>
            <p className="text-sm">(+261) 34 46 695 69</p>
        </div>
        <p className="text-center text-xs">© 2024 Yohan Ambinintsoa. Tous droits réservés.</p>
      </div>
    </section>
  );
};

export default Banner;
