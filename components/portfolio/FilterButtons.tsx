import React from "react";
import Button from "../base/Button";
import styles from "./FilterButtons.module.css";

export default function FilterButtons() {
  return (
    <div className={styles.filterContainer}>
      {topics.map((topic) => (
        <Button
          key={topic}
          onClick={() => setSelectedCategory(topic)}
          className={`${styles.filterButton} ${
            selectedCategory === topic ? styles.active : ""
          }`}
        >
          {topic}
        </Button>
      ))}
    </div>
  );
}
