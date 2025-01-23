import { motion } from "framer-motion";
import Image from "next/image";
import arrow from "@/public/icons/nav__arrow.png";
import styles from "./ModalNavArrow.module.css"; // Import styles for the arrow

type NavigationArrowProps = {
  direction: "left" | "right"; // To specify the direction of the arrow
  onClick: () => void; // The onClick handler to trigger the navigation
};

export default function ModalNavArrow({
  direction,
  onClick,
}: NavigationArrowProps) {
  return (
    <motion.div
      className={styles.arrowContainer}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.1 }}
      data-cy={direction === "left" ? "modal-prev" : "modal-next"}
    >
      <Image
        src={arrow}
        alt={`${direction} arrow`}
        className={
          direction === "left"
            ? `${styles.leftArrow} ${styles.arrow}`
            : `${styles.rightArrow} ${styles.arrow}`
        }
      />
    </motion.div>
  );
}
