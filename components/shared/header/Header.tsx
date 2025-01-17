"use client";
import logo from "@/public/logo.png";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import Img from "@/components/base/Img";
import Image from "next/image";
import hamburger from "@/public/icons/hamburger.png";
import close from "@/public/icons/x-button.png";
import Link from "next/link";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const navVariant: Variants = {
  animate: {
    translateX: [-50, 0],
    opacity: [0, 1],
  },
  exit: {
    translateX: [0, -50],
    opacity: [1, 0],
  },
};

type NavItem = {
  href: string;
  name: string;
};
const navItems: Array<NavItem> = [
  {
    href: "/",
    name: "Artwork",
  },
  {
    href: "about",
    name: "About",
  },
  {
    href: "contact",
    name: "Contact",
  },
  {
    href: "shop",
    name: "Shop",
  },
];
const Header: React.FC = () => {
  const controls = useAnimation();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <motion.header
      className={styles.header}
      animate={{ height: menuOpen ? "auto" : "90px" }} // Adjust height dynamically
      transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth height transition
    >
      <div className={styles.header__iconContainer}>
        <motion.div
          className={styles.nav__logo}
          onClick={() => router.push("/")}
        >
          <Img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            src={logo.src}
            alt="Fancy logo"
            width="60px"
          />
        </motion.div>

        {window.innerWidth <= 1000 && (
          <motion.div
            className={styles.nav__toggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={menuOpen ? hamburger : close}
              onClick={toggleMenu}
              alt="toggle"
              className={styles.nav__toggleImg}
            />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        <motion.nav
          animate="animate"
          exit="exit"
          variants={navVariant}
          key="header-nav"
          className={styles.nav}
        >
          {window.innerWidth > 1000 ? (
            navItems.map((item: NavItem, i: number) => {
              return (
                <motion.div
                  animate="animate"
                  exit="exit"
                  variants={navVariant}
                  transition={{ delay: i * 0.1, duration: 0.2 }}
                  key={i}
                >
                  <Link href={item.href}>{item.name}</Link>
                </motion.div>
              );
            })
          ) : (
            <>
              <AnimatePresence>
                {menuOpen &&
                  [...navItems] // Reverse order for exit animation
                    .slice()
                    .reverse()
                    .map((item: NavItem, i: number) => (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{
                          scale: 0,
                          opacity: 0,
                          transition: {
                            delay: (navItems.length - i - 1) * 0.1, // Reverse order
                          },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: i * 0.1, // Normal order for entering
                        }}
                        whileHover={{
                          scale: 1.02,
                          rotate: 1,
                          transition: { duration: 0.1 },
                        }}
                        whileTap={{
                          scale: 0.98,
                          rotate: 0,
                          transition: { duration: 0.2 },
                        }}
                        key={item.name}
                        className={styles.mobileLink}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen((prev) => !prev)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
              </AnimatePresence>
            </>
          )}
        </motion.nav>
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
