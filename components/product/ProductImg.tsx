import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import styles from "./ProductImg.module.css";
import { StaticImageData } from "next/image";
import Image from "next/image";

type ProductImgProps = {
  selectedImg: StaticImageData;
};

const ProductImg = ({ selectedImg }: ProductImgProps) => {
  // Force re-render of the Zoom component by updating a key
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Update the key when the selectedImg prop changes
    setKey((prevKey) => prevKey + 1);
  }, [selectedImg]);

  return (
    <motion.div
      className={styles.product__imgContainer}
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.4 }}
      key={key}
    >
      <Zoom>
        <Image
          src={selectedImg}
          className={styles.product__img}
          key={selectedImg.src}
          alt="Product image"
          layout="responsive"
        />
      </Zoom>
    </motion.div>
  );
};
export default ProductImg;
