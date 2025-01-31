"use client";
import Col from "../base/Col";
import Row from "../base/Row";
import Button from "../base/Button";
import IProduct from "@/types/ProductInterface";
import styles from "./ProductItem.module.css";
import { Card } from "../base/Card";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductItem: React.FC<{ product: IProduct }> = ({ product }) => {
  const { id, imageUrl, name, snapshot, price, productType } = product;
  const router = useRouter();

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
    >
      <Col className={styles.product__imgContainer}>
        <Image
          className={styles.product__img}
          src={imageUrl}
          alt={name}
          placeholder="blur"
        />
      </Col>
      <Row className={styles.product__textContainer}>
        <h3 className={styles.product__type}>{productType}</h3>
        <h2 className={styles.product__title}>{name}</h2>
        <div className={styles.product__text}>{snapshot}</div>
        <Row className={styles.product__priceAndButton}>
          <div className={styles.product__price}>
            <span>from &nbsp;</span>
            <h4>{Object.values(price[0])}€</h4>
          </div>
          <Button
            className={styles.product__cta}
            btnType="white"
            size="md"
            onClick={handleClick}
          >
            Read more
          </Button>
        </Row>
      </Row>
    </Card>
  );
};
export default ProductItem;
