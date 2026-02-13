"use client";
import React from "react";
import Button from "@/components/base/Button";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageProvider";
import { translations } from "@/resources/i18n";

const ProductNavButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/contact`);
  };
  const { lang } = useLanguage();
  const prod = translations[lang].product;

  return (
    <Button onClick={handleClick} dataCy="product-nav-button">
      {prod.contactButton}
    </Button>
  );
};

export default ProductNavButton;
