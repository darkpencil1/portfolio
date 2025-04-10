"use client";
import logo from "@/public/icons/logo.png";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Img from "@/components/base/Img";
import Image from "next/image";
import hamburger from "@/public/icons/hamburger.png";
import close from "@/public/icons/x-button.png";
import Link from "next/link";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    href: "/about",
    name: "About",
  },
  {
    href: "/contact",
    name: "Contact",
  },
  {
    href: "/shop",
    name: "Shop",
  },
];

const useMobile = (): boolean => {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= 1000);
    };

    // Set initial state
    checkScreenSize();

    // Add event listener on mount
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobileScreen;
};

const Header: React.FC = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMobile();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <motion.header
      className={styles.header}
      animate={{ height: menuOpen ? "auto" : "90px" }} // Adjust height dynamically
      transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth height transition
    >
      <div className={styles.header__iconContainer}>
        <div className={styles.header__title}>
          <motion.div
            className={styles.nav__logo}
            onClick={() => router.push("/")}
            data-cy="nav__logo"
          >
            <Img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              src={logo.src}
              alt="Fancy logo"
              width="50px"
            />
          </motion.div>
          <h3 className={styles.title}>Art of Ville Lähetkangas</h3>
        </div>

        {isMobile && (
          <motion.div
            className={styles.nav__toggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={menuOpen ? close : hamburger}
              onClick={toggleMenu}
              alt="toggle"
              className={styles.nav__toggleImg}
              data-cy="nav__toggleImg"
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
          {!isMobile ? (
            navItems.map((item: NavItem, i: number) => {
              return (
                <motion.div
                  animate="animate"
                  exit="exit"
                  variants={navVariant}
                  transition={{ delay: i * 0.1, duration: 0.2 }}
                  className={styles.desktopLink}
                  key={i}
                  data-cy="desktopLink"
                >
                  <Link href={item.href} scroll={true}>
                    {item.name}
                  </Link>
                </motion.div>
              );
            })
          ) : (
            <>
              <AnimatePresence>
                {menuOpen &&
                  [...navItems] // Reverse order for exit animation
                    .slice()
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
                        data-cy="mobileLink"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen((prev) => !prev)}
                          scroll={true}
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
