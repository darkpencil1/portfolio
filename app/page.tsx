import Gallery from "@/components/portfolio/Gallery";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Gallery />
    </div>
  );
}
