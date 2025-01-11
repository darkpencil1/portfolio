"use client";
import logo from "@/public/logo.png";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
//import CartIcon from "./CartIcon";
import Img from "@/components/base/Img";
import Link from "next/link";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";

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
    href: "shop",
    name: "Shop",
  },
];
const Header: React.FC = () => {
  const controls = useAnimation();
  const router = useRouter();

  return (
    <motion.header
      className={styles.header}
      animate={controls}
      transition={{ duration: 0.4 }}
    >
      <motion.div className={styles.nav__logo} onClick={() => router.push("/")}>
        <Img
          whileHover={{ scale: 1.1 }} // Scale the image up by 10% on hover
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }} // Add a smooth transition effect
          src={logo.src}
          alt="Fancy logo"
          width="60px"
        />
      </motion.div>
      <AnimatePresence>
        <h3>Ville Lähetkangas</h3>
        <motion.nav
          animate="animate"
          exit="exit"
          variants={navVariant}
          key="header-nav"
          className={styles.nav}
        >
          {navItems.map((item: NavItem, i: number) => {
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
          })}
        </motion.nav>
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
