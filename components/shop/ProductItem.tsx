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
  const { id, imageUrl, name, snapshot, price } = product;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product?id=${id}`);
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
      <Col className="product__img-container">
        <Image
          className="product__img"
          src={`${imageUrl}`}
          alt={name}
          placeholder="blur"
        />
      </Col>
      <Row className="product__text-container">
        <h2 className="product__title">{name}</h2>
        <div className="product__text">{snapshot}</div>
        <Row className="product__price-and-button">
          <div className="product__price">
            <span>from &nbsp;</span>
            <h4>{price}€</h4>
          </div>
          <Button
            className="product__cta"
            btnType="white"
            size="md"
            onClick={handleClick}
          >
            Open
          </Button>
        </Row>
      </Row>
    </Card>
  );
};
export default ProductItem;
