import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import close from "@/public/icons/x-button.png";
import styles from "./ModalCloseButton.module.css";

type ModalCloseButtonProps = {
  onClose: () => void;
};

export const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  return (
    <motion.div
      className={styles.closeButton}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.1 }}
    >
      {/* Close Button */}
      <Image src={close} alt="Close" onClick={onClose} />
    </motion.div>
  );
};
