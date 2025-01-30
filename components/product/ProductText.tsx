import IProduct from "@/types/ProductInterface";
import styles from "./ProductText.module.css";

const ProductText = ({ product }: { product: IProduct }) => {
  return (
    <div className={styles.product__textContainer}>
      <p className={styles.product__text}>Poster</p>
      <h2>{product?.name}</h2>
      <div className={styles.product__textDescContainer}>
        <p className={styles.product__textPrimer}>{product?.primer}</p>
        <p className={styles.product__textDesc}>{product?.description}</p>
      </div>
    </div>
  );
};
export default ProductText;
