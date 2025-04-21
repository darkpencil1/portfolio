import styles from "./Story.module.css";

const Story = () => {
  return (
    <div className={styles.story}>
      <h1>Hello there</h1>
      <p>
        {`My name is Ville Lähetkangas. I'm a portrait and character artist based in Helsinki,
        Finland. I originally did mainly digital art, but since then I've taken a
        turn into traditional painting with gouache. Alongside painting I enjoy very much just drawing with charcoal. Thanks for visiting the site, feel free to drop me a message from the 
        contact section :)`}
        <br />
      </p>
    </div>
  );
};

export default Story;
