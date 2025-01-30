import React from "react";
import Row from "@/components/base/Row";
import ProductItem from "@/components/shop/ProductItem";
import { ShopBanner } from "@/components/shop/ShopBanner";
import IProduct from "@/types/ProductInterface";
import Skeleton from "@/components/shared/Skeleton";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./page.module.css";
import products from "@/resources/products";

const Shop: React.FC = () => {
  return (
    <div className={styles.page}>
      <ShopBanner />
      {/* Product rows */}
      <Row className={styles.product__wrapper}>
        <AnimatePresence>
          {!products &&
            Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Skeleton height={320} width={750} />
              </motion.div>
            ))}
          {products.length > 0 &&
            products?.map((product: IProduct, index: number) => (
              <ProductItem key={index} product={product} />
            ))}

          {products.length === 0 && (
            <div className={styles.shop__noProducts}>
              <h2>No available products...yet</h2>
              <p>
                {`I'll have prints and original paintings available
                through this shop. Stay tuned.`}
              </p>
            </div>
          )}
        </AnimatePresence>
      </Row>
    </div>
  );
};

export default Shop;
