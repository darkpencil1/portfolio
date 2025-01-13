"use client";
import { useActionState } from "react";
import { submitForm } from "@/lib/actions";
import ContactFormState, { ErrorDetail } from "@/types/ContactFormInterface";
import Button from "@/components/base/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [state, action, isPending] = useActionState(submitForm, {
    success: null,
    error: null,
  } as ContactFormState);

  return (
    <form action={action} className={styles.form}>
      <div className={styles.name}>
        <p>
          <label htmlFor="first_name" className={styles.label}>
            First Name
          </label>
          <input
            className={styles.formElement}
            type="text"
            id="first_name"
            name="first_name"
            required
          />
        </p>
        <p>
          <label htmlFor="last_name" className={styles.label}>
            Last Name (optional)
          </label>
          <input
            className={styles.formElement}
            type="text"
            id="last_name"
            name="last_name"
          />
        </p>
      </div>
      <p>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          className={styles.formElement}
          type="email"
          id="email"
          name="email"
          required
        />
      </p>
      <p>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          className={`${styles.formElement} ${styles.textArea}`}
          placeholder="Max 500 characters"
          name="message"
          id="message"
          required
        ></textarea>
      </p>
      <Button type="submit">{isPending ? <>Sending...</> : <>Submit</>}</Button>
    </form>
  );
};

export default ContactForm;
