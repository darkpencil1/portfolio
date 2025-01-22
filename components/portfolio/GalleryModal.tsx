import React from "react";
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
    <div className={styles.modalBackdrop} data-cy="modal">
      <div className={styles.modalContent}>
        {/* Image */}
        <ModalImage currentImage={currentImage} index={currentIndex} />

        <div className={styles.modalButton__container}>
          {/* Navigation Arrows */}
          <div className={styles.modalArrow__container}>
            {images.length > 1 && (
              <>
                <ModalNavArrow
                  direction={"left"}
                  onClick={handlePrevious}
                  data-cy="modal-prev"
                />
                <ModalNavArrow
                  direction={"right"}
                  onClick={handleNext}
                  data-cy="modal-next"
                />
              </>
            )}
          </div>
          <ModalCloseButton onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
