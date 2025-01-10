import Row from "../base/Row";
import { Card } from "../base/Card";
import Image from "next/image";
import ringo from "@/public/ringo.png";
import styles from "./PersonCard.module.css";

const PersonCard = () => {
  return (
    <Card className={styles.personCard}>
      <div className="member__imgContainer">
        <Image
          className="member__img"
          src={ringo}
          alt="This is definitely not me."
          key="ringo"
        />
        <p className="member__imgDesc">This is definitely not me.</p>
      </div>
      <Row className="member__textContainer">
        <h2 className="member__title">Ville</h2>
        <div className="member__text">
          Greetings visitor. I'm an artist who has made this little site. I
          enjoy drawing, especially characters. Besides that I delve in dungeons
          and slay dragons.
        </div>
      </Row>
    </Card>
  );
};

export default PersonCard;
