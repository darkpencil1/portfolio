"use client";
import { useActionState, useEffect, useState } from "react";
import { submitForm } from "@/lib/actions";
import ContactFormState, {
  ContactData,
  ErrorDetail,
} from "@/types/ContactFormInterface";
import Button from "@/components/base/Button";
import styles from "./ContactForm.module.css";
import { AnimatePresence, motion } from "framer-motion";
import ContactFormPopup from "./ContactFormPopup";
import Captcha from "./Captcha";

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactData>({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
  const [isCaptchaValid, setIsCaptchaValid] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [state, action, isPending] = useActionState(submitForm, {
    success: null,
    error: null,
  } as ContactFormState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (state.success) {
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
      });
      setShowPopup(true);
      timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [state.success, action]);

  return (
    <AnimatePresence>
      <motion.form
        action={action}
        className={styles.form}
        initial={{ translateX: -50, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        exit={{ translateX: 50, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
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
              value={formData.first_name}
              onChange={handleChange}
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
              value={formData.last_name}
              onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </p>
        <Captcha setIsCaptchaValid={setIsCaptchaValid} />

        <Button
          type="submit"
          btnType={!isCaptchaValid ? "disabled" : "primary"}
          disabled={!isCaptchaValid || isPending}
        >
          {isPending ? <>Sending...</> : <>Submit</>}
        </Button>

        {state.errorDetails && (
          <>
            <h3 style={{ marginBottom: 0 }}>Check the inputs:</h3>
            <ul style={{ marginTop: 0, padding: 0 }}>
              {state.errorDetails.map((e: ErrorDetail) => {
                return (
                  <li style={{ listStyleType: "none" }} key={e.field}>
                    {e.field}: {e.message}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </motion.form>
      {showPopup && <ContactFormPopup />}
    </AnimatePresence>
  );
};

export default ContactForm;
