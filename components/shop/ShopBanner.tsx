"use client";

import styles from "./ShopBanner.module.css";
import { useLanguage } from "@/context/LanguageProvider";
import { translations } from "@/resources/i18n";

export const ShopBanner = () => {
  const { lang } = useLanguage();
  const shop = translations[lang].shop;

  return (
    <div className={styles.shopBanner}>
      <div className={styles.banner__textContainer}>
        <h1 className={styles.banner__title}>{shop.banner.title}</h1>
        <p className={styles.banner__desc}>{shop.banner.desc}</p>
      </div>
    </div>
  );
};
