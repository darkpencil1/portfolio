"use client";
import React from "react";
import Button from "@/components/base/Button";
import { useRouter } from "next/navigation";

const ProductNavButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/contact`);
  };
  return <Button onClick={handleClick}>Contact me</Button>;
};

export default ProductNavButton;
