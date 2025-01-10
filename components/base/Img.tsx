"use client";
import { motion, MotionProps } from "framer-motion";
import { useEffect, useState } from "react";

interface ImgProps extends MotionProps {
  width?: string;
  height?: string;
  alt?: string;
  src: string;
  isImgLoaded?: boolean;
  className?: string;
  onClick?: () => void;
}

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  className,
  onClick,
  ...motionProps
}) => {
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsImgLoaded(true);
    };
  }, [src]);

  return (
    <motion.img
      {...motionProps}
      src={src}
      alt={alt}
      width={width ?? "auto"}
      height={height ?? "auto"}
      className={isImgLoaded ? `loaded ${className}` : className}
      style={isImgLoaded ? { display: "block" } : { display: "none" }}
      onClick={onClick}
    />
  );
};

export default Img;
