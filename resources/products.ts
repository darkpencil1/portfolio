import IProduct, { Orientation, ProductType } from "../types/ProductInterface";
import boy from "@/public/images/boy.jpg";
import gouache_girl from "@/public/images/guassi-4.jpg";
import gouache_woman from "@/public/images/gouache-3.jpg";
import gouache_wall from "@/public/images/assets/gouache-wall-2.png";
import boy_wall from "@/public/images/assets/boy-wall.png";
import boy_preview from "@/public/images/boy-preview.jpg";

const products: IProduct[] = [
  {
    id: 1,
    name: "Portrait painting",
    productType: ProductType.COMMISSION,
    primer: "Gouache portrait of a subject of your choosing.",
    description:
      "A portrait painting where subject can be anything from you, your family member or your dog or a favourite character. It's up to you! I'll work from photos, so pick at least one you'd like me to base the painting on. Send me a message of what you have in mind or if you have any questions and let's get started.",
    snapshot: "Get a portrait painting of yourself or your loved ones.",
    imageUrl: gouache_girl,
    preview: boy_preview,
    images: [gouache_girl, gouache_woman, gouache_wall],
    price: [{ A4: 250 }, { A3: 300 }],
    orientation: Orientation.PORTRAIT,
  },
  {
    id: 2,
    name: "Portrait drawing",
    productType: ProductType.COMMISSION,
    primer: "A portrait of a subject of your choosing.",
    description:
      "I'm happy to do a portrait drawing of you, your significant other, pet or character. With real people I'll work from a photo, so please select one or more you'd like me to use as a reference. Send me a message of what you have in mind and let's get started!",
    snapshot: "Get a drawing of yourself or your loved ones.",
    imageUrl: boy,
    preview: boy_preview,
    images: [boy, boy_wall],
    price: [{ A4: 150 }, { A3: 200 }],
    orientation: Orientation.PORTRAIT,
  },
];

export default products;
