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

const Banner: React.FC<BannerProps> = ({ loading }) => {
  const accroche = ["Transformez vos idées en solutions", "numériques efficaces."];
  const animation = {
    initial: { y: "100%", opacity: 0 },
    enter: (i: number) => ({
      y: "0",
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i },
    }),
  };

  useGSAP(() => {
        // gsap.from('.sary',{
        //   scale:0,
        //   duration:1,
        //   ease:"back"
        // });
        gsap.from('.phrase',{
          opacity: 0,
          y: 100,
          duration: 1,
          stagger: 0.075,
          ease: "back.inOut"
        });
  },[]);

  return (
    <section className={`${styles.banner_section} w-full h-full relative bg-transparent flex justify-center`}>
      <ParticlesContainer />
      <div className=" mt-[150px] flex flex-col items-center w-[50%]">
        <div className={`${styles.presentation}`}>
          <Magnetic>
            <Image className={`${styles.sary} sary`} alt="Pas trouve" src={sary} />
          </Magnetic>
          <h4 className={`${styles.bonjour}`}>
            Bonjour! Je suis <span className={`${styles.nom}`}>Yohan Ambinintsoa.</span>
          </h4>
        </div>
        <div className={`${styles.description} w-full flex flex-col items-center mt-7 justify-center`}>
          <div className="accroche overflow-hidden">
            {accroche.map((phrase, index) => (
              <h1
                key={index}
                className={`${styles.accroche} w-full phrase`}
              >
                {phrase}
              </h1>
            ))}
          </div>
          <p className={`${styles.description_text} text-center mt-7 w-[50%]`}>
            Spécialisé en <strong>développement web</strong> et création de <strong>solutions logicielles sur mesure.</strong>
          </p>
        </div>
        <div className={`${styles.contact} mt-7 w-[50%] flex gap-20 flex-row items-center justify-center`}>
          <Magnetic>
            <a href="mailto:yohanrabepro@gmail.com" className={`${styles.contact_button}`}>
              Contactez-moi<span>
                <IoMdMail />
              </span>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default Banner;
