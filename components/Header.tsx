"use client";
import styles from "./header.module.css";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic/Magnetic";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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

const Header = () => {
  const [active, setActive] = useState("accueil");
  const [show,setShow]=useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShow(false);
    } else {
      // Scrolling up
      setShow(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useGSAP(() => {
    gsap.from('.link', {
      scale: 0,
      opacity: 0,
      ease: "bounce.inOut",
      duration: 1,
      stagger: {
        amount: 0.2
      }
    });
  });


  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
      if (link.getAttribute('href')?.substring(1) === active) {
        link.classList.add(styles.active_link);
      } else {
        link.classList.remove(styles.active_link);
      }
    });
  }, [active]);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId!);
    targetElement?.scrollIntoView({ behavior: 'smooth' });
    setActive(targetId!);
  };

  return (
    <nav className={`${styles.nav_container} header ${show ? 'top-0' : 'top-[-100px]'} fixed z-10 w-[100%]`}>
      <a href="#accueil" onClick={handleLinkClick}>
        <p className="logo flex content-center text-xl gap-2 items-center">
          <span className={styles.logo_firstName}>Yohan</span>
          <span className={styles.logo_lastName}>Ambinintsoa.</span>
        </p>
      </a>
      <div className={styles.nav_links}>
        <Magnetic>
          <a className="link" onClick={handleLinkClick} href="#accueil" >Accueil</a>
        </Magnetic>
        <Magnetic>
          <a className="link" onClick={handleLinkClick} href="#about" >A propos</a>
        </Magnetic>
        <Magnetic>
          <a className="link" onClick={handleLinkClick} href="#education" >Educations</a>
        </Magnetic>
        <Magnetic>
          <a className="link" onClick={handleLinkClick} href="#experience" >Experiences</a>
        </Magnetic>
      </div>
      <div className={styles.infos}>
        <Magnetic>
          <a href="">
            <div className={`${styles.cv}`}>
              <p className="text-sm my-1">Voir mon CV</p>
            </div>
          </a>
        </Magnetic>
        <div className={styles.icons}>
          {socialIcons.map((icon, i) => (
            <Magnetic key={i}>
              <motion.a
                href={icon.link}
                variants={getVariant(i)}
                initial="hidden"
                animate="visible"
              >
                <icon.icon />
              </motion.a>
            </Magnetic>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
