import { StaticImageData } from "next/image";

export enum Orientation {
  PORTRAIT = "portrait",
  LANDSCAPE = "landscape",
}

export enum ProductType {
  COMMISSION = "Commission",
  POSTER = "Poster",
}

export type ProductPrice = {
  [key: string]: number;
};

interface LocalizedString {
  en: string;
  fi: string;
}

interface IProduct {
  id: number;
  name: LocalizedString;
  productType: ProductType;
  primer: LocalizedString; //First part of the description
  description: LocalizedString;
  snapshot: LocalizedString; //Description displayed in shop
  imageUrl: StaticImageData;
  preview: StaticImageData; //Low res image used to display blurred version while main img loads
  images: StaticImageData[];
  price: ProductPrice[];
  orientation: Orientation;
}
export default IProduct;
