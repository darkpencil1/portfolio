import { useEffect, useRef } from "react";
import { useAppContext } from "@/context/AppContextProvider";
import bag from "@/public/shopping-bag.png";
import { motion, useAnimation } from "framer-motion";
import styles from "./CartIcon.module.css";
import Link from "next/link";

const CartIcon = () => {
  const { state } = useAppContext();
  const { cart } = state;
  const controls = useAnimation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    //Prevent animation from running when component is created
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      if (cart.items.length > 0) {
        controls.start({
          scale: [1, 1.3, 1],
          transition: { duration: 0.5 },
        });
      }
    }
  }, [cart, controls]);

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className={styles.cartIcon__container}
      key="header__cart"
    >
      <Link href="/cart" />
      <motion.img
        src={bag.src}
        className={styles.cartIcon}
        animate={controls}
      />
      <div className={styles.cartIcon__number}>
        {cart.items.length > 0 ? cart.items.length : ""}
      </div>
    </motion.div>
  );
};

export default CartIcon;
