import styles from "./Story.module.css";

const Story = () => {
  return (
    <div className={styles.story}>
      <h1>Hello there</h1>
      <p>
        {`My name is Ville Lähetkangas. I'm a character artist based in Helsinki,
        Finland. I originally did mainly digital art, but lately I've taken a
        turn into traditional painting. Very excited to see how it turns out.
        Alongside painting I enjoy very much just drawing with charcoal and
        graphite. Glad to see you visiting the site :)`}
        <br />
      </p>
    </div>
  );
};

export default Story;
