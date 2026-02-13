import React from "react";
import styles from "./ContactFormPopup.module.css";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageProvider";
import { translations } from "@/resources/i18n";

const ContactFormPopup = () => {
  const { lang } = useLanguage();
  const contact = translations[lang].contact;

  return (
    <motion.div
      key="popup"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={styles.popup}
      data-cy="popup"
    >
      <h3>{contact.successPopup.title}</h3>
      <p>{contact.successPopup.body}</p>
    </motion.div>
  );
};
export default ContactFormPopup;
