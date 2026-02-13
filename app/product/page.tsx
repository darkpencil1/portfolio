"use client";

import styles from "./page.module.css";
import { useLanguage } from "@/context/LanguageProvider";
import { translations } from "@/resources/i18n";

const ProductPage = () => {
  const { lang } = useLanguage();
  const prod = translations[lang].product;

  return (
    <div className={styles.page}>
      <h1>{prod.selectPrompt}</h1>
    </div>
  );
};

export default ProductPage;
