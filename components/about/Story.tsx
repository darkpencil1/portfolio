import styles from "./Story.module.css";

const Story = () => {
  return (
    <div className={styles.story}>
      <h1>Story time</h1>
      <p>
        I have been fascinated by characters for the longest time. Besides being
        very fun to draw, through them we can experience life from new and
        refreshing viewpoints. Simple questions like "How would it feel like to
        be this person?" or "How they react to a situation X?" can open windows
        to new thoughts never thought before.
        <br />
        <br />
        So what motivates me is a sense of wonder. It's very precious to come
        across new ideas or emotions. It's like a wave washing over you, waking
        you up to a more present and exciting experience. I've boiled some of
        these ideas into principles that are listed below.
      </p>
    </div>
  );
};

export default Story;
