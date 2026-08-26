import { StaticImageData } from "next/image";

export enum Orientation {
  PORTRAIT = "portrait",
  LANDSCAPE = "landscape",
}

export enum ProductType {
  COMMISSION = "Commission",
  PAINTING = "Painting",
}

export type ProductPrice = {
  [key: string]: number;
};

interface LocalizedString {
  en: string;
  fi: string;
}

interface BaseProduct {
  id: number;
  name: LocalizedString;
  primer: LocalizedString; //First part of the description
  description: LocalizedString;
  snapshot: LocalizedString; //Description displayed in shop
  imageUrl: StaticImageData;
  preview: StaticImageData; //Low res image used to display blurred version while main img loads
  images: StaticImageData[];
  price: ProductPrice[];
  orientation: Orientation;
}

export interface CommissionProduct extends BaseProduct {
  productType: ProductType.COMMISSION;
  delivery?: LocalizedString;
  estimatedTime?: LocalizedString;
}

export interface PaintingProduct extends BaseProduct {
  productType: ProductType.PAINTING;
  size?: LocalizedString;
  delivery?: LocalizedString;
  canvas?: LocalizedString;
  material?: LocalizedString;
}

export type IProduct = CommissionProduct | PaintingProduct;
export default IProduct;
