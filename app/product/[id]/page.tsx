import ProductImgContainer from "@/components/product/ProductImgContainer";
import ProductText from "@/components/product/ProductText";
import Row from "@/components/base/Row";
import styles from "./page.module.css";
import products from "@/resources/products";
import { notFound } from "next/navigation";

type ProductPageParams = Promise<{ id: string }>;

const ProductPage = async ({ params }: { params: ProductPageParams }) => {
  const { id } = await params;
  // Convert id to a number (if necessary)
  const product = products.find((item) => item.id === Number(id));
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
