"use client";
import styles from "./header.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic/Magnetic";

export default function Header() {
    const socialIcons = [
        { icon: FaFacebookF, link: 'https://www.facebook.com/yohan.rabe.3' },
        { icon: FaGithub, link: 'https://github.com' },
        { icon: FaLinkedinIn, link: 'https://linkedin.com' },
        { icon: IoLogoInstagram, link: 'https://instagram.com' },
    ];

    const getVariant = (i: number) => {
        return {
            hidden: { opacity: 0, scale: 0 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.5, 1.6, 0.4, 0.7]
                },
            },
        }
    }

    return (
        <nav className={`${styles.nav_container} absolute z-10 top-8 h-10 w-[90%]`}>
            <a href=""><h1 className="logo flex content-center text-xl gap-2 items-center"><span className={`${styles.logo_firstName}`}>Yohan</span><span className={`${styles.logo_lastName}`}>Ambinintsoa.</span></h1></a>
            <div className={`${styles.nav_links}`}>
                <Magnetic>
                    <a className={`${styles.active_link}`} href="">Accueil</a>
                </Magnetic>
                <Magnetic>
                    <a href="">A propos</a>
                </Magnetic>
                <Magnetic>
                    <a href="">Educations</a>
                </Magnetic>
                <Magnetic>
                    <a href="">Experiences</a>
                </Magnetic>
            </div>
            <div className={`${styles.icons}`}>
                {socialIcons.map((icon, i) => (
                    <Magnetic>
                        <motion.a
                            key={i}
                            href={icon.link}
                            variants={getVariant(i)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                        >
                            <icon.icon />
                        </motion.a>
                    </Magnetic>

                ))}
            </div>
        </nav>
    );
}

