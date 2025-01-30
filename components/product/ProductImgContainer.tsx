"use client";
import React, { useEffect } from "react";
import ImgPicker from "./ImgPicker";
import IProduct from "@/types/ProductInterface";
import Row from "../base/Row";
import styles from "./ProductImgContainer.module.css";
import ProductImg from "./ProductImg";

const ProductImgContainer = ({ product }: { product: IProduct }) => {
  const [selectedImg, setSelectedImg] = React.useState(product?.images[0]);

  useEffect(() => {
    product && setSelectedImg(product.images[0]);
  }, [product]);

  return (
    <Row className={styles.img__row}>
      <ProductImg selectedImg={selectedImg} />
      <ImgPicker
        setSelectedImg={setSelectedImg}
        selectedImg={selectedImg}
        product={product}
      />
    </Row>
  );
};
export default ProductImgContainer;
