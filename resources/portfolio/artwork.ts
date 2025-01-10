import Artwork from "@/types/ArtworkInterface";
import bringo from "@/public/images/bringo.jpg";
import visionbakers_bay from "@/public/images/visionbakers-bay.jpg";
import oracle from "@/public/images/oracle.jpg";

const artwork: Artwork[] = [
  {
    id: "1",
    img: visionbakers_bay,
    category: "digital",
  },

  {
    id: "2",
    img: oracle,
    category: "digital",
  },
  {
    id: "3",
    img: bringo,
    category: "digital",
  },
];

export default artwork;
