import IProduct, { Orientation, ProductType } from "../types/ProductInterface";
import lida from "@/public/images/lida.jpg";
import milo from "@/public/images/milo.jpg";
import gouache_wall from "@/public/images/assets/gouache-wall-2.png";
import boy_wall from "@/public/images/assets/boy-wall.png";
import shadowheart from "@/public/images/shadowheart.jpg";

const products: IProduct[] = [
  {
    id: 1,
    name: "Portrait painting",
    productType: ProductType.COMMISSION,
    primer: "Oil portrait of a subject of your choosing.",
    description:
      "A portrait painting where subject can be anything from you, your family member or your dog or a favourite character. It's up to you! I'll work from photos, so pick at least one you'd like me to base the painting on. Send me a message of what you have in mind or if you have any questions and let's get started.",
    snapshot: "Get a portrait painting of yourself or your loved ones.",
    imageUrl: lida,
    preview: lida,
    images: [lida, milo, gouache_wall],
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
    imageUrl: shadowheart,
    preview: shadowheart,
    images: [shadowheart, boy_wall],
    price: [{ A4: 150 }, { A3: 200 }],
    orientation: Orientation.PORTRAIT,
  },
];

export default products;
