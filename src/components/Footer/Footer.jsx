import logoImg from "/images/UMQ LOGO.png";
import styles from "./Footer.module.css";
import { FaInstagram, FaTiktok, FaSnapchat, FaTwitter } from "react-icons/fa";
import { t } from "i18next";

export default function Footer() {
  return (
    <footer
      className={`${styles.footer} w-full bg-neutral-300 py-7 px-7 gap-8 lg:gap-4`}
    >
      <div className="logo mt-8 lg:w-40 lg:h-44 ml-3 w-full flex justify-center">
        <img src={logoImg} alt="UMQ LOGO" className="w-48" />
      </div>

      <div className="flex flex-col gap-7 mt-8">
        <h3 className={`${styles.heading} text-center text-1xl font-bold`}>
          {t('about-us-heading')}
        </h3>
        <p className="leading-8 text-base mx-auto ">
          {" "}
          {t("about-us-paragraph")}
        </p>
      </div>

      <div className="flex flex-col gap-7 mt-8">
        <h3 className={`${styles.heading} text-1xl font-bold text-center`}>
          {t("follow-us")}
        </h3>
        <ul
          className={`${styles.iconsList} flex justify-center gap-8 align-middle`}
        >
          <li>
            <a
              href="https://www.instagram.com/ummq.sa?igsh=Z2xkZnZ0dXVqanp1"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@ummq.sa?_t=8jWrYiYNRNi&_r=1"
              target="_blank"
            >
              <FaTiktok />
            </a>
          </li>
          <li>
            <a
              href="https://www.snapchat.com/add/ummqsa?share_id=41WLn9gps2w&locale=ar-AE"
              target="_blank"
            >
              <FaSnapchat />
            </a>
          </li>
          <li>
            <a href="https://x.com/ummq_sa?s=08" target="_blank">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-7 mt-8">
        <h3 className={`${styles.heading} text-center text-1xl font-bold`}>
          {t("working-with-the-best")}
        </h3>
        <div className={`${styles.payment} `}>
          <img src="/images/mada.svg" alt="Mada" />
          <img src="/images/mastercard.svg" alt="Master Card" />
          <img src="/images/visa.svg" alt="Visa" />
          <img src="/images/stc_pay.svg" alt="Mada" />
          <img src="/images/amex.svg" alt="Mada" />
          <img src="/images/apple_pay.svg" alt="Mada" />
        </div>
      </div>

      <div className={`${styles.img} mt-8 mx-auto`}>
        <img src="/images/SBC-logo.svg" alt="logo image" className="w-100" />
      </div>
    </footer>
  );
}
