import ProductImgContainer from "@/components/product/ProductImgContainer";
import ProductText from "@/components/product/ProductText";
import Row from "@/components/base/Row";
import styles from "./page.module.css";
import products from "@/resources/products";
import { notFound } from "next/navigation";

const ProductPage = ({ params }: { params: { id: string } }) => {
  // Convert id to a number (if necessary)
  const product = products.find((item) => item.id === Number(params.id));
  if (!product) return notFound();

  return (
    <div className={styles.page}>
      <Row className={styles.product__container}>
        <div className={styles.product__imgContainer}>
          <ProductImgContainer product={product} />
        </div>
        <ProductText product={product} />
      </Row>
    </div>
  );
};

export default ProductPage;
