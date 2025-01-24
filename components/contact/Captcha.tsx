import React, { useEffect, useState } from "react";
import Button from "../base/Button";
import styles from "./Captcha.module.css";

type CAPTCHAProps = {
  setIsCaptchaValid: (arg: boolean) => void;
};
const Captcha = ({ setIsCaptchaValid }: CAPTCHAProps) => {
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

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

  const validateCaptcha = () => {
    if (captcha !== "" && captcha !== null) {
      setIsCaptchaValid(captcha === captchaInput);
    } else setIsCaptchaValid(false);
  };

  useEffect(() => {
    validateCaptcha();
  }, [captchaInput, validateCaptcha]);

  return (
    <div className={styles.captcha}>
      <label>
        {`Please prove that you're not a bot. Copy the generated content.`}
      </label>
      <div className={styles.buttonContainer}>
        <Button
          type="button"
          onClick={generateCaptcha}
          btnType="primary"
          size="sm"
        >
          Generate CAPTCHA
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
        placeholder="Write here the generated text"
        onChange={(e) => setCaptchaInput(e.target.value)}
        onBlur={validateCaptcha}
        required
      />
    </div>
  );
};
export default Captcha;
