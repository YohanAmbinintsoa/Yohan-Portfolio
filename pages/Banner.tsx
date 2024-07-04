"use client";

import styles from "./styles/banner.module.css"
import ParticlesContainer from "../components/ParticlesContainer";
import Image from "next/image";
import sary from "@/public/sary.png";
import Magnetic from "../components/Magnetic/Magnetic";
import { IoMdMail } from "react-icons/io";

export default function Banner() {

  return (
    <section className={`${styles.banner_section} w-full h-full relative bg-transparent flex justify-center`}>
      <ParticlesContainer />
      <div className={`${styles.container} mt-[150px] flex flex-col items-center`}>
        <div className={`${styles.presentation}`}>
          <Magnetic>
            <Image className={`${styles.sary}`} alt="Pas trouve" src={sary} />
          </Magnetic>
          <h2 className={`${styles.bonjour}`}>Bonjour! Je suis <span className={`${styles.nom}`}>Yohan Ambinintsoa.</span></h2>
        </div>
        <div className={`${styles.description} flex flex-col items-center mt-7 justify-center`}>
          <h1 className={`${styles.accroche}`}>Transformez vos idées en solutions numériques efficaces.</h1>
          <p className={`${styles.description_text} text-center mt-7 w-[50%]`}>Spécialisé en <strong>développement web</strong> et création de <strong>solutions logicielles sur mesure.</strong></p>
        </div>
        <div className={`${styles.contact} mt-7 w-[50%] flex gap-20 flex-row items-center justify-center`}>
          <Magnetic>
            <a href="mailto:yohanrabepro@gmail.com" className={`${styles.contact_button}`}>Contactez-moi<span><IoMdMail /></span></a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

