import Artwork from "@/types/ArtworkInterface";

type CypressArtwork = Omit<Artwork, "img">;

const artwork: CypressArtwork[] = [
  {
    id: "18",
    category: "painting",
  },
  {
    id: "12",
    category: "painting",
  },
  {
    id: "17",
    category: "painting",
  },
  {
    id: "1",
    category: "painting",
  },
  {
    id: "13",
    category: "painting",
  },
  {
    id: "16",
    category: "painting",
  },
  {
    id: "11",
    category: "painting",
  },
  {
    id: "3",
    category: "painting",
  },
  {
    id: "4",
    category: "digital",
  },
  {
    id: "5",
    category: "digital",
  },
  {
    id: "6",
    category: "digital",
  },
  {
    id: "7",
    category: "digital",
  },
  {
    id: "8",
    category: "digital",
  },
  {
    id: "9",
    category: "digital",
  },
  {
    id: "10",
    category: "drawing",
  },
  {
    id: "14",
    category: "drawing",
  },
  {
    id: "15",
    category: "drawing",
  },
];

export default artwork;
