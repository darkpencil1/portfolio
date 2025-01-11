import React from "react";
import { motion } from "framer-motion";
import styles from "./GalleryModal.module.css";
import { StaticImageData } from "next/image";
import ModalImage from "./ModalImage";
import ModalNavArrow from "./ModalNavArrow";
import { ModalCloseButton } from "./ModalCloseButton";

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
        <ModalCloseButton onClose={onClose} />
        {/* Image */}
        <ModalImage currentImage={currentImage} index={currentIndex} />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <ModalNavArrow direction={"left"} onClick={handlePrevious} />
            <ModalNavArrow direction={"right"} onClick={handleNext} />
          </>
        )}
      </motion.div>
    </div>
  );
};

export default GalleryModal;
