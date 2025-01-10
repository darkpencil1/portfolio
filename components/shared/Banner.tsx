import styles from "./Banner.module.css";

type BannerProps = {
  title: string;
  short: string;
};

const Banner = ({ title, short }: BannerProps) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <p>{short}</p>
    </div>
  );
};

export default Banner;
