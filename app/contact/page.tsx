import styles from "./page.module.css";
import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.greeting}>
        <h1>Contact me</h1>
        <p>Always joy to hear from you, feel free to contact me.</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
