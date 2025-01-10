import PersonCard from "./PersonCard";
import styles from "./Me.module.css";

const Me = () => {
  return (
    <div className={styles.me}>
      <h1>Hi, this is me</h1>
      <div className={styles.contentContainer}>
        <PersonCard />
      </div>
    </div>
  );
};
export default Me;
