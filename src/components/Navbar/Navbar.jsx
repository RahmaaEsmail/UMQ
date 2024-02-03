import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import logoImg from "/images/UMQ LOGO.png";
import styles from "./Navbar.module.css";
import NavLink from "../NavLink/NavLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {t, i18n } = useTranslation();

  function handleOpenMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleLanguage(e) {
    e.target.checked ? i18n.changeLanguage("ar") : i18n.changeLanguage("en");
    document.body.dir = i18n.dir();
  }

  return (
    <nav className="flex justify-between fixed left-0 right-0  py-2 px-5 shadow-xl  bg-white">
      <div className="flex gap-20 align-middle">
        <div className="logo w-20 h-15">
          <Link className="w-12 h-auto">
            <img className="w-100 " src={logoImg} alt="UMQ LOGO Image" />
          </Link>
        </div>

        <ul className="links lg:flex justify-between gap-8 align-middle hidden">
          <NavLink>{t('feature-link')}</NavLink>
          <NavLink>{t("pricing-link")}</NavLink>
          <NavLink>{t("about-link")}</NavLink>
          <NavLink>{t("question-link")}</NavLink>
          <NavLink>{t('feature-link')}</NavLink>
          <li className="m-auto ">
            <button
              className={`${styles.btn} flex justify-center h-auto align-middle btn btn-sm rounded-full btn-success main_button py-1 p-3`}
            >
              Success
            </button>
          </li>
        </ul>
      </div>

      <div className="lg:flex hidden gap-7 align-middle">
        <div className="flex flex-col justify-center">
          <label className="cursor-pointer grid place-items-center">
            <div className={styles.switch}>
              <input
                id="language-toggle"
                onChange={handleLanguage}
                className={`${styles["check-toggle"]} ${styles["check-toggle-round-flat"]}`}
                type="checkbox"
              />
              <label htmlFor="language-toggle"></label>
              <span className={styles.on}>EN</span>
              <span className={styles.off}>AR</span>
            </div>
          </label>
        </div>
      </div>

      <div className={`${styles.menuIcon}  ${(i18n.language==='ar' ) || (i18n.language==='ar' && isOpen) ? 'w-auto right-80' : 'right-8'} lg:hidden`} onClick={handleOpenMenu}>
        {isOpen ? <FaXmark /> : <FaBars />}
      </div>

      {isOpen && (
        <div className={`flex flex-col ${styles.openMenu} shadow-xl  bg-white `}>
        <ul className="flex flex-col gap-5">
          <NavLink>{t('feature-link')}</NavLink>
          <NavLink>{t("pricing-link")}</NavLink>
          <NavLink>{t("about-link")}</NavLink>
          <NavLink>{t("question-link")}</NavLink>
          <NavLink>{t('feature-link')}</NavLink>
          <li>
            <button
              className={`${styles.btn} flex justify-center h-auto align-middle btn btn-sm rounded-full btn-success main_button py-1 p-3`}
            >
              Success
            </button>
          </li>
        </ul>


      <div className="flex flex-col  justify-center">
        <label className="cursor-pointer grid place-items-center">
          <div className={styles.switch}>
            <input
              id="language-toggle"
              onChange={handleLanguage}
              className={`${styles["check-toggle"]} ${styles["check-toggle-round-flat"]}`}
              type="checkbox"
            />
            <label htmlFor="language-toggle"></label>
            <span className={styles.on}>EN</span>
            <span className={styles.off}>AR</span>
          </div>
        </label>
      </div>
    </div>
      )}
    </nav>
  );
}
