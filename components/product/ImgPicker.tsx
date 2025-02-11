import { motion } from "framer-motion";
import styles from "./ImgPicker.module.css";
import IProduct from "@/types/ProductInterface";
import { StaticImageData } from "next/image";

type ImgPickerProps = {
  selectedImg: StaticImageData | undefined;
  setSelectedImg: (img: StaticImageData) => string | void;
  product: IProduct;
};

const ImgPicker = (props: ImgPickerProps) => {
  const { setSelectedImg, selectedImg } = props;

  const handleClick = (img: StaticImageData, id: string) => {
    setSelectedImg(img);
    const clickedImg = document.getElementById(id);
    clickedImg?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.imgPicker}>
      <div className={styles.imgPicker__container}>
        {props.product?.images.map((img: StaticImageData, i: number) => {
          const id = `img-picker-${i}`;
          const isSelectedImg = selectedImg === img ? true : false;
          return (
            <div
              id={`${id}-container`}
              className={`${styles.imgPicker__imgContainer} ${
                isSelectedImg && styles.imgPicker__imgContainer_selected
              }`}
              onClick={() => handleClick(img, id)}
              key={i}
            >
              <motion.img
                id={`${id}`}
                src={img.src}
                className={styles.picker__thumbnailImg}
                key={img.src}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ImgPicker;
