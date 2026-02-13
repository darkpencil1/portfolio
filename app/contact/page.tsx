"use client";

import styles from "./page.module.css";
import ContactForm from "@/components/contact/ContactForm";
import { useLanguage } from "@/context/LanguageProvider";
import { translations } from "@/resources/i18n";

const ContactPage = () => {
  const { lang } = useLanguage();
  const contact = translations[lang].contact;

  return (
    <div className={styles.page}>
      <div className={styles.greeting}>
        <h1>{contact.pageTitle}</h1>
        <p>{contact.pageSubtitle}</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
