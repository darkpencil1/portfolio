import IProduct, { Orientation, ProductType } from "../types/ProductInterface";
import lida from "@/public/images/lida.jpg";
import kissat from "@/public/images/kissat.jpg";
import gouache_wall from "@/public/images/assets/gouache-wall-2.png";
import boy_wall from "@/public/images/assets/boy-wall.png";
import shadowheart from "@/public/images/shadowheart.jpg";

const products: IProduct[] = [
  {
    id: 1,
    name: {
      en: "Portrait painting",
      fi: "Muotokuvamaalaus",
    },
    productType: ProductType.COMMISSION,
    primer: {
      en: "Oil portrait of a subject of your choosing.",
      fi: "Öljymaalaus valitsemastasi kohteesta.",
    },
    description: {
      en:
        "A portrait painting where subject can be anything from you, your family member or your dog or a favourite character. It's up to you! I'll work from photos, so pick at least one you'd like me to base the painting on. Send me a message of what you have in mind or if you have any questions and let's get started.",
      fi:
        "Muotokuvamaalaus, jonka kohteen voit valita itse. Se voi olla esimerkiksi sinä, perheenjäsen, lemmikki tai suosikkihahmo. Työskentelen valokuvien pohjalta, joten valitse ainakin yksi kuva, jota haluat käyttää. Lähetä viestiä jos sinulla on idea tai kysy rohkeasti lisätietoja.",
    },
    snapshot: {
      en: "Get a portrait painting of yourself or your loved ones.",
      fi: "Tilaa muotokuvamaalaus itsestäsi tai läheisistäsi.",
    },
    imageUrl: lida,
    preview: lida,
    images: [lida, kissat, gouache_wall],
  price: [{ price: 300 }],
    orientation: Orientation.PORTRAIT,
  },
  {
    id: 2,
    name: {
      en: "Portrait drawing",
      fi: "Muotokuvapiirustus",
    },
    productType: ProductType.COMMISSION,
    primer: {
      en: "A portrait of a subject of your choosing.",
      fi: "Muotokuva valitsemastasi kohteesta.",
    },
    description: {
      en:
        "I'm happy to do a portrait drawing of you, your significant other, pet or character. With real people I'll work from a photo, so please select one or more you'd like me to use as a reference. Send me a message of what you have in mind and let's get started!",
      fi:
        "Teen mielelläni piirustuksen sinusta, läheisestäsi, lemmikistäsi tai hahmosta. Todellisista henkilöistä työskentelen valokuvan pohjalta — valitse yksi tai useampi referenssikuva. Lähetä viesti ideastasi ja aloitetaan!",
    },
    snapshot: {
      en: "Get a drawing of yourself or your loved ones.",
      fi: "Tilaa piirustus itsestäsi tai läheisistäsi.",
    },
    imageUrl: shadowheart,
    preview: shadowheart,
    images: [shadowheart, boy_wall],
  price: [{ price: 200 }],
    orientation: Orientation.PORTRAIT,
  },
];

export default products;
