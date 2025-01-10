import React from "react";
import styles from "./Skeleton.module.css";

const Skeleton: React.FC<{ height: number; width: number }> = ({
  height,
  width,
}) => {
  return (
    <div
      className={styles.skeleton}
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    ></div>
  );
};

export default Skeleton;
