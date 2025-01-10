import React, { ReactNode } from "react";
import styles from "./Row.module.css";

type RowProps = {
  children: ReactNode;
  gap?: string;
  className?: string;
};

const Row = ({ children, gap, className }: RowProps) => {
  return (
    <div
      className={className ? `${styles.row} ${className}` : styles.card}
      style={gap ? { gap: gap } : { gap: "auto" }}
    >
      {children}
    </div>
  );
};

export default Row;
