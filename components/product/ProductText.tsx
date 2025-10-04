import IProduct from "@/types/ProductInterface";
import styles from "./ProductText.module.css";
import ProductNavButton from "./ProductNavButton";

const ProductText = ({ product }: { product: IProduct }) => {
  const generatePriceString = (): string => {
    let result = "Price: ";
    for (const obj of product.price) {
      for (const [key, value] of Object.entries(obj)) {
        result += `${key} - <b>${value}€</b>, `;
      }
    }
    return result;
  };
  return (
    <div className={styles.product__textContainer}>
      <p className={styles.product__text}>{product.productType}</p>
      <h2>{product?.name}</h2>
      <div className={styles.product__textDescContainer}>
        <p className={styles.product__textPrimer}>{product?.primer}</p>
        <p className={styles.product__textDesc}>{product?.description}</p>
        <p className={styles.product__info}>
          Estimated time: <b>1 week</b>
        </p>
        <p className={styles.product__info}>
          Shipping: <b>within Finland</b>
        </p>

        <p
          className={styles.product__info_price}
          dangerouslySetInnerHTML={{ __html: generatePriceString() }}
        ></p>
        <p className={styles.product__info_priceHead}>
          (+100€ for each additional head)
        </p>
      </div>
      <ProductNavButton />
    </div>
  );
};
export default ProductText;
