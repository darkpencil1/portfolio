import styles from "./ShopBanner.module.css";

export const ShopBanner = () => {
  return (
    <div className={styles.shopBanner}>
      <div className={styles.banner__textContainer}>
        <h1 className={styles.banner__title}>Shop</h1>
        <p className={styles.banner__desc}>
          {`Looking for a unique, hand-painted artwork? I'm open for commissions.`}
        </p>
      </div>
    </div>
  );
};
