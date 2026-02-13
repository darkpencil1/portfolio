"use client";
import { useEffect, useState } from "react";
import artwork from "@/resources/portfolio/artwork";
import Artwork, { ArtCategory } from "@/types/ArtworkInterface";
import styles from "./Gallery.module.css";
import GalleryModal from "./GalleryModal";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageProvider";
import { translations } from "@/resources/i18n";

type ExtendedCategory = ArtCategory | "all";
const topics: ExtendedCategory[] = ["all", "painting", "digital", "drawing"];
const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { lang } = useLanguage();

  //Prevent site scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isModalOpen]);

  const filteredImages =
    filter === "all"
      ? artwork
      : artwork.filter((img) => img.category === filter);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={styles.gallery} data-cy="gallery">
      {/* Image Grid */}
      <motion.div
        className={styles.imageGrid}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        data-cy="gallery-grid"
      >
        <AnimatePresence>
          {filteredImages.map((artwork: Artwork, index: number) => (
            <motion.div
              key={artwork.id}
              className={styles.imageCard}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={artwork.img}
                alt={`Image ${artwork.id}`}
                className={styles.image}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Filter Section */}
      <div
        className={`${styles.filterContainer} ${lang === "fi" ? styles.filterFi : styles.filterEn}`}
      >
        {topics.map((topic) => {
          const topicKey = topic as keyof typeof translations["en"]["artwork"]["topics"];
          return (
            <li className={styles.filterBtn} key={topic}>
              <p onClick={() => setFilter(topic)}>
                {translations[lang].artwork.topics[topicKey]}
              </p>
            </li>
          );
        })}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <GalleryModal
          images={filteredImages.map((img) => img.img)}
          currentIndex={currentIndex}
          onClose={handleCloseModal}
          onNavigate={setCurrentIndex}
        />
      )}
    </div>
  );
};

export default Gallery;
