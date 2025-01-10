import React from "react";
import { motion } from "framer-motion";
import styles from "./GalleryModal.module.css";
import close from "@/public/icons/x-button.png";
import Image, { StaticImageData } from "next/image";
import ModalImage from "./ModalImage";
import ModalNavArrow from "./ModalNavArrow";

type ModalProps = {
  images: StaticImageData[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
};

const GalleryModal: React.FC<ModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const currentImage = images[currentIndex];

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    onNavigate(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    onNavigate(newIndex);
  };

  return (
    <div className={styles.modalBackdrop}>
      <motion.div
        className={styles.modalContent}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        {/* Close Button */}
        <Image
          src={close}
          alt="Close"
          className={styles.closeButton}
          onClick={onClose}
        />

        {/* Image */}
        <ModalImage currentImage={currentImage} index={currentIndex} />

        {/* Navigation Arrows */}
        <ModalNavArrow direction={"left"} onClick={handlePrevious} />
        <ModalNavArrow direction={"right"} onClick={handleNext} />
      </motion.div>
    </div>
  );
};

export default GalleryModal;
