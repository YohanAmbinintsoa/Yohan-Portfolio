"use client";

import styles from "./styles/about.module.css";
import Magnetic from "../components/Magnetic/Magnetic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

interface BannerProps {
  loading: boolean;
}

const About= () => {

  return (
    <section className={`${styles.about_section} w-full relative bg-transparent flex justify-center`}>
      
    </section>
  );
};

export default About;
