import React from "react";
import Banner from "@/components/shared/Banner";
import Story from "@/components/about/Story";
import styles from "./page.module.css";
import Image from "next/image";
import ringo from "@/public/ringo.png";
import Row from "@/components/base/Row";

const About: React.FC = () => {
  return (
    <div className={styles.page}>
      <Banner
        title="Mission"
        short="I'll put a mission statement here once I figure it out."
      />
      <Row className={styles.story__container} gap="20px">
        <Story />
        <div className={styles.story__imgContainer}>
          <Image
            className={styles.story__img}
            src={ringo}
            alt="This is definitely not me."
            key="ringo"
          />

          <p className={styles.story__imgDesc}>This is definitely not me.</p>
        </div>
      </Row>
    </div>
  );
};

export default About;
