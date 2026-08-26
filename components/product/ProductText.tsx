"use client";

import IProduct, { ProductType } from "@/types/ProductInterface";
import styles from "./ProductText.module.css";
import ProductNavButton from "./ProductNavButton";
import { useLanguage } from "@/context/LanguageProvider";
import { translations } from "@/resources/i18n";

const ProductText = ({ product }: { product: IProduct }) => {
  const { lang } = useLanguage();
  const prod = translations[lang].product;
  const formatHeading = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : s);

  const generatePriceString = (): string => {
    let result = `${prod.priceLabel} `;
    for (const obj of product.price) {
      const entries = Object.entries(obj) as [string, number][];
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
        {product.productType === ProductType.PAINTING
          ? formatHeading(prod.availablePainting)
          : translations[lang].productTypes?.[product.productType] ?? product.productType}
      </p>

      <h2>{product?.name[lang]}</h2>

      <div className={styles.product__textDescContainer}>
        <p className={styles.product__textPrimer}>{product?.primer[lang]}</p>
        <p className={styles.product__textDesc}>{product?.description[lang]}</p>

        {product.productType === ProductType.COMMISSION && (
          <>
            <p className={styles.product__info}>
              {prod.estimatedTime} <strong>{product.estimatedTime?.[lang] ?? prod.estimatedDuration}</strong>
            </p>
            <p className={styles.product__info}>
              {prod.shipping} <strong>{product.delivery?.[lang] ?? prod.shippingRegion}</strong>
            </p>
          </>
        )}

        {product.productType === ProductType.PAINTING && (
          <>
            {product.size?.[lang] && (
              <p className={styles.product__info}>
                {prod.sizeLabel} <strong>{product.size[lang]}</strong>
              </p>
            )}
            {product.canvas?.[lang] && (
              <p className={styles.product__info}>
                {prod.canvasLabel} <strong>{product.canvas[lang]}</strong>
              </p>
            )}
            {product.material?.[lang] && (
              <p className={styles.product__info}>
                {prod.materialLabel} <strong>{product.material[lang]}</strong>
              </p>
            )}
            {product.delivery?.[lang] && (
              <p className={styles.product__info}>
                {prod.deliveryLabel} <strong>{product.delivery[lang]}</strong>
              </p>
            )}
          </>
        )}

        <p
          className={styles.product__info_price}
          dangerouslySetInnerHTML={{ __html: generatePriceString() }}
        ></p>

        {product.productType === ProductType.COMMISSION && (
          <p className={styles.product__info_priceHead}>{prod.priceHeadExtra}</p>
        )}

        {product.productType === ProductType.PAINTING && (
          <p className={styles.product__purchasePrompt}>{prod.purchasePainting}</p>
        )}
      </div>

      <div className={styles.product__contactWrap}>
        <ProductNavButton />
      </div>
    </div>
  );
};
export default ProductText;
