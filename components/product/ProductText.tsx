"use client";

import IProduct from "@/types/ProductInterface";
import styles from "./ProductText.module.css";
import ProductNavButton from "./ProductNavButton";
import { useLanguage } from "@/context/LanguageProvider";
import { translations } from "@/resources/i18n";

const ProductText = ({ product }: { product: IProduct }) => {
  const { lang } = useLanguage();
  const prod = translations[lang].product;

  const generatePriceString = (): string => {
    let result = `${prod.priceLabel} `;
    for (const obj of product.price) {
      const entries = Object.entries(obj);
      if (entries.length === 1) {
        const [key, value] = entries[0];
        if (key === "price") {
          // simple single price value
          result += `<b>${value}€</b>, `;
          continue;
        }
        result += `${key} - <b>${value}€</b>, `;
      } else {
        for (const [key, value] of entries) {
          result += `${key} - <b>${value}€</b>, `;
        }
      }
    }
    // Remove trailing comma and space if present
    if (result.endsWith(", ")) {
      result = result.slice(0, -2);
    }
    return result;
  };
  return (
    <div className={styles.product__textContainer}>
      <p className={styles.product__text}>
        {translations[lang].productTypes?.[product.productType] ?? product.productType}
      </p>
      <h2>{product?.name[lang]}</h2>
      <div className={styles.product__textDescContainer}>
        <p className={styles.product__textPrimer}>{product?.primer[lang]}</p>
        <p className={styles.product__textDesc}>{product?.description[lang]}</p>
        <p className={styles.product__info}>
          {prod.estimatedTime} <b>{prod.estimatedDuration}</b>
        </p>
        <p className={styles.product__info}>
          {prod.shipping} <b>{prod.shippingRegion}</b>
        </p>

        <p
          className={styles.product__info_price}
          dangerouslySetInnerHTML={{ __html: generatePriceString() }}
        ></p>
        <p className={styles.product__info_priceHead}>{prod.priceHeadExtra}</p>
      </div>
      <ProductNavButton />
    </div>
  );
};
export default ProductText;
