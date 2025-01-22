import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./ModalImage.module.css";

import React from "react";

type ModalImageProps = {
  currentImage: StaticImageData;
  index: number;
};
export default function ModalImage({ currentImage, index }: ModalImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      key={`Image ${index + 1}`}
      data-cy="modal-image"
    >
      <Image
        className={styles.modalImage}
        src={currentImage}
        width={currentImage.width}
        height={currentImage.height}
        alt={`Image ${index + 1}`}
        layout="responsive"
      />
    </motion.div>
  );
}
