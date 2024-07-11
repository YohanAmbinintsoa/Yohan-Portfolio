// components/Header.tsx
"use client";
import styles from "./header.module.css";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic/Magnetic";
import { useEffect } from "react";
import gsap from "gsap";

interface HeaderProps {
  loading: boolean;
}

const socialIcons = [
  { icon: FaFacebookF, link: 'https://www.facebook.com/yohan.rabe.3' },
  { icon: FaGithub, link: 'https://github.com' },
  { icon: FaLinkedinIn, link: 'https://linkedin.com' },
  { icon: IoLogoInstagram, link: 'https://instagram.com' },
];

const getVariant = (i: number) => ({
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: [0.5, 1.6, 0.4, 0.7],
    },
  },
});

const Header: React.FC<HeaderProps> = ({ loading }) => {
  // useEffect(() => {
  //   gsap.from('.link', {
  //     scale: 0,
  //     opacity: 0,
  //     ease: "bounce.inOut",
  //     duration: 1,
  //     stagger: {
  //       amount: 0.2
  //     }
  //   });
  // }, []);

  return (
    <nav className={`${styles.nav_container} header absolute z-10 top-8 h-10 w-[90%]`}>
      <a href="#">
        <p className="logo flex content-center text-xl gap-2 items-center">
          <span className={styles.logo_firstName}>Yohan</span>
          <span className={styles.logo_lastName}>Ambinintsoa.</span>
        </p>
      </a>
      <div className={styles.nav_links}>
        <Magnetic>
          <a className={`${styles.active_link} link`} href="#">Accueil</a>
        </Magnetic>
        <Magnetic>
          <a className="link" href="#">A propos</a>
        </Magnetic>
        <Magnetic>
          <a className="link" href="#">Educations</a>
        </Magnetic>
        <Magnetic>
          <a className="link" href="#">Experiences</a>
        </Magnetic>
      </div>
      <div className={styles.icons}>
        {socialIcons.map((icon, i) => (
          <Magnetic key={i}>
            <motion.a
              href={icon.link}
              variants={getVariant(i)}
              initial="hidden"
              animate={loading ? "hidden" : "visible"}
            >
              <icon.icon />
            </motion.a>
          </Magnetic>
        ))}
      </div>
    </nav>
  );
};

export default Header;
