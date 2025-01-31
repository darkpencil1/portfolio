import Artwork from "@/types/ArtworkInterface";

type CypressArtwork = Omit<Artwork, "img">;

const artwork: CypressArtwork[] = [
  {
    id: "1",
    category: "digital",
  },

  {
    id: "2",
    category: "digital",
  },
  {
    id: "3",
    category: "digital",
  },

  {
    id: "4",
    category: "drawing",
  },

  {
    id: "5",
    category: "painting",
  },
];

export default artwork;
