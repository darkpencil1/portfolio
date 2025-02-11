import Artwork from "@/types/ArtworkInterface";
import bringo from "@/public/images/bringo.jpg";
import visionbakers_bay from "@/public/images/visionbakers-bay.jpg";
import oracle from "@/public/images/oracle.jpg";
import explorer from "@/public/images/explorer.jpg";
import taidonjahti from "@/public/images/taidonjahti.jpg";
import school from "@/public/images/school.jpg";
import boy from "@/public/images/boy.jpg";
import gouache_3 from "@/public/images/gouache-3.jpg";
import gouache_4 from "@/public/images/guassi-4.png";

const artwork: Artwork[] = [
  {
    id: "1",
    img: gouache_4,
    category: "painting",
  },

  {
    id: "2",
    img: gouache_3,
    category: "painting",
  },
  {
    id: "3",
    img: visionbakers_bay,
    category: "digital",
  },

  {
    id: "4",
    img: oracle,
    category: "digital",
  },
  {
    id: "5",
    img: bringo,
    category: "digital",
  },
  {
    id: "6",
    img: explorer,
    category: "digital",
  },
  {
    id: "7",
    img: taidonjahti,
    category: "digital",
  },

  {
    id: "8",
    img: school,
    category: "digital",
  },
  {
    id: "9",
    img: boy,
    category: "drawing",
  },
];

export default artwork;
