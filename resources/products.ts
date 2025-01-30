import IProduct, { Orientation, ProductType } from "../types/ProductInterface";
import boy from "@/public/images/boy.jpg";
import boy_preview from "@/public/images/boy-preview.jpg";

const products: IProduct[] = [
  {
    id: 1,
    name: "Portrait drawing",
    productType: ProductType.COMMISSION,
    primer: "Fill with text",
    description: "Lorem impsum dolor...",
    snapshot: "Get a drawing of yourself or your loved ones.",
    imageUrl: boy,
    preview: boy_preview,
    images: [boy],
    price: 100,
    orientation: Orientation.PORTRAIT,
  },

  {
    id: 2,
    name: "Portrait painting",
    productType: ProductType.COMMISSION,
    primer: "Fill with text",
    description: "Lorem impsum dolor...",
    snapshot: "Get a portrait painting of yourself or your loved ones.",
    imageUrl: boy,
    preview: boy_preview,
    images: [],
    price: 200,
    orientation: Orientation.PORTRAIT,
  },
];

export default products;
