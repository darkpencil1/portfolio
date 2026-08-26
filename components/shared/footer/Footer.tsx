"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { useLanguage } from "@/context/LanguageProvider";
import { translations } from "@/resources/i18n";

type FooterLink = {
  text: string;
  link: string;
};

const Footer = () => {
  const { lang } = useLanguage();
  const footer = translations[lang].footer;

  const pageLinks: Array<FooterLink> = [
    { text: footer.links.home, link: "/" },
    { text: footer.links.about, link: "/about" },
    { text: footer.links.contact, link: "/contact" },
    { text: footer.links.shop, link: "/shop" },
  ];

  const socialLinks: Array<FooterLink> = [
    { text: footer.social.instagram, link: "https://www.instagram.com/villelahetkangas/" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__commision}>
          <h2>{footer.commissionTitle}</h2>
          <p>
            {footer.commissionHasContactLink ? (
              (() => {
                const body: string = footer.commissionBody;
                if (lang === "fi" && body.includes("yhteydenottolomakkeen")) {
                  const parts = body.split("yhteydenottolomakkeen");
                  return (
                    <>
                      {parts[0]}
                      <Link href={'/contact'}>yhteydenottolomakkeen</Link>
                      {parts[1]}
                    </>
                  );
                }
                // if the body contains the word 'contact' use localized link label
                if (body.includes("contact")) {
                  const idx = body.indexOf("contact");
                  const before = body.slice(0, idx);
                  const after = body.slice(idx + "contact".length);
                  return (
                    <>
                      {before}
                      <Link href={'/contact'}>{footer.links.contact}</Link>
                      {after}
                    </>
                  );
                }
                // fallback: render body then localized link
                return (
                  <>
                    {body} {" "}
                    <Link href={'/contact'}>{footer.links.contact}</Link>
                  </>
                );
              })()
            ) : (
              footer.commissionBody
            )}
          </p>
        </div>
        <div className={styles.footer__links}>
          <div className={styles.footer__linkContainer}>
            <h3>{footer.pagesHeading}</h3>
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
            <h3>{footer.socialHeading}</h3>
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
        <span>{footer.copyright(year)}</span>
      </div>
    </footer>
  );
};
export default Footer;
