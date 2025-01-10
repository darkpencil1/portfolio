import { motion } from "framer-motion";
import styles from "./Button.module.css";
import { ReactNode } from "react";

export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonType = "primary" | "secondary" | "white" | "disabled" | "wip";

type ButtonProps = {
  className?: string;
  btnType?: ButtonType;
  size?: ButtonSize;
  children: ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  size = "md",
  btnType = "primary",
  children,
  onClick,
}) => {
  const className = `${styles.button} ${styles[`button--${btnType}`]} ${
    styles[`button--${size}`]
  }`;

  return (
    <motion.button
      whileHover={btnType !== "disabled" ? { scale: 1.05 } : {}}
      transition={{ type: "spring", stiffness: 1000, damping: 10 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
export default Button;
