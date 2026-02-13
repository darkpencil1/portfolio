"use client";

import React from "react";
import Story from "@/components/about/Story";
import styles from "./page.module.css";
import Image from "next/image";
import me from "@/public/images/me.jpg";
import Row from "@/components/base/Row";
import { useLanguage } from "@/context/LanguageProvider";
import { translations } from "@/resources/i18n";

const About: React.FC = () => {
  const { lang } = useLanguage();

  const about = translations[lang].about;

  return (
    <div className={styles.page}>
      <Row className={styles.story__container} gap="20px">
        <Story title={about.title} body={about.body} />
        <div className={styles.story__imgContainer}>
          <Image
            className={styles.story__img}
            src={me}
            alt={about.imageAlt}
            key="ringo"
          />

          <p className={styles.story__imgDesc}>{about.imageDesc}</p>
        </div>
      </Row>
    </div>
  );
};

export default About;
