import Artwork from "@/types/ArtworkInterface";
import bringo from "@/public/images/bringo.jpg";
import visionbakers_bay from "@/public/images/visionbakers-bay.jpg";
import oracle from "@/public/images/oracle.jpg";
import boy from "@/public/images/boy.jpg";
import gouache_3 from "@/public/images/gouache-3.jpg";

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
  {
    id: "4",
    img: boy,
    category: "drawing",
  },

  {
    id: "5",
    img: gouache_3,
    category: "painting",
  },
];

export default artwork;
