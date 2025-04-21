import React from "react";
import Story from "@/components/about/Story";
import styles from "./page.module.css";
import Image from "next/image";
import me from "@/public/images/me.jpg";
import Row from "@/components/base/Row";

const About: React.FC = () => {
  return (
    <div className={styles.page}>
      <Row className={styles.story__container} gap="20px">
        <Story />
        <div className={styles.story__imgContainer}>
          <Image
            className={styles.story__img}
            src={me}
            alt="Here should be my face. Why it's not here?"
            key="ringo"
          />

          <p className={styles.story__imgDesc}>{`Cheers`}</p>
        </div>
      </Row>
    </div>
  );
};

export default About;
