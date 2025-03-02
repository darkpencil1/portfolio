import Artwork from "@/types/ArtworkInterface";
import bringo from "@/public/images/bringo.jpg";
import visionbakers_bay from "@/public/images/visionbakers-bay.jpg";
import oracle from "@/public/images/oracle.jpg";
import explorer from "@/public/images/explorer.jpg";
import taidonjahti from "@/public/images/taidonjahti.jpg";
import school from "@/public/images/school.jpg";
import boy from "@/public/images/boy.jpg";
import gouache_3 from "@/public/images/gouache-3.jpg";
import gouache_4 from "@/public/images/guassi-4.jpg";
import gouache_5 from "@/public/images/guassi-5.jpg";
import gouache_6 from "@/public/images/guassi-6.jpg";

const artwork: Artwork[] = [
  {
    id: "1",
    img: gouache_4,
    category: "painting",
  },
  {
    id: "11",
    img: gouache_6,
    category: "painting",
  },
  {
    id: "2",
    img: gouache_5,
    category: "painting",
  },
  {
    id: "3",
    img: gouache_3,
    category: "painting",
  },
  {
    id: "4",
    img: visionbakers_bay,
    category: "digital",
  },

  {
    id: "5",
    img: oracle,
    category: "digital",
  },
  {
    id: "6",
    img: bringo,
    category: "digital",
  },
  {
    id: "7",
    img: explorer,
    category: "digital",
  },
  {
    id: "8",
    img: taidonjahti,
    category: "digital",
  },

  {
    id: "9",
    img: school,
    category: "digital",
  },
  {
    id: "10",
    img: boy,
    category: "drawing",
  },
];

export default artwork;
