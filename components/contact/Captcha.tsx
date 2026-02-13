import React, { useCallback, useEffect, useState } from "react";
import Button from "../base/Button";
import styles from "./Captcha.module.css";
import { useLanguage } from "@/context/LanguageProvider";
import { translations } from "@/resources/i18n";

type CAPTCHAProps = {
  setIsCaptchaValid: (arg: boolean) => void;
};
const Captcha = ({ setIsCaptchaValid }: CAPTCHAProps) => {
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const { lang } = useLanguage();
  const contact = translations[lang].contact;

  // Generate a random CAPTCHA string
  const generateCaptcha = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  const validateCaptcha = useCallback(() => {
    if (captcha !== "" && captcha !== null) {
      setIsCaptchaValid(captcha === captchaInput);
    } else {
      setIsCaptchaValid(false);
    }
  }, [captcha, captchaInput, setIsCaptchaValid]);

  useEffect(() => {
    validateCaptcha();
  }, [captchaInput, validateCaptcha]);

  return (
    <div className={styles.captcha}>
      <label>
        {contact.captcha.label}
      </label>
      <div className={styles.buttonContainer}>
        <Button
          type="button"
          onClick={generateCaptcha}
          btnType="primary"
          size="sm"
        >
          {contact.captcha.generateButton}
        </Button>
        <div className={styles.generated} data-cy="generated-captcha">
          {captcha}
        </div>
      </div>
      <input
        className={styles.input}
        type="text"
        id="captchaInput"
        value={captchaInput}
        placeholder={contact.captcha.inputPlaceholder}
        onChange={(e) => setCaptchaInput(e.target.value)}
        onBlur={validateCaptcha}
        required
      />
    </div>
  );
};
export default Captcha;
