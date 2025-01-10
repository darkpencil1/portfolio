import React, { ReactNode } from "react";
import styles from "./Card.module.css";
import { motion } from "framer-motion";
import { MotionProps } from "framer-motion";

interface CardProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <motion.div
      className={className ? `${styles.card} ${className}` : styles.card}
    >
      {children}
    </motion.div>
  );
};
