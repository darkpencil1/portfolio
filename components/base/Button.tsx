import { motion } from "framer-motion";
import styles from "./Button.module.css";
import { ReactNode } from "react";

export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonType = "primary" | "secondary" | "white" | "disabled" | "wip";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  btnType?: ButtonType;
  size?: ButtonSize;
  children: ReactNode;
  onClick?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  size = "md",
  btnType = "primary",
  children,
  onClick,
  className,
  disabled,
}) => {
  const btnClassName = `${className} ${styles.button} ${
    styles[`button--${btnType}`]
  } ${styles[`button--${size}`]}`;

  return (
    <motion.button
      whileHover={btnType !== "disabled" ? { scale: 1.01 } : {}}
      transition={{ type: "spring", stiffness: 1000, damping: 10 }}
      className={btnClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
export default Button;
