import styles from "./page.module.css";
import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.greeting}>
        <h1>Contact Me</h1>
        <p>
          Send me a message, request a commision or ask a good old fashioned
          question!
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
