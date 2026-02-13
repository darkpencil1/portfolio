import styles from "./Story.module.css";

type StoryProps = {
  title: string;
  body: string;
};

const Story: React.FC<StoryProps> = ({ title, body }) => {
  return (
    <div className={styles.story}>
      <h1>{title}</h1>
      <p>
        {body}
        <br />
      </p>
    </div>
  );
};

export default Story;
