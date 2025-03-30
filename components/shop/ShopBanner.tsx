import styles from "./ShopBanner.module.css";

export const ShopBanner = () => {
  return (
    <div className={styles.shopBanner}>
      <div className={styles.banner__textContainer}>
        <h1 className={styles.banner__title}>Shop</h1>
        <p className={styles.banner__desc}>
          {`Fancy an original painting to cover your wall? I have commissions open.`}
        </p>
      </div>
    </div>
  );
};
