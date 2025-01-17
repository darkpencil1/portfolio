import Link from "next/link";
import styles from "./Footer.module.css";

type FooterLink = {
  text: string;
  link: string;
};
const pageLinks: Array<FooterLink> = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
  { text: "Shop", link: "/shop" },
];

const socialLinks: Array<FooterLink> = [
  { text: "Instagram", link: "https://www.instagram.com/darkpencil1/" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__commision}>
          <h2>Accepting commisions!</h2>
          <p>
            Send me a message via <Link href={"/contact"}>contact form.</Link>
          </p>
        </div>
        <div className={styles.footer__links}>
          <div className={styles.footer__linkContainer}>
            <h3>Pages</h3>
            <ul className={styles.footer__pageLinks}>
              {pageLinks.map((link: FooterLink, i: number) => {
                return (
                  <li className={styles.footer__link} key={`footer-page-${i}`}>
                    <Link href={link.link}>{link.text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.footer__linkContainer}>
            <h3>Social</h3>
            <ul className={styles.footer__pageLinks}>
              {socialLinks.map((link: FooterLink, i: number) => {
                return (
                  <li
                    className={styles.footer__link}
                    key={`footer-social-${i}`}
                  >
                    <Link href={link.link}>{link.text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>&copy; 2025 darkpencil1</span>
      </div>
    </footer>
  );
};
export default Footer;
