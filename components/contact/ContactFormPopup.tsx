import React from "react";
import styles from "./ContactFormPopup.module.css";
import { motion } from "framer-motion";

const ContactFormPopup = () => {
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
      <h3>Message succesfully sent!</h3>
      <p>I'll get back to you soon.</p>
    </motion.div>
  );
};
export default ContactFormPopup;
