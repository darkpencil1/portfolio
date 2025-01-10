import { StaticImageData } from "next/image";

export type ArtCategory = "drawing" | "painting" | "digital";

export default interface Artwork {
  id: string;
  img: StaticImageData;
  category: ArtCategory;
}
