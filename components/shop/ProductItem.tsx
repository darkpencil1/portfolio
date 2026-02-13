"use client";
import Col from "../base/Col";
import Row from "../base/Row";
import Button from "../base/Button";
import IProduct from "@/types/ProductInterface";
import styles from "./ProductItem.module.css";
import { Card } from "../base/Card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageProvider";
import { translations } from "@/resources/i18n";

const ProductItem: React.FC<{ product: IProduct }> = ({ product }) => {
  const { id, imageUrl, name, snapshot, price, productType } = product;
  const router = useRouter();
  const { lang } = useLanguage();
  const shop = translations[lang].shop;

  const handleClick = () => {
    router.push(`/product/${id}`);
  };

  return (
    <Card
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.productItem}
      dataCy="product-item"
    >
      <Col className={styles.product__imgContainer}>
        <Image
          className={styles.product__img}
          src={imageUrl}
          alt={name[lang]}
          placeholder="blur"
        />
      </Col>
      <Row className={styles.product__textContainer}>
        <h3 className={styles.product__type}>
          {shop.productItem && translations[lang].productTypes
            ? translations[lang].productTypes[productType] ?? productType
            : productType}
        </h3>
  <h2 className={styles.product__title}>{name[lang]}</h2>
  <div className={styles.product__text}>{snapshot[lang]}</div>
        <Row className={styles.product__priceAndButton}>
            <div className={styles.product__price}>
              <span>{shop.productItem.from} &nbsp;</span>
              <h4>{Object.values(price[0])}€</h4>
            </div>
          <Button
            className={styles.product__cta}
            btnType="white"
            size="md"
            onClick={handleClick}
          >
              {shop.productItem.readMore}
          </Button>
        </Row>
      </Row>
    </Card>
  );
};
export default ProductItem;
